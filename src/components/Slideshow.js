import React from "react";
import PropTypes from "prop-types";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../styles/slideshow.css";

const spanStyle = {
  padding: "10px",
  background: "rgba(0,0,0,0.2)",
  color: "white",
  position: "absolute",
  bottom: "8px",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "500px",
};

const Slideshow = ({ fetchData }) => {
  let slideImages = [];

  if (fetchData) {
    fetchData.forEach((image) => {
      slideImages.push({ url: image.href, caption: image.title });
    });
  }

  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url('${slideImage.url}')`,
              }}
            >
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;

Slideshow.propTypes = {
  fetchData: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
