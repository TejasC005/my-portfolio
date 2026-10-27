import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** Page wrapper with staggered entrance animation for top-level blocks. */
export default function PageShell({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const blocks = el.querySelectorAll('[data-enter]');
      gsap.from(blocks, {
        y: 28, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out',
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <main id="main" ref={ref} className={`relative z-10 min-h-screen px-6 pb-20 pt-24 lg:ml-20 lg:px-12 lg:pt-16 ${className}`}>
      {children}
    </main>
  );
}
