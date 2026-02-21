import Link from 'next/link';

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterMultiColumnProps {
  brand: string;
  subtitle: string;
  columns: FooterColumn[];
  copyright?: string;
}

export default function FooterMultiColumn({
  brand = 'Apex Performance Motors',
  subtitle = 'Premium inventory, certified inspections, and high-performance service—built for drivers who demand more.',
  columns = [
    {
      title: 'Inventory',
      links: [
        { label: 'New Arrivals', href: '/inventory/new' },
        { label: 'Certified Pre-Owned', href: '/inventory/cpo' },
        { label: 'Performance Sedans', href: '/inventory/sedans' },
        { label: 'SUVs & Crossovers', href: '/inventory/suvs' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Performance Tuning', href: '/services/tuning' },
        { label: 'Detailing Studio', href: '/services/detailing' },
        { label: 'Maintenance Plans', href: '/services/maintenance' },
        { label: 'Warranty Coverage', href: '/services/warranty' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Apex', href: '/about' },
        { label: 'Financing', href: '/financing' },
        { label: 'Careers', href: '/careers' },
        { label: 'Testimonials', href: '/testimonials' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'Schedule Service', href: '/service' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Trade-In Value', href: '/trade-in' },
      ],
    },
  ],
  copyright,
}: FooterMultiColumnProps) {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold">{brand}</h3>
            <p className="mt-3 text-sm text-background/70">{subtitle}</p>
          </div>
          {columns.map(function (col) {
            return (
              <div key={col.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wider">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map(function (link) {
                    return (
                      <li key={link.href}>
                        <Link href={link.href} className="text-sm text-background/70 transition-colors hover:text-background">
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="my-8 h-px w-full bg-background/20" />
        <p className="text-center text-sm text-background/50">
          {copyright || ('© ' + new Date().getFullYear() + ' ' + brand + '. All rights reserved.')}
        </p>
      </div>
    </footer>
  );
}
