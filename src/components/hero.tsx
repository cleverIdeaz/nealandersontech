"use client";

import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Neal Anderson
          </h1>
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Vibe Coder | Full-Stack Builder | Creative Technologist
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Crafting digital experiences that blend creativity with cutting-edge technology. 
            Building the future, one line of code at a time.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye className="mr-2 h-5 w-5" />
            View Projects
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-8 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="w-16 h-16 mx-auto border-2 border-gray-300 dark:border-gray-600 rounded-full animate-bounce">
            <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full mx-auto mt-6"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
