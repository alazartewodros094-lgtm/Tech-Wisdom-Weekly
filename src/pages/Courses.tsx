import { courses } from '../store/data';
import { CourseCard } from '../components/CourseCard';

export function Courses() {
  return (
    <div className="flex flex-col min-h-screen bg-[#05060B] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">All Courses</h1>
          <p className="text-lg text-white/50 max-w-2xl">
            Upgrade your skills with our practical, easy-to-follow courses designed to help you succeed in the digital economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
