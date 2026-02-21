import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  subtitle?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function CTABanner({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: Props) {
  return (
    <section className="w-full overflow-hidden rounded-lg bg-gradient-to-r from-black via-[#1a1a1a] to-[#D62828] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:flex md:items-center md:justify-between">
        <div className="space-y-3">
          <h2 className="text-3xl font-extrabold uppercase tracking-wider md:text-4xl">{title}</h2>
          {subtitle && <p className="text-sm text-white/70">{subtitle}</p>}
        </div>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-0">
          <Button className="bg-white text-black hover:bg-white/90" asChild>
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button className="border border-white/40 bg-transparent text-white hover:bg-white/10" asChild>
              <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
