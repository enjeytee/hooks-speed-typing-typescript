import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const rootContainer = document.getElementById("root") as HTMLDivElement;

ReactDOM.createRoot(rootContainer).render(
    <App />
)
