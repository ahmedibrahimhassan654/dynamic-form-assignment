import React from "react";

const CheckBox = ({
  field_id,
  field_label,
  
  field_value,
  field_mandatory,
}) => {
  return (
    <div className="form-check ">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">
        {field_label}
      </label>
    </div>
  );
};

export default CheckBox;
