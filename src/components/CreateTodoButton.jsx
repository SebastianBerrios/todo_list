import plus from "../assets/plus.svg";

export default function CreateTodoButton({ setOpenModalAddTodo }) {
  const handleClick = () => {
    setOpenModalAddTodo((state) => !state);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-principal rounded-full p-5 fixed bottom-[75px] right-5 z-10"
    >
      <img src={plus} alt="plus" />
    </button>
  );
}
