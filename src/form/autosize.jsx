import React from "react";

export const Autosize = ({ title, placeholder, ...props }) => (
  <>
    <label className="form-label">{title}</label>
    <textarea
      className="form-control"
      data-bs-toggle="autosize"
      placeholder={placeholder}
      {...props}
    ></textarea>
  </>
);
