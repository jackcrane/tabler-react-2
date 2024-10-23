import React from "react";
import propTypes from "prop-types";
import classNames from "classnames";

const IconStar = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-star"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
  </svg>
);

export const Ribbon = ({
  children,
  position = "top",
  color = "primary",
  content = <IconStar />,
  shape,
}) => {
  return (
    <div>
      {children}
      <div
        className={classNames(
          `ribbon`,
          `ribbon-${position}`,
          `bg-${color}`,
          shape && `ribbon-${shape}`
        )}
      >
        {content}
      </div>
    </div>
  );
};

Ribbon.propTypes = {
  children: propTypes.node,
  position: propTypes.oneOf(["top", "bottom", "start", "end"]),
  color: propTypes.string,
  content: propTypes.node,
  shape: propTypes.oneOf([null, "bookmark"]),
};
