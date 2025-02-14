import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Input } from "./input";

export const DropdownInput = ({
  prompt,
  values: ivalues,
  items,
  value,
  onChange,
  aprops,
  showSearch = true,
  ...props
}) => {
  const values = ivalues || items;
  const getId = (val) =>
    typeof val === "object" && val !== null ? val.id : val;

  const [selectedValue, setSelectedValue] = useState(
    values.find((val) => val.id === getId(value)) || null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredValues, setFilteredValues] = useState(values);

  // Update selected value if the `value` prop changes
  useEffect(() => {
    const matchedValue = values.find((val) => val.id === getId(value)) || null;
    setSelectedValue(matchedValue);
  }, [value, values]);

  // Filter the dropdown values based on the search query
  useEffect(() => {
    setFilteredValues(
      values.filter((val) =>
        JSON.stringify(val).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, values]);

  const handleSelection = (value) => {
    setSelectedValue(value);
    if (onChange) {
      onChange(value); // Return the full object
    }
  };

  return (
    <div className={`dropdown`} {...props}>
      <a
        href="#"
        className={`btn dropdown-toggle ${props.disabled ? "disabled" : ""} ${
          props.color ? `btn-${props.outline && "outline-"}${props.color}` : ""
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
              placeholder={"Search..."}
              value={searchQuery}
              onChange={(value) => setSearchQuery(value)}
            />
          </div>
        )}
        {filteredValues.map((value, index) => (
          <a
            key={index}
            className={`dropdown-item${
              selectedValue && selectedValue.id === value.id ? " active" : ""
            }`}
            onClick={() => handleSelection(value)}
            style={{ cursor: "pointer" }}
          >
            {value.dropdownText || value.label}
          </a>
        ))}
        {filteredValues.length === 0 && (
          <div className="dropdown-item text-muted">No results found</div>
        )}
      </div>
    </div>
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
  ).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string,
  outline: PropTypes.bool,
};

export const LoadableDropdownInput = ({
  values,
  value,
  onChange,
  prompt,
  loading,
  label,
  showLabel = true,
  disabled = false,
  disabledText,
  ...props
}) => {
  if (loading)
    return (
      <Util.Col>
        {showLabel && <label className="form-label">{label}</label>}
        <Button loading disabled>
          {prompt}
        </Button>
      </Util.Col>
    );

  if (disabled)
    return (
      <Util.Col>
        {showLabel && <label className="form-label">{label}</label>}
        <Button disabled>{disabledText || prompt}</Button>
      </Util.Col>
    );

  return (
    <Util.Col>
      {showLabel && <label className="form-label">{label}</label>}
      <DropdownInput
        values={values}
        value={value}
        onChange={onChange}
        prompt={prompt}
        data-value={value}
        {...props}
      />
    </Util.Col>
  );
};
