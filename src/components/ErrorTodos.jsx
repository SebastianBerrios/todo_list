import alert from "../assets/alert.svg";

export default function ErrorTodos() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div
      className="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800 grid justify-items-center w-80"
      role="alert"
    >
      <div className="flex items-center">
        <img className="flex-shrink-0 w-4 h-4 me-2" src={alert} alt="alert" />

        <h3 className="text-lg font-medium">Algo salió mal</h3>
      </div>
      <div className="mt-2 mb-4 text-sm">
        Hubo un problema al cargar las tareas del To-Do List. Por favor,
        actualiza la página e inténtalo de nuevo.
      </div>
      <div className="flex" onClick={handleRefresh}>
        <button
          type="button"
          className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Actualizar
        </button>
      </div>
    </div>
  );
}
