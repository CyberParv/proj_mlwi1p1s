import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Props {
  imageSrc: string;
  name: string;
  vehicle: string;
  rating: number;
  quote: string;
}

export default function TestimonialCard({ imageSrc, name, vehicle, rating, quote }: Props) {
  return (
    <Card className="group border-white/10 bg-[#0A0A0A] text-white transition-all duration-300 hover:border-[#C0C0C0]/60">
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-full">
            <Image src={imageSrc} alt={name} width={800} height={600} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide">{name}</p>
            <p className="text-xs text-white/60">{vehicle}</p>
            <div className="mt-2 flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={cn(
                    "h-4 w-4",
                    index < rating ? "fill-[#D62828] text-[#D62828]" : "text-white/30"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm text-white/70">{quote}</p>
      </CardContent>
    </Card>
  );
}
