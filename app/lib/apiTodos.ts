import axios from "axios";
import { Todo } from "../types/todoType";

const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000,
})

export const fetchTodos = async () => {
    const response = await apiClient.get('/todos?_limit=10');
    return response.data;
}
export const deleteTodo = async (id: number) => {
    await apiClient.delete(`/todos/${id}`);
    return id;
}

export const addTodo = async (newTodo: Omit<Todo, "id">) => {
    const response = await apiClient.post("/todos", newTodo);
    response.data.id = Math.random();
    return response.data;
  };

export const updateTodo = async (todo: Todo) => {
    const response = await apiClient.patch(`/todos/${todo.id}`, {
        completed: !todo.completed
    });
    return response.data;
}
