import json from "./text.json";
import Header from "./header.jsx";
import Main from "./main.jsx";
import React from "react";
import { useState, useEffect } from "react";
import { AuthContext } from "../context.js";

function App() {
  let [Text, setText] = useState(null);

  //=================For-JSON-API==========================================
  // useEffect(() => {
  //   async function fetchFile() {
  //     try {
  //       const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //       const jsonData = await response.json();
  //       setText(jsonData);
  //     } catch (error) {
  //       console.error("Ошибка при загрузке файла:", error);
  //     }
  //   }
  //   fetchFile();
  // }, []);
  //======================================================================
  useEffect(() => {
    function fetchFile() {
      setText(json);
    }
    fetchFile();
  }, []);

  return (
    <AuthContext.Provider value={Text}>
      <Header />
      <Main />
    </AuthContext.Provider>
  );
}

export default App;
