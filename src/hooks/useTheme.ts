import { useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark';

const KEY = 'tc-theme';

function getInitial(): Theme {
  if (typeof window === 'undefined') return 'dark';
  const saved = localStorage.getItem(KEY);
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/** Applies theme before first paint via inline script in index.html. */
export function applyThemeScript() {
  return `(function(){try{var k='${KEY}';var s=localStorage.getItem(k);var t=s==='light'||s==='dark'?s:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.classList.toggle('dark',t==='dark');}catch(e){document.documentElement.classList.add('dark');}})();`;
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitial);

  const toggle = useCallback((e?: MouseEvent) => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    const doc = document.documentElement;

    const reveal = () => {
      doc.classList.toggle('dark', next === 'dark');
      localStorage.setItem(KEY, next);
      setTheme(next);
    };

    // View Transitions API with circular reveal fallback
    const docWithTransition = document as Document & {
      startViewTransition?: (cb: () => void) => { ready: Promise<void> };
    };

    if (e && docWithTransition.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const x = e.clientX;
      const y = e.clientY;
      const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      const transition = docWithTransition.startViewTransition(() => reveal());
      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ];
        doc.animate(
          { clipPath: next === 'dark' ? clipPath : [...clipPath].reverse() },
          { duration: 500, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' }
        );
      });
    } else {
      reveal();
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return { theme, toggle };
}
