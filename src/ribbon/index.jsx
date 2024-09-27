import React from "react";
import propTypes from "prop-types";
import classNames from "classnames";
import { IconStar } from "@tabler/icons-react";

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
