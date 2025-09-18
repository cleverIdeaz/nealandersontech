"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed inset-x-0 top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-xl font-light text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Neal Anderson
            </a>
          </div>

          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </motion.header>
  );
}