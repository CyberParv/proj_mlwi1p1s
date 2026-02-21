import Image from 'next/image';
import HeroImage from '@/components/HeroImage';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      <section className="min-h-[70vh] bg-black">
        <HeroImage
          headline="Book Your Detail"
          subheadline="Get in touch to schedule your appointment or request a custom quote"
          ctaLabel="Call Now"
          ctaHref="tel:5552345678"
          imageSrc="/images/hero.jpg"
        />
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <ContactForm
            headline="Request Appointment"
            subheadline="Tell us about your vehicle and the service you need. We will respond within one business day."
          />
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#0A0A0A] text-white">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold">Contact Information</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              4521 Motor Avenue, Suite 100, Los Angeles, CA 90034
            </p>
            <div className="space-y-2 text-sm md:text-base">
              <p className="font-semibold text-white">Phone: (555) 234-5678</p>
              <p className="font-semibold text-white">Email: info@detailingbros.com</p>
              <div className="text-muted-foreground">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 5:00 PM</p>
                <p>Sunday: By Appointment Only</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary" className="rounded-md px-8 py-4 font-bold uppercase tracking-wider">
                <a href="https://instagram.com/detailingbros">Instagram</a>
              </Button>
              <Button asChild variant="secondary" className="rounded-md px-8 py-4 font-bold uppercase tracking-wider">
                <a href="https://facebook.com/detailingbros">Facebook</a>
              </Button>
              <Button asChild variant="secondary" className="rounded-md px-8 py-4 font-bold uppercase tracking-wider">
                <a href="https://youtube.com/detailingbros">YouTube</a>
              </Button>
            </div>
          </div>
          <div className="relative h-72 md:h-96 w-full rounded-lg overflow-hidden border border-border/20">
            <Image src="/images/gallery-1.jpg" alt="Detailing Bros shop location" fill className="object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
}
