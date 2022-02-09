import React from "react";

const Select = ({
  field_id,
  field_label,
  field_placeholder,
  field_value,
  field_mandatory,
  field_options,
}) => {
  return (
    <>
      <label className="form-label mt-3">{field_label}</label>
      <select
        className="form-select mt-3"
        aria-label="Default select example"
        required={field_mandatory === "yes" ? true : false}
      >
        <option>{field_placeholder}</option>
        {field_options.length > 0 &&
          field_options.map((option, i) => (
            <option value={option.option_label} key={i}>
              {option.option_label}
            </option>
          ))}
      </select>
    </>
  );
};

export default Select;
