import { useEffect, useRef, useState } from "react";
import { Toolbar } from "./components/Toolbar";

function App() {
  return (
    <div className="container">
      <Toolbar />
      <textarea></textarea>
      <div></div>
    </div>
  );
}

export default App;
