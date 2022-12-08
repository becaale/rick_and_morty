import React from "react";
/* import ReactDOM from 'react-dom' */ //se quito por estar deprecated en react 18
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//se implementa eso para react 18 segun documentacion
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  /*   document.getElementById('root') */
);
