"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-24 pb-20 px-6 text-center min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white mb-8 tracking-tight">
          Neal Anderson
        </h1>
        
        <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-10 font-light">
          Musician • Maker • Builder
        </p>
        
        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto mb-16">
          Creative technologist crafting digital experiences at the intersection of music, art, and technology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/projects"
            className="px-10 py-4 bg-white/10 text-white rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 text-lg font-medium"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="px-10 py-4 bg-transparent text-white rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300 text-lg font-medium"
          >
            Get In Touch
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Link href="/about" className="group">
            <div className="p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-lg font-medium text-white mb-2 group-hover:text-gray-300">About</h3>
              <p className="text-sm text-gray-400">My story</p>
            </div>
          </Link>
          <Link href="/projects" className="group">
            <div className="p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-lg font-medium text-white mb-2 group-hover:text-gray-300">Projects</h3>
              <p className="text-sm text-gray-400">My work</p>
            </div>
          </Link>
          <Link href="/music" className="group">
            <div className="p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-lg font-medium text-white mb-2 group-hover:text-gray-300">Music</h3>
              <p className="text-sm text-gray-400">My sound</p>
            </div>
          </Link>
          <Link href="/contact" className="group">
            <div className="p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-lg font-medium text-white mb-2 group-hover:text-gray-300">Contact</h3>
              <p className="text-sm text-gray-400">Let&apos;s talk</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
