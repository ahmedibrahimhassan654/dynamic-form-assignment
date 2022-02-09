import { useState, useEffect } from "react";

import Element from "./components/Element";
import CheckBox from "./components/elements/CheckBox";
import Input from "./components/elements/Input";
import Select from "./components/elements/Select";
import formJSON from "./formElement.json";

function App() {
  const [elements, setElements] = useState(null);
  useEffect(() => {
    setElements(formJSON[0]);
  }, []);
  const { page_label, fields } = elements ?? {};
  return (
    <>
      {JSON.stringify(elements)}

      <div className="App container mt-5 ">
        <div className="col-md-6">
          <form>
            {fields
              ? fields.map((field, i) => <Element key={i} field={field} />)
              : ""}
            {/* <Input />
            <Select />
            <CheckBox /> */}
            <button type="submit" className="btn btn-primary mt-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
