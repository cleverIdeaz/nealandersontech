"use client";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 text-center min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-light text-white mb-8 tracking-tight">
          Neal Anderson
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-300 mb-10 font-light">
          Musician • Maker • Builder
        </p>
        
        <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-12">
          Creative technologist crafting digital experiences at the intersection of music, art, and technology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-white/10 text-white rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent text-white rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
