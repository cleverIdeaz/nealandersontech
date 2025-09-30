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
      href: "https://www.linkedin.com/in/neal-anderson-tech/",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:neal.anderson.tech@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <section className="simple-card p-8">
      <h2 className="text-3xl font-light text-white mb-6">
        About
      </h2>
      
      <div className="space-y-6 text-gray-300 leading-relaxed">
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

      <div className="mt-8">
        <h3 className="text-xl font-light text-white mb-4">
          Current Focus
        </h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm border border-white/20">
            Web Development
          </span>
          <span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm border border-white/20">
            Interactive Design
          </span>
          <span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm border border-white/20">
            Audio Technology
          </span>
          <span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm border border-white/20">
            IoT & Hardware
          </span>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex space-x-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Icon className="w-5 h-5" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
