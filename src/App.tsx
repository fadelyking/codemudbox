import { useState } from "react";
import SideBar from "./components/Sidebar";
/* import Editor from "@monaco-editor/react"; */
import "./App.css";

function App() {
    const shapes: string[] = ["rectangle", "circle"];
    const [code, setCode] = useState("Write your code here...");
    const [shape, setShape] = useState(shapes[0]);
    return <SideBar />;
}

export default App;
