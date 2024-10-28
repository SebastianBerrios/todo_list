import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

export default function TodoCounter() {
  const { completedTodos, totalTodos, searchedTodo } = useContext(TodoContext);

  return (
    <h2 className="text-white text-lg">
      {searchedTodo.length === 0
        ? `¿¡Que esperas para agregar tus TO-DOs?!`
        : `¡Has completado ${completedTodos} de ${totalTodos} tareas!`}
    </h2>
  );
}
