import { useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

/** Magnetic + ripple button/link with accent gradient variants. */
type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost' | 'outline';
  className?: string;
  type?: 'button' | 'submit';
  ariaLabel?: string;
};

export default function MagneticButton({
  children, to, href, onClick, variant = 'primary', className = '', type = 'button', ariaLabel,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };
  const onLeave = () => {
    const el = ref.current; if (el) el.style.transform = '';
  };
  const onDown = (e: React.MouseEvent) => {
    const el = ref.current as HTMLElement; if (!el) return;
    const r = el.getBoundingClientRect();
    const ink = document.createElement('span');
    ink.className = 'ripple-ink';
    const size = Math.max(r.width, r.height);
    ink.style.width = ink.style.height = `${size}px`;
    ink.style.left = `${e.clientX - r.left - size / 2}px`;
    ink.style.top = `${e.clientY - r.top - size / 2}px`;
    el.appendChild(ink);
    setTimeout(() => ink.remove(), 600);
  };

  const base = `relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-display font-medium text-sm transition-all duration-300 ${className}`;
  const variants = {
    primary: 'accent-gradient text-white shadow-lg shadow-accent/30 hover:shadow-accent/50',
    ghost: 'glass text-fg hover:bg-surface-2',
    outline: 'border border-border text-fg hover:border-accent hover:text-accent',
  };
  const cls = `${base} ${variants[variant]}`;

  if (to) {
    return (
      <Link ref={ref as React.RefObject<HTMLAnchorElement>} to={to} className={cls} aria-label={ariaLabel}
        onMouseMove={onMove} onMouseLeave={onLeave} onMouseDown={onDown} onClick={onClick}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a ref={ref as React.RefObject<HTMLAnchorElement>} href={href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={ariaLabel}
        onMouseMove={onMove} onMouseLeave={onLeave} onMouseDown={onDown}>
        {children}
      </a>
    );
  }
  return (
    <button ref={ref as React.RefObject<HTMLButtonElement>} type={type} className={cls} aria-label={ariaLabel}
      onMouseMove={onMove} onMouseLeave={onLeave} onMouseDown={onDown} onClick={onClick}>
      {children}
    </button>
  );
}
