import Image from 'next/image';
import HeroImage from '@/components/HeroImage';
import TeamMember from '@/components/TeamMember';
import StatCounter from '@/components/StatCounter';

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <section className="min-h-[70vh] bg-black">
        <HeroImage
          headline="Meet The Bros"
          subheadline="Passionate detailers dedicated to automotive perfection"
          ctaLabel="Join Our Team"
          ctaHref="/contact"
          imageSrc="/images/hero.jpg"
        />
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold">Our Story</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Detailing Bros started in 2018 when brothers Mike and Tony Castellano turned their weekend passion into a
              full-time obsession. What began as detailing cars in their parents&apos; driveway has grown into one of
              LA&apos;s most trusted detailing shops. We&apos;ve detailed over 2,500 vehicles—from daily drivers to
              million-dollar exotics—and we treat every single one with the same level of care and precision.
            </p>
            <StatCounter
              stats={[
                { value: '2,500+', label: 'Cars Detailed' },
                { value: '5', label: 'Years Experience' },
                { value: '4.9', label: 'Google Rating' },
              ]}
            />
          </div>
          <div className="relative h-80 md:h-[420px] w-full rounded-lg overflow-hidden border border-border/20">
            <Image src="/images/about.jpg" alt="Detailing Bros founders" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#0A0A0A] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 md:mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold">The Team</h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Skilled professionals who live for the perfect finish
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TeamMember
              name="Mike Castellano"
              role="Co-Founder & Lead Detailer"
              bio="IDA Certified, specializes in paint correction and ceramic coatings"
              imageSrc="/images/team.jpg"
            />
            <TeamMember
              name="Tony Castellano"
              role="Co-Founder & Operations"
              bio="Manages the shop and handles all customer relationships"
              imageSrc="/images/team.jpg"
            />
            <TeamMember
              name="Jessica Park"
              role="Senior Detailer"
              bio="Interior specialist with 7 years of experience"
              imageSrc="/images/team.jpg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
