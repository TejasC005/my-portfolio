import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageShell from '@/components/PageShell';
import SectionHeading from '@/components/SectionHeading';
import { Reveal } from '@/components/SplitText';
import { experience, education } from '@/data/siteData';
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current; if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { el.style.height = '100%'; return; }

    const ctx = gsap.context(() => {
      gsap.fromTo(el, {
        height: '0%',
      }, {
        height: '100%', duration: 2, ease: 'power2.out',
        scrollTrigger: { trigger: el.parentElement!, start: 'top 70%', end: 'bottom 80%', scrub: 1 },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <PageShell>
      <div data-enter>
        <SectionHeading
          eyebrow="Career & Education"
          title={<>Experience & <span className="accent-text">Education</span></>}
          subtitle="My professional journey and academic background."
        />
      </div>

      {/* Experience Timeline */}
      <section className="mb-20">
        <h3 className="mb-8 flex items-center gap-2 font-display text-xl font-bold" data-enter>
          <Briefcase size={22} className="text-accent" /> Experience
        </h3>

        <div className="relative pl-8">
          {/* Drawing line */}
          <div className="absolute left-2 top-0 h-full w-0.5 bg-border">
            <div ref={lineRef} className="absolute left-0 top-0 w-full accent-gradient" style={{ height: '0%' }} />
          </div>

          <div className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="relative">
                  <div className="absolute -left-[1.85rem] top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-bg" />
                  <div className="glass rounded-2xl p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="font-display text-lg font-semibold">{job.role}</h4>
                        <p className="text-sm font-medium accent-text">{job.company}</p>
                      </div>
                      {job.period && (
                        <span className="flex items-center gap-1 rounded-full bg-surface-2 px-3 py-1 text-xs text-muted">
                          <Calendar size={12} /> {job.period}
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-sm text-muted">{job.summary}</p>
                    {job.details.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {job.details.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-fg/90">
                            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {job.tech.map((t) => (
                        <span key={t} className="rounded-md bg-surface-2 px-2 py-1 text-xs text-muted">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h3 className="mb-8 flex items-center gap-2 font-display text-xl font-bold" data-enter>
          <GraduationCap size={22} className="text-accent" /> Education
        </h3>

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="glass rounded-2xl p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl accent-gradient text-white">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold">{education.degree}</h4>
                  <p className="text-sm text-muted">{education.school}</p>
                </div>
              </div>
              <div className="space-y-1 text-sm text-muted">
                <p className="flex items-center gap-2"><Calendar size={14} /> {education.period}</p>
                <p>{education.expected}</p>
                <p className="text-fg"><span className="font-semibold accent-text">CGPA:</span> {education.cgpa}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass rounded-2xl p-6">
              <h4 className="mb-4 font-display text-base font-semibold">Earlier Education</h4>
              <div className="space-y-4">
                {education.prior.map((e) => (
                  <div key={e.label} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                    <div>
                      <p className="font-medium">{e.label}</p>
                      <p className="text-sm text-muted">{e.place}</p>
                    </div>
                    <span className="rounded-lg bg-accent/10 px-3 py-1 font-display text-sm font-semibold text-accent">
                      {e.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
