"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const contactMethods = [
  {
    name: "Email",
    value: "neal.anderson.tech@gmail.com",
    href: "mailto:neal.anderson.tech@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/neal-anderson-tech",
    href: "https://www.linkedin.com/in/neal-anderson-tech/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    value: "github.com/cleverIdeaz",
    href: "https://github.com/cleverIdeaz",
    icon: Github,
  },
  {
    name: "Location",
    value: "Indianapolis, IN",
    href: "#",
    icon: MapPin,
  },
];

export function Contact() {
  return (
    <section id="contact" className="simple-card p-8 md:p-12">
      <h2 className="text-4xl font-light text-white mb-8">
        Contact
      </h2>
        
      <p className="text-lg text-gray-300 mb-12 leading-relaxed">
        Let&apos;s collaborate on something amazing. Whether you&apos;re looking for a creative technologist, 
        need help with an interactive project, or want to discuss the future of web experiences, 
        I&apos;d love to hear from you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-medium text-white mb-6">Get In Touch</h3>
          <div className="space-y-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.name}
                  href={method.href}
                  target={method.name === "Location" ? "_self" : "_blank"}
                  rel={method.name === "Location" ? "" : "noopener noreferrer"}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  <div>
                    <div className="font-medium">{method.name}</div>
                    <div className="text-sm">{method.value}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium text-white mb-6">Let&apos;s Work Together</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              I&apos;m always interested in new projects that combine technology with creativity. 
              From interactive installations to web applications, I bring a unique perspective 
              to every collaboration.
            </p>
            <p>
              Currently available for freelance projects and consulting opportunities. 
              Let&apos;s discuss how we can bring your ideas to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}