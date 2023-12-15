import React from "react";
import "./styles.css";

const GlobalButton = ({ text, handleButtonTrigger }: any) => {
  return (
    <button
      className="button_wrapper"
      onMouseEnter={handleButtonTrigger}
      // onMouseLeave={handleButtonTrigger}
    >
      <span className="button_top">{text}</span>
    </button>
  );
};

export default GlobalButton;
