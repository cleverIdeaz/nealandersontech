"use client";

import { motion } from "framer-motion";
import { Code, Palette, Music, DollarSign, Clock, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Full-Stack Development",
    description: "Complete web applications from frontend to backend",
    price: "$150/hour",
    duration: "2-8 weeks",
    features: ["React/Next.js", "Node.js/Express", "Database Design", "API Development"],
    icon: Code
  },
  {
    title: "Creative Technology",
    description: "Interactive installations and digital art experiences",
    price: "$200/hour",
    duration: "1-4 weeks",
    features: ["WebGL/Three.js", "Audio Visualization", "Interactive Design", "Real-time Systems"],
    icon: Palette
  },
  {
    title: "Music Production",
    description: "Original compositions and sound design",
    price: "$100/hour",
    duration: "1-2 weeks",
    features: ["Original Music", "Sound Design", "Audio Mixing", "Custom Samples"],
    icon: Music
  },
  {
    title: "App Framework Development",
    description: "Custom frameworks and development tools",
    price: "$250/hour",
    duration: "4-12 weeks",
    features: ["SDK Development", "API Design", "Documentation", "Community Building"],
    icon: DollarSign
  }
];

const packages = [
  {
    name: "Starter Package",
    price: "$2,500",
    description: "Perfect for small projects",
    includes: [
      "Basic website/app",
      "Responsive design",
      "2 revisions",
      "1 week delivery"
    ]
  },
  {
    name: "Professional Package",
    price: "$5,000",
    description: "Ideal for growing businesses",
    includes: [
      "Full-stack application",
      "Custom design",
      "5 revisions",
      "2 weeks delivery",
      "Basic SEO"
    ]
  },
  {
    name: "Enterprise Package",
    price: "$10,000+",
    description: "Complete digital transformation",
    includes: [
      "Complex multi-platform app",
      "Advanced features",
      "Unlimited revisions",
      "4+ weeks delivery",
      "Full SEO optimization",
      "Ongoing support"
    ]
  }
];

export function Services() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-2">Services & Pricing</h2>
        <p className="text-gray-400">Professional development services tailored to your needs</p>
      </motion.div>

      {/* Individual Services */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-cyan-400 mb-4">Hourly Services</h3>
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-lg p-4 border border-cyan-400/20"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <Icon className="w-6 h-6 text-cyan-400" />
                  <div>
                    <h4 className="text-white font-semibold">{service.title}</h4>
                    <p className="text-sm text-gray-400">{service.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-cyan-400 font-bold">{service.price}</div>
                  <div className="text-xs text-gray-500">{service.duration}</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="text-xs bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Package Deals */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-cyan-400 mb-4">Package Deals</h3>
        <div className="grid grid-cols-1 gap-4">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-lg p-4 border border-cyan-400/30"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-white font-bold text-lg">{pkg.name}</h4>
                  <p className="text-gray-400 text-sm">{pkg.description}</p>
                </div>
                <div className="text-cyan-400 font-bold text-xl">{pkg.price}</div>
              </div>
              
              <div className="space-y-2">
                {pkg.includes.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-center pt-4"
      >
        <p className="text-gray-400 text-sm mb-2">
          Ready to start your project?
        </p>
        <a
          href="#contact"
          className="inline-flex items-center space-x-2 bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-300 px-4 py-2 rounded-lg transition-colors"
        >
          <span>Get Started</span>
        </a>
      </motion.div>
    </div>
  );
}
