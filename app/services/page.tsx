import HeroImage from '@/components/HeroImage';
import PricingTable from '@/components/PricingTable';

export default function ServicesPage() {
  return (
    <main className="flex flex-col">
      <section className="min-h-[70vh] bg-black">
        <HeroImage
          headline="Our Detailing Services"
          subheadline="Professional-grade treatments for every type of vehicle"
          ctaLabel="Get a Quote"
          ctaHref="/contact"
          imageSrc="/images/hero.jpg"
        />
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <PricingTable
            headline="Exterior Services"
            subheadline="Protect your paint and restore a mirror finish"
            tiers={[
              {
                name: 'Hand Wash & Dry',
                price: '$35',
                description: 'Two-bucket method wash, microfiber dry, tire dressing',
                features: ['Safe wash process', 'Tire dressing', 'Streak-free glass'],
                ctaLabel: 'Book Now',
                ctaHref: '/contact',
              },
              {
                name: 'Clay Bar Treatment',
                price: '$75',
                description: 'Removes contaminants and restores smooth paint surface',
                features: ['Decontamination', 'Gloss enhancement', 'Paint prep'],
                ctaLabel: 'Book Now',
                ctaHref: '/contact',
              },
              {
                name: 'Paint Correction',
                price: '$350+',
                description: 'Multi-stage polishing to remove swirls, scratches, and oxidation',
                features: ['Multi-stage polish', 'Swirl removal', 'Deep gloss'],
                ctaLabel: 'Book Now',
                ctaHref: '/contact',
                highlighted: true,
              },
              {
                name: 'Ceramic Coating',
                price: '$599-$1,499',
                description: 'Professional 9H ceramic coating with 3-5 year protection',
                features: ['Paint correction', '3-5 year protection', 'Hydrophobic finish'],
                ctaLabel: 'Book Now',
                ctaHref: '/contact',
              },
            ]}
          />

          <PricingTable
            headline="Interior Services"
            subheadline="Restore comfort, cleanliness, and that new car smell"
            tiers={[
              {
                name: 'Interior Vacuum & Wipe',
                price: '$45',
                description: 'Full vacuum, dashboard wipe, window cleaning',
                features: ['Full vacuum', 'Dash wipe', 'Glass cleaning'],
                ctaLabel: 'Book Now',
                ctaHref: '/contact',
              },
              {
                name: 'Leather Treatment',
                price: '$95',
                description: 'Deep clean, condition, and protect all leather surfaces',
                features: ['Leather deep clean', 'Conditioning', 'UV protection'],
                ctaLabel: 'Book Now',
                ctaHref: '/contact',
              },
              {
                name: 'Steam Cleaning',
                price: '$125',
                description: 'Sanitize and deep clean all interior surfaces',
                features: ['Sanitization', 'Stain removal', 'Odor control'],
                ctaLabel: 'Book Now',
                ctaHref: '/contact',
                highlighted: true,
              },
              {
                name: 'Odor Elimination',
                price: '$75',
                description: 'Ozone treatment to permanently remove odors',
                features: ['Ozone treatment', 'Cabin refresh', 'Air quality boost'],
                ctaLabel: 'Book Now',
                ctaHref: '/contact',
              },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
