import Link from "next/link";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FooterLink {
  label: string;
  href: string;
}

interface Props {
  brand: string;
  navItems: FooterLink[];
  contactItems: { label: string; value: string }[];
  hours: string[];
  socialLinks: { label: string; href: string }[];
  newsletterLabel?: string;
}

export default function Footer({
  brand,
  navItems,
  contactItems,
  hours,
  socialLinks,
  newsletterLabel,
}: Props) {
  const iconMap: Record<string, JSX.Element> = {
    Instagram: <Instagram className="h-4 w-4" />,
    Facebook: <Facebook className="h-4 w-4" />,
    YouTube: <Youtube className="h-4 w-4" />,
  };

  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-extrabold uppercase tracking-wider">{brand}</h3>
            <p className="mt-4 text-sm text-white/70">
              Premium detailing services that keep your vehicle showroom fresh. Precision care,
              ceramic protection, and a gloss that turns heads.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 hover:text-white"
                >
                  {iconMap[link.label] ?? <span className="text-xs">{link.label[0]}</span>}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/80">Navigation</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/70 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/80">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {contactItems.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  {item.label === "Email" && <Mail className="h-4 w-4 text-[#C0C0C0]" />}
                  {item.label === "Phone" && <Phone className="h-4 w-4 text-[#C0C0C0]" />}
                  {item.label === "Location" && <MapPin className="h-4 w-4 text-[#C0C0C0]" />}
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/80">Hours</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {hours.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {newsletterLabel && (
              <div className="mt-6 space-y-2">
                <p className="text-sm font-semibold text-white">{newsletterLabel}</p>
                <div className="flex gap-2">
                  <Input
                    placeholder="Email address"
                    className="border-white/20 bg-black/40 text-white placeholder:text-white/40"
                  />
                  <Button className="bg-[#D62828] text-white">Join</Button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50">
          © 2024 {brand}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
