import React from "react";
//import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles.scss";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

//var mountNode = document.getElementById("app");
//ReactDOM.render(<App name="Jane" />, mountNode);
