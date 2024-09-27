import classNames from "classnames";
import React from "react";

const getDicebearAvatarUrl = (seed, style) => {
  const dicebearStyle = style || "shapes"; // Default style if none is provided
  return `https://api.dicebear.com/9.x/${dicebearStyle}/png?seed=${seed}`;
};

export const Avatar = ({
  src,
  initials,
  initialsColor,
  dicebear, // Optional dicebear style
  size,
  status,
  badge,
  color,
}) => {
  const dicebearStyle = typeof dicebear === "string" ? dicebear : "shapes";
  const avatarUrl = src
    ? src
    : dicebear && initials
    ? getDicebearAvatarUrl(initials, dicebearStyle)
    : null;

  return (
    <span
      className={classNames(
        "avatar",
        size && `avatar-${size}`,
        color && `bg-${color}-lt`
      )}
      style={{
        backgroundImage: avatarUrl ? `url(${avatarUrl})` : null,
        backgroundColor: !avatarUrl && initialsColor ? initialsColor : null,
      }}
    >
      {status ? <span className={`badge bg-${status}`}>{badge}</span> : null}
      {initials && !avatarUrl ? initials : null}
    </span>
  );
};

export const AvatarStackedList = ({ children }) => {
  return <div className="avatar-list avatar-list-stacked">{children}</div>;
};
