export type NavItem = {
  label: string;
  href: string;
};

export type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatarUrl?: string;
  rating?: number;
};

export type StatItem = {
  value: string;
  label: string;
};

export type PricingTier = {
  name: string;
  price: string;
  description?: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
};

export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  avatarUrl?: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type ContactField = {
  name: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  label: string;
  required?: boolean;
  options?: string[];
};
