"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Phewsh",
    description: "My startup platform featuring a collection of creative tools and applications. A hub for innovative digital experiences and creative technology solutions.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    demo: "https://phewsh.com",
    featured: true,
  },
  {
    title: "KeyLink",
    description: "Secure password manager with end-to-end encryption and cross-platform synchronization. Part of the Phewsh ecosystem of productivity tools.",
    tech: ["React", "Node.js", "WebCrypto API", "Electron"],
    demo: "https://phewsh.com/keylink",
    featured: true,
  },
  {
    title: "RecipeFlower",
    description: "Beautiful recipe sharing platform with AI-powered ingredient suggestions and meal planning features. Designed for food enthusiasts and home cooks.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    demo: "https://phewsh.com/recipeflower",
    featured: true,
  },
  {
    title: "The Sensory Stack",
    description: "Interactive audio-visual platform combining music technology with creative coding. Built for immersive experiences and artistic expression.",
    tech: ["Max/MSP", "WebGL", "Web Audio API", "Arduino"],
    demo: "https://phewsh.com/sensory-stack",
    featured: false,
  },
  {
    title: "Whole Mama Wellness",
    description: "Client project: Wellness platform for holistic health and wellness services. Clean, modern design focused on user experience and accessibility.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    demo: "https://wholemommawellness.com",
    featured: false,
  },
  {
    title: "Bookmarks The Spot",
    description: "Personal project: Curated bookmarking platform for discovering and organizing interesting content across the web. Built for knowledge management.",
    tech: ["Vue.js", "Express.js", "PostgreSQL", "Redis"],
    demo: "https://bookmarksthespot.com",
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-8">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A collection of creative projects spanning web development, interactive design, and music technology
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex flex-col lg:flex items-center gap-12`}
            >
              <div className="flex-1">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-light text-gray-500 dark:text-gray-400">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Project Preview</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-light text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <span className="mr-2">View Project</span>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
