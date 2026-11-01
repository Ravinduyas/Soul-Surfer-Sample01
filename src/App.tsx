import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { CallbackModal } from './components/CallbackModal';
import { LessonDetailModal } from './components/LessonDetailModal';
import { SurfAdvisorModal } from './components/SurfAdvisorModal';
import { HomePage } from './pages/HomePage';
import { LessonsPage } from './pages/LessonsPage';
import { CampsPage } from './pages/CampsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ModalContext, ModalActions } from './context/ModalContext';
import { Lesson } from './types';
import { LESSONS } from './data/surfData';

const PAGE_TITLES: Record<string, string> = {
  '/': 'BRAVE Surf School - Learn to Surf in Weligama',
  '/lessons': 'Surf Lessons & Timetable - BRAVE Surf School',
  '/camps': 'Surf Camps & Trips - BRAVE Surf School',
  '/about': 'About Us - BRAVE Surf School',
  '/contact': 'Contact - BRAVE Surf School',
};

// On every page change: update the tab title, then scroll to the #section in the link or to the top
const RouteEffects: React.FC = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = PAGE_TITLES[pathname] ?? 'BRAVE Surf School';
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);

  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [preselectedItem, setPreselectedItem] = useState<string>(LESSONS[0].name);

  const modalActions = useMemo<ModalActions>(() => ({
    openBooking: (item?: string) => {
      if (item) setPreselectedItem(item);
      setIsBookingOpen(true);
    },
    openLessonDetail: (lesson: Lesson) => setSelectedLesson(lesson),
    openCallback: () => setIsCallbackOpen(true),
    openAdvisor: () => setIsAdvisorOpen(true),
  }), []);

  const handleSelectRecommendedLesson = (lessonName: string) => {
    const found = LESSONS.find(
      (l) => l.name.toLowerCase().includes(lessonName.toLowerCase()) ||
        lessonName.toLowerCase().includes(l.name.toLowerCase())
    );
    if (found) {
      setSelectedLesson(found);
    } else {
      modalActions.openBooking(lessonName);
    }
  };

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ModalContext.Provider value={modalActions}>
        <RouteEffects />
        <div className="min-h-screen bg-[#e9e2d4] text-[#3d372e] font-sans-body p-2 sm:p-4 md:p-6 lg:p-8 selection:bg-[#586857] selection:text-white">
          {/* MAIN CANVAS CONTAINER */}
          <div className="max-w-[1440px] mx-auto space-y-4 sm:space-y-6">
            <Header />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/lessons" element={<LessonsPage />} />
              <Route path="/camps" element={<CampsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>

            <Footer />
          </div>

          {/* MODAL DIALOGS: mounted only while open so each opening starts fresh */}
          {isBookingOpen && (
            <BookingModal
              onClose={() => setIsBookingOpen(false)}
              preselectedItem={preselectedItem}
            />
          )}

          {isCallbackOpen && <CallbackModal onClose={() => setIsCallbackOpen(false)} />}

          {selectedLesson && (
            <LessonDetailModal
              lesson={selectedLesson}
              onClose={() => setSelectedLesson(null)}
              onBook={(lesson) => modalActions.openBooking(lesson.name)}
            />
          )}

          {isAdvisorOpen && (
            <SurfAdvisorModal
              onClose={() => setIsAdvisorOpen(false)}
              onSelectRecommendedLesson={handleSelectRecommendedLesson}
            />
          )}
        </div>
      </ModalContext.Provider>
    </BrowserRouter>
  );
}
