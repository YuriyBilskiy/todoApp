import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../types/todoType";
import { addTodo } from "../lib/apiTodos";

export const useAddTodo = (onSuccessCallback?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newTodo: Todo) => addTodo(newTodo),
    onSuccess: (newTodo: Todo) => {
      queryClient.setQueryData<Todo[]>(["todos"], (oldTodos = []) => [
        ...oldTodos,
        newTodo,
      ]);
      onSuccessCallback?.();
    },
  });
};
