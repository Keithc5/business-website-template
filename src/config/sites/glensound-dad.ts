import type { BusinessConfig } from "@config/types";
import { genericSite } from "@config/sites/generic";

export const glensoundDadSite = {
  ...genericSite,
  name: "Glensound",
  tagline: "Event sound, lighting, and equipment hire",
  contact: {
    phone: "000 000 0000",
    email: "hello@example.com",
    address: "County Galway, Ireland",
  },
  services: [
    {
      title: "PA Systems",
      description:
        "Placeholder content for PA system hire and setup for talks, celebrations, performances, and community events.",
      href: "/services",
    },
    {
      title: "Event Lighting",
      description:
        "Placeholder content for lighting hire and setup for small and medium-sized events.",
      href: "/services",
    },
    {
      title: "Equipment Hire",
      description:
        "Placeholder content for practical sound and event equipment hire with clear setup guidance.",
      href: "/services",
    },
  ],
  testimonials: [
    {
      quote:
        "Placeholder testimonial for dependable sound equipment and support.",
      name: "Customer Name",
      role: "Local customer",
    },
    {
      quote:
        "Placeholder testimonial for a smooth setup and helpful communication.",
      name: "Client Name",
      role: "Event organiser",
    },
    {
      quote:
        "Placeholder testimonial for professional technical support at an event.",
      name: "Reviewer Name",
      role: "Repeat customer",
    },
  ],
  aboutPage: {
    ...genericSite.aboutPage,
    title: "Event sound and equipment hire",
    description:
      "Placeholder copy for a separate Glensound website focused on sound, lighting, and equipment hire.",
    introTitle: "Reliable event equipment support",
    intro:
      "Replace this placeholder copy with the details, services, and customer focus for this specific Glensound business.",
  },
  servicesPage: {
    ...genericSite.servicesPage,
    title: "Sound and lighting hire services",
    description:
      "Use this page to outline PA systems, lighting hire, equipment options, and enquiry steps.",
  },
  galleryPage: {
    ...genericSite.galleryPage,
    title: "Sound and lighting examples",
    description:
      "Use this page to show real equipment, event setups, and completed production work when available.",
  },
  seo: {
    title: "Glensound | Event Sound & Equipment Hire",
    description:
      "Placeholder website copy for a Glensound event sound, lighting, and equipment hire business.",
  },
} satisfies BusinessConfig;
