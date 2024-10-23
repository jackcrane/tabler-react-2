import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Spinner } from "../spinner";
import classNames from "classnames";

export const Input = ({
  type = "text",
  label,
  placeholder,
  value: controlledValue = "", // Ensure default empty string if undefined
  onChange,
  onInput,
  icon,
  iconPos = "leading",
  loader,
  separated,
  prependedText,
  appendedText,
  appendedLinkText,
  appendedLinkHref,
  appendedLinkOnClick,
  datalistItems = [],
  variant,
  size,
  ...props
}) => {
  // State for managing uncontrolled input value
  const [value, setValue] = useState(controlledValue);

  // Sync internal state with the controlled value prop
  useEffect(() => {
    if (controlledValue !== undefined) {
      setValue(controlledValue);
    }
  }, [controlledValue]);

  const handleInputChange = (e) => {
    setValue(e.target.value);

    // Fire the onChange prop if provided
    if (onChange) {
      onChange(e.target.value);
    }

    // Fire the onInput prop if provided
    if (onInput) {
      onInput(e.target.value);
    }
  };

  const renderInput = () => (
    <input
      type={type}
      className={classNames(
        "form-control",
        variant && `border-${variant}`,
        variant && `text-${variant}`,
        variant && `bg-${variant}-lt`,
        size && `form-control-${size}`
      )}
      placeholder={placeholder}
      value={value ?? ""} // Always ensure value is a string
      onChange={handleInputChange}
      list={datalistItems.length > 0 ? "datalist-options" : undefined}
    />
  );

  return (
    <div className="mb-3" {...props}>
      {label && <label className="form-label">{label}</label>}

      {separated ? (
        <div className="row g-2">
          <div className="col">{renderInput()}</div>
          <div className="col-auto">
            <a href="#" className="btn btn-icon" aria-label="Button">
              {loader ? <Spinner size="sm" /> : icon}
            </a>
          </div>
        </div>
      ) : (
        <>
          {icon || loader ? (
            <div className="input-icon">
              {iconPos === "leading" && icon && (
                <span className="input-icon-addon">{icon}</span>
              )}
              {iconPos === "leading" && loader && (
                <span className="input-icon-addon">
                  <Spinner size="sm" />
                </span>
              )}
              {renderInput()}
              {iconPos === "trailing" && icon && (
                <span className="input-icon-addon">{icon}</span>
              )}
              {iconPos === "trailing" && loader && (
                <span className="input-icon-addon">
                  <Spinner size="sm" />
                </span>
              )}
            </div>
          ) : prependedText || appendedText ? (
            <div className="input-group input-group-flat mb-2">
              {prependedText && (
                <span className="input-group-text">{prependedText}</span>
              )}
              {renderInput()}
              {appendedText && (
                <span className="input-group-text">{appendedText}</span>
              )}
            </div>
          ) : appendedLinkText ? (
            <div className="input-group input-group-flat">
              {renderInput()}
              <span className="input-group-text">
                <a
                  {...(appendedLinkHref ? { href: appendedLinkHref } : {})}
                  className="input-group-link"
                  onClick={appendedLinkOnClick}
                  style={{
                    cursor: appendedLinkOnClick ? "pointer" : "default",
                  }}
                >
                  {appendedLinkText}
                </a>
              </span>
            </div>
          ) : (
            renderInput()
          )}

          {datalistItems.length > 0 && (
            <datalist id="datalist-options">
              {datalistItems.map((item, index) => (
                <option key={index} value={item} />
              ))}
            </datalist>
          )}
        </>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onInput: PropTypes.func,
  icon: PropTypes.node,
  iconPos: PropTypes.oneOf(["leading", "trailing"]),
  loader: PropTypes.bool,
  separated: PropTypes.bool,
  prependedText: PropTypes.string,
  appendedText: PropTypes.string,
  appendedLinkText: PropTypes.string,
  appendedLinkHref: PropTypes.string,
  appendedLinkOnClick: PropTypes.func,
  datalistItems: PropTypes.arrayOf(PropTypes.string),
};
