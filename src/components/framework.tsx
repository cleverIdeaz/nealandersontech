"use client";

import { motion } from "framer-motion";
import { Code, Layers, Users, Zap, Shield, Globe } from "lucide-react";

const frameworkFeatures = [
  {
    title: "Floating Card System",
    description: "3D card-based navigation with gesture controls",
    icon: Layers,
    status: "Available"
  },
  {
    title: "Space Theme Engine",
    description: "Customizable space backgrounds and animations",
    icon: Globe,
    status: "Available"
  },
  {
    title: "Responsive Design",
    description: "Adapts to all screen sizes and orientations",
    icon: Zap,
    status: "Available"
  },
  {
    title: "Community Integration",
    description: "Built-in social features and user management",
    icon: Users,
    status: "Coming Soon"
  },
  {
    title: "API Framework",
    description: "RESTful APIs with authentication and rate limiting",
    icon: Code,
    status: "In Development"
  },
  {
    title: "Security Layer",
    description: "Enterprise-grade security and privacy controls",
    icon: Shield,
    status: "Planned"
  }
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$99/month",
    description: "Perfect for individual developers",
    features: [
      "Floating Card System",
      "Space Theme Engine",
      "Basic Responsive Design",
      "Community Support",
      "5 Projects"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$299/month",
    description: "Ideal for growing teams",
    features: [
      "Everything in Starter",
      "Advanced Animations",
      "Custom Themes",
      "Priority Support",
      "Unlimited Projects",
      "API Access"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Professional",
      "White-label Solution",
      "Custom Development",
      "Dedicated Support",
      "On-premise Deployment",
      "SLA Guarantee"
    ],
    popular: false
  }
];

export function Framework() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold text-white mb-2">App Framework</h2>
        <p className="text-gray-400 mb-4">
          Build the future of web interfaces with our floating card framework
        </p>
        <div className="inline-flex items-center space-x-2 bg-cyan-400/20 text-cyan-300 px-4 py-2 rounded-lg">
          <span className="text-sm">Powered by</span>
          <span className="font-bold">Retronyms Community</span>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {frameworkFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-lg p-4 border border-cyan-400/20"
            >
              <div className="flex items-start space-x-3">
                <Icon className="w-6 h-6 text-cyan-400 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold">{feature.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${
                      feature.status === 'Available' 
                        ? 'bg-green-400/20 text-green-300' 
                        : feature.status === 'In Development'
                        ? 'bg-yellow-400/20 text-yellow-300'
                        : 'bg-gray-400/20 text-gray-300'
                    }`}>
                      {feature.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pricing Tiers */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-cyan-400">Pricing Tiers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className={`relative rounded-lg p-6 ${
                tier.popular 
                  ? 'bg-gradient-to-br from-cyan-400/20 to-blue-400/20 border-2 border-cyan-400/50' 
                  : 'bg-gray-800/50 border border-cyan-400/20'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-white">{tier.name}</h4>
                <div className="text-3xl font-bold text-cyan-400 mt-2">{tier.price}</div>
                <p className="text-sm text-gray-400 mt-1">{tier.description}</p>
              </div>
              
              <ul className="space-y-2 mb-6">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                tier.popular
                  ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}>
                {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Community Integration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="bg-gradient-to-r from-purple-400/10 to-cyan-400/10 rounded-lg p-6 border border-purple-400/20"
      >
        <h3 className="text-lg font-semibold text-white mb-3">Community Integration</h3>
        <p className="text-gray-400 mb-4">
          Join our exclusive community of developers building the next generation of web interfaces. 
          Get early access to new features, participate in beta testing, and connect with like-minded creators.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-purple-400/20 text-purple-300 px-3 py-1 rounded-full text-sm">
            Early Access
          </span>
          <span className="bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
            Beta Testing
          </span>
          <span className="bg-green-400/20 text-green-300 px-3 py-1 rounded-full text-sm">
            Community Support
          </span>
        </div>
      </motion.div>
    </div>
  );
}
