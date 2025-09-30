"use client";

import { Hero } from "./hero";
import { About } from "./about";
import { Projects } from "./projects";
import { Experience } from "./experience";
import { Skills } from "./skills";
import { Blog } from "./blog";
import { Contact } from "./contact";
import { Music as MusicSection } from "./music";

export function MainLayout() {
  return (
    <div className="space-bg min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
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
