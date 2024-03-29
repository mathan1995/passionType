import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Navbar from "./components/Nav";
import "simple-keyboard/build/css/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>
);
