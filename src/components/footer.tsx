"use client";

import { Github, Linkedin, Mail, Heart, Copy, Check } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [copiedLinks, setCopiedLinks] = useState<Set<string>>(new Set());

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/cleverIdeaz",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/neal-anderson-tech/",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:neal.anderson.tech@gmail.com",
      icon: Mail,
    },
  ];

  const quickLinks = [
    { name: "About", tab: "about" },
    { name: "Projects", tab: "projects" },
    { name: "Experience", tab: "experience" },
    { name: "Skills", tab: "skills" },
    { name: "Music", tab: "music" },
    { name: "Writing", tab: "blog" },
    { name: "Contact", tab: "contact" },
  ];

  const copyToClipboard = async (text: string, linkName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedLinks(prev => new Set(prev).add(linkName));
      setTimeout(() => {
        setCopiedLinks(prev => {
          const newSet = new Set(prev);
          newSet.delete(linkName);
          return newSet;
        });
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const getCurrentUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.origin;
    }
    return 'https://nealanderson.netlify.app';
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Neal Anderson</h3>
            <p className="text-gray-400 mb-6">
              Musician • Maker • Builder
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => {
                const url = `${getCurrentUrl()}/#${link.tab}`;
                const isCopied = copiedLinks.has(link.tab);
                
                return (
                  <li key={link.name} className="flex items-center justify-between group">
                    <button
                      onClick={() => {
                        // Dispatch custom event to switch tabs
                        window.dispatchEvent(new CustomEvent('switchTab', { detail: link.tab }));
                      }}
                      className="text-gray-400 hover:text-white transition-colors text-left flex-1"
                    >
                      {link.name}
                    </button>
                    <button
                      onClick={() => copyToClipboard(url, link.tab)}
                      className="ml-2 p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-700 rounded"
                      title={`Copy ${link.name} link`}
                    >
                      {isCopied ? (
                        <Check className="h-3 w-3 text-green-400" />
                      ) : (
                        <Copy className="h-3 w-3 text-gray-400 hover:text-white" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>neal.anderson.tech@gmail.com</p>
              <p>317.646.1975</p>
              <p>Indianapolis, IN</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Neal Anderson
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 Neal Anderson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}