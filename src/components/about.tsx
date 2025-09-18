"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code, Music, Wrench } from "lucide-react";

export function About() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/cleverIdeaz",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/nealanderson",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:neal.anderson.tech@gmail.com",
      icon: Mail,
    },
  ];

  const focusAreas = [
    { name: "Web Development", icon: Code, color: "from-blue-500 to-cyan-500" },
    { name: "Interactive Design", icon: Wrench, color: "from-purple-500 to-pink-500" },
    { name: "Audio Technology", icon: Music, color: "from-green-500 to-emerald-500" },
    { name: "IoT & Hardware", icon: Wrench, color: "from-orange-500 to-red-500" },
  ];

  return (
    <section id="about" className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-purple-900/20 dark:to-pink-900/20 rounded-3xl flex items-center justify-center shadow-2xl">
              <div className="w-72 h-72 bg-white/80 dark:bg-gray-700/80 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="w-60 h-60 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">
                    NA
                  </span>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-8">
            About Me
          </h2>
          
          <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p className="text-lg">
              I&apos;m a creative technologist with a unique blend of technical expertise and artistic vision. 
              With a Master&apos;s in Music Technology from IUPUI and a background spanning from museum installations 
              to enterprise IT solutions, I bring a multidisciplinary approach to every project.
            </p>
            
            <p>
              My work sits at the intersection of music, art, and technology. From developing interactive 
              audio systems for museums to building web applications for startups, I love creating 
              experiences that engage and inspire.
            </p>
            
            <p>
              When I&apos;m not coding, you&apos;ll find me in the maker studio experimenting with Arduino, 
              working on music production, or building interactive installations. I believe in the power 
              of hands-on creation and the magic that happens when technology meets creativity.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Current Focus
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${area.color} flex items-center justify-center`}>
                    <area.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">{area.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Let&apos;s Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
