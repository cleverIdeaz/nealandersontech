"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function About() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/nealanderson",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/nealanderson",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:neal@nealanderson.tech",
      icon: Mail,
    },
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-600 dark:text-gray-400">
                      NA
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse delay-1000"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Creative Technologist & Full-Stack Developer
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I&apos;m a passionate developer who believes in the power of code to create 
                meaningful experiences. With a background spanning from creative agencies 
                to enterprise solutions, I bring a unique perspective to every project.
              </p>
              <p>
                My journey in tech started with curiosity and has evolved into a deep 
                love for building things that matter. I specialize in modern web technologies, 
                cloud architecture, and creating seamless user experiences that delight.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing 
                to open source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Let&apos;s Connect
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <link.icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                    <span className="sr-only">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
