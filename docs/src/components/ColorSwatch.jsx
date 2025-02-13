import React from "react";
import { Tabler } from "./Tabler";

export const ColorSwatch = ({ colorName, fg = "black" }) => {
  return (
    <Tabler>
      <div
        className={`bg-${colorName}`}
        style={{
          width: 100,
          height: 50,
          color: fg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {colorName}
      </div>
    </Tabler>
  );
};
