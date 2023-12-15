import React from "react";
import colors from "@/utils/colors";
import "./styles.css";

const Loader = () => {
  const createBox = () => {
    const boxes = [];

    for (let i = 0; i < 9; i++) {
      //   const randomColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
      //     Math.random() * 255
      //   )},${Math.floor(Math.random() * 255)})`;

      const box = React.createElement("div", {
        key: i,
        className: "banterLoaderItem",
        style: { backgroundColor: colors[i] },
      });

      boxes.push(box);
    }

    return boxes;
  };

  return <div className="banterLoaderWrapper">{createBox()}</div>;
};

export default Loader;
