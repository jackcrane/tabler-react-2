import React from "react";

export const Color = ({ color, children, ...props }) => (
  <span className={`text-${color}`} {...props}>
    {children}
  </span>
);
