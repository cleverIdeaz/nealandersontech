"use client";

import { motion } from "framer-motion";
import { Download, Eye, Phone, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-gray-900 dark:text-white mb-8 tracking-tight">
            Neal Anderson
          </h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Musician • Maker • Builder
          </motion.p>
          <motion.p
            className="text-lg text-gray-500 dark:text-gray-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Creative technologist crafting digital experiences at the intersection of music, art, and technology.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Phone className="mr-2 h-4 w-4" />
            <span className="text-sm">317.646.1975</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Mail className="mr-2 h-4 w-4" />
            <span className="text-sm">neal.anderson.tech@gmail.com</span>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Eye className="mr-2 h-4 w-4" />
            View Work
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="mr-2 h-4 w-4" />
            Resume
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="w-px h-16 bg-gray-300 dark:bg-gray-600 mx-auto"></div>
        </motion.div>
      </div>
    </section>
  );
}
