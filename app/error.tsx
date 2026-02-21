'use client';

import { Button } from '@/components/ui/button';

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-lg text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-extrabold">Something went wrong</h1>
        <p className="text-base md:text-lg text-muted-foreground">
          We hit a bump in the road. Please try again or come back in a few minutes.
        </p>
        <Button onClick={reset} className="rounded-md px-8 py-4 font-bold uppercase tracking-wider">
          Try Again
        </Button>
      </div>
    </div>
  );
}
