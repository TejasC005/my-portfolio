import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import * as Icons from 'lucide-react';
import { ArrowRight, ArrowDown, Sparkles } from 'lucide-react';

import { site, skills, projects, services } from '@/data/siteData';
import ParticleField from '@/components/ParticleField';
import MagneticButton from '@/components/MagneticButton';
import TiltCard from '@/components/TiltCard';
import { Reveal } from '@/components/SplitText';
import SectionHeading from '@/components/SectionHeading';
import useTypingRoles from '@/hooks/useTypingRoles';

gsap.registerPlugin(ScrollTrigger);

function ServiceIcon({ name }: { name: string }) {
  const IconMap = Icons as unknown as Record<string, React.ComponentType<{ size?: number }>>;
  const C = IconMap[name] || Icons.Sparkles;
  return <C size={28} />;
}

export default function Home() {
  const typed = useTypingRoles(site.typingRoles);
  const heroRef = useRef<HTMLDivElement>(null);
  const auroraRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  // Text-scramble name reveal
  useEffect(() => {
    const el = nameRef.current; if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const target = site.name;
    let frame = 0;
    const totalFrames = 40;
    let raf = 0;

    const scramble = () => {
      frame++;
      const progress = frame / totalFrames;
      el.textContent = target
        .split('')
        .map((c, i) => {
          if (c === ' ') return ' ';
          if (i / target.length < progress) return target[i];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');
      if (frame < totalFrames) raf = requestAnimationFrame(scramble);
      else el.textContent = target;
    };
    raf = requestAnimationFrame(scramble);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Parallax aurora + floating shapes
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const onScroll = () => {
      const y = window.scrollY;
      if (auroraRef.current) auroraRef.current.style.transform = `translateY(${y * 0.3}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const featured = projects.filter((p) => p.featured);

  return (
    <main id="main" className="relative z-10">
      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 lg:ml-20 lg:px-12">
        <div ref={auroraRef} className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-10 h-[40rem] w-[40rem] rounded-full bg-accent/20 blur-[120px] animate-glow" />
          <div className="absolute -right-40 top-40 h-[35rem] w-[35rem] rounded-full bg-accent-2/20 blur-[120px] animate-glow" style={{ animationDelay: '1.5s' }} />
        </div>
        <ParticleField className="absolute inset-0 -z-10 h-full w-full opacity-60" />

        {/* Floating shapes */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[10%] top-[20%] h-16 w-16 rounded-2xl border border-accent/30 animate-float" />
          <div className="absolute right-[15%] top-[30%] h-10 w-10 rounded-full border border-accent-2/30 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute left-[20%] bottom-[20%] h-12 w-12 rotate-45 border border-accent/20 animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="mx-auto w-full max-w-5xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] accent-text" data-enter>
            {site.hero.eyebrow}
          </p>
          <h1 ref={nameRef} className="font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl" data-enter>
            {site.name}
          </h1>
          <p className="mt-3 font-display text-lg font-medium text-muted sm:text-xl md:text-2xl" data-enter>
            <span className="accent-text">{typed}</span>
            <span className="ml-1 inline-block w-0.5 animate-pulse bg-accent text-transparent">|</span>
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl" data-enter>
            {site.hero.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg" data-enter>
            {site.hero.subtext}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4" data-enter>
            <MagneticButton to={site.hero.primaryBtn.to} variant="primary">
              {site.hero.primaryBtn.label} <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton to={site.hero.secondaryBtn.to} variant="ghost">
              {site.hero.secondaryBtn.label}
            </MagneticButton>
          </div>

          <div className="mt-8 flex flex-wrap gap-2" data-enter>
            {site.hero.chips.map((chip) => (
              <span key={chip} className="rounded-full border border-border bg-surface/50 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur-sm">
                {chip}
              </span>
            ))}
          </div>

          <p className="mt-10 max-w-2xl text-sm italic text-muted" data-enter>
            {site.hero.closing}
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted lg:flex">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={18} className="animate-bounce" />
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <section className="relative z-10 border-y border-border bg-surface/30 py-6">
        <div className="flex overflow-hidden">
          <div className="marquee-track flex shrink-0 items-center gap-8 whitespace-nowrap pr-8">
            {[...skills.marquee, ...skills.marquee].map((m, i) => (
              <span key={i} className="flex items-center gap-8 font-display text-lg font-medium text-muted">
                {m} <span className="text-accent">/</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="relative z-10 px-6 py-20 lg:ml-20 lg:px-12 lg:py-28">
        <SectionHeading
          eyebrow="Featured Work"
          title={<>Selected <span className="accent-text">Projects</span></>}
          subtitle="A glimpse of the AI, data and software projects I've been building."
        />
        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView={1.15}
          spaceBetween={24}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          coverflowEffect={{ rotate: 18, stretch: 0, depth: 120, modifier: 1, slideShadows: false }}
          breakpoints={{ 640: { slidesPerView: 1.8 }, 1024: { slidesPerView: 2.5 } }}
          className="!pb-14"
        >
          {featured.map((p) => (
            <SwiperSlide key={p.slug}>
              <Link to={`/projects/${p.slug}`} className="group block">
                <TiltCard className="glass h-full overflow-hidden rounded-2xl">
                  <div className="relative h-44 overflow-hidden bg-gradient-to-br from-accent/20 to-accent-2/20">
                    <div className="flex h-full items-center justify-center">
                      <span className="font-display text-5xl font-bold text-fg/20">{p.title.charAt(0)}</span>
                    </div>
                    <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium ${p.badge}`}>
                      {p.status}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-accent">{p.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm text-muted">{p.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tech.slice(0, 4).map((t) => (
                        <span key={t} className="rounded-md bg-surface-2 px-2 py-1 text-xs text-muted">{t}</span>
                      ))}
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                      View project <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </TiltCard>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-8 text-center">
          <MagneticButton to="/projects" variant="outline">All Projects <ArrowRight size={16} /></MagneticButton>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="relative z-10 px-6 py-20 lg:ml-20 lg:px-12 lg:py-28">
        <SectionHeading
          eyebrow="What I Do"
          title={<>My <span className="accent-text">Services</span></>}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <TiltCard className="glass h-full rounded-2xl p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl accent-gradient text-white">
                  <ServiceIcon name={s.icon} />
                </div>
                <h3 className="font-display text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.desc}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative z-10 px-6 py-20 lg:ml-20 lg:px-12 lg:py-28">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
              <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/40 blur-[100px]" />
            </div>
            <Sparkles className="mx-auto mb-4 text-accent" size={32} />
            <h2 className="font-display text-2xl font-bold sm:text-3xl md:text-4xl">
              Let's build something <span className="accent-text">meaningful</span>.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Have a project in mind or want to collaborate? I'm always open to good conversations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <MagneticButton to="/contact" variant="primary">Get in Touch <ArrowRight size={16} /></MagneticButton>
              <MagneticButton to="/about" variant="ghost">About Me</MagneticButton>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
