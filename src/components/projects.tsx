"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Phewsh",
    description: "My startup platform featuring a collection of creative tools and applications. A hub for innovative digital experiences and creative technology solutions.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    demo: "https://phewsh.com",
    github: "https://github.com/cleverIdeaz",
    featured: true,
  },
  {
    title: "KeyLink",
    description: "Secure password manager with end-to-end encryption and cross-platform synchronization. Part of the Phewsh ecosystem of productivity tools.",
    tech: ["Python", "WebCrypto API", "Cross-platform"],
    demo: "https://phewsh.com/keylink",
    github: "https://github.com/cleverIdeaz/KeyLink",
    featured: true,
  },
  {
    title: "RecipeFlower",
    description: "Beautiful recipe sharing platform with AI-powered ingredient suggestions and meal planning features. Designed for food enthusiasts and home cooks.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    demo: "https://phewsh.com/recipeflower",
    github: "https://github.com/cleverIdeaz",
    featured: true,
  },
  {
    title: "The Sensory Stack",
    description: "Interactive audio-visual platform combining music technology with creative coding. Built for immersive experiences and artistic expression.",
    tech: ["Max/MSP", "WebGL", "Web Audio API", "Arduino"],
    demo: "https://phewsh.com/sensory-stack",
    github: "https://github.com/cleverIdeaz",
    featured: false,
  },
  {
    title: "Whole Mama Wellness",
    description: "Client project: Wellness platform for holistic health and wellness services. Clean, modern design focused on user experience and accessibility.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    demo: "https://wholemommawellness.com",
    github: "https://github.com/cleverIdeaz",
    featured: false,
  },
  {
    title: "Bookmarks The Spot",
    description: "Personal project: Curated bookmarking platform for discovering and organizing interesting content across the web. Built for knowledge management.",
    tech: ["Vue.js", "Express.js", "PostgreSQL", "Redis"],
    demo: "https://bookmarksthespot.com",
    github: "https://github.com/cleverIdeaz",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">
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
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">View Project</span>
                  <ExternalLink className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">GitHub</span>
                  <ExternalLink className="h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
