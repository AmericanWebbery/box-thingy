import { useState } from "react";

export const useRandomColor = (colors, initialColor) => {
  const lenColors = colors.length;
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    const index = Math.floor(Math.random() * lenColors);
    const pickColor = colors[index];
    setColor(pickColor);
  };
  return [color, changeColor];
};
