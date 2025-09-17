"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Insight Direct",
    location: "Remote",
    period: "2022 - Present",
    description: "Leading development of enterprise-scale applications using modern web technologies. Mentoring junior developers and architecting cloud-native solutions.",
    achievements: [
      "Architected microservices infrastructure serving 100k+ users",
      "Reduced application load time by 40% through performance optimization",
      "Led team of 5 developers in agile environment",
      "Implemented CI/CD pipelines reducing deployment time by 60%"
    ],
    tech: ["React", "Node.js", "AWS", "Docker", "Kubernetes", "PostgreSQL"]
  },
  {
    title: "Creative Technologist",
    company: "Newfields",
    location: "Indianapolis, IN",
    period: "2020 - 2022",
    description: "Developed interactive digital experiences for museum exhibitions and educational programs. Bridged the gap between art and technology.",
    achievements: [
      "Created immersive AR experiences for art exhibitions",
      "Built interactive learning platforms for 50k+ visitors annually",
      "Collaborated with artists and curators on digital installations",
      "Developed mobile app with 4.8/5 App Store rating"
    ],
    tech: ["React Native", "Three.js", "WebGL", "ARCore", "Firebase", "Unity"]
  },
  {
    title: "Frontend Developer",
    company: "Creative Works",
    location: "Indianapolis, IN",
    period: "2018 - 2020",
    description: "Specialized in creating beautiful, responsive web applications for creative agencies and small businesses. Focus on user experience and modern design.",
    achievements: [
      "Delivered 20+ client projects with 100% satisfaction rate",
      "Increased client website conversion rates by 35% on average",
      "Established design system used across all client projects",
      "Mentored 2 junior developers"
    ],
    tech: ["Vue.js", "Sass", "Webpack", "Figma", "WordPress", "Shopify"]
  },
  {
    title: "Junior Web Developer",
    company: "TechStart Solutions",
    location: "Indianapolis, IN",
    period: "2017 - 2018",
    description: "Started my professional journey building websites and web applications for local businesses. Learned the fundamentals of web development and client relations.",
    achievements: [
      "Built 15+ responsive websites from scratch",
      "Learned modern JavaScript frameworks and tools",
      "Gained experience with version control and deployment",
      "Developed strong problem-solving and communication skills"
    ],
    tech: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "MySQL"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
