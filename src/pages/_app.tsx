import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Index from "./index";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Index />
  </StrictMode>
);
