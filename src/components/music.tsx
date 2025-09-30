"use client";

const musicProjects = [
  {
    title: "Ambient Soundscapes",
    description: "Experimental electronic compositions exploring the relationship between technology and emotion.",
    year: "2023",
    featured: true,
  },
  {
    title: "Interactive Audio Systems",
    description: "Real-time audio processing systems for museum installations and interactive experiences.",
    year: "2022",
    featured: true,
  },
  {
    title: "Cinematic Scores",
    description: "Original compositions for short films and multimedia projects.",
    year: "2021",
    featured: false,
  }
];

export function Music() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-light text-white mb-8">
        Music & Audio
      </h1>
        
      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
        Exploring the intersection of technology and creativity through sound. From experimental 
        electronic compositions to cinematic storytelling, music is where my technical skills 
        meet artistic expression.
      </p>

      <div className="space-y-6">
        {musicProjects.map((project) => (
          <div key={project.title} className="border-b border-white/10 pb-6 last:border-b-0">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-medium text-white">
                {project.title}
              </h3>
              <span className="text-gray-400 text-sm">
                {project.year}
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
        <h3 className="text-lg font-medium text-white mb-4">Production Tools</h3>
        <div className="flex flex-wrap gap-2">
          {["Max/MSP", "Ableton Live", "Logic Pro", "Arduino", "Web Audio API", "TouchDesigner"].map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}