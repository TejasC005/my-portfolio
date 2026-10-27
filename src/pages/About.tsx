import PageShell from '@/components/PageShell';
import SectionHeading from '@/components/SectionHeading';
import { Reveal } from '@/components/SplitText';
import TiltCard from '@/components/TiltCard';
import MagneticButton from '@/components/MagneticButton';
import { site, education } from '@/data/siteData';
import {
  MapPin,
  Mail,
  Code2,
  GraduationCap,
  BrainCircuit,
  ShieldCheck,
  Award,
  Sparkles,
} from 'lucide-react';

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.7c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0z"/>
    </svg>
  );
}

const pillars = [
  {
    icon: Code2,
    title: 'Software Development',
    desc: 'Full-stack web applications, clean architecture, responsive UX, and scalable API integrations.',
  },
  {
    icon: BrainCircuit,
    title: 'AI & Data Engineering',
    desc: 'Exploring computer vision, NLP prototypes, and automated data pipelines with Python and SQL.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality & Testing',
    desc: 'Functional QA, Postman API testing, database verification, and comprehensive defect reporting.',
  },
];

export default function About() {
  return (
    <PageShell>
      <div data-enter>
        <SectionHeading
          eyebrow="About Me"
          title={<>Get to know <span className="accent-text">Tejas</span></>}
          subtitle="A deeper look into my background, engineering philosophy, and current pursuits."
        />
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* Profile Card */}
        <Reveal className="lg:col-span-1">
          <TiltCard className="glass sticky top-24 rounded-2xl p-6" max={4}>
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl accent-gradient font-display text-3xl font-bold text-white shadow-lg shadow-accent/20">
              TC
            </div>
            <h3 className="mt-5 font-display text-xl font-bold">{site.name}</h3>
            <p className="text-sm font-medium text-accent">Computer Engineering Student</p>

            <div className="mt-5 space-y-3 text-sm">
              <p className="flex items-center gap-2 text-muted">
                <MapPin size={16} className="text-accent" /> {site.location}
              </p>
              {site.email && (
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
                >
                  <Mail size={16} className="text-accent" /> {site.email}
                </a>
              )}
            </div>

            <div className="mt-5 flex gap-2">
              {site.github && (
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl glass transition-colors hover:text-accent"
                  aria-label="GitHub"
                >
                  <GithubIcon />
                </a>
              )}
              {site.linkedin && (
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl glass transition-colors hover:text-accent"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon />
                </a>
              )}
            </div>

            <div className="mt-6 border-t border-border pt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Focus Areas</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {site.hero.chips.map((c) => (
                  <span key={c} className="rounded-full bg-surface-2 px-3 py-1 text-xs text-muted">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </TiltCard>
        </Reveal>

        {/* Main Content Column */}
        <div className="space-y-6 lg:col-span-2">
          {/* Who I Am Card */}
          <Reveal>
            <div className="glass rounded-2xl p-7 sm:p-8">
              <div className="mb-5 flex items-center justify-between border-b border-border/50 pb-4">
                <h3 className="flex items-center gap-2.5 font-display text-lg font-semibold">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Code2 size={18} />
                  </span>
                  Who I Am
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  <Sparkles size={13} /> Passionate Builder
                </span>
              </div>

              {/* Nicely spaced paragraphs */}
              <div className="space-y-4 text-base leading-relaxed text-muted dark:text-fg/85">
                {site.bioParagraphs.map((paragraph, idx) => (
                  <p key={idx} className="leading-7">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Core Pillars */}
              <div className="mt-8 border-t border-border/50 pt-6">
                <h4 className="mb-4 font-display text-xs font-semibold uppercase tracking-wider text-muted">
                  Core Competencies
                </h4>
                <div className="grid gap-4 sm:grid-cols-3">
                  {pillars.map((pillar) => {
                    const IconComponent = pillar.icon;
                    return (
                      <div
                        key={pillar.title}
                        className="rounded-xl border border-border/60 bg-surface/50 p-4 transition-colors hover:border-accent/40"
                      >
                        <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                          <IconComponent size={16} />
                        </div>
                        <h5 className="font-display text-sm font-semibold text-fg">
                          {pillar.title}
                        </h5>
                        <p className="mt-1.5 text-xs leading-relaxed text-muted">
                          {pillar.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Currently & Education Card */}
          <Reveal delay={0.1}>
            <div className="glass rounded-2xl p-7 sm:p-8">
              <div className="mb-5 flex items-center justify-between border-b border-border/50 pb-4">
                <h3 className="flex items-center gap-2.5 font-display text-lg font-semibold">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <GraduationCap size={18} />
                  </span>
                  Currently & Education
                </h3>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {education.cgpa} CGPA
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-display text-base font-semibold text-fg">
                    {education.degree}
                  </h4>
                  <span className="text-xs font-medium text-muted">
                    {education.period} ({education.expected})
                  </span>
                </div>
                <p className="text-sm text-muted">{education.school}</p>
                <p className="text-sm leading-relaxed text-muted dark:text-fg/80">
                  Actively pursuing advanced coursework in computer algorithms, data engineering,
                  intelligent AI/ML systems, and robust software architectures.
                </p>

                {/* Prior Academic Badges */}
                <div className="mt-4 flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs font-medium text-muted">Academic Track:</span>
                  {education.prior.map((p) => (
                    <span
                      key={p.label}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-surface-2 px-3 py-1 text-xs font-medium text-muted"
                    >
                      <Award size={13} className="text-accent" />
                      <span>{p.label}:</span>
                      <strong className="text-fg">{p.score}</strong>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton to="/projects" variant="primary">
                Explore Projects
              </MagneticButton>
              <MagneticButton to="/experience" variant="ghost">
                View Experience
              </MagneticButton>
              <MagneticButton to="/contact" variant="outline">
                Get In Touch
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </PageShell>
  );
}
