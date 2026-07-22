export interface ContactDetails {
  phone: string;
  email: string;
  address: string;
}

export interface OpeningHoursItem {
  label: string;
  value: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  linkedin: string;
  twitterHandle?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  href: string;
}

export interface GalleryItem {
  title: string;
  image: string;
  alt: string;
  href?: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactCtaConfig {
  eyebrow: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
}

export interface ContactFormConfig {
  eyebrow: string;
  title: string;
  description: string;
}

export interface AboutPageValue {
  title: string;
  description: string;
}

export interface AboutPageConfig {
  eyebrow: string;
  title: string;
  description: string;
  introTitle: string;
  intro: string;
  values: AboutPageValue[];
}

export interface ServicesPageStep {
  title: string;
  description: string;
}

export interface ServicesPageConfig {
  eyebrow: string;
  title: string;
  description: string;
  processTitle: string;
  processDescription: string;
  process: ServicesPageStep[];
}

export interface GalleryPageConfig {
  eyebrow: string;
  title: string;
  description: string;
  featuredTitle: string;
  featuredDescription: string;
}

export interface ContactPageConfig {
  eyebrow: string;
  title: string;
  description: string;
  detailsTitle: string;
  detailsDescription: string;
  hoursTitle: string;
  hoursDescription: string;
}

export interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  image: string;
  locale: string;
  siteName: string;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  siteUrl: string;
  contact: ContactDetails;
  openingHours: OpeningHoursItem[];
  social: SocialLinks;
  services: ServiceItem[];
  gallery: GalleryItem[];
  testimonials: TestimonialItem[];
  faqs: FaqItem[];
  contactCta: ContactCtaConfig;
  contactForm: ContactFormConfig;
  aboutPage: AboutPageConfig;
  servicesPage: ServicesPageConfig;
  galleryPage: GalleryPageConfig;
  contactPage: ContactPageConfig;
  theme: ThemeConfig;
  seo: SeoConfig;
}
