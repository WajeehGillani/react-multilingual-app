import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./i18n";
import { CircularProgress } from "@material-ui/core";
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<CircularProgress />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
