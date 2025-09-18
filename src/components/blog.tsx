"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const publications = [
  {
    title: "ArraYnger: New Interface for Interactive 360° Spatialization",
    authors: "Neal Anderson and Benjamin D. Smith",
    venue: "New Interfaces for Musical Expression (NIME) 2017",
    location: "Copenhagen: NIME, 2017",
    year: "2017",
    link: "https://www.nime.org/proceedings/2017/nime2017_paper0056.pdf",
    abstract: "Interactive real-time spatialization of audio over large immersive speaker arrays poses significant interface and control challenges for live performers. This paper describes a new system design focusing on simplicity, ease of use, and live interactive spatialization.",
    featured: true
  },
  {
    title: "Relative Sound Localization for Sources in Haphazard Speaker Array",
    authors: "Neal Anderson and Benjamin D. Smith", 
    venue: "International Computer Music Conference (ICMC)",
    location: "Michigan: 2016",
    year: "2016",
    link: "https://quod.lib.umich.edu/i/icmc/bbp2372.2016.083/--relative-sound-localization-for-sources-in-a-haphazard?view=image",
    abstract: "Research on sound localization techniques for irregular speaker array configurations, exploring methods for accurate spatial audio positioning in non-standard setups.",
    featured: true
  },
      {
        title: "KeyLink: A Real-Time Music Data Synchronization Framework for Networked Music Performance",
        authors: "Neal Anderson and Sanjay Majumder",
        venue: "Academic Paper",
        location: "2016",
        year: "2016", 
        link: "https://www.academia.edu/143699200/KeyLink_A_Real_Time_Music_Data_Synchronization_Framework_for_Networked_Music_Performance",
        abstract: "A framework for real-time music data synchronization across networked performance environments, enabling seamless collaboration between musicians in different locations.",
        featured: false
      }
];

const blogPosts = [
  {
    title: "The Intersection of Music and Technology",
    excerpt: "Exploring how my background in music technology influences my approach to creative coding and interactive design.",
    date: "2024-01-15",
    category: "Creative Tech",
    slug: "music-technology-intersection",
    featured: false
  },
  {
    title: "Building Interactive Museum Experiences",
    excerpt: "Lessons learned from creating touch-free audio systems and projection mapping installations at Newfields.",
    date: "2024-01-08",
    category: "Interactive Design", 
    slug: "museum-interactive-experiences",
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
              Research & Writing
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Published research in music technology, spatial audio, and creative technology
            </p>
        </motion.div>

        {/* Publications Section */}
        <div className="space-y-8 mb-16">
          <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-8 text-center">
            Published Research
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {publications.map((pub, index) => (
              <motion.article
                key={pub.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium">
                    {pub.venue}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {pub.year}
                  </span>
                </div>

                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors leading-tight">
                  {pub.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {pub.authors}
                </p>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                  {pub.abstract}
                </p>

                <motion.a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <span className="mr-2 text-sm">Read Paper</span>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Blog Posts Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-8 text-center">
            Recent Writing
          </h3>
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
