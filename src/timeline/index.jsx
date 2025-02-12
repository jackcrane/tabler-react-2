import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const Timeline = ({ events, dense }) => {
  return (
    <ul className="timeline">
      {events.map((event, index) => (
        <li
          className={classNames(
            "timeline-event",
            dense && "timeline-event-tight"
          )}
          key={index}
        >
          <div
            className={`timeline-event-icon ${
              event.iconBgColor && `bg-${event.iconBgColor}-lt`
            } ${event.iconBgClass || ""}`}
          >
            {event.icon && <event.icon />}
          </div>
          <div className={`card timeline-event-card ${dense && "card-sm"}`}>
            <div className="card-body">
              <div className="text-secondary float-end">{event.time}</div>
              <h4>{event.title}</h4>
              <p className="text-secondary">{event.description}</p>
              {event.extraContent && (
                <div className="mt-3">{event.extraContent}</div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

Timeline.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired, // Assuming the icon is passed as an SVG string
      iconBgClass: PropTypes.string, // Optional, background color class for the icon
      time: PropTypes.string.isRequired, // Time of the event (e.g., "10 hrs ago")
      title: PropTypes.string.isRequired, // Event title (e.g., "+1150 Followers")
      description: PropTypes.string.isRequired, // Event description
      extraContent: PropTypes.node, // Optional extra content (e.g., images, avatars, etc.)
    })
  ).isRequired,
};
