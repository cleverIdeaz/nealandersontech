"use client";

const experiences = [
  {
    title: "Senior Project Coordinator / Senior Service Technician",
    company: "Insight Direct",
    location: "Remote",
    period: "Sep 2021 - Current",
    description: "Managing mapping, scheduling, scope, and deliverables for multi-site assessments and deployments. Serving as primary liaison between clients, installers, and internal teams.",
    achievements: [
      "Ensured on-time, on-budget execution with regular client updates",
      "Developed training tools (Power Apps, Figma guides, videos) for streamlined onboarding",
      "Delivered advanced technical support for IT infrastructure across franchise locations",
      "Maintained project momentum and mitigated risks through effective communication"
    ],
    tech: ["Power Apps", "Figma", "IT Infrastructure", "Project Management", "Client Relations"]
  },
  {
    title: "Art Preparator & AV Technician",
    company: "Newfields",
    location: "Indianapolis, IN",
    period: "Jan 2020 - Oct 2021",
    description: "Installed high-profile art pieces, programmed AV automation schedules, and configured projection mapping experiences for museum exhibitions.",
    achievements: [
      "Developed touch-free audio playback system during COVID-19 outbreak",
      "Enhanced visitor experience while minimizing touch points",
      "Seamlessly executed museum exhibitions with technical precision",
      "Collaborated with curators on interactive installations"
    ],
    tech: ["Projection Mapping", "AV Automation", "MadMapper", "Audio Systems", "Interactive Design"]
  },
  {
    title: "Technical Support Installer",
    company: "Creative Works",
    location: "Indianapolis, IN",
    period: "May 2018 - Dec 2019",
    description: "Installed arcade virtual reality client/server systems and conducted low-voltage component installations for laser tag and mini-golf courses.",
    achievements: [
      "Custom sound design and lighting design for immersive experiences",
      "Ensured smooth operations and customer satisfaction",
      "Delivered engaging laser tag course experiences",
      "Maintained complex VR and gaming systems"
    ],
    tech: ["VR Systems", "Low Voltage", "Sound Design", "Lighting Design", "Customer Service"]
  },
  {
    title: "Freelance Content Provider, QA Test Engineer",
    company: "Various Clients",
    location: "Remote",
    period: "2017 - 2018",
    description: "Provided technical writing, content creation, and quality assurance testing for various clients in the technology and education sectors.",
    achievements: [
      "Created comprehensive technical documentation",
      "Conducted thorough QA testing for web applications",
      "Delivered high-quality content on tight deadlines",
      "Maintained client relationships and project standards"
    ],
    tech: ["Technical Writing", "QA Testing", "Content Creation", "Project Management"]
  }
];

export function Experience() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-light text-white mb-8">
        Experience
      </h1>
      
      <p className="text-xl text-gray-300 mb-12 leading-relaxed">
        A journey through creative technology, from academic research to enterprise solutions
      </p>

      <div className="space-y-12">
        {experiences.map((exp) => (
          <div key={exp.title} className="border-b border-white/10 pb-8 last:border-b-0">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-light text-white">
                {exp.title}
              </h2>
              <span className="text-gray-400 text-sm">
                {exp.period}
              </span>
            </div>

            <p className="text-lg text-gray-300 mb-2">
              {exp.company} • {exp.location}
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {exp.description}
            </p>

            <div className="mb-6">
              <h3 className="text-sm font-medium text-white mb-3">Key Achievements:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                {exp.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}