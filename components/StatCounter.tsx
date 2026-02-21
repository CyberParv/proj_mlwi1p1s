'use client';
import * as React from "react";
import { cn } from "@/lib/utils";

interface StatItem {
  value: string;
  label: string;
}

interface Props {
  items: StatItem[];
  className?: string;
}

export default function StatCounter({ items, className }: Props) {
  return (
    <div className={cn("grid gap-6 text-center md:grid-cols-4", className)}>
      {items.map((stat) => (
        <Counter key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}

function Counter({ value, label }: StatItem) {
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = Math.max(1, Math.floor(numericValue / 60));
    const interval = window.setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        start = numericValue;
        window.clearInterval(interval);
      }
      setCount(start);
    }, duration / 60);
    return () => window.clearInterval(interval);
  }, [numericValue]);

  return (
    <div className="space-y-2">
      <p className="text-3xl font-extrabold text-white">
        {count}
        {suffix}
      </p>
      <p className="text-xs uppercase tracking-wider text-white/60">{label}</p>
    </div>
  );
}
