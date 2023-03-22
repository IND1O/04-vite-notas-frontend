import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import BaseProvider from "./context/BaseProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BaseProvider>
    <App />
  </BaseProvider>
);
