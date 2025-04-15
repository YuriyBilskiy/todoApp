"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useAddTodo } from "../hooks/useAddTodo";
import { PendingIcon } from "@/public/PendingIcon";

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
          className="flex-1 truncate bg-gray-700/50 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-600 placeholder-gray-400 transition-all"
          type="text"
          placeholder="What needs to be done?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={mutation.isPending}
          maxLength={50}

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
              <PendingIcon />
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
