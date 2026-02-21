import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  price: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  popular?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function ServiceCard({
  title,
  price,
  subtitle,
  description,
  icon,
  popular,
  ctaLabel = "Learn More",
  ctaHref = "/services",
}: Props) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden border-border/20 bg-[#0A0A0A] text-white shadow-lg",
        popular ? "border-[#D62828]/60 shadow-[#D62828]/20" : "border-white/10"
      )}
    >
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="rounded-lg bg-white/10 p-3 text-[#C0C0C0]">{icon}</div>
          <Badge className="bg-white/10 text-white/80" variant="outline">
            {price}
          </Badge>
        </div>
        <div>
          <h3 className="text-xl font-bold uppercase tracking-wider">{title}</h3>
          <p className="text-xs uppercase tracking-wider text-white/60">{subtitle}</p>
        </div>
        {popular && (
          <Badge className="w-fit bg-[#D62828] text-white" variant="default">
            Most Popular
          </Badge>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-white/70">{description}</p>
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#C0C0C0] hover:text-white"
        >
          {ctaLabel} <ArrowUpRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
