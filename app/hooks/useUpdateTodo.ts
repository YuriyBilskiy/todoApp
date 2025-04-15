import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../types/todoType";
import { updateTodo } from "../lib/apiTodos";

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onMutate: async (updatedTodo) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]);
      
      queryClient.setQueryData<Todo[]>(["todos"], (old = []) =>
        old.map((todo) =>
          todo.id === updatedTodo.id 
            ? { ...todo, completed: !todo.completed } 
            : todo
        )
      );
      
      return { previousTodos };
    },
    onError: (err, _, context) => {
      queryClient.setQueryData(["todos"], context?.previousTodos);
    },
  });
};