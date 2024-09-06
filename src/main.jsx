import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TodoProvider } from "./utils/TodoContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>
);
