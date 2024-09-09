import { useContext } from "react";
import { createPortal } from "react-dom";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import CreateTodoButton from "./components/CreateTodoButton";
import TodoItem from "./components/TodoItem";
import LoadingTodos from "./components/LoadingTodos";
import ErrorTodos from "./components/ErrorTodos";
import TodoFormAdd from "./components/TodoFormAdd";
import TodoFormEdit from "./components/TodoFormEdit";
import SocialMedia from "./components/SocialMedia";
import { TodoContext } from "./utils/TodoContext";

export default function App() {
  const {
    error,
    loading,
    searchedTodo,
    editTodo,
    completeTodo,
    deleteTodo,
    openModalAddTodo,
    setOpenModalAddTodo,
    openModalEditTodo,
  } = useContext(TodoContext);

  const modalNode = document.getElementById("modal");

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-principal flex flex-col items-center gap-3 p-4">
        <h1 className="text-white font-bold text-3xl">TO-DO LIST</h1>
        <TodoCounter />
        <TodoSearch />
      </header>
      <main className="bg-secundary p-4 flex-grow">
        <TodoList>
          {searchedTodo.length === 0 ? (
            <span>¡Agrega tu primer TO-DO!</span>
          ) : searchedTodo.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                state={todo.completed}
                onEdited={() => editTodo(todo.text, newText)}
                onCompleted={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            )) ? (
            loading
          ) : <div className="grid gap-5">
              <LoadingTodos />
              <LoadingTodos />
              <LoadingTodos />
              <LoadingTodos />
              <LoadingTodos />
            </div> ? (
            error
          ) : (
            <ErrorTodos />
          )}
        </TodoList>
        <CreateTodoButton setOpenModalAddTodo={setOpenModalAddTodo} />
        {openModalAddTodo && createPortal(<TodoFormAdd />, modalNode)}
        {openModalEditTodo && createPortal(<TodoFormEdit />, modalNode)}
      </main>
      <footer className="bg-principal text-center text-sm text-white p-2">
        <span>{`<> ElectroCode </>`}</span>
        <SocialMedia />
      </footer>
    </div>
  );
}
