import React from "react";
import PropTypes from "prop-types";

export const Alert = ({
  variant,
  title,
  children,
  onDismiss,
  icon,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`alert alert-${variant} ${
        onDismiss ? "alert-dismissible" : ""
      } ${props.className}`}
      role="alert"
    >
      <div className="d-flex">
        {icon && <div className="me-2">{icon}</div>}
        <div>
          <h4 className="alert-title">{title}</h4>
          <div className="text-secondary">{children}</div>
        </div>
      </div>
      {onDismiss && (
        <a
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="close"
          onClick={onDismiss}
        ></a>
      )}
    </div>
  );
};

Alert.propTypes = {
  variant: PropTypes.oneOf([
    "success",
    "failure",
    "warning",
    "info",
    "danger",
    "dark",
  ]),
  title: PropTypes.string.isRequired,
  onDismiss: PropTypes.func,
  icon: PropTypes.node,
  children: PropTypes.node.isRequired,
};
