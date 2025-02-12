import classNames from "classnames";
import "../helper.css";
import React, { useEffect, useState } from "react";
import { m } from "./index";
import PropTypes from "prop-types";

const mapAlignment = (value) => {
  switch (value) {
    case "start":
      return "flex-start";
    case "center":
      return "center";
    case "end":
      return "flex-end";
    case "stretch":
      return "stretch";
    case "baseline":
      return "baseline";
    default:
      return "stretch";
  }
};

const mapJustify = (value) => {
  switch (value) {
    case "start":
      return "flex-start";
    case "center":
      return "center";
    case "end":
      return "flex-end";
    case "between":
      return "space-between";
    case "around":
      return "space-around";
    case "evenly":
      return "space-evenly";
    default:
      return "flex-start";
  }
};

export const Row = ({
  children,
  className,
  wrap,
  gap,
  align, // alignItems
  justify, // justifyContent
  ...props
}) => (
  <div
    {...props}
    className={classNames("tbl__helper__row", className)}
    style={{
      display: "flex",
      flexDirection: "row",
      gap: m(gap) || 0,
      flexWrap: wrap ? "wrap" : "nowrap",
      justifyContent: mapJustify(justify),
      alignItems: mapAlignment(align),
      ...props.style,
    }}
  >
    {children}
  </div>
);

export const Col = ({
  children,
  className,
  gap,
  align, // alignItems
  justify, // justifyContent
  ...props
}) => (
  <div
    {...props}
    className={classNames("tbl__helper__col", className)}
    style={{
      display: "flex",
      flexDirection: "column",
      gap: m(gap) || 0,
      justifyContent: mapJustify(justify),
      alignItems: mapAlignment(align),
      ...props.style,
    }}
  >
    {children}
  </div>
);

export const Responsive = ({
  threshold,
  default: defaultDirection = "row",
  children,
  gap,
  align,
  justify,
  ...props
}) => {
  const [direction, setDirection] = useState(defaultDirection);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= threshold) {
        setDirection(defaultDirection === "row" ? "column" : "row");
      } else {
        setDirection(defaultDirection);
      }
    };

    // Initialize the direction based on the initial window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [threshold, defaultDirection]);

  return (
    <div
      {...props}
      style={{
        display: "flex",
        flexDirection: direction,
        gap: m(gap) || 0,
        justifyContent: mapJustify(justify),
        alignItems: mapAlignment(align),
        ...props.style,
      }}
    >
      {children}
    </div>
  );
};

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  wrap: PropTypes.bool,
  gap: PropTypes.number,
  align: PropTypes.oneOf(["start", "center", "end", "stretch", "baseline"]),
  justify: PropTypes.oneOf([
    "start",
    "center",
    "end",
    "between",
    "around",
    "evenly",
  ]),
};

Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gap: PropTypes.number,
  align: PropTypes.oneOf(["start", "center", "end", "stretch", "baseline"]),
  justify: PropTypes.oneOf([
    "start",
    "center",
    "end",
    "between",
    "around",
    "evenly",
  ]),
};

Responsive.propTypes = {
  threshold: PropTypes.number.isRequired,
  default: PropTypes.oneOf(["row", "column"]),
  children: PropTypes.node,
};
