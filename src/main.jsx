import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css"; // normal
import "@fontsource/montserrat/700.css"; // bold
import "@fontsource/montserrat/800.css"; // extra-bold

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
