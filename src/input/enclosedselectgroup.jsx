/*
<label class="form-selectgroup-item flex-fill">
  <input type="radio" name="form-payment" value="mastercard" class="form-selectgroup-input" checked />
  <div class="form-selectgroup-label d-flex align-items-center p-3">
    <div class="me-3">
      <span class="form-selectgroup-check"></span>
    </div>
    <div>
      ending in <strong>2807</strong>
    </div>
  </div>
</label>

*/

import React from "react";
import PropTypes from "prop-types";

export const EnclosedSelectGroup = ({
  items,
  value,
  onChange,
  direction = "row",
  itemClassName,
  style,
  itemStyle,
}) => {
  const multiple = false;
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
    <div
      className="form-selectgroup"
      style={{
        flexDirection: direction,
        ...style,
      }}
    >
      {items.map((item) => (
        <label
          className={`form-selectgroup-item flex-fill ${itemClassName}`}
          key={item.value}
          style={{
            pointerEvents: item.disabled,
            cursor: item.disabled ? "not-allowed" : null,
            ...itemStyle,
          }}
        >
          <input
            type="radio"
            className="form-selectgroup-input"
            name={item.label}
            value={item.value}
            checked={isChecked(item)}
            onChange={() => handleChange({ value: item.value })}
            disabled={item.disabled}
          />
          <div
            className={`form-selectgroup-label d-flex p-3 ${
              item?.disabled && `bg-gray-400`
            }`}
            style={{
              pointerEvents: item.disabled,
              cursor: item.disabled ? "not-allowed" : null,
            }}
          >
            <div className="me-3">
              <span className="form-selectgroup-check"></span>
            </div>
            <div style={{ textAlign: "left" }}>{item.content}</div>
          </div>
        </label>
      ))}
    </div>
  );
};

EnclosedSelectGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
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
