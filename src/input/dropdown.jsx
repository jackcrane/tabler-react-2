import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Input } from "./input";
import { Button } from "./button";
import Util from "./util";

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
  ...props
}) => {
  // Allow aliasing: pass either `values` or `items`
  const values = ivalues || items || [];

  // When loading, show a Button in a container with an optional label.
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

  // When disabled, show a disabled Button (with alternate text if provided).
  if (disabled) {
    return (
      <Util.Col>
        {showLabel && label && <label className="form-label">{label}</label>}
        <Button disabled>{disabledText || prompt}</Button>
      </Util.Col>
    );
  }

  // Helper: if value is an object, use its id; otherwise, assume the value itself is the id.
  const getId = (val) =>
    typeof val === "object" && val !== null ? val.id : val;

  // Set up state for the selected value and search/filtering.
  const [selectedValue, setSelectedValue] = useState(
    values.find((val) => val.id === getId(value)) || null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredValues, setFilteredValues] = useState(values);

  // Update the selected value if the prop changes.
  useEffect(() => {
    const matchedValue = values.find((val) => val.id === getId(value)) || null;
    setSelectedValue(matchedValue);
  }, [value, values]);

  // Filter values based on the search query.
  useEffect(() => {
    setFilteredValues(
      values.filter((val) =>
        JSON.stringify(val).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, values]);

  const handleSelection = (val) => {
    setSelectedValue(val);
    if (onChange) {
      onChange(val);
    }
  };

  // The main dropdown markup.
  const dropdownContent = (
    <div className="dropdown" {...props}>
      <a
        href="#"
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
              onChange={(value) => setSearchQuery(value)}
            />
          </div>
        )}
        {filteredValues.map((val, index) => (
          <a
            key={index}
            className={`dropdown-item${
              selectedValue && selectedValue.id === val.id ? " active" : ""
            }`}
            onClick={() => handleSelection(val)}
            style={{ cursor: "pointer" }}
          >
            {val.dropdownText || val.label}
          </a>
        ))}
        {filteredValues.length === 0 && (
          <div className="dropdown-item text-muted">No results found</div>
        )}
      </div>
    </div>
  );

  // If a label is provided, wrap the dropdown with the label inside a container.
  return label && showLabel ? (
    <Util.Col>
      <label className="form-label">{label}</label>
      {dropdownContent}
    </Util.Col>
  ) : (
    dropdownContent
  );
};

DropdownInput.propTypes = {
  prompt: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      dropdownText: PropTypes.string,
    })
  ),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      dropdownText: PropTypes.string,
    })
  ),
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
};
