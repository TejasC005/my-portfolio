import PageShell from '@/components/PageShell';
import SectionHeading from '@/components/SectionHeading';
import SplitText, { Reveal } from '@/components/SplitText';
import TiltCard from '@/components/TiltCard';
import MagneticButton from '@/components/MagneticButton';
import { site } from '@/data/siteData';
import { MapPin, Mail, Code2, GraduationCap } from 'lucide-react';

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

export default function About() {
  return (
    <PageShell>
      <div data-enter>
        <SectionHeading
          eyebrow="About Me"
          title={<>Get to know <span className="accent-text">Tejas</span></>}
        />
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* Profile card */}
        <Reveal className="lg:col-span-1">
          <TiltCard className="glass sticky top-24 rounded-2xl p-6" max={4}>
            <div className="flex h-28 w-28 items-center justify-center rounded-2xl accent-gradient font-display text-4xl font-bold text-white">
              TC
            </div>
            <h3 className="mt-5 font-display text-xl font-bold">{site.name}</h3>
            <p className="text-sm text-muted">Computer Engineering Student</p>

            <div className="mt-5 space-y-3 text-sm">
              <p className="flex items-center gap-2 text-muted">
                <MapPin size={16} className="text-accent" /> {site.location}
              </p>
              {site.email && (
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-muted transition-colors hover:text-accent">
                  <Mail size={16} className="text-accent" /> {site.email}
                </a>
              )}
            </div>

            <div className="mt-5 flex gap-2">
              {site.github && (
                <a href={site.github} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl glass transition-colors hover:text-accent" aria-label="GitHub">
                  <GithubIcon />
                </a>
              )}
              {site.linkedin && (
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl glass transition-colors hover:text-accent" aria-label="LinkedIn">
                  <LinkedinIcon />
                </a>
              )}
            </div>

            <div className="mt-6 border-t border-border pt-5">
              <p className="text-xs uppercase tracking-wider text-muted">Focus Areas</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {site.hero.chips.map((c) => (
                  <span key={c} className="rounded-full bg-surface-2 px-3 py-1 text-xs text-muted">{c}</span>
                ))}
              </div>
            </div>
          </TiltCard>
        </Reveal>

        {/* Bio */}
        <div className="lg:col-span-2">
          <Reveal>
            <div className="glass rounded-2xl p-8">
              <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold">
                <Code2 size={20} className="text-accent" /> Who I Am
              </h3>
              <SplitText text={site.bio} className="text-base leading-relaxed text-fg/90" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 glass rounded-2xl p-8">
              <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold">
                <GraduationCap size={20} className="text-accent" /> Currently
              </h3>
              <p className="text-base text-fg/90">
                Pursuing a B.Tech in Computer Engineering, exploring the intersections of
                software development, AI/ML, and data engineering through academic and personal projects.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-wrap gap-4">
              <MagneticButton to="/projects" variant="primary">See My Work</MagneticButton>
              <MagneticButton to="/contact" variant="outline">Contact Me</MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </PageShell>
  );
}
