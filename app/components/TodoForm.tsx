"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useAddTodo } from "../hooks/useAddTodo";

export const TodoForm = ({ todosLength }: { todosLength: number }) => {
  const [query, setQuery] = useState("");

  const mutation = useAddTodo(() => {
    setQuery("");
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const newTodo = {
      id: todosLength + 1,
      title: query,
      completed: false,
      userId: 1,
    };
    mutation.mutate(newTodo);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8 border border-gray-700"
    >
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          className="flex-1 bg-gray-700/50 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-600 placeholder-gray-400 transition-all"
          type="text"
          placeholder="What needs to be done?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={mutation.isPending}
        />
        <motion.button
          type="submit"
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-3 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all font-medium shadow-lg hover:shadow-indigo-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          disabled={mutation.isPending ?? !query.trim()}
        >
          {mutation.isPending ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Adding...
            </span>
          ) : (
            "Add"
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};
