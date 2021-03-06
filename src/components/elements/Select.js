import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const Select = ({
  field_id,
  field_label,
  field_label_Ar,

  field_placeholder,
  field_placeholder_Ar,
  field_value,
  field_mandatory,
  field_options,
}) => {
  const { handleChange, formLang } = useContext(FormContext);

  const checklanguage = () => {
    if (formLang === "Eng") {
      return (
        <>
          <label htmlFor="exampleInputEmail1">{field_label}</label>
        </>
      );
    } else {
      return (
        <>
          <label htmlFor="exampleInputEmail1">{field_label_Ar}</label>
        </>
      );
    }
  };

  return (
    <>
      {checklanguage()}
      <select
        className={
          field_mandatory && field_value === ""
            ? "form-control is-invalid"
            : "form-control "
        }
        aria-label="Default select example"
        onChange={(event) => handleChange(field_id, event)}
      >
        <option>
          {formLang === "Eng" ? field_placeholder : field_placeholder_Ar}
        </option>
        {field_options.length > 0 &&
          field_options.map((option, i) => (
            <option value={option.option_label} key={i}>
              {option.option_label}
            </option>
          ))}
      </select>
      {JSON.stringify(field_mandatory)}
    </>
  );
};

export default Select;
