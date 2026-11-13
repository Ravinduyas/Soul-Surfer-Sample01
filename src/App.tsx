import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { PackageDetailModal } from './components/PackageDetailModal';
import { HomePage } from './pages/HomePage';
import { RatesPage } from './pages/RatesPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { CampPage } from './pages/CampPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ModalContext, ModalActions } from './context/ModalContext';
import { SurfPackage } from './types';
import { PACKAGES } from './data/surfData';
import { BLOG_POSTS } from './data/blogPosts';

const SITE = 'Soul Surfer Camp Weligama';

const PAGE_TITLES: Record<string, string> = {
  '/': 'Boutique Surf Camp Weligama, Sri Lanka | Soul Surfer Camp',
  '/rates': `Surf Packages, Rooms & Rates | ${SITE}`,
  '/activities': `Activities | ${SITE}`,
  '/camp': `Inside the Camp | ${SITE}`,
  '/blog': `Blog - Surfing Sri Lanka's South Coast | ${SITE}`,
  '/contact': `Contact & FAQ | ${SITE}`,
};

const titleFor = (pathname: string) => {
  if (PAGE_TITLES[pathname]) return PAGE_TITLES[pathname];
  const post = BLOG_POSTS.find((p) => pathname === `/blog/${p.slug}`);
  return post ? `${post.title} | ${SITE}` : SITE;
};

// On every page change: update the tab title, then scroll to the #section in the link or to the top
const RouteEffects: React.FC = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = titleFor(pathname);
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
  const [selectedPackage, setSelectedPackage] = useState<SurfPackage | null>(null);
  const [preselectedItem, setPreselectedItem] = useState<string>(PACKAGES[0].name);

  const modalActions = useMemo<ModalActions>(() => ({
    openBooking: (item?: string) => {
      if (item) setPreselectedItem(item);
      setIsBookingOpen(true);
    },
    openPackageDetail: (pkg: SurfPackage) => setSelectedPackage(pkg),
  }), []);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ModalContext.Provider value={modalActions}>
        <RouteEffects />
        <div className="min-h-screen bg-[#e9e2d4] text-[#3d372e] font-sans-body p-2 sm:p-4 md:p-6 lg:p-8 selection:bg-[#586857] selection:text-white">
          {/* MAIN CANVAS CONTAINER */}
          <div className="max-w-[1440px] min-[1600px]:max-w-[110rem] mx-auto space-y-4 sm:space-y-6">
            <Header />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/rates" element={<RatesPage />} />
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="/camp" element={<CampPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Old page addresses from the previous site */}
              <Route path="/lessons" element={<Navigate to="/rates" replace />} />
              <Route path="/camps" element={<Navigate to="/activities" replace />} />
              <Route path="/about" element={<Navigate to="/camp" replace />} />
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

          {selectedPackage && (
            <PackageDetailModal
              pkg={selectedPackage}
              onClose={() => setSelectedPackage(null)}
              onBook={(pkg) => modalActions.openBooking(pkg.name)}
            />
          )}
        </div>
      </ModalContext.Provider>
    </BrowserRouter>
  );
}
