import React from "react";
import "../styles/popup.css";

const Popup = ({ setButtonPopup, src }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setButtonPopup(false)}>
          X
        </button>
        <img
          className="popup-href"
          src={src.href}
          alt={src.title}
          width="100%"
        />
        <p className="popup-title">{src.title}</p>
      </div>
    </div>
  );
};

export default Popup;
