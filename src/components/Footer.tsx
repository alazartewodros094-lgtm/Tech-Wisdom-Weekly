import { Link } from 'react-router-dom';
import { Cpu, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#05060B] border-t border-white/10 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4 group inline-flex">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center rotate-12 shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 group-hover:rotate-0">
                <span className="font-bold text-lg -rotate-12 group-hover:rotate-0 transition-all duration-300 text-white">W</span>
              </div>
              <span className="font-sans font-bold text-lg tracking-tight text-white group-hover:neon-text-purple transition-all duration-300">
                Tech Wisdom <span className="text-purple-500">Weekly</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm max-w-sm mb-6">
              Master digital skills and start earning online. We teach practical tech skills for the modern creator economy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/50 hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-purple-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/50 hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Learn</h3>
            <ul className="space-y-3 shadow-none">
              <li>
                <Link to="/courses" className="text-sm text-white/50 hover:text-purple-400 transition-colors">All Courses</Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm text-white/50 hover:text-purple-400 transition-colors">Video Editing</Link>
              </li>
              <li>
                <Link to="/courses" className="text-sm text-white/50 hover:text-purple-400 transition-colors">AI Tools</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-white/50 hover:text-purple-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/weekly" className="text-sm text-white/50 hover:text-purple-400 transition-colors">Weekly Content</Link>
              </li>
              <li>
                <a href="#" className="text-sm text-white/50 hover:text-purple-400 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/50 hover:text-purple-400 transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Tech Wisdom Weekly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
