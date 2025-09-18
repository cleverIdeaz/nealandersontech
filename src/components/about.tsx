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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="w-64 h-64 mx-auto bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
            <span className="text-5xl font-light text-gray-400 dark:text-gray-300">
              NA
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6">
            About
          </h2>
          
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
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

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Current Focus
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                Web Development
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                Interactive Design
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                Audio Technology
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                IoT & Hardware
              </span>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <link.icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
