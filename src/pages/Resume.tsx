import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageShell from '@/components/PageShell';
import SectionHeading from '@/components/SectionHeading';
import MagneticButton from '@/components/MagneticButton';
import { Reveal } from '@/components/SplitText';
import { site, experience, education, certifications } from '@/data/siteData';
import { Download, User, Briefcase, GraduationCap, Award, Cpu, FileText, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const num = parseFloat(value);
    if (isNaN(num)) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      const obj = { v: 0 };
      gsap.to(obj, {
        v: num, duration: 1.5, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        onUpdate: () => { el.textContent = obj.v.toFixed(num % 1 === 0 ? 0 : 2); },
      });
      if (reduce) el.textContent = value;
    }, el);
    return () => ctx.revert();
  }, [value]);
  return (
    <div className="glass rounded-2xl p-6 text-center">
      <div ref={ref} className="font-display text-3xl font-bold accent-text sm:text-4xl">0</div>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}

export default function Resume() {
  return (
    <PageShell>
      <div data-enter>
        <SectionHeading
          eyebrow="Resume"
          title={<>My <span className="accent-text">Profile</span></>}
          subtitle="A quick animated summary of who I am and what I bring to the table."
        />
      </div>

      {/* Animated counters */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4" data-enter>
        <Counter value="9.16" label="CGPA" />
        <Counter value="3" label="Internships" />
        <Counter value="5" label="Projects" />
        <Counter value="4" label="Certifications" />
      </div>

      {/* Summary sections */}
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="glass rounded-2xl p-6">
            <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold">
              <User size={20} className="text-accent" /> Profile
            </h3>
            <p className="text-sm text-muted">{site.bio.slice(0, 220)}…</p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="glass rounded-2xl p-6">
            <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold">
              <Cpu size={20} className="text-accent" /> Core Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'SQL', 'JavaScript', 'React', 'Node/Express', 'MongoDB', 'PyTorch', 'Postman', 'Git'].map((s) => (
                <span key={s} className="rounded-lg bg-surface-2 px-3 py-1 text-xs text-fg/90">{s}</span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass rounded-2xl p-6">
            <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold">
              <Briefcase size={20} className="text-accent" /> Experience
            </h3>
            <div className="space-y-3">
              {experience.map((e) => (
                <div key={e.role} className="border-l-2 border-accent/30 pl-3">
                  <p className="text-sm font-medium">{e.role}</p>
                  <p className="text-xs text-muted">{e.company}{e.period && ` · ${e.period}`}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass rounded-2xl p-6">
            <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold">
              <GraduationCap size={20} className="text-accent" /> Education
            </h3>
            <p className="text-sm font-medium">{education.degree}</p>
            <p className="text-xs text-muted">{education.school}</p>
            <p className="text-xs text-muted">{education.period} · CGPA {education.cgpa}</p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="glass rounded-2xl p-6 lg:col-span-2">
            <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold">
              <Award size={20} className="text-accent" /> Certifications
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {certifications.map((c) => (
                <div key={c.title} className="flex items-center gap-2 text-sm text-fg/90">
                  <Star size={14} className="shrink-0 text-accent" />
                  {c.title}{c.date && ` — ${c.date}`}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Download */}
      <Reveal delay={0.15}>
        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <div className="glass rounded-2xl p-8">
            <FileText size={40} className="mx-auto mb-3 text-accent" />
            <h3 className="font-display text-lg font-semibold">Download Full Resume</h3>
            <p className="mt-1 text-sm text-muted">Get the complete PDF version for offline reference.</p>
            <div className="mt-5">
              <MagneticButton href="/resume.pdf" variant="primary">
                <Download size={16} /> Download PDF
              </MagneticButton>
            </div>
            <p className="mt-3 text-xs text-muted">
              Placeholder link — add your resume to <code className="rounded bg-surface-2 px-1">public/resume.pdf</code>
            </p>
          </div>
        </div>
      </Reveal>
    </PageShell>
  );
}
