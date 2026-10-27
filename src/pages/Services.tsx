import * as Icons from 'lucide-react';
import PageShell from '@/components/PageShell';
import SectionHeading from '@/components/SectionHeading';
import TiltCard from '@/components/TiltCard';
import MagneticButton from '@/components/MagneticButton';
import { Reveal } from '@/components/SplitText';
import { services } from '@/data/siteData';
import { ArrowRight } from 'lucide-react';

function ServiceIcon({ name }: { name: string }) {
  const IconMap = Icons as unknown as Record<string, React.ComponentType<{ size?: number }>>;
  const C = IconMap[name] || Icons.Sparkles;
  return <C size={32} />;
}

export default function Services() {
  return (
    <PageShell>
      <div data-enter>
        <SectionHeading
          eyebrow="Services"
          title={<>What I <span className="accent-text">Offer</span></>}
          subtitle="Practical services across software development, quality assurance, AI/ML, and data — based on real skills and experience."
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <TiltCard className="group glass h-full rounded-2xl p-8" max={6}>
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl accent-gradient text-white transition-transform group-hover:scale-110">
                  <ServiceIcon name={s.icon} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.desc}</p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                <MagneticButton to="/contact" variant="ghost" className="text-xs">
                  Discuss this <ArrowRight size={14} />
                </MagneticButton>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-12 glass rounded-2xl p-8 text-center">
          <h3 className="font-display text-xl font-bold">Need something specific?</h3>
          <p className="mt-2 text-muted">I'm open to discussing custom projects and collaborations.</p>
          <div className="mt-6">
            <MagneticButton to="/contact" variant="primary">Start a Conversation <ArrowRight size={16} /></MagneticButton>
          </div>
        </div>
      </Reveal>
    </PageShell>
  );
}
