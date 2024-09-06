export default function TodoList({ children }) {
  return (
    <div className="flex justify-center">
      <ul className="flex flex-col gap-4 items-center">{children}</ul>
    </div>
  );
}
