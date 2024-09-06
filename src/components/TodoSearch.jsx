import { useContext } from "react";
import { TodoContext } from "../utils/TodoContext";

export default function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <input
      type="search"
      placeholder="Buscar tarea..."
      className="p-3 rounded-full w-72 md:w-96"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}
