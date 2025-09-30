"use client";

import { useState, useEffect } from "react";
import { Hero } from "./hero";
import { About } from "./about";
import { Projects } from "./projects";
import { Experience } from "./experience";
import { Skills } from "./skills";
import { Blog } from "./blog";
import { Contact } from "./contact";
import { Music as MusicSection } from "./music";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "music", label: "Music" },
  { id: "blog", label: "Writing" },
  { id: "contact", label: "Contact" },
];

export function MainLayout() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="space-bg min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-light text-white">
              Neal Anderson
            </div>
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? "text-white border-b-2 border-white pb-1"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        <About />
        <Projects />
        <Experience />
        <Skills />
        <MusicSection />
        <Blog />
        <Contact />
      </div>
    </div>
  );
}
