import React, { forwardRef } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

export const Button = forwardRef(
  (
    {
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
      fill,
      className,
      ...props
    },
    ref
  ) => {
    const classes = classNames(
      "btn",
      `btn-${size}`,
      {
        [`btn-${outline ? "outline-" : ""}${ghost ? "ghost-" : ""}${
          color || variant || (fill && "primary")
        }`]: fill || color || variant,
      },
      square && "btn-square",
      pill && "btn-pill",
      className?.split(" ")
    );

    const ElementToRender = window?.USE_FALLBACK_ANCHOR ? "a" : Link;

    if (href) {
      return (
        <ElementToRender
          ref={ref}
          to={href}
          href={href}
          className={classes}
          {...props}
        >
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
        <button ref={ref} onClick={onClick} className={classes} {...props}>
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
  }
);
