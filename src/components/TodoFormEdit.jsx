import { useContext, useState } from "react";
import { TodoContext } from "../utils/TodoContext";

export default function TodoFormEdit() {
  const { todoToEdit, editTodo, setOpenModalEditTodo } =
    useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    editTodo(todoToEdit, newTodoValue);
    setOpenModalEditTodo(false);
  };

  const onCancel = () => {
    setOpenModalEditTodo(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  return (
    <form
      className="bg-form w-72 md:w-fit h-fit flex justify-center flex-col items-center gap-5 p-4 text-xl text-white font-bold absolute rounded-xl top-16 left-1/2 transform -translate-x-1/2"
      onSubmit={onSubmit}
    >
      <label>Modifica tu TODO</label>
      <textarea
        className="w-60 md:w-80 min-h-20 block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Modifica la descripción de tu TO-DO"
        value={newTodoValue}
        onChange={onChange}
      ></textarea>
      <div className="flex gap-10">
        <button
          onClick={onCancel}
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Modificar
        </button>
      </div>
    </form>
  );
}
