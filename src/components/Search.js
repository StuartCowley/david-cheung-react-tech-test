import React, { useState } from "react";
import getImages from "../requests/getImages.js";
import "../styles/search.css";

const Search = ({ setFetchData, setErrorMessage }) => {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const results = await getImages(value);
    if (results.length === 0) {
      setErrorMessage("Image not found, please try again!");
    } else {
      setErrorMessage("");
    }
    setFetchData(results);
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="search-button" type="submit">
          Go!
        </button>
      </form>
    </div>
  );
};

export default Search;
