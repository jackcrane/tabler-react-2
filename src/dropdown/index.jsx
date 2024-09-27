import React from "react";
import PropTypes from "prop-types";

export const Dropdown = ({ prompt, items }) => {
  const handleClick = (e, onclick) => {
    if (onclick) {
      e.preventDefault();
      onclick();
    }
  };

  return (
    <div className="dropdown">
      <a href="#" className="btn dropdown-toggle" data-bs-toggle="dropdown">
        {prompt}
      </a>
      <div className="dropdown-menu">
        {items.map((item, index) => {
          if (item.type === "divider") {
            return <div key={index} className="dropdown-divider"></div>;
          }

          if (item.type === "header") {
            return (
              <span key={index} className="dropdown-header">
                {item.text}
              </span>
            );
          }

          return (
            <a
              key={index}
              href={item.href || "#"}
              className={`dropdown-item${item.active ? " active" : ""}${
                item.disabled ? " disabled" : ""
              }`}
              onClick={(e) => handleClick(e, item.onclick)}
              style={{ cursor: item.disabled ? "not-allowed" : "pointer" }}
            >
              {item.icon && (
                <span className="dropdown-item-icon">{item.icon}</span>
              )}
              {item.text}
            </a>
          );
        })}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  prompt: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["item", "divider", "header"]).isRequired,
      text: PropTypes.string,
      href: PropTypes.string,
      onclick: PropTypes.func,
      disabled: PropTypes.bool,
      active: PropTypes.bool,
      icon: PropTypes.node,
    })
  ).isRequired,
};
