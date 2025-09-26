"use client";

import { Music as MusicIcon, ExternalLink, Play } from "lucide-react";

const musicProjects = [
  {
    title: "SoundCloud Portfolio",
    description: "A collection of my musical experiments, electronic compositions, and creative audio projects. Features ambient soundscapes, experimental beats, and collaborative works.",
    platform: "SoundCloud",
    url: "https://soundcloud.com/nealium",
    icon: MusicIcon,
    featured: true,
  },
  {
    title: "Musical Storytime",
    description: "A cinematic storytelling project featuring family-friendly narratives paired with original music. Created one episode of 'Little Jeffy' - a captivating story about a character raised on a paradise planet, designed to engage both children and parents without overstimulation.",
    platform: "Spotify",
    url: "https://open.spotify.com/artist/38BnfTxJjICGF0ulMJ47JY",
    icon: Play,
    featured: true,
  },
];

export function Music() {
  return (
    <section id="music">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-serif text-gray-900 dark:text-white mb-6">
          Music & Audio
        </h2>
        
        <p className="text-lg font-serif text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Exploring the intersection of technology and creativity through sound. From experimental 
          electronic compositions to cinematic storytelling, music is where my technical skills 
          meet artistic expression.
        </p>

        <div className="space-y-8">
          {musicProjects.map((project) => (
            <div key={project.title} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-serif text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded">
                    Featured
                  </span>
                )}
              </div>

              <p className="text-lg font-serif text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center space-x-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
                >
                  <project.icon className="h-4 w-4 mr-2" />
                  Listen on {project.platform}
                  <ExternalLink className="h-3 w-3 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 className="text-xl font-serif text-gray-900 dark:text-white mb-3">
            Creative Process
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            My music production combines traditional composition techniques with modern technology. 
            I use tools like Max/MSP, Ableton Live, and various hardware synthesizers to create 
            immersive audio experiences. Whether it&apos;s ambient soundscapes or narrative-driven 
            compositions, each project explores new ways to connect technology with human emotion.
          </p>
        </div>
      </div>
    </section>
  );
}
