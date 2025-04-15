"use client";
import { motion } from "framer-motion";
import { Todo } from "../types/todoType";
import { useDeleteTodo } from "../hooks/useDeleteTodo";
import { useUpdateTodo } from "../hooks/useUpdateTodo";
import { CompletedIcon } from "@/public/CompletedIcon";
import { DeleteIcon } from "@/public/DeleteIcon";

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
              onClick={() => updateMutation.mutate(todo)}
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                todo.completed
                  ? "border-green-400 bg-green-400 text-gray-900"
                  : "border-gray-400 hover:border-indigo-400"
              }`}
            >
              {todo.completed && <CompletedIcon />}
            </button>
          </div>
          <li
            className={`text-lg list-none break-all max-w-xs sm:max-w-md ${
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
          <DeleteIcon />
        </motion.button>
      </div>
    </motion.div>
  );
};
