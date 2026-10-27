import { useEffect } from 'react';
import { site, meta } from '@/data/siteData';

const TITLES: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/skills': 'Skills',
  '/experience': 'Experience & Education',
  '/projects': 'Projects',
  '/services': 'Services',
  '/certifications': 'Certifications',
  '/resume': 'Resume',
  '/contact': 'Contact',
};

export default function usePageMeta(path: string) {
  useEffect(() => {
    const label = TITLES[path] || (path.startsWith('/projects/') ? 'Project' : 'Not Found');
    const title = `${label} — ${site.name}`;
    document.title = title;

    const ensure = (sel: string, attr: string, val: string) => {
      let el = document.head.querySelector(sel) as HTMLMetaElement | null;
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr.split('=')[0], attr.split('=')[1]); document.head.appendChild(el); }
      el.content = val;
    };

    ensure('meta[name="description"]', 'name=description', meta.description);
    ensure('meta[property="og:title"]', 'property=og:title', title);
    ensure('meta[property="og:description"]', 'property=og:description', meta.description);
    ensure('meta[property="og:image"]', 'property=og:image', meta.image);
    ensure('meta[property="og:type"]', 'property=og:type', 'website');
    ensure('meta[name="twitter:card"]', 'name=twitter:card', 'summary_large_image');
    ensure('meta[name="twitter:image"]', 'name=twitter:image', meta.image);
  }, [path]);
}
