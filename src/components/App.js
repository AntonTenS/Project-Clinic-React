import json from "./text.json";
import Header from "./header.jsx";
import Main from "./main.jsx";
import Faq from "./faq.jsx";
import React from "react";
import Swipper from "./swipper.jsx";
import { useState, useEffect } from "react";
import { AuthContext } from "../context.js";
import { register } from "swiper/element/bundle";
import { Footer } from "./footer.jsx";

function App() {
  let [Text, setText] = useState(null);
  const [Formactiv, setFormactiv] = useState(false);

  function changeFormactiv() {
    setFormactiv(!Formactiv);
  }
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
      register();

      setText(json);
    }
    fetchFile();
  }, []);

  return (
    <AuthContext.Provider value={Text}>
      <Header setFormactiv={changeFormactiv} formactiv={Formactiv} />
      <Main />
      <Faq />
      <Swipper setFormactiv={changeFormactiv} />
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
