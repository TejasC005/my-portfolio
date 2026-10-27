import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import useSmoothScroll from '@/hooks/useSmoothScroll';
import useKonami from '@/hooks/useKonami';
import usePageMeta from '@/hooks/usePageMeta';
import { applyThemeScript } from '@/hooks/useTheme';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import PageTransition from '@/components/PageTransition';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Skills from '@/pages/Skills';
import Experience from '@/pages/Experience';
import Projects from '@/pages/Projects';
import ProjectDetail from '@/pages/ProjectDetail';
import Services from '@/pages/Services';
import Certifications from '@/pages/Certifications';
import Resume from '@/pages/Resume';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

function AppShell() {
  const loc = useLocation();
  useSmoothScroll();
  useKonami();
  usePageMeta(loc.pathname);

  // Inject the early-paint theme script once
  useEffect(() => {
    const id = 'theme-early';
    if (document.getElementById(id)) return;
    const s = document.createElement('script');
    s.id = id;
    s.textContent = applyThemeScript();
    document.head.appendChild(s);
  }, []);

  // Scroll to top on route change (instant, before transition)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [loc.pathname]);

  return (
    <div className="grain relative min-h-screen">
      <Navigation />
      <CustomCursor />
      <PageTransition>
        <Routes location={loc}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
