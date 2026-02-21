'use client';
import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

interface Props {
  logo: string;
  navItems: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function Navbar({ logo, navItems, ctaLabel, ctaHref }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/30 bg-black/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-white">
          <span className="text-xl font-extrabold uppercase tracking-wider">{logo}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-wide text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          {ctaLabel && ctaHref && (
            <Button className="bg-[#D62828] text-white hover:bg-[#D62828]/90" asChild>
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          )}
        </div>

        <button
          aria-label="Toggle navigation"
          className="rounded-md p-2 text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-y-0 right-0 z-40 w-72 transform bg-black p-6 transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold uppercase text-white">{logo}</span>
          <button className="text-white" onClick={() => setOpen(false)} aria-label="Close menu">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-wide text-white/80"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {ctaLabel && ctaHref && (
            <Button className="mt-4 w-full bg-[#D62828] text-white" asChild>
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
