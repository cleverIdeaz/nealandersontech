"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const projects = [
  {
    title: "KeyLink",
    description: "Zero-config music data sync for Max, browser, and more. Seamlessly synchronizes music data across different platforms and environments with minimal setup required.",
    tech: ["Max/MSP", "Web Audio API", "Data Sync", "Netlify"],
    demo: "https://key-link.netlify.app/",
    github: "https://github.com/cleverIdeaz/KeyLink",
    featured: true,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "RecipeFlower",
    description: "Beautiful recipe sharing platform with AI-powered ingredient suggestions and meal planning features. Designed for food enthusiasts and home cooks.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    demo: "https://recipeflower.com/",
    github: "https://github.com/cleverIdeaz",
    featured: true,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "10PMarketplace",
    description: "E-commerce platform for late-night shopping with real-time inventory management and AI-powered recommendations for night owls and shift workers.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    demo: "https://10pmarketplace.com",
    github: "https://github.com/cleverIdeaz",
    featured: true,
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    title: "TheSensoryStack",
    description: "Comprehensive resource hub for sensory processing support. Features play activities for regulation, educational materials, gear recommendations, and professional help directories.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    demo: "https://thesensorystack.com/",
    github: "https://github.com/cleverIdeaz",
    featured: false,
    gradient: "from-green-500 to-emerald-500"
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          A collection of creative projects spanning web development, interactive design, and music technology
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl blur-xl"
                 style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
            />
            <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 group-hover:border-gray-300/50 dark:group-hover:border-gray-600/50">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full font-medium mt-1">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-gray-100/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 text-sm rounded-full backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="flex space-x-4">
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                  GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
