"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

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

  return (
    <section id="about" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-96 h-96 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/headshot.jpg"
                  alt="Neal Anderson - Creative Technologist"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-8">
              About
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
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
                Current Focus
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                  Web Development
                </span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                  Interactive Design
                </span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                  Audio Technology
                </span>
                <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                  IoT & Hardware
                </span>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex space-x-6">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
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
