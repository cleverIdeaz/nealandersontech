"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "RecipeFlower",
    description: "A beautiful recipe sharing platform with AI-powered ingredient suggestions and meal planning features. Built with modern web technologies and designed for food enthusiasts.",
    image: "/api/placeholder/400/300",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/nealanderson/recipeflower",
    demo: "https://recipeflower.com",
    featured: true,
  },
  {
    title: "KeyLink",
    description: "Secure password manager with end-to-end encryption, biometric authentication, and cross-platform synchronization. Focus on privacy and user experience.",
    image: "/api/placeholder/400/300",
    tech: ["React", "Node.js", "MongoDB", "WebCrypto API", "Electron"],
    github: "https://github.com/nealanderson/keylink",
    demo: "https://keylink.app",
    featured: true,
  },
  {
    title: "10PMarketplace",
    description: "E-commerce platform for local artisans with real-time chat, payment processing, and inventory management. Supporting local businesses in the digital age.",
    image: "/api/placeholder/400/300",
    tech: ["Vue.js", "Express.js", "Stripe", "Socket.io", "AWS"],
    github: "https://github.com/nealanderson/10pmarketplace",
    demo: "https://10pmarketplace.com",
    featured: false,
  },
  {
    title: "DevTools Suite",
    description: "Collection of developer utilities including code formatters, API testers, and productivity tools. Open source project with community contributions.",
    image: "/api/placeholder/400/300",
    tech: ["Svelte", "Vite", "Web Workers", "IndexedDB"],
    github: "https://github.com/nealanderson/devtools-suite",
    demo: "https://devtools-suite.vercel.app",
    featured: false,
  },
  {
    title: "WeatherVibe",
    description: "Minimalist weather app with mood-based recommendations and beautiful animations. Focus on user experience and visual design.",
    image: "/api/placeholder/400/300",
    tech: ["React Native", "Expo", "OpenWeather API", "Lottie"],
    github: "https://github.com/nealanderson/weathervibe",
    demo: "https://weathervibe.app",
    featured: false,
  },
  {
    title: "CodeCanvas",
    description: "Interactive coding playground with real-time collaboration, syntax highlighting, and code sharing. Built for developers to learn and share.",
    image: "/api/placeholder/400/300",
    tech: ["Monaco Editor", "WebRTC", "Redis", "Docker"],
    github: "https://github.com/nealanderson/codecanvas",
    demo: "https://codecanvas.dev",
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my passion for creating meaningful digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                project.featured ? "ring-2 ring-blue-500" : ""
              }`}
              whileHover={{ y: -5 }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
                  Featured
                </div>
              )}
              
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Project Image</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
