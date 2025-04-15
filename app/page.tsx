import { TodosList } from "./components/TodosList";
import { fetchTodos } from "./lib/apiTodos";

export default async function Home() {
  const initialTodos = await fetchTodos();
  return (
    <div className="flex flex-col justify-center items-center">
      <TodosList initialTodos={initialTodos} />
    </div>
  );
}
