"use client";
import { Todo } from "../types/todoType";
import { motion, AnimatePresence } from "framer-motion";
import { useTodos } from "../hooks/useTodos";
import { TodoItem } from "./TodoItem";
import { EmptyState } from "./EmptyState";
import { TodoForm } from "./TodoForm";

type Props = {
  initialTodos: Todo[];
};

export const TodosList: React.FC<Props> = ({ initialTodos }) => {
  const { data: todos } = useTodos(initialTodos);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600 mb-2">
            Todo App
          </h1>
          <p className="text-gray-400">Get things done, one task at a time</p>
        </motion.div>

        <TodoForm todosLength={todos.length} />

        <div className="space-y-3">
          <AnimatePresence>
            {todos.map((todo: Todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </AnimatePresence>
        </div>

        {todos.length === 0 && <EmptyState />}
      </div>
    </div>
  );
};
