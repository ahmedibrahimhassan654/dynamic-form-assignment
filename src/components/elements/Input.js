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
}) => {
  const { handleChange, formLang } = useContext(FormContext);
  // handleChange();

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
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">{field_label}</label>
      {checklanguage()}

      <input
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="inputGroupPrepend"
        placeholder={
          formLang === "Eng" ? field_placeholder : field_placeholder_Ar
        }
        value={field_value}
        // required={field_mandatory === true ? true : false}
        onChange={(event) => handleChange(field_id, event)}
        required
      />

      {JSON.stringify(field_mandatory)}
    </div>
  );
};

export default Input;
