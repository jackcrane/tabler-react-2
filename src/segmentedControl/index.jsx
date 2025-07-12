// SegmentedControl.js
import React from "react";
import PropTypes from "prop-types";

export const SegmentedControl = ({
  value,
  onChange,
  items,
  vertical = false,
  size, // "sm" or "lg"
  className,
  buttonClassName,
  style,
  buttonStyle,
}) => {
  const _value = value?.id || value;
  const navClasses = [
    "nav",
    `nav-segmented`,
    vertical ? "nav-segmented-vertical" : null,
    size ? `nav-${size}` : null,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav className={navClasses} role="tablist" style={style}>
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`nav-link${_value === item.id ? " active" : ""}${
            item.disabled ? " disabled" : ""
          } ${item.className} ${buttonClassName}`}
          role="tab"
          aria-selected={_value === item.id}
          aria-current={_value === item.id ? "page" : undefined}
          tabIndex={_value === item.id ? 0 : -1}
          disabled={item.disabled}
          onClick={() => !item.disabled && onChange(item)}
          style={{ ...buttonStyle, ...item.style }}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </nav>
  );
};

SegmentedControl.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.node,
      disabled: PropTypes.bool,
      className: PropTypes.string,
      style: PropTypes.object,
    })
  ),
  vertical: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg"]),
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  style: PropTypes.object,
  buttonStyle: PropTypes.object,
};
