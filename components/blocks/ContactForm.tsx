'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

interface ContactInfo {
  icon?: string;
  label: string;
  value: string;
}

interface ContactFormProps {
  title: string;
  subtitle?: string;
  items?: ContactInfo[];
}

export default function ContactForm({
  title = 'Talk to Our Performance Advisors',
  subtitle = 'Request inventory details, service appointments, or financing guidance from our team.',
  items = [
    { icon: '📞', label: 'Sales & Service', value: '(555) 012-4872' },
    { icon: '✉️', label: 'Email', value: 'concierge@apexmotors.com' },
    { icon: '📍', label: 'Showroom', value: '942 Speedway Blvd, Austin, TX' },
    { icon: '🕒', label: 'Hours', value: 'Mon–Sat: 9am–7pm, Sun: Closed' },
  ],
}: ContactFormProps) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card className="border bg-background">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Vehicle, service, or financing" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about the vehicle or service you need..." rows={5} />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          {items && items.length > 0 && (
            <div className="flex flex-col justify-center space-y-8">
              {items.map(function (info, i) {
                return (
                  <div key={i} className="flex items-start gap-4">
                    {info.icon && <span className="text-2xl">{info.icon}</span>}
                    <div>
                      <p className="font-semibold text-foreground">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
