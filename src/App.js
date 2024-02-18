import Hello from "./hello.jsx";
import React from "react";
import { createContext, useState } from "react";
import { AuthContext } from "./context";

function App() {
  const [user, setUser] = useState("Jesse Hall");
  let redman = {
    addres: "ростов",
    home: 10,
  };
  return (
    <>
      <AuthContext.Provider value={redman}>
        <h1>{`hello ${user}`}</h1>
        <Hello>{`hello`}</Hello>
      </AuthContext.Provider>
    </>
  );
}

export default App;
