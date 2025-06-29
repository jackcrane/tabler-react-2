import React, { useState, useEffect, Children } from "react";
import PropTypes from "prop-types";
import { Input, Button, Util } from "../index";

export const DropdownInput = ({
  prompt,
  values: ivalues,
  items,
  value,
  onChange,
  aprops,
  showSearch = true,
  loading = false,
  disabled = false,
  disabledText,
  label,
  showLabel = true,
  color,
  outline,
  maxHeight = "300px",
  required,
  ...props
}) => {
  const values = ivalues || items || [];

  const getLabelText = (val) => {
    if (val.type === "header") return String(val.text);
    const node = val.dropdownText ?? val.label;
    if (typeof node === "string" || typeof node === "number") {
      return String(node);
    }
    return Children.toArray(node)
      .filter((c) => typeof c === "string")
      .join("");
  };

  if (loading) {
    return (
      <Util.Col>
        {showLabel && label && <label className="form-label">{label}</label>}
        <Button loading disabled>
          {prompt}
        </Button>
      </Util.Col>
    );
  }

  if (disabled) {
    return (
      <Util.Col>
        {showLabel && label && <label className="form-label">{label}</label>}
        <Button disabled>{disabledText || prompt}</Button>
      </Util.Col>
    );
  }

  const getId = (val) =>
    typeof val === "object" && val !== null ? val.id : val;

  const [selectedValue, setSelectedValue] = useState(
    values.find((v) => v.id === getId(value)) || null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredValues, setFilteredValues] = useState(values);

  useEffect(() => {
    const match = values.find((v) => v.id === getId(value)) || null;
    setSelectedValue(match);
  }, [value, values]);

  const normalize = (str) => str?.toLowerCase()?.replace(/[\s_\-+]+/g, "");

  useEffect(() => {
    setFilteredValues(
      values.filter((v) => {
        if (v.type === "divider" || v.type === "header") return true;
        const text = getLabelText(v).toLowerCase();
        return (
          text.includes(searchQuery.toLowerCase()) ||
          normalize(v.searchIndex ?? "").includes(normalize(searchQuery))
        );
      })
    );
  }, [searchQuery, values]);

  const handleSelection = (val) => {
    setSelectedValue(val);
    onChange(val);
  };

  const dropdownContent = (
    <div className="dropdown" {...props}>
      <a
        href="javascript:void(0)"
        className={`btn dropdown-toggle ${props.disabled ? "disabled" : ""} ${
          color ? `btn-${outline ? "outline-" : ""}${color}` : ""
        }`}
        data-bs-toggle="dropdown"
        {...aprops}
      >
        {selectedValue ? selectedValue.label : prompt}
      </a>
      <div className="dropdown-menu">
        {showSearch && (
          <div className="px-2 py-1">
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(q) => setSearchQuery(q)}
            />
          </div>
        )}
        <div style={{ maxHeight, overflowY: "auto" }}>
          {filteredValues.map((v, i) => {
            if (v.type === "divider") {
              return <div key={`div-${i}`} className="dropdown-divider" />;
            }
            if (v.type === "header") {
              return (
                <span key={`hdr-${i}`} className="dropdown-header">
                  {v.text}
                </span>
              );
            }
            const isActive = selectedValue?.id === v.id;
            const isItemDisabled = v.disabled === true;
            return (
              <a
                key={v.id ?? i}
                className={`dropdown-item${isActive ? " active" : ""}${
                  isItemDisabled ? " disabled" : ""
                }`}
                onClick={() => !isItemDisabled && handleSelection(v)}
                style={{ cursor: isItemDisabled ? "not-allowed" : "pointer" }}
                href={v.href || "javascript:void(0)"}
              >
                {v.icon && <span className="dropdown-item-icon">{v.icon}</span>}
                {v.dropdownText ?? v.label}
              </a>
            );
          })}
          {filteredValues.length === 0 && (
            <div className="dropdown-item text-muted">No results found</div>
          )}
        </div>
      </div>
    </div>
  );

  return label && showLabel ? (
    <Util.Col>
      <label className={`form-label${required ? " required" : ""}`}>
        {label}
      </label>
      {dropdownContent}
    </Util.Col>
  ) : (
    dropdownContent
  );
};

DropdownInput.propTypes = {
  prompt: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({ type: PropTypes.oneOf(["divider"]).isRequired }),
      PropTypes.shape({
        type: PropTypes.oneOf(["header"]).isRequired,
        text: PropTypes.string.isRequired,
      }),
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        label: PropTypes.string.isRequired,
        dropdownText: PropTypes.string,
        searchIndex: PropTypes.string,
        disabled: PropTypes.bool,
        href: PropTypes.string,
        icon: PropTypes.node,
      }),
    ])
  ),
  items: PropTypes.array,
  value: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func.isRequired,
  aprops: PropTypes.object,
  showSearch: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  disabledText: PropTypes.string,
  label: PropTypes.string,
  showLabel: PropTypes.bool,
  color: PropTypes.string,
  outline: PropTypes.bool,
  maxHeight: PropTypes.string,
  required: PropTypes.bool,
};
