import { Link } from 'react-router-dom';
import { courses } from '../store/data';
import { CourseCard } from '../components/CourseCard';
import { ArrowRight, Video, MonitorPlay, Sparkles, Megaphone } from 'lucide-react';
import { cn } from '../lib/utils';

export function Home() {
  const featuredCourses = courses.slice(0, 3);
  
  const categories = [
    { name: 'Video Editing', icon: Video, color: 'text-purple-400' },
    { name: 'Basic Computer Skills', icon: MonitorPlay, color: 'text-blue-400' },
    { name: 'AI Tools', icon: Sparkles, color: 'text-fuchsia-400' },
    { name: 'Content Creation', icon: Megaphone, color: 'text-emerald-400' }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden items-center justify-center flex flex-col">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-[1.1]">
            Learn Tech Skills <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              That Actually Pay
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-white/50 mb-10 leading-relaxed font-light">
            Master digital skills and start earning online. Beginner-friendly courses designed for the modern creator economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/courses" 
              className="px-8 py-4 bg-purple-600 rounded-xl font-bold text-lg hover:bg-purple-500 transition-all transform hover:-translate-y-1 shadow-2xl shadow-purple-600/30 text-white flex items-center"
            >
              Browse Courses
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/about" 
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-all text-white flex items-center"
            >
              Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses Segment */}
      <section className="py-20 bg-[#05060B] border-t border-b border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Courses</h2>
              <p className="text-white/50">Start your journey with our top-rated programs.</p>
            </div>
            <Link to="/courses" className="hidden border border-white/20 rounded-full px-4 py-2 text-sm font-medium hover:bg-white/5 transition-colors text-purple-400 md:flex items-center">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-[#05060B] border-b border-white/5 relative z-10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Explore by Category</h2>
            <p className="text-white/50 max-w-2xl mx-auto">Find the specific skills you need to advance your career or start a side hustle.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(category => (
              <Link key={category.name} to="/courses" className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/40 transition-all flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <category.icon className={cn("w-8 h-8", category.color)} />
                </div>
                <h3 className="text-lg font-semibold text-white">{category.name}</h3>
              </Link>
            ))}
          </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative z-10 bg-[#05060B] overflow-hidden">
        <div className="absolute -left-1/4 bottom-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">You're in good company</h2>
            <p className="text-white/50">Join thousands of students building their digital careers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "The Video Editing Mastery course completely transformed my channel. I'm now making steady income from YouTube.", author: "Sarah J.", role: "Content Creator" },
              { text: "I knew nothing about AI before. Now I use it every day to automate my freelance writing workflow. Highly recommend!", author: "David M.", role: "Freelance Writer" },
              { text: "Simple, practical, and right to the point. Tech Wisdom Weekly strips away the fluff and teaches exactly what you need.", author: "Elena R.", role: "Virtual Assistant" }
            ].map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/40 transition-colors">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Sparkles key={i} className="w-4 h-4 text-purple-500 fill-current" />)}
                </div>
                <p className="text-white/70 italic mb-6">"{t.text}"</p>
                <div>
                  <p className="text-white font-semibold">{t.author}</p>
                  <p className="text-white/50 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
