import React, { useState } from "react";
import { render } from "react-dom";
import useClipboard from "./";

function App() {
  const { text, writeText } = useClipboard();
  const [name, setName] = useState("");
  return (
    <div>
      <h1>✂️ Reading from the clipboard (text)</h1>
      <h3>{text}</h3>
      <h1>📝 Writing to the clipboard (writeText)</h1>
      <h3>1️⃣ Copy from here</h3>
      <form>
        <label>
          Name:
          <input
            type="text"
            placeholder="Mary Poppins"
            value={name}
            onChange={ev => setName(ev.target.value)}
          />
        </label>
      </form>
      <button onClick={() => writeText(name)}>Copy!</button>
      <h3>2️⃣ ⌘+V Here</h3>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
      </form>
      <h3>3️⃣ Try refreshing 😀</h3>
    </div>
  );
}

render(<App />, window.root);
