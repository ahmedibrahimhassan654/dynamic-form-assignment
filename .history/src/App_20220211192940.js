import { useState, useEffect } from "react";
import { getSingleForm } from "./Api/forms";

import Element from "./components/Element";
import { FormContext } from "./FormContext";
import formJSON from "./formElement.json";

function App() {
  const [elements, setElements] = useState(null);

  const [formId, setFormId] = useState("62054f4b1359de293fe8e149");

  useEffect(() => {
    try {
    getSingleForm(formId).then(res=>{
      log
    });
    } catch (err) {
      console.log(err);
    }
    // setElements(formJSON[0]);
  }, [formId]);
  const { page_label, fields } = elements ?? {};

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handle submit happen", elements);
  };

  const handleChange = (id, event) => {
    const newElements = { ...elements };

    newElements.fields.forEach((field) => {
      const { field_id, field_type } = field;

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
    <FormContext.Provider value={{ handleChange }}>
      <>
        <div className="App container mt-5 ">
          <h1>{page_label}</h1>
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
      </>
    </FormContext.Provider>
  );
}

export default App;
