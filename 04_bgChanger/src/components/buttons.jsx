import React, { useState } from "react";

const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "gray", "black"];

const ColorButtons = () => {
  const [bgColor, setBgColor] = useState("pink");

  return (
    <div className="flex flex-col items-center p-4 h-full w-full" style={{ backgroundColor: bgColor, minHeight: "100vh" }}>
      <div className="flex flex-wrap gap-2 p-4">
        {colors.map((color) => (
          <button
            key={color}
            style={{ backgroundColor: color, color: color === "black" ? "white" : "black" }}
            className="px-4 py-2 rounded shadow-md hover:opacity-80 transition-opacity"
            onClick={() => setBgColor(color)}
          >
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorButtons;
