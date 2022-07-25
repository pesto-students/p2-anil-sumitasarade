import { useState } from "react";

import Shortener from "./Shortener";
import CopyUrl from "./CopyUrl";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <Shortener setInputValue={setInputValue} />

      <CopyUrl inputValue={inputValue} />
    </div>
  );
}

export default App;
