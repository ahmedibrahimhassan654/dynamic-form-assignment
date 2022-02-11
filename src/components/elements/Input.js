import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const Input = ({
  field_id,
  field_label,
  field_label_Ar,
  field_placeholder,
  field_placeholder_Ar,
  field_value,
  field_mandatory,
  formLang,
}) => {
  const { handleChange } = useContext(FormContext);
  // handleChange();
  return (
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">{field_label}</label>

      {formLang === "eng" ? (
        <label htmlFor="exampleInputEmail1">{field_label}</label>
      ) : (
        <label htmlFor="exampleInputEmail1">{field_label_Ar}</label>
      )}
      <input
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder={
          formLang === "eng"
            ? `${field_placeholder}`
            : `${field_placeholder_Ar}`
        }
        value={field_value}
        required={field_mandatory === true ? true : false}
        onChange={(event) => handleChange(field_id, event)}
      />
    </div>
  );
};

export default Input;
