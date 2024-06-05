import "./styles.css";

export const Toolbar = ({insertText}) => {
  return (
    <div className="toolbar">
      <button onClick={() => insertText("# ","")}>h1</button>
      <button onClick={() => insertText("## ","")}>h2</button>
      <button onClick={() => insertText("**","**")}>bold</button>
      <button onClick={() => insertText("*","*")}>Italico</button>
      <button onClick={() => insertText("[","](https://)")}>Link</button>
      <button onClick={() => insertText("```","```")}>Code block</button>
      <button onClick={() => insertText("- ","")}>List item</button>
      <button onClick={() => insertText("\n---\n","")}>Horizontal line</button>
    </div>
  );
};
