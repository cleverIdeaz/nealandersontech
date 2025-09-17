"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Building Scalable React Applications with Modern Patterns",
    excerpt: "Exploring advanced React patterns, performance optimization techniques, and architectural decisions that make applications truly scalable.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Development",
    slug: "scalable-react-applications",
    featured: true
  },
  {
    title: "The Art of Creative Coding: Where Technology Meets Art",
    excerpt: "Diving into the world of creative coding, exploring how we can use programming as a medium for artistic expression and interactive experiences.",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "Creative Tech",
    slug: "art-of-creative-coding",
    featured: true
  },
  {
    title: "Microservices Architecture: Lessons from the Trenches",
    excerpt: "Real-world insights from building and maintaining microservices at scale. What works, what doesn't, and how to avoid common pitfalls.",
    date: "2023-12-20",
    readTime: "12 min read",
    category: "Architecture",
    slug: "microservices-lessons",
    featured: false
  },
  {
    title: "Vibe Coding: Finding Flow in Development",
    excerpt: "How to create the perfect development environment and mindset for maximum productivity and creative problem-solving.",
    date: "2023-12-10",
    readTime: "5 min read",
    category: "Philosophy",
    slug: "vibe-coding-flow",
    featured: false
  },
  {
    title: "Building Interactive Museum Experiences with WebGL",
    excerpt: "Case study on creating immersive digital experiences for art exhibitions using modern web technologies and creative coding techniques.",
    date: "2023-11-28",
    readTime: "10 min read",
    category: "Creative Tech",
    slug: "webgl-museum-experiences",
    featured: false
  },
  {
    title: "The Future of Web Development: Trends to Watch",
    excerpt: "Exploring emerging technologies and trends that will shape the future of web development, from AI integration to new frameworks.",
    date: "2023-11-15",
    readTime: "7 min read",
    category: "Trends",
    slug: "future-web-development",
    featured: false
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog & Experiments
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Thoughts on development, creative technology, and the ever-evolving world of web development
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Featured Posts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts
              .filter(post => post.featured)
              .map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">
                      {post.title.split(' ').slice(0, 2).join(' ')}
                    </span>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h4>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                      
                      <motion.a
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                        whileHover={{ x: 5 }}
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </motion.a>
                    </div>
                  </div>
                </motion.article>
              ))}
          </div>
        </div>

        {/* All Posts Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            All Posts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                whileHover={{ y: -2 }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      {post.readTime}
                    </span>
                    
                    <motion.a
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                      whileHover={{ x: 3 }}
                    >
                      Read
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated
            </h3>
            <p className="mb-6 opacity-90">
              Follow my journey and get notified about new posts and experiments
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
