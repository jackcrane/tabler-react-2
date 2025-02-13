import React from "react";

export const Margin = ({ className, children }) => {
  return (
    <div
      style={{ background: "#00ddff58", border: "0.01px solid transparent" }}
    >
      <div className={className}>
        <div style={{ background: "#ff000057" }}>{className}</div>
      </div>
    </div>
  );
};
