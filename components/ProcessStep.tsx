import { cn } from "@/lib/utils";

interface Props {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function ProcessStep({ step, title, description, isLast }: Props) {
  return (
    <div className="relative flex gap-4">
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C0C0C0]/50 bg-black text-lg font-bold text-white">
          {step}
        </div>
        <div className={cn("mt-2 h-full w-px bg-white/20", isLast && "hidden")} />
      </div>
      <div className="pb-8">
        <h3 className="text-lg font-bold uppercase tracking-wider text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{description}</p>
      </div>
    </div>
  );
}
