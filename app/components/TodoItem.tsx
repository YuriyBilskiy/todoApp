"use client";
import { motion } from "framer-motion";
import { Todo } from "../types/todoType";
import { useDeleteTodo } from "../hooks/useDeleteTodo";
import { useUpdateTodo } from "../hooks/useUpdateTodo";

export const TodoItem = ({ todo }: { todo: Todo }) => {
  const deleteMutation = useDeleteTodo();

  const updateMutation = useUpdateTodo();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ type: "spring", damping: 25 }}
      className={`relative group rounded-xl overflow-hidden ${
        todo.completed ? "opacity-70" : ""
      }`}
    >
      <div
        className={`absolute inset-0 ${
          todo.completed ? "bg-green-900/30" : "bg-red-900/30"
        }`}
      ></div>
      <div className="relative z-10 p-5 flex items-center justify-between">
        <div className="flex items-center space-x-3 gap-3">
          <div className="p-2">
            <button
              onClick={() => updateMutation.mutate(todo.id)}
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                todo.completed
                  ? "border-green-400 bg-green-400 text-gray-900"
                  : "border-gray-400 hover:border-indigo-400"
              }`}
            >
              {todo.completed && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
          <li
            className={`text-lg list-none ${
              todo.completed ? "text-green-200 line-through" : "text-gray-200"
            }`}
          >
            {todo.title}
          </li>
        </div>
        <motion.button
          onClick={() => deleteMutation.mutate(todo.id)}
          className="text-gray-400 hover:text-red-400 transition-colors p-2"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          disabled={deleteMutation.isPending}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};
