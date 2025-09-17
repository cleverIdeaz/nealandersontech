"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const blogPosts = [
  {
    title: "The Intersection of Music and Technology",
    excerpt: "Exploring how my background in music technology influences my approach to creative coding and interactive design.",
    date: "2024-01-15",
    category: "Creative Tech",
    slug: "music-technology-intersection",
    featured: true
  },
  {
    title: "Building Interactive Museum Experiences",
    excerpt: "Lessons learned from creating touch-free audio systems and projection mapping installations at Newfields.",
    date: "2024-01-08",
    category: "Interactive Design",
    slug: "museum-interactive-experiences",
    featured: true
  },
  {
    title: "From Academic Research to Startup Life",
    excerpt: "How my research in audio spatialization and auto accompaniment prepared me for building creative technology solutions.",
    date: "2023-12-20",
    category: "Career",
    slug: "academic-to-startup",
    featured: false
  },
  {
    title: "The Maker Studio: Where Ideas Come to Life",
    excerpt: "A behind-the-scenes look at my creative process in the maker studio, from Arduino prototypes to finished installations.",
    date: "2023-12-10",
    category: "Making",
    slug: "maker-studio-process",
    featured: false
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-8">
            Writing & Experiments
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Thoughts on creative technology, music, and the intersection of art and code
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </div>
              
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <motion.a
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <span className="mr-2">Read More</span>
                <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
              Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              More thoughts on creative technology, maker projects, and the future of interactive design.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                Creative Coding
              </span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                Music Technology
              </span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                Interactive Design
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
