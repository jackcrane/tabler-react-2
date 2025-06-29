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
  small = false,
}) => {
  const groupName = useId();

  const handleChange = (selectedItem) => {
    if (multiple) {
      // get current values as an array of strings
      const selectedValues = Array.isArray(value)
        ? value.map((v) => v.value)
        : [];
      let newValues;
      if (selectedValues.includes(selectedItem.value)) {
        // deselect
        newValues = selectedValues.filter((v) => v !== selectedItem.value);
      } else {
        // select
        newValues = [...selectedValues, selectedItem.value];
      }
      // map back to full item objects from `items`
      const newSelectedItems = newValues
        .map((val) => items.find((item) => item.value === val))
        .filter(Boolean);
      onChange(newSelectedItems);
    } else {
      // single-select: toggle off if same, otherwise pick full item
      const isSame = value?.value === selectedItem.value;
      const newSelection = isSame
        ? null
        : items.find((item) => item.value === selectedItem.value);
      onChange(newSelection);
    }
  };

  const isChecked = (item) =>
    multiple
      ? Array.isArray(value) && value.some((val) => val.value === item.value)
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
            className={`form-selectgroup-label d-flex ${
              small ? "p-2" : "p-3"
            } ${item.disabled ? "bg-gray-200" : ""}`}
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
  small: PropTypes.bool,
};
