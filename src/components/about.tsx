"use client";

import { Github, Linkedin, Mail } from "lucide-react";

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
    <section id="about">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-serif text-gray-900 dark:text-white mb-8">
          About
        </h2>
        
        <div className="space-y-6 text-lg font-serif text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
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
          <h3 className="text-xl font-serif text-gray-900 dark:text-white mb-6">
            Current Focus
          </h3>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm">
              Web Development
            </span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm">
              Interactive Design
            </span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm">
              Audio Technology
            </span>
            <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm">
              IoT & Hardware
            </span>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
