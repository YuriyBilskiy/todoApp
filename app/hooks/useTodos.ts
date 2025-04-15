import { useQuery } from "@tanstack/react-query";
import { Todo } from "../types/todoType";
import { fetchTodos } from "../lib/apiTodos";

export const useTodos = (initialTodos?: Todo[]) => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    initialData: initialTodos,
  });
};