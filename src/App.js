import { useState, useEffect } from "react";
import { getSingleForm } from "./Api/forms";

import Element from "./components/Element";
import { FormContext } from "./FormContext";
// import formJSON from "./formElement.json";

function App() {
  const [elements, setElements] = useState(null);

  const [formId, setFormId] = useState("62054f4b1359de293fe8e149");
  const [formLang, setformLang] = useState("Eng");

  useEffect(() => {
    try {
      getSingleForm(formId).then((res) => {
        console.log(res.data.data);
        setElements(res.data.data);
      });
    } catch (err) {
      console.log(err);
    }
    // setElements(formJSON[0]);
  }, [formId]);
  const { page_label, fields, form_language } = elements ?? {};
  const [form, setForm] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("elements", elements.fields);
    setForm((prev) => [...prev, elements.fields]);
  };

  const handleChange = (id, event) => {
    const newElements = { ...elements };

    newElements.fields.forEach((field) => {
      const { field_id, field_type, field_mandatory } = field;
      if (id === field_id) {
        switch (field_type) {
          case "checkbox":
            field["field_value"] = event.target.checked;

            break;

          default:
            field["field_value"] = event.target.value;

            break;
        }
      }
      setElements(newElements);
    });
    console.log("new elements", elements);
  };

  return (
    <FormContext.Provider value={{ handleChange, formLang }}>
      <>
        <div className="App container mt-5 ">
          <h1>{page_label}</h1>
          <h2>Form Language is {form_language}</h2>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              setformLang(e.target.value);
            }}
          >
            <option selected>edit form language</option>
            <option value="Eng">English</option>
            <option value="Ar">Arabic</option>
          </select>
          {JSON.stringify(formLang)}
          <div className="col-md-6">
            <form>
              {fields
                ? fields.map((field, i) => <Element key={i} field={field} />)
                : ""}
              <button
                type="submit"
                className="btn btn-primary mt-5"
                onClick={(e) => handleSubmit(e)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div>
          <h1>Form after submit</h1>
          {JSON.stringify(form)}
        </div>
      </>
    </FormContext.Provider>
  );
}

export default App;
