import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DataProvider from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>,
  document.getElementById("app")
);
