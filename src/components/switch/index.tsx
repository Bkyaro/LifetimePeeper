import React from "react";
import "./style.css";

function Switch({ title, handleSwitchChange, checked }: any) {
  const onSwicherChange = (e: any) => {
    if (!checked) {
      handleSwitchChange(title);
    }
  };
  return (
    <div className="swich-wrapper">
      <p className="switch-title">{title}</p>
      <label className="switch">
        <input
          className="toggle"
          type="checkbox"
          onChange={onSwicherChange}
          checked={checked ? checked : false}
        />
        <span className="slider"></span>
        <span className="card-side"></span>
      </label>
    </div>
  );
}

export default Switch;
