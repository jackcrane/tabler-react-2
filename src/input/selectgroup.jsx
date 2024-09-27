import React from "react";
import PropTypes from "prop-types";

export const SelectGroup = ({ items, value, onChange, multiple }) => {
  const handleChange = (selectedItem) => {
    if (multiple) {
      if (value.some((item) => item.value === selectedItem.value)) {
        onChange(value.filter((item) => item.value !== selectedItem.value));
      } else {
        onChange([...value, selectedItem]);
      }
    } else {
      onChange(selectedItem.value === value?.value ? null : selectedItem);
    }
  };

  const isChecked = (item) => {
    if (multiple) {
      return value.some((val) => val.value === item.value);
    }
    return value?.value === item.value;
  };

  return (
    <div className="form-selectgroup">
      {items.map((item) => (
        <label className="form-selectgroup-item" key={item.value}>
          <input
            type="checkbox"
            className="form-selectgroup-input"
            name={item.label}
            value={item.value}
            checked={isChecked(item)}
            onChange={() => handleChange(item)}
          />
          <span className="form-selectgroup-label">{item.label}</span>
        </label>
      ))}
    </div>
  );
};

SelectGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ),
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  multiple: PropTypes.bool.isRequired,
};
