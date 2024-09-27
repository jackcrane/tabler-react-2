import classNames from "classnames";
import "../helper.css";
import React from "react";
import { m } from "./index";
import PropTypes from "prop-types";

const switchAlign = (align) => {
  switch (align) {
    case "center":
      return "center";
    case "left":
      return "flex-start";
    case "right":
      return "flex-end";
    case "between":
      return "space-between";
    case "around":
      return "space-around";
    default:
      return "flex-start";
  }
};

export const Row = ({ children, className, wrap, gap, align, ...props }) => (
  <div
    {...props}
    className={classNames("tbl__helper__row", className)}
    style={{
      gap: m(gap) || 0,
      flexWrap: wrap && "wrap",
      justifyContent: switchAlign(align),
      alignItems: "center",
      ...props.style,
    }}
  >
    {children}
  </div>
);

export const Col = ({ children, className, gap, align, ...props }) => (
  <div
    {...props}
    className={classNames("tbl__helper__col", className)}
    style={{
      gap: m(gap) || 0,
      justifyContent: switchAlign(align),
      ...props.style,
    }}
  >
    {children}
  </div>
);

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  wrap: PropTypes.bool,
  gap: PropTypes.number,
};

Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gap: PropTypes.number,
};
