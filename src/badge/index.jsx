import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Badge = ({ href, children, color, outline, soft, onClick, ...props }) => {
  const classes = classNames(
    "badge",
    !outline && !soft && `bg-${color}`,
    outline && `badge-outline text-${color}`,
    soft && `bg-${color}-lt`
  );

  return href ? (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  ) : (
    <span
      className={classes}
      style={{
        cursor: onClick ? "pointer" : "default",
        ...props.style,
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
