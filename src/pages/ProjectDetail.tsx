import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import PageShell from '@/components/PageShell';
import TiltCard from '@/components/TiltCard';
import MagneticButton from '@/components/MagneticButton';
import { Reveal } from '@/components/SplitText';
import { projects } from '@/data/siteData';
import { ArrowLeft, ExternalLink, CheckCircle2, Layers } from 'lucide-react';

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.7c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z"/>
    </svg>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Tejas Chaudhari`;
    }
  }, [project]);

  if (!project) return <Navigate to="/404" replace />;

  const isConcept = ['Planned', 'Concept'].includes(project.status);

  return (
    <PageShell>
      <Link to="/projects" className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent" data-enter>
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      {/* Screenshot placeholder */}
      <Reveal>
        <TiltCard className="glass mb-8 overflow-hidden rounded-2xl" max={4}>
          <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-accent/15 to-accent-2/15 sm:h-72">
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <div className="absolute left-1/4 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-accent/40 blur-3xl" />
            </div>
            <div className="text-center">
              <Layers size={48} className="mx-auto mb-3 text-fg/20" />
              <p className="font-display text-sm text-muted">Screenshot placeholder</p>
            </div>
            <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium ${project.badge}`}>
              {project.status}
            </span>
          </div>
        </TiltCard>
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2">
          <Reveal>
            <h1 className="font-display text-3xl font-bold sm:text-4xl" data-enter>{project.title}</h1>
            <p className="mt-4 text-lg text-muted">{project.summary}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 glass rounded-2xl p-6">
              <h2 className="mb-3 font-display text-lg font-semibold">Overview</h2>
              <p className="leading-relaxed text-fg/90">{project.description}</p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-6 glass rounded-2xl p-6">
              <h2 className="mb-4 font-display text-lg font-semibold">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-fg/90">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {isConcept && (
            <Reveal delay={0.2}>
              <div className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-600 dark:text-amber-400">
                This project is currently in the <strong>{project.status}</strong> phase — not yet finished.
              </div>
            </Reveal>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Reveal delay={0.1}>
            <div className="glass sticky top-24 rounded-2xl p-6">
              <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-muted">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-lg bg-surface-2 px-3 py-1.5 text-sm text-fg/90">{t}</span>
                ))}
              </div>

              <h3 className="mb-3 mt-6 font-display text-sm font-semibold uppercase tracking-wider text-muted">Status</h3>
              <span className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${project.badge}`}>
                {project.status}
              </span>

              <div className="mt-6 flex flex-col gap-3">
                {project.demoUrl && (
                  <MagneticButton href={project.demoUrl} variant="primary" className="w-full">
                    <ExternalLink size={16} /> Live Demo
                  </MagneticButton>
                )}
                {project.githubUrl && (
                  <MagneticButton href={project.githubUrl} variant="outline" className="w-full">
                    <GithubIcon /> View Code
                  </MagneticButton>
                )}
                {!project.demoUrl && !project.githubUrl && (
                  <p className="text-sm text-muted">Links will be added soon.</p>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </PageShell>
  );
}
