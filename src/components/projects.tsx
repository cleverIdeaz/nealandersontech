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
    <section id="projects">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-serif text-gray-900 dark:text-white mb-8">
          Projects
        </h2>

        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.title} className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-b-0">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-serif text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded">
                    Featured
                  </span>
                )}
              </div>

              <p className="text-lg font-serif text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded"
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
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  View Project →
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
