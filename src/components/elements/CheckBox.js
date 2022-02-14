import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const CheckBox = ({
  field_id,
  field_label,
  field_value,
  field_label_Ar,
  field_mandatory,
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
      <div className="form-check ">
        <input
          type="checkbox"
          className={
            field_mandatory && field_value === false
              ? "form-check-input is-invalid"
              : "form-check-input "
          }
          id="exampleCheck1"
          checked={field_value}
          onChange={(event) => handleChange(field_id, event)}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          {checklanguage()}
        </label>
        {JSON.stringify(field_mandatory)}
      </div>
    </>
  );
};

export default CheckBox;
