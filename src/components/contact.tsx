"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "neal.anderson.tech@gmail.com",
      href: "mailto:neal.anderson.tech@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "317.646.1975",
      href: "tel:+13176461975"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Indianapolis, IN",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-8">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s collaborate on your next creative technology project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
                <info.icon className="h-8 w-8 text-gray-600 dark:text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {info.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
            Available for Projects
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            I&apos;m currently available for freelance projects, creative collaborations, and full-time opportunities. 
            Whether you need web development, interactive installations, or creative technology solutions, let&apos;s discuss how we can work together.
          </p>
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Open to new opportunities</span>
          </div>
          <motion.a
            href="mailto:neal.anderson.tech@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="mr-2 h-4 w-4" />
            Start a Conversation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
