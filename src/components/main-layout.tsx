"use client";

import { useState, useEffect } from "react";
import { User, Briefcase, Code, FileText, MessageCircle, Music } from "lucide-react";
import { Hero } from "./hero";
import { About } from "./about";
import { Projects } from "./projects";
import { Experience } from "./experience";
import { Skills } from "./skills";
import { Blog } from "./blog";
import { Contact } from "./contact";
import { Music as MusicSection } from "./music";

const tabs = [
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: Code },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Code },
  { id: "music", label: "Music", icon: Music },
  { id: "blog", label: "Writing", icon: FileText },
  { id: "contact", label: "Contact", icon: MessageCircle },
];

export function MainLayout() {
  const [activeTab, setActiveTab] = useState("about");

  // Handle URL hash changes and initial load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && tabs.some(tab => tab.id === hash)) {
        setActiveTab(hash);
      }
    };

    // Check initial hash on load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Handle custom tab switch events from footer
  useEffect(() => {
    const handleTabSwitch = (event: CustomEvent) => {
      setActiveTab(event.detail);
      // Update URL hash
      window.history.pushState(null, '', `#${event.detail}`);
    };

    window.addEventListener('switchTab', handleTabSwitch as EventListener);
    return () => {
      window.removeEventListener('switchTab', handleTabSwitch as EventListener);
    };
  }, []);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    // Update URL hash
    window.history.pushState(null, '', `#${tabId}`);
  };

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
      case "music":
        return <MusicSection />;
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
      
      {/* Simple Navigation */}
      <div className="max-w-6xl mx-auto px-8 pt-4">
                <nav className="flex flex-wrap gap-8 mb-8">
                  {tabs.map((tab) => {
                    return (
                      <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        className={`text-lg font-serif transition-colors ${
                          activeTab === tab.id
                            ? "text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white pb-1"
                            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </nav>
        
        {/* Content */}
        <div className="pb-12">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
