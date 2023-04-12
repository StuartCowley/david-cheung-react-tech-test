import React, { useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import "../styles/app.css";

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
      {/* <div className="fetchData">
        {fetchData &&
          fetchData.length > 0 &&
          fetchData.map((item, index) => (
            <img key={index} src={item.href} alt="alt" />
          ))}
      </div> */}
      <SearchResults fetchData={fetchData} />
    </div>
  );
};

export default App;
