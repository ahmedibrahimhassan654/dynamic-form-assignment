import React from "react";
import CheckBox from "./elements/CheckBox";
import Input from "./elements/Input";
import Select from "./elements/Select";

const Element = ({
  field: {
    field_type,
    field_id,
    field_label,
    field_placeholder,
    field_value,
    field_mandatory,
    field_options,
  },
}) => {
  switch (field_type) {
    case "text":
      return (
        <Input
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
          field_mandatory={field_mandatory}
        />
      );
    case "select":
      return (
        <Select
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
          field_mandatory={field_mandatory}
          field_options={field_options}
        />
      );
    case "checkbox":
      return <CheckBox />;

    default:
      return null;
  }
};

export default Element;
