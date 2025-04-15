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
    const response = await apiClient.delete(`/todos/${id}`);
    return response.data;
}

export const addTodo = async (newTodo: Omit<Todo, "id">) => {
    const response = await apiClient.post('/todos', newTodo);
    return response.data;
};

export const updateTodo = async (id: number) => {
    const response = await apiClient.put(`/todos/${id}`);
    return response.data;
}
