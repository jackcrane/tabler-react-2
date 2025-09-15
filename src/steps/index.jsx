import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const Steps = ({
  steps,
  color: passedColor,
  variant: passedVariant,
  numbered = false,
  hideText = false,
  vertical = false,
  className,
  ...props
}) => {
  const color = passedColor || passedVariant;
  const stepClass = `steps ${color ? `steps-${color}` : ""} ${
    numbered ? "steps-counter" : ""
  } ${vertical ? "steps-vertical" : ""}`;

  return (
    <ul className={classNames(stepClass, className)} {...props}>
      {steps.map((step, index) => {
        const stepClasses = `step-item ${step.active ? "active" : ""}`;
        const stepContent = hideText ? "" : step.text;
        const tooltip = step.tooltip
          ? { "data-bs-toggle": "tooltip", title: step.tooltip }
          : {};

        return step.href ? (
          <a href={step.href} key={index} className={stepClasses} {...tooltip}>
            {stepContent}
          </a>
        ) : step.onClick ? (
          <a
            key={index}
            className={stepClasses}
            onClick={step.onClick}
            {...tooltip}
          >
            {stepContent}
          </a>
        ) : (
          <span key={index} className={stepClasses} {...tooltip}>
            {stepContent}
          </span>
        );
      })}
    </ul>
  );
};

Steps.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string, // Text to display inside step
      tooltip: PropTypes.string, // Tooltip description for the step
      active: PropTypes.bool, // Marks the step as active
      isLink: PropTypes.bool, // Whether the step is a link (<a>) or a span
    })
  ).isRequired,
  color: PropTypes.string, // Optional color for steps
  numbered: PropTypes.bool, // Whether steps are numbered
  hideText: PropTypes.bool, // Hide text inside the steps (useful for numbered)
};
