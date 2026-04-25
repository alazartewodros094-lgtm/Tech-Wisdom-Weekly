import { useParams, Link } from 'react-router-dom';
import { courses } from '../store/data';
import { Clock, PlayCircle, BookOpen, CheckCircle, X, CreditCard } from 'lucide-react';
import { useState } from 'react';

export function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);
  const [enrolled, setEnrolled] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  if (!course) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Course not found</h2>
        <Link to="/courses" className="text-blue-400 hover:underline">Return to courses</Link>
      </div>
    );
  }

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCheckout(false);
    setEnrolled(true);
  };

  return (
    <div className="bg-[#05060B] pt-8 pb-20 relative">
      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05060B]/80 backdrop-blur-sm">
          <div className="bg-white/5 border border-white/10 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300">
             <button 
               onClick={() => setShowCheckout(false)}
               className="absolute top-4 right-4 text-white/50 hover:text-white"
             >
               <X className="w-5 h-5" />
             </button>
             <div className="p-6 md:p-8">
               <h3 className="text-2xl font-display font-bold text-white mb-2">Checkout</h3>
               <p className="text-white/50 text-sm mb-6 pb-6 border-b border-white/10">
                 Complete your purchase for "{course.title}"
               </p>
               <div className="text-3xl font-display font-bold text-white mb-6">
                 ${course.price}
               </div>

               <form onSubmit={handleCheckoutSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1">Email Address</label>
                      <input required type="email" placeholder="you@example.com" className="w-full bg-[#05060B] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-1">Card Information</label>
                      <div className="relative">
                        <input required type="text" placeholder="1234 5678 9101 1121" className="w-full bg-[#05060B] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" />
                        <CreditCard className="absolute left-4 top-3.5 w-5 h-5 text-white/50" />
                      </div>
                    </div>
                 </div>
                 
                 <button type="submit" className="w-full mt-8 px-6 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl flex items-center justify-center transition-colors shadow-lg shadow-purple-900/20">
                   Pay ${course.price}
                 </button>
               </form>
             </div>
          </div>
        </div>
      )}

      {/* Course Hero */}
      <div className="bg-white/5 border-b border-white/10 pt-16 pb-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-purple-400 font-medium tracking-widest text-sm uppercase mb-4 py-1 px-3 border border-purple-400/30 rounded-full inline-block bg-purple-500/10">
                {course.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                {course.title}
              </h1>
              <p className="text-lg text-white/50 mb-8 max-w-lg">
                {course.description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
                <div className="text-3xl font-display font-bold text-white">
                  ${course.price}
                </div>
                {!enrolled ? (
                  <button 
                    onClick={() => setShowCheckout(true)}
                    className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-purple-900/20 hover:shadow-purple-600/30"
                  >
                    Enroll Now
                  </button>
                ) : (
                  <button className="w-full sm:w-auto px-8 py-4 bg-emerald-600 cursor-default text-white font-semibold rounded-xl flex items-center justify-center">
                    <CheckCircle className="mr-2 w-5 h-5" /> Enrolled
                  </button>
                )}
              </div>
              
              <div className="flex gap-6 text-sm text-white/50">
                <span className="flex items-center"><BookOpen className="w-4 h-4 mr-2"/> {course.lessons.length} lessons</span>
                <span className="flex items-center"><Clock className="w-4 h-4 mr-2"/> Self-paced</span>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-2xl">
              <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group cursor-pointer">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <PlayCircle className="w-10 h-10 text-white ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="col-span-1 lg:col-span-2">
              <h2 className="text-2xl font-display font-bold mb-6">Course Curriculum</h2>
              <div className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
                {course.lessons.map((lesson, idx) => (
                  <div key={idx} className={`p-6 flex items-center justify-between ${idx !== course.lessons.length - 1 ? 'border-b border-white/5' : ''}`}>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/50 font-medium text-sm">
                         {idx + 1}
                       </div>
                       <div className="font-medium text-white">{lesson.title}</div>
                    </div>
                    <div className="text-sm text-white/30 font-mono tracking-wider">
                      {lesson.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="col-span-1">
              <div className="bg-white/5 border border-white/5 rounded-2xl p-6 sticky top-24">
                 <h3 className="text-lg font-bold mb-4 border-b border-white/10 pb-4">What's Included</h3>
                 <ul className="space-y-4">
                   <li className="flex items-start">
                     <CheckCircle className="w-5 h-5 text-purple-500 mr-3 shrink-0 mt-0.5" />
                     <span className="text-white/70 text-sm">Full lifetime access to course materials</span>
                   </li>
                   <li className="flex items-start">
                     <CheckCircle className="w-5 h-5 text-purple-500 mr-3 shrink-0 mt-0.5" />
                     <span className="text-white/70 text-sm">Access on mobile and desktop</span>
                   </li>
                   <li className="flex items-start">
                     <CheckCircle className="w-5 h-5 text-purple-500 mr-3 shrink-0 mt-0.5" />
                     <span className="text-white/70 text-sm">Certificate of completion</span>
                   </li>
                   <li className="flex items-start">
                     <CheckCircle className="w-5 h-5 text-purple-500 mr-3 shrink-0 mt-0.5" />
                     <span className="text-white/70 text-sm">30-Day Money-Back Guarantee</span>
                   </li>
                 </ul>
              </div>
            </div>
         </div>
      </div>
    </div>
  );
}
