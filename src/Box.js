import React from "react";
import { useRandomColor } from "./useRandomColor";

function Box() {
  const colors = [
    "#282828",
    "#FFFFFF",
    "#D6D6D6",
    "#CCCCCC",
    "#000000",
    "#f0Af0f0"
  ];
  const [color, changeColor] = useRandomColor(colors, "#f2f2f2");

  return (
    <React.Fragment>
      <span
        onMouseEnter={changeColor}
        className="box"
        style={{
          backgroundColor: color,
          borderColor: color
        }}
      />
    </React.Fragment>
  );
}

export default Box;
