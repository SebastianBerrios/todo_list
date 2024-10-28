import { createRoot } from "react-dom/client";
import { TodoProvider } from "./contexts/TodoContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
