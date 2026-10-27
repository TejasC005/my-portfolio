import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** Splits text into word/char spans and reveals on scroll. */
export default function SplitText({
  text, as: Tag = 'p', className = '', char = false, delay = 0,
}: {
  text: string;
  as?: React.ElementType;
  className?: string;
  char?: boolean;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const targets = el.querySelectorAll('.split-unit');
    if (!targets.length) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { gsap.set(targets, { opacity: 1, y: 0 }); return; }

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        y: 20, opacity: 0, duration: 0.6, stagger: char ? 0.02 : 0.06,
        ease: 'power2.out', delay,
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      });
    }, el);
    return () => ctx.revert();
  }, [char, delay]);

  const units = char ? text.split('') : text.split(' ');
  const sep = char ? '' : ' ';

  return (
    <Tag ref={ref as React.RefObject<HTMLElement>} className={className}>
      {units.map((u, i) => (
        <span key={i} className="split-unit inline-block" style={{ willChange: 'transform, opacity' }}>
          {u === ' ' ? '\u00A0' : u}{i < units.length - 1 ? sep : ''}
        </span>
      ))}
    </Tag>
  );
}

/** Generic scroll reveal wrapper. */
export function Reveal({
  children, className = '', y = 30, delay = 0, once = true,
}: {
  children: ReactNode; className?: string; y?: number; delay?: number; once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y, opacity: 0, duration: 0.7, ease: 'power2.out', delay,
        scrollTrigger: { trigger: el, start: 'top 88%', once },
      });
    }, el);
    return () => ctx.revert();
  }, [y, delay, once]);

  return <div ref={ref} className={className}>{children}</div>;
}
