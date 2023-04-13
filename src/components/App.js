import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import Popup from "./Popup";
import "../styles/app.css";

const App = () => {
  const [fetchData, setFetchData] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [buttonPopup, setButtonPopup] = useState(false);
  const [src, setSrc] = useState({ href: "", title: "" });

  const handleClick = (event) => {
    setSrc({ href: event.target.src, title: event.target.title });
    setButtonPopup(true);
  };

  useEffect(() => {
    const images = Array.from(document.getElementsByClassName("image"));
    images.forEach((image) => {
      image.addEventListener("click", handleClick);
    });

    return () => {
      images.forEach((image) => {
        image.removeEventListener("click", handleClick);
      });
    };
  }, [fetchData]);

  return (
    <div className="app">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
      />
      <Search setFetchData={setFetchData} setErrorMessage={setErrorMessage} />
      {errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        <SearchResults fetchData={fetchData} />
      )}
      {src && buttonPopup && (
        <Popup setButtonPopup={setButtonPopup} src={src}></Popup>
      )}
    </div>
  );
};

export default App;
