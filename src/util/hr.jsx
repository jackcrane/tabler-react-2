import React from "react";
import { m } from ".";

export const Hr = ({ children, text, ...props }) => {
  return !text ? (
    <hr style={{ margin: "1rem 0" }} {...props} />
  ) : (
    <div className="hr-text" style={{ margin: "1rem 0" }}>
      <span>{text}</span>
    </div>
  );
};

export const Spacer = ({ size }) => (
  <div
    style={{
      height: m(size),
    }}
  />
);
