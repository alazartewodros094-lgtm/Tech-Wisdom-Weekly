import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { cn } from '../lib/utils';
import { Menu, X, Cpu } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const { user, signInWithGoogle, logout } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Weekly Content', path: '/weekly' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#05060B]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center rotate-12 shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 group-hover:rotate-0">
              <span className="font-bold text-xl -rotate-12 group-hover:rotate-0 transition-all duration-300 text-white">W</span>
            </div>
            <span className="font-sans font-bold text-xl tracking-tight text-white group-hover:neon-text-purple transition-all duration-300">
              Tech Wisdom <span className="text-purple-500">Weekly</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-purple-400',
                  location.pathname === link.path ? 'text-white' : 'text-white/70'
                )}
              >
                {link.name}
              </Link>
            ))}
            
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-white/70">{user.displayName}</span>
                <button
                  onClick={logout}
                  className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all text-sm font-medium"
                >
                  Log out
                </button>
              </div>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="px-6 py-2.5 bg-purple-600 rounded-full hover:bg-purple-500 text-white text-sm font-medium shadow-lg shadow-purple-900/20 hover:shadow-purple-600/30 transition-all"
              >
                Sign In
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white/70 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#05060B] border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  location.pathname === link.path
                    ? 'bg-purple-600 text-white'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
            {user ? (
               <button
                 onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                 className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white/70 hover:bg-white/10 hover:text-white"
               >
                 Log out
               </button>
            ) : (
               <button
                 onClick={() => { signInWithGoogle(); setIsMobileMenuOpen(false); }}
                 className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-purple-400 hover:bg-white/10 hover:text-purple-300"
               >
                 Sign In
               </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
