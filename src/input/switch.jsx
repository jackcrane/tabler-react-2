import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const Switch = ({ value: defaultValue, onChange, label, color }) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <label className="form-check form-switch">
      <input
        className={classNames(
          "form-check-input",
          color && `bg-${color}${value ? "" : "-lt"}`
        )}
        type="checkbox"
        checked={value}
        onChange={(e) => handleChange(e.target.checked)}
        style={{ cursor: "pointer" }}
      />
      <span className="form-check-label">{label}</span>
    </label>
  );
};

Switch.propTypes = {
  defaultValue: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
};
