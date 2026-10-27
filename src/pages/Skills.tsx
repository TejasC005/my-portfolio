import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageShell from '@/components/PageShell';
import SectionHeading from '@/components/SectionHeading';
import { Reveal } from '@/components/SplitText';
import { skills } from '@/data/siteData';

gsap.registerPlugin(ScrollTrigger);

function SkillBar({ name, value, tag }: { name: string; value: number; tag?: string }) {
  const fill = useRef<HTMLDivElement>(null);
  const num = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const f = fill.current, n = num.current;
    if (!f || !n) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      const st = ScrollTrigger.create({
        trigger: f, start: 'top 90%', once: true,
        onEnter: () => {
          if (reduce) { f.style.width = `${value}%`; n.textContent = `${value}`; return; }
          gsap.to(f, { width: `${value}%`, duration: 1.2, ease: 'power2.out' });
          const obj = { v: 0 };
          gsap.to(obj, {
            v: value, duration: 1.2, ease: 'power2.out',
            onUpdate: () => { n.textContent = `${Math.round(obj.v)}`; },
          });
        },
      });
      return () => st.kill();
    }, f);
    return () => ctx.revert();
  }, [value]);

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium">
          {name}
          {tag && <span className="ml-2 rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent">{tag}</span>}
        </span>
        <span ref={num} className="font-display text-sm font-semibold text-muted">0</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-surface-2">
        <div ref={fill} className="skill-bar-fill h-full rounded-full accent-gradient" style={{ width: '0%' }} />
      </div>
    </div>
  );
}

function OrbitDiagram() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = svgRef.current; if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const rings = el.querySelectorAll('.orbit-ring');
    const ctx = gsap.context(() => {
      rings.forEach((ring, i) => {
        gsap.to(ring, {
          rotation: i % 2 === 0 ? 360 : -360,
          duration: 20 + i * 8,
          ease: 'none',
          repeat: -1,
          transformOrigin: 'center',
        });
      });
    }, el);
    return () => ctx.revert();
  }, []);

  const icons = skills.orbitIcons;
  const radii = [90, 140, 190];

  return (
    <div className="relative flex items-center justify-center">
      <svg ref={svgRef} viewBox="-220 -220 440 440" className="w-full max-w-md">
        {/* Core */}
        <circle cx="0" cy="0" r="36" className="fill-accent/20 stroke-accent" strokeWidth="1.5" />
        <text x="0" y="6" textAnchor="middle" className="fill-fg font-display text-sm font-bold">SKILLS</text>

        {radii.map((r, ri) => (
          <g key={ri} className="orbit-ring">
            <circle cx="0" cy="0" r={r} className="fill-none stroke-border" strokeDasharray="4 6" strokeWidth="1" />
            {icons.slice(ri * 3, ri * 3 + 3).map((label, i) => {
              const angle = (i / 3) * Math.PI * 2;
              const x = Math.cos(angle) * r;
              const y = Math.sin(angle) * r;
              return (
                <g key={label} transform={`translate(${x} ${y})`}>
                  <circle r="22" className="fill-surface stroke-accent/40" strokeWidth="1" />
                  <text x="0" y="4" textAnchor="middle" className="fill-fg font-body text-[8px] font-medium">
                    {label.length > 8 ? label.slice(0, 7) + '…' : label}
                  </text>
                </g>
              );
            })}
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function Skills() {
  return (
    <PageShell>
      <div data-enter>
        <SectionHeading
          eyebrow="Capabilities"
          title={<>Skills & <span className="accent-text">Expertise</span></>}
          subtitle="A blend of software engineering, quality assurance, AI/ML, and data skills built through study and hands-on work."
        />
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.groups.map((group, gi) => (
              <Reveal key={group.name} delay={gi * 0.05}>
                <div className="glass rounded-2xl p-6">
                  <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider accent-text">
                    {group.name}
                  </h3>
                  <div className="space-y-4">
                    {group.items.map((item) => (
                      <SkillBar key={item.n} name={item.n} value={item.v} tag={'tag' in item ? item.tag : undefined} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="glass sticky top-24 rounded-2xl p-6">
            <h3 className="mb-4 text-center font-display text-sm font-semibold uppercase tracking-wider text-muted">
              Tech Orbit
            </h3>
            <OrbitDiagram />
            <p className="mt-4 text-center text-xs text-muted">
              Technologies I work with across development, data, and AI.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Marquee */}
      <div className="mt-16 border-y border-border bg-surface/30 py-6">
        <div className="flex overflow-hidden">
          <div className="marquee-track flex shrink-0 items-center gap-8 whitespace-nowrap pr-8">
            {[...skills.marquee, ...skills.marquee].map((m, i) => (
              <span key={i} className="flex items-center gap-8 font-display text-lg font-medium text-muted">
                {m} <span className="text-accent">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
