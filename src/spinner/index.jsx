import React from "react";

export const Spinner = ({ color, variant, size = "md" }) => {
  return (
    <div
      className={`spinner-border text-${
        color || variant
      } spinner-border-${size}`}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};
