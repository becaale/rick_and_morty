import React from "react";
/* import reportWebVitals from "./reportWebVitals"; */
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
/* import ReactDOM from 'react-dom' */ //se quito por estar deprecated en react 18

import "./index.css";
import App from "./App";
import store from "./redux/store";

//se implementa eso para react 18 segun documentacion
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  /*   document.getElementById('root') */
);
/* reportWebVitals(); */
