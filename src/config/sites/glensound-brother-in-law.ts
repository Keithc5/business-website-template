import type { BusinessConfig } from "@config/types";
import { genericSite } from "@config/sites/generic";

export const glensoundBrotherInLawSite = {
  ...genericSite,
  name: "Glensound",
  tagline: "Sound, lighting, and event production support",
  contact: {
    phone: "000 000 0000",
    email: "hello@example.com",
    address: "County Galway, Ireland",
  },
  services: [
    {
      title: "Sound Hire",
      description:
        "Placeholder content for sound system hire, setup, and support for local events.",
      href: "/services",
    },
    {
      title: "Lighting Support",
      description:
        "Placeholder content for practical lighting options for celebrations, community events, and venues.",
      href: "/services",
    },
    {
      title: "Event Production",
      description:
        "Placeholder content for planning, setup, and on-the-day technical event support.",
      href: "/services",
    },
  ],
  testimonials: [
    {
      quote:
        "Placeholder testimonial for a clear, helpful event production service.",
      name: "Customer Name",
      role: "Event customer",
    },
    {
      quote:
        "Placeholder testimonial for reliable sound and lighting support.",
      name: "Client Name",
      role: "Local organiser",
    },
    {
      quote:
        "Placeholder testimonial for straightforward communication and setup.",
      name: "Reviewer Name",
      role: "Repeat customer",
    },
  ],
  aboutPage: {
    ...genericSite.aboutPage,
    title: "Sound and lighting support for local events",
    description:
      "Placeholder copy for a Glensound website focused on event sound, lighting, equipment hire, and production support.",
    introTitle: "Practical technical support for events",
    intro:
      "Replace this placeholder copy with the story, service area, experience, and event types for this specific Glensound business.",
  },
  servicesPage: {
    ...genericSite.servicesPage,
    title: "Sound, lighting, and production services",
    description:
      "Use this page to explain event support, equipment hire options, setup services, and how customers can enquire.",
  },
  galleryPage: {
    ...genericSite.galleryPage,
    title: "Event setups and technical support",
    description:
      "Use this page to show sound systems, lighting setups, venue work, and event production examples when real images are available.",
  },
  seo: {
    title: "Glensound | Sound, Lighting & Event Production",
    description:
      "Placeholder website copy for a Glensound sound, lighting, and event production business.",
  },
} satisfies BusinessConfig;
