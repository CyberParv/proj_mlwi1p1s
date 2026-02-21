export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="space-y-4 text-center">
        <div className="h-12 w-12 animate-pulse rounded-full bg-primary/70 mx-auto" />
        <p className="text-lg font-semibold">Preparing your showroom shine...</p>
      </div>
    </div>
  );
}
