export type Page = 'home' | 'services' | 'portfolio' | 'demo' | 'about' | 'contact' | 'dashboard';

export interface Project {
  id: string;
  title: string;
  category: 'shopify' | 'wordpress' | 'ecommerce' | 'leads';
  categoryLabel: string;
  image: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  client: string;
  country: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  technologies: string[];
  startingPrice: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  country: string;
  avatarText: string;
  rating: number;
  text: string;
  contractType: string;
  projectResult: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  billingPeriod: string;
  description: string;
  popular?: boolean;
  features: string[];
  bestFor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
