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
      
      {/* Tab Navigation */}
      <div className="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="flex justify-center space-x-1 overflow-x-auto py-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg transform scale-105"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="relative min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
