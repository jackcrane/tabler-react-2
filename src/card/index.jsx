import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const Card = ({
  children,
  size = "sm",
  title,
  variant,
  variantPos,
  stacked,
  tabs,
  ...props
}) => {
  const sizeClass = {
    sm: "card-sm",
    md: "card-md",
    lg: "card-lg",
  }[size];
  const variantClass = `bg-${variant}`;
  const variantPosClass =
    variantPos === "side" ? "card-status-start" : "card-status-top";
  const stackedClass = stacked ? "card-stacked" : "";
  const cardClass = tabs ? "" : "card";

  return (
    <div
      {...props}
      className={`${cardClass} ${sizeClass} ${stackedClass} ${props.className}`}
    >
      {title && (
        <div className="card-header">
          {typeof title === "string" ? (
            <h3 className="card-title">{title}</h3>
          ) : (
            title
          )}
        </div>
      )}
      {variant && (
        <div className={classNames(variantClass, variantPosClass)}></div>
      )}
      {tabs ? (
        <CardTabs tabs={tabs} />
      ) : (
        <div className="card-body">{children}</div>
      )}
    </div>
  );
};

const CardTabs = ({ tabs, activeTabIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(activeTabIndex);

  return (
    <div className="card-tabs">
      <ul className="nav nav-tabs">
        {tabs.map((tab, index) => (
          <li className="nav-item" key={index}>
            <a
              href="#"
              className={classNames("nav-link", {
                active: activeIndex === index,
              })}
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
              data-bs-toggle="tab"
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={classNames("card tab-pane", {
              "active show": activeIndex === index,
            })}
          >
            <div className="card-body">{tab.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]),
  variantPos: PropTypes.oneOf(["side", "top"]),
  stacked: PropTypes.bool,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    }),
  ),
};
