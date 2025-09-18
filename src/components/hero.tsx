"use client";

import { Download, Eye, Phone, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl md:text-8xl font-light text-gray-900 dark:text-white mb-6">
          Neal Anderson
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          Musician • Maker • Builder
        </p>
        
        <p className="text-lg text-gray-500 dark:text-gray-500 mb-8 max-w-2xl mx-auto">
          Creative technologist crafting digital experiences at the intersection of music, art, and technology.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Phone className="mr-2 h-4 w-4" />
            <span>317.646.1975</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Mail className="mr-2 h-4 w-4" />
            <span>neal.anderson.tech@gmail.com</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            <Eye className="mr-2 h-4 w-4" />
            View Work
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <Download className="mr-2 h-4 w-4" />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
