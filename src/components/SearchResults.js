import React from "react";
import PropTypes from "prop-types";
import "../styles/search-results.css";

const SearchResults = ({ fetchData }) => {
  return (
    <div className="search-results">
      {fetchData &&
        fetchData.length > 0 &&
        fetchData.map((item, index) => (
          <img
            key={index}
            className="image"
            src={item.href}
            alt={item.title}
            title={item.title}
          />
        ))}
    </div>
  );
};

export default SearchResults;

SearchResults.propTypes = {
  fetchData: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
