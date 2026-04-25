import { blogPosts } from '../store/data';

export function WeeklyContent() {
  return (
    <div className="flex flex-col min-h-screen bg-[#05060B] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Weekly Content</h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Stay up to date with the latest tools, tips, and strategies for making money online through code, content, and tech.
          </p>
        </div>

        <div className="space-y-12">
          {blogPosts.map(post => (
            <article key={post.id} className="group grid grid-cols-1 md:grid-cols-5 gap-8 items-center bg-white/5 border border-white/10 rounded-3xl p-4 hover:border-purple-500/40 transition-colors">
              <div className="md:col-span-2 overflow-hidden rounded-2xl aspect-[4/3] md:aspect-auto md:h-full w-full">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="md:col-span-3 py-4 md:pr-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-medium text-purple-400 uppercase tracking-wider">Weekly Tip</span>
                  <span className="text-xs text-white/30">{post.date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-white/50 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="text-white font-medium hover:text-purple-400 transition-colors flex items-center text-sm uppercase tracking-wide">
                  Read Article <span className="ml-2">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
