import PageShell from '@/components/PageShell';
import SectionHeading from '@/components/SectionHeading';
import { Reveal } from '@/components/SplitText';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { certifications } from '@/data/siteData';
import { Award, Calendar, Building2, Star } from 'lucide-react';

export default function Certifications() {
  return (
    <PageShell>
      <div data-enter>
        <SectionHeading
          eyebrow="Achievements"
          title={<>Certifications & <span className="accent-text">Credentials</span></>}
          subtitle="Courses, certifications, and academic milestones I've earned along the way."
        />
      </div>

      <div data-enter>
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={24}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="!pb-14"
        >
          {certifications.map((c, i) => (
            <SwiperSlide key={i}>
              <div className="glass h-full rounded-2xl p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl accent-gradient text-white">
                  <Award size={28} />
                </div>
                <h3 className="font-display text-base font-semibold leading-snug">{c.title}</h3>
                {c.provider && (
                  <p className="mt-2 flex items-center gap-2 text-sm text-muted">
                    {c.provider.includes('HackerRank') ? <Star size={14} className="text-accent" /> : <Building2 size={14} className="text-accent" />}
                    {c.provider}
                  </p>
                )}
                {c.date && (
                  <p className="mt-2 flex items-center gap-2 text-xs text-muted">
                    <Calendar size={12} /> {c.date}
                  </p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="glass rounded-2xl p-6">
            <h3 className="mb-2 font-display text-lg font-semibold">Continuous Learning</h3>
            <p className="text-sm text-muted">
              Beyond formal certifications, I actively explore new technologies through documentation,
              open-source code, and hands-on projects in AI, data engineering, and web development.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="mb-2 font-display text-lg font-semibold">Academic Excellence</h3>
            <p className="text-sm text-muted">
              Maintaining a CGPA of 9.16 in my B.Tech Computer Engineering program while balancing
              internships and self-driven technical projects.
            </p>
          </div>
        </div>
      </Reveal>
    </PageShell>
  );
}
