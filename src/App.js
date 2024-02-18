import Hello from "./hello";
import React from "react";
import { createContext, useState } from "react";

function App() {
  let jsontext = "Ростов";
  const { sometext, setsometext } = useState(jsontext);
  const ThemeContext = createContext();

  return (
    <>
      <ThemeContext.Provider value={jsontext}>
        <h1>
          Hello
          <Hello></Hello>
        </h1>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
