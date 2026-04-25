export function About() {
  return (
    <div className="bg-[#05060B] min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Our Mission</h1>
          <p className="text-xl text-purple-400 font-medium">
            Help beginners learn tech and earn money.
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-xl mb-12">
            <p className="text-white/70 leading-relaxed mb-6 font-light">
              We started <strong className="text-white font-semibold">Tech Wisdom Weekly</strong> because we saw a gap. Traditional education is slow, expensive, and often doesn't teach the practical skills needed to thrive in today's digital economy.
            </p>
            <p className="text-white/70 leading-relaxed mb-6 font-light">
              We believe that anyone, regardless of their background, can learn high-income skills like video editing, AI automation, and content creation. You don't need a four-year degree to make a living online; you just need the right tools, practical knowledge, and the determination to execute.
            </p>
            <p className="text-white/70 leading-relaxed font-light">
              Our courses are built differently. We strip away the theory and focus 100% on the actionable steps you need to get results. Whether you want to start a side hustle, land a freelance gig, or build your own audience, we're here to give you the exact blueprint to do it.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center mt-16">
            <div className="p-6">
              <div className="text-4xl font-display font-bold text-white mb-2">10k+</div>
              <div className="text-white/50">Active Students</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-display font-bold text-white mb-2">4.9/5</div>
              <div className="text-white/50">Average Rating</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
