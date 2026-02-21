'use client';

import { Button } from '@/components/ui/button';

interface HeroImageProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  badge?: string;
  overlayOpacity?: string;
}

export default function HeroImage({
  imageSrc = '/images/hero-performance-sedan.jpg',
  title = 'Command the Road in the 2024 Apex GT',
  subtitle = 'Discover premium performance vehicles, meticulously inspected and ready for the track or the daily commute.',
  primaryCtaLabel = 'Browse Inventory',
  primaryCtaHref = '/inventory',
  secondaryCtaLabel = 'Schedule a Test Drive',
  secondaryCtaHref = '/test-drive',
  badge,
  overlayOpacity = 'bg-gradient-to-r from-black/80 via-black/60 to-black/40',
}: HeroImageProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(' + imageSrc + ')' }} />
      <div className={'absolute inset-0 ' + overlayOpacity} />
      <div className="relative z-10 container mx-auto max-w-7xl px-4 text-center text-white">
        {badge && (
          <span className="inline-block mb-4 rounded-full bg-[#0A0A0A]/60 px-6 py-2 text-sm font-bold text-white uppercase tracking-widest shadow-md">
            {badge}
          </span>
        )}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-white/90">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8 py-6 text-lg bg-white text-black hover:bg-white/90" asChild>
            <a href={primaryCtaHref}>{primaryCtaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-white text-white hover:bg-white/10" asChild>
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
