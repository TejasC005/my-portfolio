import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { nav } from '@/data/siteData';
import * as Icons from 'lucide-react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { gsap } from 'gsap';

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const IconMap = Icons as unknown as Record<string, React.ComponentType<{ size?: number }>>;
  const C = IconMap[name] || Icons.Circle;
  return <C size={size} />;
}

export default function Navigation() {
  const loc = useLocation();
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    if (!drawer) return;
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setDrawer(false);
    window.addEventListener('keydown', onEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onEsc);
      document.body.style.overflow = '';
    };
  }, [drawer]);

  useEffect(() => {
    setDrawer(false);
  }, [loc.pathname]);

  const staggerIn = () => {
    const items = document.querySelectorAll('.drawer-link');
    gsap.fromTo(items, { x: 40, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.05, duration: 0.4, ease: 'power2.out' });
  };

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9000] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>

      {/* Desktop rail */}
      <nav aria-label="Primary" className="fixed left-0 top-0 z-[7000] hidden h-screen w-20 lg:flex">
        <div className="group flex h-full w-20 flex-col items-center gap-2 border-r border-border bg-surface/80 py-6 backdrop-blur-xl transition-all duration-300 hover:w-56">
          <NavLink to="/" className="mb-6 flex items-center gap-3 overflow-hidden">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl accent-gradient font-display text-lg font-bold text-white">
              TC
            </span>
            <span className="whitespace-nowrap font-display text-sm font-semibold opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Tejas Chaudhari
            </span>
          </NavLink>

          <div className="flex flex-1 flex-col items-center gap-1 overflow-y-auto">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative flex w-16 items-center gap-3 rounded-xl px-3 py-3 text-sm transition-all hover:w-48 hover:bg-surface-2 ${
                    isActive ? 'text-accent' : 'text-muted hover:text-fg'
                  } group-hover:w-48`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="absolute left-0 top-1/2 h-7 w-1 -translate-y-1/2 rounded-r-full accent-gradient" />
                    )}
                    <span className="shrink-0"><Icon name={item.icon} /></span>
                    <span className="whitespace-nowrap font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile floating button */}
      <button
        onClick={() => { setDrawer(true); setTimeout(staggerIn, 50); }}
        className="fixed right-4 top-4 z-[7500] flex h-12 w-12 items-center justify-center rounded-xl accent-gradient text-white shadow-lg shadow-accent/30 lg:hidden"
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>

      {/* Mobile drawer */}
      {drawer && (
        <div className="fixed inset-0 z-[8000] lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setDrawer(false)} />
          <div className="absolute right-0 top-0 h-full w-72 max-w-[85vw] glass-strong border-l border-border p-6 pt-20">
            <button
              onClick={() => setDrawer(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl glass text-fg"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `drawer-link flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive ? 'bg-accent/10 text-accent' : 'text-muted hover:bg-surface-2 hover:text-fg'
                    }`
                  }
                >
                  <Icon name={item.icon} size={18} />
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-6 flex items-center gap-3">
              <ThemeToggle />
              <span className="text-sm text-muted">Toggle theme</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
