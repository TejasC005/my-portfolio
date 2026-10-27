import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PageShell from '@/components/PageShell';
import SectionHeading from '@/components/SectionHeading';
import TiltCard from '@/components/TiltCard';
import { Reveal } from '@/components/SplitText';
import { projects } from '@/data/siteData';
import { ArrowRight, FolderGit2, Filter } from 'lucide-react';

export default function Projects() {
  const allTech = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tech.forEach((t) => set.add(t)));
    return ['All', ...Array.from(set)];
  }, []);

  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.tech.includes(filter));

  return (
    <PageShell>
      <div data-enter>
        <SectionHeading
          eyebrow="Portfolio"
          title={<>My <span className="accent-text">Projects</span></>}
          subtitle="AI prototypes, data analyses, and software systems — built through study and self-driven work."
        />
      </div>

      {/* Tech filter */}
      <div className="mb-10 flex flex-wrap items-center gap-2" data-enter>
        <span className="mr-2 flex items-center gap-1 text-sm text-muted"><Filter size={14} /> Filter:</span>
        {allTech.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
              filter === t
                ? 'accent-gradient text-white'
                : 'border border-border text-muted hover:border-accent hover:text-accent'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.06}>
            <Link to={`/projects/${p.slug}`} className="group block h-full">
              <TiltCard className="glass flex h-full flex-col overflow-hidden rounded-2xl">
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-accent/15 to-accent-2/15">
                  <div className="flex h-full items-center justify-center">
                    <span className="font-display text-5xl font-bold text-fg/15">{p.title.charAt(0)}</span>
                  </div>
                  <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium ${p.badge}`}>
                    {p.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-semibold transition-colors group-hover:text-accent">{p.title}</h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted">{p.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t} className="rounded-md bg-surface-2 px-2 py-1 text-xs text-muted">{t}</span>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    View details <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </TiltCard>
            </Link>
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-20 text-center text-muted">
          <FolderGit2 size={48} className="mx-auto mb-4 opacity-40" />
          <p>No projects match this filter.</p>
        </div>
      )}
    </PageShell>
  );
}
