import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { initColors } from "ntc-ts";
import { ORIGINAL_COLORS } from "ntc-ts";

// initialize ntc colors
initColors(ORIGINAL_COLORS);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
