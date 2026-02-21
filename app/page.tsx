import Image from 'next/image';
import { Button } from '@/components/ui/button';
import HeroImage from '@/components/blocks/HeroImage';
import FeaturesGrid from '@/components/blocks/FeaturesGrid';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import ProcessStep from '@/components/ProcessStep';
import CTABanner from '@/components/CTABanner';
import ContactForm from '@/components/blocks/ContactForm';
import { BadgeCheck, Award, Truck, ShieldCheck, Droplets, Sparkles, Car, Shield } from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      title: 'Express Wash',
      price: '$49',
      subtitle: '30 min',
      description: 'Exterior hand wash, tire shine, window cleaning, and quick interior vacuum',
      icon: <Droplets className="h-6 w-6 text-primary" />,
      popular: false,
    },
    {
      title: 'Interior Detail',
      price: '$149',
      subtitle: '2-3 hours',
      description: 'Deep vacuum, leather conditioning, dashboard treatment, odor elimination, and steam cleaning',
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      popular: false,
    },
    {
      title: 'Full Detail',
      price: '$299',
      subtitle: '4-5 hours',
      description: 'Complete interior and exterior detail with clay bar treatment, polish, and wax protection',
      icon: <Car className="h-6 w-6 text-primary" />,
      popular: true,
    },
    {
      title: 'Ceramic Coating',
      price: '$599+',
      subtitle: '1-2 days',
      description: 'Professional-grade ceramic coating with paint correction, 3-year protection guarantee',
      icon: <Shield className="h-6 w-6 text-primary" />,
      popular: false,
    },
  ];

  const features = [
    {
      icon: <BadgeCheck className="h-6 w-6 text-primary" />,
      title: 'Premium Products Only',
      subtitle: "We use only top-tier detailing products from brands like Gtechniq, Chemical Guys, and Meguiar's",
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: 'Certified Technicians',
      subtitle: 'Our team is IDA-certified with 10+ years of combined experience in professional detailing',
    },
    {
      icon: <Truck className="h-6 w-6 text-primary" />,
      title: 'Mobile Service Available',
      subtitle: "Can't come to us? We'll bring the detail shop to your home or office",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: 'Satisfaction Guaranteed',
      subtitle: "Not happy with the results? We'll re-detail your vehicle at no extra charge",
    },
  ];

  const testimonials = [
    {
      name: 'Marcus Johnson',
      vehicle: '2023 Mercedes-AMG GT',
      rating: 5,
      quote: 'These guys are artists. My AMG looks better than when I drove it off the lot. The ceramic coating they applied is absolutely flawless.',
      imageSrc: '/images/feature.jpg',
    },
    {
      name: 'Sarah Chen',
      vehicle: '2022 Range Rover Sport',
      rating: 5,
      quote: "I've tried every detailer in town. Detailing Bros is on another level. The attention to detail on my interior was incredible.",
      imageSrc: '/images/feature.jpg',
    },
    {
      name: 'David Rodriguez',
      vehicle: '1969 Chevrolet Camaro SS',
      rating: 5,
      quote: 'Trusted them with my classic Camaro and they exceeded every expectation. True professionals who respect the craft.',
      imageSrc: '/images/feature.jpg',
    },
  ];

  const steps = [
    {
      step: 1,
      title: 'Book Online or Call',
      description: 'Choose your package and pick a time that works for you. Same-day appointments often available.',
    },
    {
      step: 2,
      title: 'Drop Off or We Come to You',
      description: 'Bring your vehicle to our shop or schedule our mobile service at your location.',
    },
    {
      step: 3,
      title: 'We Work Our Magic',
      description: 'Our certified technicians meticulously detail every inch of your vehicle.',
    },
    {
      step: 4,
      title: 'Drive Away Impressed',
      description: 'Pick up your showroom-ready ride and enjoy that new car feeling.',
    },
  ];

  return (
    <main className="flex flex-col">
      <section className="min-h-screen bg-black">
        <HeroImage
          badge="⭐ 5-Star Rated • 2,500+ Cars Detailed"
          title="Your Ride Deserves The Best"
          subtitle="Professional auto detailing services that bring out the showroom shine in every vehicle. Trusted by car enthusiasts across the city."
          primaryCtaLabel="Book Your Detail"
          primaryCtaHref="/contact"
          secondaryCtaLabel="View Our Work"
          secondaryCtaHref="/gallery"
          imageSrc="/images/hero.jpg"
        />
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 md:mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">Detailing Packages</h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              From quick washes to full ceramic coatings, we&apos;ve got your ride covered
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                price={service.price}
                subtitle={service.subtitle}
                description={service.description}
                icon={service.icon}
                popular={service.popular}
                ctaLabel="Learn More"
                ctaHref="/services"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#0A0A0A] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <FeaturesGrid
            badge="Why Us"
            title="Why Choose Detailing Bros"
            subtitle="We treat every car like it's our own"
            items={features}
          />
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 md:mb-14 flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl font-extrabold">Our Recent Work</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Before &amp; after transformations that speak for themselves
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            <BeforeAfterSlider
              title="2023 BMW M4 Competition"
              beforeImageSrc="/images/gallery-1.jpg"
              afterImageSrc="/images/gallery-2.jpg"
            />
            <BeforeAfterSlider
              title="2022 Tesla Model 3"
              beforeImageSrc="/images/gallery-2.jpg"
              afterImageSrc="/images/gallery-3.jpg"
            />
          </div>
          <div className="mt-10">
            <Button asChild className="rounded-md px-8 py-4 font-bold uppercase tracking-wider">
              <a href="/gallery">View Full Gallery</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#0A0A0A] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 md:mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold">What Our Customers Say</h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Join thousands of satisfied car owners
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                vehicle={testimonial.vehicle}
                rating={testimonial.rating}
                quote={testimonial.quote}
                imageSrc={testimonial.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 md:mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold">How It Works</h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">Getting your car detailed is easy</p>
          </div>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => (
              <ProcessStep key={step.title} step={step.step} title={step.title} description={step.description} isLast={idx === steps.length - 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-6">
          <CTABanner
            title="Ready to Transform Your Ride?"
            subtitle="Book your appointment today and get 15% off your first detail"
            ctaLabel="Book Now"
            ctaHref="/contact"
            secondaryCtaLabel="Call (555) 234-5678"
            secondaryCtaHref="tel:5552345678"
          />
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-extrabold">Visit Our Shop</h2>
              <p className="text-base md:text-lg text-muted-foreground">
                4521 Motor Avenue, Suite 100, Los Angeles, CA 90034
              </p>
              <div className="space-y-2 text-sm md:text-base">
                <p className="font-semibold text-foreground">Phone: (555) 234-5678</p>
                <p className="font-semibold text-foreground">Email: info@detailingbros.com</p>
                <div className="text-muted-foreground">
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 5:00 PM</p>
                  <p>Sun: By Appointment Only</p>
                </div>
              </div>
            </div>
            <div className="relative h-72 md:h-96 w-full rounded-lg overflow-hidden border border-border/20">
              <Image src="/images/gallery-3.jpg" alt="Detailing Bros shop exterior" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#0A0A0A] text-white">
        <div className="mx-auto max-w-7xl px-6">
          <ContactForm title="Ready to Book?" subtitle="Tell us about your vehicle and we will confirm your appointment." />
        </div>
      </section>
    </main>
  );
}
