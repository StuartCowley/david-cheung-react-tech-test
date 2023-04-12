import React from "react";
import Search from "./Search";
import "../styles/app.css";

const App = () => {
  return (
    <div className="app">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
      />
      <Search />
    </div>
  );
};

export default App;
