import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Courses } from './pages/Courses';
import { CourseDetail } from './pages/CourseDetail';
import { WeeklyContent } from './pages/WeeklyContent';
import { About } from './pages/About';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/weekly" element={<WeeklyContent />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
