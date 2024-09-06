import pencil from "../assets/pencil.svg";
import check from "../assets/check.svg";
import trash from "../assets/trash.svg";
import { useContext } from "react";
import { TodoContext } from "../utils/TodoContext";

export default function TodoItem({ text, state, onCompleted, onDelete }) {
  const { setTodoToEdit, setOpenModalEditTodo } = useContext(TodoContext);

  const handleClick = () => {
    setTodoToEdit(text);
    setOpenModalEditTodo((state) => !state);
  };

  return (
    <li className="bg-white rounded-xl flex justify-between p-2 w-72 md:w-96 lg:w-[680px]">
      <p className={`max-w-40 md:max-w-60 ${state && "line-through"}`}>
        {text}
      </p>
      <div className="flex gap-4">
        <img
          src={pencil}
          alt="pencil"
          className="cursor-pointer w-6"
          onClick={handleClick}
        />
        <img
          src={check}
          alt="check"
          onClick={onCompleted}
          className="cursor-pointer w-6"
        />
        <img
          src={trash}
          alt="trash"
          onClick={onDelete}
          className="cursor-pointer w-6"
        />
      </div>
    </li>
  );
}
