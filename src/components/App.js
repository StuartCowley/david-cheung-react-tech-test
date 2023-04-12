import React, { useState } from "react";
import Search from "./Search";
import "../styles/app.css";

const App = () => {
  const [fetchData, setFetchData] = useState();

  console.log("fetchData=", fetchData);

  return (
    <div className="app">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
      />
      <Search setFetchData={setFetchData} />
    </div>
  );
};

export default App;
