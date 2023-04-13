import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import Popup from "./Popup";
import Slideshow from "./Slideshow";
import "../styles/app.css";

const App = () => {
  const [fetchData, setFetchData] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [buttonPopup, setButtonPopup] = useState(false);
  const [src, setSrc] = useState({ href: "", title: "" });
  const [slideOn, setSlideOn] = useState(false);

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
  }, [fetchData, slideOn]);

  return (
    <div className="app">
      {fetchData && fetchData.length > 0 && (
        <button
          className="slide-on-mode"
          type="button"
          onClick={() => {
            setSlideOn(!slideOn);
          }}
        >
          {slideOn ? "Slide Off" : "Slide On"}
        </button>
      )}
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
      />
      <Search
        setFetchData={setFetchData}
        setErrorMessage={setErrorMessage}
        setSlideOn={setSlideOn}
      />
      {errorMessage && <div>{errorMessage}</div>}
      {!errorMessage && !slideOn && <SearchResults fetchData={fetchData} />}
      {src && buttonPopup && (
        <Popup setButtonPopup={setButtonPopup} src={src}></Popup>
      )}
      {slideOn && <Slideshow fetchData={fetchData} />}
    </div>
  );
};

export default App;
