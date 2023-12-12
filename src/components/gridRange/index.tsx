import React from "react";
import { Switch } from "../index";
import "./style.css";
function GridRange({ range, handleRangeChange }: any) {
  const rangeTag = ["day", "week", "month", "year"];

  return (
    <div>
      <div className="swithcers">
        {rangeTag.map((item, index) => {
          return (
            <Switch
              title={item}
              key={index}
              handleSwitchChange={handleRangeChange}
              checked={item === range}
            />
          );
        })}
      </div>
    </div>
  );
}

export default GridRange;
