import Header from "./header.jsx";
import React from "react";
import { useState, useEffect } from "react";
import { AuthContext } from "../context.js";

function App() {
  let [Text, setText] = useState(null);

  useEffect(() => {
    async function fetchFile() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const jsonData = await response.json();
        setText(jsonData);
      } catch (error) {
        console.error("Ошибка при загрузке файла:", error);
      }
    }
    fetchFile();
  }, []);

  return (
    <>
      <AuthContext.Provider value={Text}>
        <h1>Hello</h1>
        <Header />
      </AuthContext.Provider>
    </>
  );
}

export default App;
