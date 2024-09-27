import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

export const Button = ({
  children,
  href,
  onClick,
  variant,
  color,
  ghost,
  square,
  pill,
  outline,
  loading,
  size = "md",
  fill, // New prop to control filled buttons
  className,
  ...props
}) => {
  const classes = classNames(
    "btn",
    `btn-${size}`, // Always apply 'btn' and size
    {
      [`btn-${outline ? "outline-" : ""}${ghost ? "ghost-" : ""}${
        color || variant || (fill && "primary")
      }`]: fill || color || variant, // Apply classes when `fill`, `color`, or `variant` is passed
    },
    square && "btn-square",
    pill && "btn-pill",
    className?.split(" "),
  );

  const ElementToRender = window.USE_FALLBACK_ANCHOR ? "a" : Link;

  if (href) {
    return (
      <ElementToRender to={href} className={classes} {...props}>
        {loading && (
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
          ></span>
        )}
        {children}
      </ElementToRender>
    );
  } else {
    return (
      <button onClick={onClick} className={classes} {...props}>
        {loading && (
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
          ></span>
        )}
        {children}
      </button>
    );
  }
};
