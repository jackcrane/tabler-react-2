import React from "react";

export const Autosize = ({ title, label, placeholder, ...props }) => (
  <>
    <label className="form-label">{title || label}</label>
    <textarea
      className="form-control"
      data-bs-toggle="autosize"
      placeholder={placeholder}
      {...props}
    ></textarea>
  </>
);
