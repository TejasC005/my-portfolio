import { useRef, type ReactNode } from 'react';

/** 3D tilt card with glare effect. */
export default function TiltCard({
  children, className = '', glare = true, max = 8,
}: { children: ReactNode; className?: string; glare?: boolean; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (0.5 - py) * max * 2;
    const ry = (px - 0.5) * max * 2;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(2px)`;
    if (glare && glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.18), transparent 50%)`;
    }
  };
  const onLeave = () => {
    const el = ref.current; if (el) el.style.transform = '';
    if (glareRef.current) glareRef.current.style.background = '';
  };

  return (
    <div ref={ref} className={`tilt-card relative ${className}`} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
      {glare && <div ref={glareRef} className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-60 transition-opacity" />}
    </div>
  );
}
