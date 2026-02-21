import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

interface SocialLink {
  label: string;
  href: string;
}

interface Props {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  socialLinks?: SocialLink[];
}

export default function TeamMember({ imageSrc, title, subtitle, description, socialLinks }: Props) {
  const iconMap: Record<string, JSX.Element> = {
    Instagram: <Instagram className="h-4 w-4" />,
    LinkedIn: <Linkedin className="h-4 w-4" />,
    Twitter: <Twitter className="h-4 w-4" />,
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-[#0A0A0A] text-white">
      <div className="relative h-64 w-full">
        <Image src={imageSrc} alt={title} width={800} height={600} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex gap-3">
            {socialLinks?.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white"
              >
                {iconMap[link.label] ?? <span className="text-xs">{link.label[0]}</span>}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-2 p-6">
        <h3 className="text-lg font-bold uppercase tracking-wider">{title}</h3>
        <p className="text-xs uppercase tracking-wider text-white/60">{subtitle}</p>
        <p className="text-sm text-white/70">{description}</p>
      </div>
    </div>
  );
}
