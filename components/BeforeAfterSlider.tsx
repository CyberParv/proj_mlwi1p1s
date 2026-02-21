'use client';
import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  beforeImageSrc: string;
  afterImageSrc: string;
  title?: string;
}

export default function BeforeAfterSlider({ beforeImageSrc, afterImageSrc, title }: Props) {
  const [value, setValue] = React.useState(50);

  return (
    <div className="w-full space-y-4">
      {title && <h3 className="text-lg font-bold uppercase tracking-wider text-white">{title}</h3>}
      <div className="relative h-[320px] overflow-hidden rounded-lg border border-white/10 bg-black md:h-[420px]">
        <Image src={afterImageSrc} alt="After" width={1600} height={900} className="h-full w-full object-cover" />
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: value + "%" }}
        >
          <Image src={beforeImageSrc} alt="Before" width={1600} height={900} className="h-full w-full object-cover" />
        </div>
        <div
          className="absolute inset-y-0"
          style={{ left: value + "%" }}
        >
          <div className="h-full w-1 bg-[#D62828]" />
          <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-black/80" />
        </div>
      </div>
      <input
        type="range"
        min={10}
        max={90}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        className={cn(
          "h-2 w-full cursor-pointer appearance-none rounded-full bg-white/20",
          "[&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#D62828]"
        )}
      />
    </div>
  );
}
