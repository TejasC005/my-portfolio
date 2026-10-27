import { useEffect, useState } from 'react';

/** Typing animation cycling through roles. */
export default function useTypingRoles(roles: string[], speed = 80, pause = 1600) {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setText(roles[0]); return; }

    const current = roles[idx % roles.length];
    let timeout: number;

    if (!deleting && text === current) {
      timeout = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIdx((i) => i + 1);
    } else {
      timeout = window.setTimeout(() => {
        setText((t) => deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1));
      }, deleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, idx, roles, speed, pause]);

  return text;
}
