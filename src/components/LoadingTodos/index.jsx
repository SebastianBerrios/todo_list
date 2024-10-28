export default function LoadingTodos() {
  return (
    <li className="flex justify-between items-center p-4 h-12 w-72 md:w-96 lg:w-[680px] bg-gray-200 rounded-full dark:bg-gray-700">
      <p className="max-w-60 bg-gray-200 rounded-full dark:bg-gray-700"></p>
      <div className="flex gap-6 bg-gray-200 rounded-full dark:bg-gray-700">
        <img className="size-6 bg-gray-200 rounded-full dark:bg-gray-700" />
        <img className="size-6 bg-gray-200 rounded-full dark:bg-gray-700" />
        <img className="size-6 bg-gray-200 rounded-full dark:bg-gray-700" />
      </div>
    </li>
  );
}
