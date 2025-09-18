"use client";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-serif text-gray-900 dark:text-white mb-4">
            Neal Anderson
          </h1>
          
          <p className="text-xl font-serif text-gray-700 dark:text-gray-300 mb-6">
            Musician • Maker • Builder
          </p>
          
          <p className="text-lg font-serif text-gray-600 dark:text-gray-400 leading-relaxed">
            Creative technologist crafting digital experiences at the intersection of music, art, and technology.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-80 h-80 bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
            <span className="text-6xl font-light text-gray-400 dark:text-gray-500">
              NA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
