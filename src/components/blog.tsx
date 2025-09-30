"use client";

const blogPosts = [
  {
    title: "The Future of Interactive Audio",
    excerpt: "Exploring how Web Audio API is revolutionizing music creation and performance in the browser.",
    date: "2024",
    readTime: "5 min read",
    featured: true,
  },
  {
    title: "Building Immersive Museum Experiences",
    excerpt: "Lessons learned from creating touch-free audio systems during the pandemic.",
    date: "2023",
    readTime: "7 min read",
    featured: true,
  },
  {
    title: "From Code to Composition",
    excerpt: "How programming skills enhance creative musical expression and technical implementation.",
    date: "2023",
    readTime: "4 min read",
    featured: false,
  }
];

export function Blog() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-light text-white mb-8">
        Writing
      </h1>
        
      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
        Thoughts on technology, creativity, and the intersection of code and art. 
        I write about my experiences building interactive systems and exploring new ways 
        to blend technical expertise with creative expression.
      </p>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <div key={post.title} className="border-b border-white/10 pb-6 last:border-b-0">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-medium text-white">
                {post.title}
              </h3>
              <div className="text-right text-sm text-gray-400">
                <div>{post.date}</div>
                <div>{post.readTime}</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-3">
              {post.excerpt}
            </p>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors text-sm"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}