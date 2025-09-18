"use client";

import { MapPin } from "lucide-react";

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
    company: "Retronyms LLC",
    location: "Remote",
    period: "Aug 2015 - Aug 2020",
    description: "Created reproducible bug reports as QA test engineer and acted as metadata editor for original and third-party content.",
    achievements: [
      "Contributed to improving software quality and user experience",
      "Formatted audio loops to grow content library",
      "Liaised between original and third-party content creators",
      "Maintained high standards for audio content quality"
    ],
    tech: ["QA Testing", "Audio Production", "Content Management", "Bug Reporting", "Metadata"]
  },
  {
    title: "Freelance Technician, Programmer",
    company: "White Tree Creative Group",
    location: "Various US Locations",
    period: "Feb 2018 - Sep 2018",
    description: "Developed interactive software using Max (MSP), MadMapper, Arduino, and other peripherals for music festivals across the U.S.",
    achievements: [
      "Deployed interactive installations at 10+ music festivals",
      "Elevated festival experience for thousands of attendees",
      "Integrated multiple technologies for seamless experiences",
      "Created custom solutions for unique festival requirements"
    ],
    tech: ["Max/MSP", "MadMapper", "Arduino", "Twilio SMS", "Interactive Design"]
  },
  {
    title: "Graduate Research Assistant",
    company: "IUPUI",
    location: "Indianapolis, IN",
    period: "Aug 2015 - May 2017",
    description: "Conducted research and development of auto accompaniment and audio spatialization systems, resulting in published works and conference presentations.",
    achievements: [
      "Published 3 research works in international conferences",
      "Presented at NIME and ICMC conferences",
      "Developed innovative audio spatialization techniques",
      "Contributed to academic research in music technology"
    ],
    tech: ["Research", "Audio Spatialization", "Music Technology", "Academic Writing", "Conference Presentations"]
  }
];

export function Experience() {
  return (
    <section id="experience">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-serif text-gray-900 dark:text-white mb-6">
          Experience
        </h2>
        <p className="text-lg font-serif text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          A journey through creative technology, from academic research to enterprise solutions
        </p>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-serif text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                    <span className="font-medium">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    {exp.period}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Key Achievements
                </h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                      <span className="text-gray-400 mr-2 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
