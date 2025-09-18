"use client";

import { motion } from "framer-motion";
import { Download, Eye, Phone, Mail, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20" />
      
      <div className="max-w-5xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-8 tracking-tight">
            Neal Anderson
          </h1>
        </motion.div>
        
        <motion.p
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Creative Technologist • Vibe Coder • Builder of Things
        </motion.p>
        
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Musician turned maker, crafting digital experiences at the intersection of art and technology. 
          From interactive museum installations to AI-powered web applications, I build things that inspire and engage.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <Phone className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium">317.646.1975</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <Mail className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium">neal.anderson.tech@gmail.com</span>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            View My Work
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download
            className="group inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent mx-auto"></div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 text-blue-400/20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Sparkles className="h-8 w-8" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-purple-400/20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Sparkles className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
