import React, { useId } from "react";
import PropTypes from "prop-types";

export const EnclosedSelectGroup = ({
  items,
  value,
  onChange,
  multiple = false,
  direction = "row",
  itemClassName = "",
  style = {},
  itemStyle = {},
}) => {
  // generate a unique name for each instance so radio groups don't collide
  const groupName = useId();

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

  const isChecked = (item) =>
    multiple
      ? value.some((val) => val.value === item.value)
      : value?.value === item.value;

  return (
    <div
      className="form-selectgroup"
      style={{ display: "flex", flexDirection: direction, ...style }}
    >
      {items.map((item) => (
        <label
          key={`${groupName}-${item.value}`}
          className={`form-selectgroup-item flex-fill ${itemClassName}`}
          style={{
            pointerEvents: item.disabled ? "none" : undefined,
            cursor: item.disabled ? "not-allowed" : undefined,
            ...itemStyle,
          }}
        >
          <input
            type={multiple ? "checkbox" : "radio"}
            name={groupName}
            id={`${groupName}-${item.value}`}
            value={item.value}
            checked={isChecked(item)}
            onChange={() => handleChange(item)}
            disabled={item.disabled}
            className="form-selectgroup-input"
          />
          <div
            className={`form-selectgroup-label d-flex p-3 ${
              item.disabled ? "bg-gray-400" : ""
            }`}
            style={{
              pointerEvents: item.disabled ? "none" : undefined,
              cursor: item.disabled ? "not-allowed" : undefined,
            }}
          >
            <div className="me-3">
              <span className="form-selectgroup-check" />
            </div>
            <div style={{ textAlign: "left" }}>{item.label}</div>
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
      label: PropTypes.node.isRequired,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.any,
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.any,
      })
    ),
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
  direction: PropTypes.oneOf(["row", "column"]),
  itemClassName: PropTypes.string,
  style: PropTypes.object,
  itemStyle: PropTypes.object,
};
