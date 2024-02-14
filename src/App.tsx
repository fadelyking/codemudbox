import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Editor from "@monaco-editor/react";
import "./App.css";

function App() {
  const shapes: string[] = ["rectangle", "circle"];
  const [code, setCode] = useState("Write your code here...");
  const [shape, setShape] = useState(shapes[0]);
  return <Editor height="90vh" defaultLanguage="javascript" defaultValue={code} />;
}

export default App;
