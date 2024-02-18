import Hello from "./hello";
import React from "react";
import { createContext, useState } from "react";

function App() {
  return (
    <>
      <h1>
        Hello
        <Hello></Hello>
      </h1>
    </>
  );
}

export default App;
