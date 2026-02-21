'use client';
import * as React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  imageSrc: string;
  title: string;
  subtitle: string;
}

export default function GalleryImage({ imageSrc, title, subtitle }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button
        className="group relative w-full overflow-hidden rounded-lg border border-white/10 text-left"
        onClick={() => setOpen(true)}
      >
        <Image src={imageSrc} alt={title} width={1600} height={900} className="h-64 w-full object-cover" />
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm font-semibold uppercase tracking-wide">{title}</p>
          <p className="text-xs text-white/70">{subtitle}</p>
        </div>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              className="absolute right-4 top-4 rounded-full bg-black/60 p-2 text-white"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <Image
              src={imageSrc}
              alt={title}
              width={1600}
              height={900}
              className={cn("h-auto w-full rounded-lg object-cover")}
            />
            <div className="mt-4 text-white">
              <p className="text-lg font-semibold uppercase">{title}</p>
              <p className="text-sm text-white/70">{subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
