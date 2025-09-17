"use client";

import { motion } from "framer-motion";

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
      "Ableton Live",
      "MIDI",
      "DMX Lighting",
      "Projection Mapping",
      "MadMapper",
      "Unity",
      "Wwise"
    ]
  },
  {
    title: "Design & Visualization",
    skills: [
      "Figma",
      "Cinema 4D",
      "Rhino",
      "Adobe Suite",
      "Photoshop",
      "Illustrator",
      "After Effects",
      "Premiere Pro"
    ]
  },
  {
    title: "IoT & Hardware",
    skills: [
      "Arduino",
      "Raspberry Pi",
      "Particle",
      "Low Voltage Systems",
      "AVoIP",
      "ProTools",
      "Reaper",
      "Modul8"
    ]
  },
  {
    title: "Cloud & Infrastructure",
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
  },
  {
    title: "Project Management",
    skills: [
      "Scrum Master (PSM I)",
      "Project Coordination",
      "Client Relations",
      "Technical Writing",
      "Training & Development",
      "Notion",
      "Airtable",
      "Jira"
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-8">
            Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A diverse toolkit spanning programming, creative technology, and project management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    className="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-6 text-center">
              Education & Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Education</h4>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <p><strong>IUPUI</strong> - M.S. in Music Technology (2015-2017)</p>
                  <p><strong>Indiana University</strong> - B.S. in Informatics (2010-2015)</p>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Certifications</h4>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <p><strong>Professional Scrum Master I</strong> - Scrum.org</p>
                  <p><strong>Security & Networking</strong> - DMP, CMS, ELK</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
