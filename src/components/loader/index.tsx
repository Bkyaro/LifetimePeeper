import React from "react";
import "./styles.css";

const Loader = () => {
  const createBox = () => {
    const boxes = [];
    const colors = [
      "#769b99",
      "#81a396",
      "#8cab92",
      "#97b28f",
      "#a2ba8c",
      "#adc288",
      "#b7c985",
      "#c2d181",
      "#cdd97e",
      "#d8e07b",
      "#e3e877",
      "#eef074",
      "#f9f871",
    ];

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
