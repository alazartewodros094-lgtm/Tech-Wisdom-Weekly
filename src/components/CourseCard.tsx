import { Link } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';

interface CourseCardProps {
  key?: string | number;
  course: {
    id: string;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    category: string;
    lessons?: any[];
  }
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 flex flex-col h-full">
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 border border-white/20 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
          <span className="text-xs font-medium text-purple-300 uppercase tracking-wider">{course.category}</span>
        </div>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <PlayCircle className="w-16 h-16 text-white opacity-80" />
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-display font-semibold text-white mb-2 leading-tight group-hover:text-purple-400 transition-colors">
          {course.title}
        </h3>
        <p className="text-white/50 text-sm mb-6 flex-grow">
          {course.description}
        </p>
        
        <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-2xl font-bold font-display text-white">
            ${course.price}
          </span>
          <Link 
            to={`/course/${course.id}`}
            className="px-5 py-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-xl transition-colors shadow-lg shadow-purple-900/20 hover:shadow-purple-600/30"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
