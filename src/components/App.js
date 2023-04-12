import React, { useState } from "react";
import Search from "./Search";
import "../styles/app.css";
import { arrayOf } from "prop-types";

const App = () => {
  const [fetchData, setFetchData] = useState();

  return (
    <div className="app">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
      />
      <Search setFetchData={setFetchData} />
      <div className="fetchData">
        {fetchData &&
          fetchData.length > 0 &&
          fetchData.map((item, index) => (
            <img key={index} src={item.href} alt="alt" />
          ))}
      </div>
    </div>
  );
};

export default App;
