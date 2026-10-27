import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

/** Curtain-wipe page transition between routes, plus staggered entrance. */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const wrap = useRef<HTMLDivElement>(null);
  const curtain = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(location.pathname);

  useEffect(() => {
    const panels = curtain.current?.querySelectorAll('span') || [];
    if (!panels.length) { setShown(location.pathname); return; }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setShown(location.pathname); return; }

    const tl = gsap.timeline({
      onComplete: () => gsap.set(panels, { scaleY: 0 }),
    });

    tl.set(panels, { transformOrigin: 'bottom' })
      .to(panels, { scaleY: 1, duration: 0.35, stagger: 0.04, ease: 'power2.in' })
      .add(() => {
        setShown(location.pathname);
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, behavior: 'auto' });
        });
      })
      .set(panels, { transformOrigin: 'top' })
      .to(panels, { scaleY: 0, duration: 0.4, stagger: 0.04, ease: 'power2.out' });

    return () => { tl.kill(); };
  }, [location.pathname]);

  return (
    <>
      <div ref={curtain} className="curtain" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => <span key={i} />)}
      </div>
      <div key={shown} ref={wrap} className="page-enter">
        {children}
      </div>
    </>
  );
}
