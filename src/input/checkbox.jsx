import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const Checkbox = ({
  value = false,
  onChange,
  label,
  required = false,
  className,
  ...props
}) => (
  <label
    className={classNames("form-check", className)}
    style={{ display: "flex", alignItems: "center", gap: 8 }}
    {...props}
  >
    <input
      className="form-check-input"
      type="checkbox"
      checked={value}
      onChange={(e) => onChange(e.target.checked)}
    />
    <span
      className={`form-check-label ${required ? "required" : ""}`}
      style={{ textAlign: "left" }}
    >
      {label}
    </span>
  </label>
);

Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
};
