import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import forecast from "./data/forecast.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App location={forecast.location} forecats={forecast.forecasts} />
  </React.StrictMode>
);
