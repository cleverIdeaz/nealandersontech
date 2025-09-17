"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Core Development",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-700 dark:text-blue-300",
    skills: [
      "JavaScript/TypeScript",
      "React/Next.js",
      "Vue.js/Nuxt.js",
      "Node.js/Express",
      "Python/Django",
      "HTML5/CSS3",
      "RESTful APIs",
      "GraphQL"
    ]
  },
  {
    title: "Cloud & Infrastructure",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    textColor: "text-green-700 dark:text-green-300",
    skills: [
      "AWS (EC2, S3, Lambda)",
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "Microservices",
      "Serverless Architecture",
      "Database Design",
      "Redis/MongoDB",
      "PostgreSQL/MySQL"
    ]
  },
  {
    title: "Creative Technology",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-700 dark:text-purple-300",
    skills: [
      "Three.js/WebGL",
      "AR/VR Development",
      "Interactive Installations",
      "Creative Coding",
      "Motion Graphics",
      "Web Audio API",
      "Canvas/SVG",
      "Unity/C#"
    ]
  },
  {
    title: "Soft Skills",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    textColor: "text-orange-700 dark:text-orange-300",
    skills: [
      "Team Leadership",
      "Mentoring",
      "Project Management",
      "Client Relations",
      "Problem Solving",
      "Communication",
      "Agile/Scrum",
      "Code Review"
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit spanning from core development to creative technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                  <span className="text-white font-bold text-lg">
                    {category.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    className={`px-4 py-2 ${category.bgColor} ${category.textColor} rounded-lg text-sm font-medium text-center hover:scale-105 transition-transform duration-200`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I&apos;m always exploring new technologies and methodologies to stay at the forefront of web development. 
              Currently diving deep into AI/ML integration, WebAssembly, and advanced performance optimization techniques.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium">
                Always Learning
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-sm font-medium">
                Open Source Contributor
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium">
                Community Speaker
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
