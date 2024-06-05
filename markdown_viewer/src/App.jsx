import { useEffect, useRef, useState } from "react";
import { Toolbar } from "./components/Toolbar";
import { marked } from "marked";


function App() {
  const [text, setText] = useState(localStorage.getItem("markdownText") || "# Olá eu sou feito com markdown");
  const textAreaRef = useRef(null);

  const renderText = () => {
    return {__html: marked(text)}
  }

  useEffect(() => {
    localStorage.setItem("markdownText",text);
  },[text])

  return (
    <div className="app-container">
      <Toolbar />
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div dangerouslySetInnerHTML={renderText()}></div>
    </div>
  );
}

export default App;
