import './globals.css';
import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-barlow',
});

export const metadata: Metadata = {
  title: 'Detailing Bros | Premium Auto Detailing in Los Angeles',
  description:
    'Professional auto detailing services in LA. Ceramic coatings, paint correction, interior detailing & more. 5-star rated with 2,500+ cars detailed. Book your appointment today!',
};

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const FOOTER_CONTACT_ITEMS = [
  { label: 'Email', value: 'info@detailingbros.com' },
  { label: 'Phone', value: '(555) 234-5678' },
  { label: 'Location', value: '4521 Motor Avenue, Suite 100, Los Angeles, CA 90034' },
];

const FOOTER_HOURS = [
  'Mon-Fri: 8:00 AM - 6:00 PM',
  'Sat: 9:00 AM - 5:00 PM',
  'Sun: By Appointment Only',
];

const FOOTER_SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com/detailingbros' },
  { label: 'Facebook', href: 'https://facebook.com/detailingbros' },
  { label: 'YouTube', href: 'https://youtube.com/detailingbros' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={barlow.variable}>
      <body className="bg-background text-foreground antialiased">
        <Navbar
          logo="Detailing Bros"
          navItems={NAV_ITEMS}
          ctaLabel="Book Now"
          ctaHref="/contact"
        />
        {children}
        <Footer
          brand="Detailing Bros"
          navItems={NAV_ITEMS}
          contactItems={FOOTER_CONTACT_ITEMS}
          hours={FOOTER_HOURS}
          socialLinks={FOOTER_SOCIAL_LINKS}
        />
      </body>
    </html>
  );
}
