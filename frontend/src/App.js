import axios from "axios";
import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import InputBox from "./components/InputBox";
import OutputConsole from "./components/OutputConsole";
import LanguageSelector from "./components/LanguageSelector";
import RunButton from "./components/RunButton";
import SaveButton from "./components/SaveButton";
import ProgramHistory from "./components/ProgramHistory";

function App() {

  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("63");

  const runCode = async () => {

  try {

    const response = await axios.post(
      "http://localhost:5000/api/run",
      {
        code: code,
        language: language,
        input: input
      }
    );

    setOutput(response.data.output);

  } catch (error) {

    console.error(error);
    setOutput("Error connecting to backend");

  }

};
const saveProgram = async () => {

  try {

    await axios.post(
      "http://localhost:5000/api/saveProgram",
      {
        title: "My Program",
        code: code,
        language: language,
        input: input,
        output: output
      }
    );

    alert("Program saved successfully");

  } catch (error) {

    alert("Error saving program");

  }

};

  return (
    <div style={{ padding: "20px" }}>

      <h1>Online Code Compiler</h1>

      <LanguageSelector
        language={language}
        setLanguage={setLanguage}
      />

      <CodeEditor
        code={code}
        setCode={setCode}
      />

      <h3>Input</h3>

      <InputBox
        input={input}
        setInput={setInput}
      />

      <RunButton
        runCode={runCode}
      />
      <SaveButton
      saveProgram={saveProgram}
    />

      <OutputConsole
        output={output}
      />

      <ProgramHistory
  setCode={setCode}
  setLanguage={setLanguage}
  setInput={setInput}
/>

    </div>
  );
}

export default App;