import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-lg text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-extrabold">Page Not Found</h1>
        <p className="text-base md:text-lg text-muted-foreground">
          The page you are looking for does not exist. Let us get you back to the showroom.
        </p>
        <Button asChild className="rounded-md px-8 py-4 font-bold uppercase tracking-wider">
          <a href="/">Return Home</a>
        </Button>
      </div>
    </div>
  );
}
