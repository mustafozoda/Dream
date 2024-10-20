// index.jsx or App.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "/src/context/AuthContext.jsx";
import App from "./App";

const rootElement = document.getElementById("root"); // Get the root element
const root = createRoot(rootElement); // Create a root

root.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
