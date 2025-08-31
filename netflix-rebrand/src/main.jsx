import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NetflixRebrand from "./NetflixRebrand.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NetflixRebrand />
  </StrictMode>
);
