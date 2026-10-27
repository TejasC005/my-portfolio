import { useEffect } from 'react';

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
const COLORS = ['#7c5cff', '#3882f6', '#22c55e', '#f59e0b', '#ef4444', '#ec4899'];

function burst() {
  const layer = document.createElement('div');
  layer.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:10000;overflow:hidden';
  document.body.appendChild(layer);

  for (let i = 0; i < 120; i++) {
    const c = document.createElement('div');
    const size = Math.random() * 8 + 4;
    c.style.cssText = `position:absolute;top:-20px;left:${Math.random() * 100}%;width:${size}px;height:${size*1.6}px;background:${COLORS[i%COLORS.length]};animation:confetti 2.6s cubic-bezier(.2,.6,.4,1) forwards;animation-delay:${Math.random()*0.5}s;border-radius:2px`;
    layer.appendChild(c);
  }
  setTimeout(() => layer.remove(), 3500);
}

export default function useKonami() {
  useEffect(() => {
    let idx = 0;
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === KONAMI[idx]) {
        idx++;
        if (idx === KONAMI.length) { idx = 0; burst(); }
      } else {
        idx = key === KONAMI[0] ? 1 : 0;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
}
