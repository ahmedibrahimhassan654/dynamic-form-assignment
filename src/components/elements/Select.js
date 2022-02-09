import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const Select = ({
  field_id,
  field_label,
  field_placeholder,
  field_value,
  field_mandatory,
  field_options,
}) => {
  const { handleChange } = useContext(FormContext);
  return (
    <>
      <label className="form-label mt-3">{field_label}</label>
      <select
        className="form-select mt-3"
        aria-label="Default select example"
        required={field_mandatory === "yes" ? true : false}
        onChange={(event) => handleChange(field_id, event)}
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
