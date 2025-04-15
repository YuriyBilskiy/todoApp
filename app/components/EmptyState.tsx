"use client";
import { EmptyIcon } from "@/public/EmptyIcon";
import { motion } from "framer-motion";

export const EmptyState = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="text-center py-12"
  >
    <div className="text-gray-500 mb-4">
      <EmptyIcon />
    </div>
    <h3 className="text-lg font-medium text-gray-300">No tasks yet</h3>
    <p className="text-gray-500 mt-1">
      Add your first task using the form above
    </p>
  </motion.div>
);
