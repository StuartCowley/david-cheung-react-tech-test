import React from "react";
import "../styles/search-results.css";

const SearchResults = ({ fetchData }) => {
  return (
    <div className="search-results">
      {fetchData &&
        fetchData.length > 0 &&
        fetchData.map((item, index) => (
          <img
            key={index}
            src={item.href}
            alt={item.title}
            title={item.title}
          />
        ))}
    </div>
  );
};

export default SearchResults;
