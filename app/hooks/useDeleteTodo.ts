import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../types/todoType";
import { deleteTodo } from "../lib/apiTodos";

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onMutate: async (todoId: number) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]);
      queryClient.setQueryData<Todo[]>(["todos"], (old = []) =>
        old.filter((todo) => todo.id !== todoId)
      );
      return { previousTodos };
    },
    onError: (err, _, context) => {
      queryClient.setQueryData(["todos"], context?.previousTodos);
    },
  });
};