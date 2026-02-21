import HeroImage from '@/components/HeroImage';
import GalleryImage from '@/components/GalleryImage';

export default function GalleryPage() {
  const galleryItems = [
    {
      title: 'BMW M4 Ceramic Coating',
      subtitle: 'Full paint correction and Gtechniq Crystal Serum Ultra application',
      imageSrc: '/images/gallery-1.jpg',
    },
    {
      title: 'Tesla Model S Interior',
      subtitle: 'Complete interior restoration with leather treatment',
      imageSrc: '/images/gallery-2.jpg',
    },
    {
      title: 'Porsche 911 Full Detail',
      subtitle: 'Show car prep with multi-stage polish',
      imageSrc: '/images/gallery-3.jpg',
    },
    {
      title: 'Mercedes G-Wagon',
      subtitle: 'Heavy swirl removal and gloss enhancement',
      imageSrc: '/images/gallery-1.jpg',
    },
    {
      title: 'Classic Mustang Restoration',
      subtitle: 'Vintage paint revival and interior refresh',
      imageSrc: '/images/gallery-2.jpg',
    },
    {
      title: 'Audi RS7 Ceramic',
      subtitle: 'Nardo Gray perfection with ceramic protection',
      imageSrc: '/images/gallery-3.jpg',
    },
  ];

  return (
    <main className="flex flex-col">
      <section className="min-h-[70vh] bg-black">
        <HeroImage
          headline="Our Portfolio"
          subheadline="See the Detailing Bros difference in every transformation"
          ctaLabel="Book Your Detail"
          ctaHref="/contact"
          imageSrc="/images/hero.jpg"
        />
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 md:mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold">Gallery Highlights</h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Ceramic coatings, paint correction, and full detail transformations
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <GalleryImage
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                imageSrc={item.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
