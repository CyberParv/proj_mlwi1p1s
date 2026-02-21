import { Card, CardContent } from '@/components/ui/card';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

interface FeaturesGridProps {
  badge?: string;
  title: string;
  subtitle?: string;
  items: FeatureItem[];
}

export default function FeaturesGrid({
  badge = 'Built for Drivers',
  title = 'Automotive Services That Keep You Ahead',
  subtitle = 'From precision inspections to performance upgrades, every detail is engineered for confidence.',
  items = [
    {
      icon: '🏁',
      title: 'Performance Tuning',
      subtitle: 'ECU calibration, exhaust upgrades, and suspension tuning for razor-sharp handling.',
    },
    {
      icon: '✅',
      title: 'Certified Inspections',
      subtitle: 'Multi-point checks on every vehicle with transparent service history and reports.',
    },
    {
      icon: '💳',
      title: 'Financing Specialists',
      subtitle: 'Flexible terms and rapid approvals tailored to high-performance vehicles.',
    },
  ],
}: FeaturesGridProps) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map(function (feature, index) {
            return (
              <Card key={index} className="border-0 bg-background shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.subtitle}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
