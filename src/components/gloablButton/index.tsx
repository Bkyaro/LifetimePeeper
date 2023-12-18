import React from "react";
import "./styles.css";

const GlobalButton = ({ text, handleButtonClick }: any) => {
  return (
    <button className="button_wrapper" onClick={handleButtonClick}>
      <span className="button_top">{text}</span>
    </button>
  );
};

export default GlobalButton;
