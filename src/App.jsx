import { useState } from "react";
import "./App.css";
import Multiselect from "./components/Multiselect";

function App() {
  const [value, setValue] = useState(["Oliver Hansen", "Van Henry"]);
  const [readOnly, setReadOnly] = useState(false);
  return (
    <div className="App">
      <Multiselect value={value} readOnly={readOnly} />
    </div>
  );
}

export default App;
