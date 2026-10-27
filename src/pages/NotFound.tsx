import MagneticButton from '@/components/MagneticButton';
import { Home, ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <main id="main" className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-24 lg:ml-20">
      <div className="text-center">
        <div className="relative mb-8">
          <h1 className="font-display text-[8rem] font-bold leading-none accent-text sm:text-[12rem]">404</h1>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <Compass size={120} className="text-accent/10 animate-spin-slow" />
          </div>
        </div>
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">Page Not Found</h2>
        <p className="mx-auto mt-3 max-w-md text-muted">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <MagneticButton to="/" variant="primary">
            <Home size={16} /> Back Home
          </MagneticButton>
          <MagneticButton to="/projects" variant="outline">
            <ArrowLeft size={16} /> Browse Projects
          </MagneticButton>
        </div>
      </div>
    </main>
  );
}
