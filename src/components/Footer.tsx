import { Link } from 'react-router-dom';
import { footerLinks, site } from '@/data/siteData';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

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

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 mt-24 border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-24">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-semibold">{site.name}</h3>
            <p className="mt-2 text-sm text-muted">{site.hero.closing}</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted">
              <MapPin size={14} /> {site.location}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-muted">Quick Links</h4>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {footerLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted transition-colors hover:text-accent">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-muted">Connect</h4>
            <div className="mt-3 flex items-center gap-3">
              {site.email && (
                <a href={`mailto:${site.email}`} className="flex h-10 w-10 items-center justify-center rounded-xl glass text-fg transition-colors hover:text-accent" aria-label="Email">
                  <Mail size={18} />
                </a>
              )}
              {site.github && (
                <a href={site.github} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl glass text-fg transition-colors hover:text-accent" aria-label="GitHub">
                  <GithubIcon />
                </a>
              )}
              {site.linkedin && (
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl glass text-fg transition-colors hover:text-accent" aria-label="LinkedIn">
                  <LinkedinIcon />
                </a>
              )}
            </div>
            <div className="mt-4 flex items-center gap-2 text-muted">
              <Github size={14} className="opacity-40" />
              <Linkedin size={14} className="opacity-40" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted md:flex-row">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>Built with React, GSAP & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
