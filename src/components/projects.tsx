"use client";

import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "KeyLink",
    description: "Zero-config music data sync for Max, browser, and more. Seamlessly synchronizes music data across different platforms and environments with minimal setup required.",
    tech: ["Max/MSP", "Web Audio API", "Data Sync", "Netlify"],
    demo: "https://key-link.netlify.app/",
    github: "https://github.com/cleverIdeaz/KeyLink",
    featured: true,
  },
  {
    title: "Recipe Flower",
    description: "Culinary platform offering a diverse collection of recipes across various cuisines. Designed for food enthusiasts to discover and share cooking inspiration.",
    tech: ["Web Platform", "Recipe Management"],
    demo: "https://recipeflower.com/",
    github: "https://github.com/cleverIdeaz",
    featured: true,
  },
  {
    title: "The Sensory Stack",
    description: "Comprehensive resource hub for sensory processing support. Features play activities for regulation, educational materials, gear recommendations, and professional help directories.",
    tech: ["Resource Platform", "Educational Content"],
    demo: "https://thesensorystack.com/",
    github: "https://github.com/cleverIdeaz",
    featured: true,
  },
  {
    title: "Whole Momma Wellness",
    description: "Client project: Wellness service platform led by Madison Mellencamp, offering doula services, prenatal yoga, and Reiki sessions in Indianapolis.",
    tech: ["Wellness Platform", "Client Services"],
    demo: "https://wholemommawellness.com/",
    github: "https://github.com/cleverIdeaz",
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
          Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A collection of creative projects spanning web development, interactive design, and music technology
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                {project.title}
              </h3>
              {project.featured && (
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                  Featured
                </span>
              )}
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex space-x-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm"
              >
                <span className="mr-2">View Project</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm"
              >
                <span className="mr-2">GitHub</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
