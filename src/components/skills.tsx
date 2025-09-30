"use client";

const skillCategories = [
  {
    title: "Programming & Development",
    skills: [
      "JavaScript/TypeScript",
      "Python",
      "SQL",
      "HTML/CSS",
      "Command Line",
      "React/Next.js",
      "Node.js",
      "Vue.js"
    ]
  },
  {
    title: "Creative Technology",
    skills: [
      "Max/MSP",
      "Web Audio API",
      "TouchDesigner",
      "MadMapper",
      "Arduino",
      "Raspberry Pi",
      "Audio Processing",
      "Interactive Design"
    ]
  },
  {
    title: "Project Management",
    skills: [
      "Agile/Scrum",
      "Client Relations",
      "Technical Writing",
      "Quality Assurance",
      "Training Development",
      "Process Improvement",
      "Team Leadership",
      "Risk Management"
    ]
  },
  {
    title: "Cloud & Enterprise",
    skills: [
      "AWS",
      "Azure",
      "GCP",
      "Power Apps",
      "SharePoint 365",
      "Copilot Studio",
      "ServiceNow",
      "ConnectWise"
    ]
  }
];

export function Skills() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-light text-white mb-8">
        Skills
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-12">
        A diverse toolkit spanning programming, creative technology, and project management
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-4">
            <h3 className="text-xl font-medium text-white mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}