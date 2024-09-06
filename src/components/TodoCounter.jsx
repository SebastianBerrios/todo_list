import { useContext } from "react";
import { TodoContext } from "../utils/TodoContext";

export default function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <h2 className="text-white text-lg">
      ¡Has completado {completedTodos} de {totalTodos} tareas!
    </h2>
  );
}
