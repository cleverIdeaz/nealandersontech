"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Briefcase, Code, FileText, MessageCircle } from "lucide-react";
import { Hero } from "./hero";
import { About } from "./about";
import { Projects } from "./projects";
import { Experience } from "./experience";
import { Skills } from "./skills";
import { Blog } from "./blog";
import { Contact } from "./contact";

const tabs = [
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: Code },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Code },
  { id: "blog", label: "Writing", icon: FileText },
  { id: "contact", label: "Contact", icon: MessageCircle },
];

export function MainLayout() {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "experience":
        return <Experience />;
      case "skills":
        return <Skills />;
      case "blog":
        return <Blog />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section - Always visible */}
      <Hero />
      
      {/* Enhanced Tab Navigation */}
      <motion.div 
        className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex justify-center space-x-1 py-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center space-x-2">
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </span>
                </motion.button>
              );
            })}
          </nav>
        </div>
      </motion.div>
      
      {/* Tab Content with smooth transitions */}
      <div className="max-w-6xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
