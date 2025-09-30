"use client";

const projects = [
  {
    title: "KeyLink",
    description: "Zero-config music data sync for Max, browser, and more. Seamlessly synchronizes music data across different platforms and environments with minimal setup required.",
    tech: ["Max/MSP", "Web Audio API", "Data Sync", "Netlify"],
    demo: "https://key-link.netlify.app/",
    github: "https://github.com/cleverIdeaz/KeyLink",
    featured: true,
  },
  {
    title: "Recipe Flower",
    description: "Culinary platform offering a diverse collection of recipes across various cuisines. Designed for food enthusiasts to discover and share cooking inspiration.",
    tech: ["Web Platform", "Recipe Management"],
    demo: "https://recipeflower.com/",
    github: "https://github.com/cleverIdeaz",
    featured: true,
  },
  {
    title: "The Sensory Stack",
    description: "Comprehensive resource hub for sensory processing support. Features play activities for regulation, educational materials, gear recommendations, and professional help directories.",
    tech: ["Resource Platform", "Educational Content"],
    demo: "https://thesensorystack.com/",
    github: "https://github.com/cleverIdeaz",
    featured: true,
  },
  {
    title: "Whole Momma Wellness",
    description: "Client project: Wellness service platform led by Madison Mellencamp, offering doula services, prenatal yoga, and Reiki sessions in Indianapolis.",
    tech: ["Wellness Platform", "Client Services"],
    demo: "https://wholemommawellness.com/",
    github: "https://github.com/cleverIdeaz",
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="simple-card p-8 md:p-12">
      <h2 className="text-4xl font-light text-white mb-8">
        Projects
      </h2>

      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.title} className="border-b border-white/10 pb-6 last:border-b-0">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-light text-white">
                {project.title}
              </h3>
              {project.featured && (
                <span className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20">
                  Featured
                </span>
              )}
            </div>

            <p className="text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex space-x-6">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                View Project →
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
