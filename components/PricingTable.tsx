import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  duration: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
}

interface Props {
  title: string;
  subtitle?: string;
  items: PricingTier[];
}

export default function PricingTable({ title, subtitle, items }: Props) {
  return (
    <section className="space-y-10">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold uppercase tracking-wider text-white">{title}</h2>
        {subtitle && <p className="mt-3 text-sm text-white/70">{subtitle}</p>}
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((tier) => (
          <Card
            key={tier.name}
            className={cn(
              "border-white/10 bg-[#0A0A0A] text-white",
              tier.highlighted && "border-[#D62828]/60 shadow-lg shadow-[#D62828]/20"
            )}
          >
            <CardHeader className="space-y-3">
              <h3 className="text-lg font-bold uppercase tracking-wider">{tier.name}</h3>
              <div>
                <p className="text-3xl font-extrabold text-[#C0C0C0]">{tier.price}</p>
                <p className="text-xs uppercase tracking-wider text-white/60">{tier.duration}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm text-white/70">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-[#D62828]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={cn(
                  "w-full",
                  tier.highlighted ? "bg-[#D62828] text-white" : "bg-white text-black"
                )}
                asChild
              >
                <Link href={tier.ctaHref}>{tier.ctaLabel}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
