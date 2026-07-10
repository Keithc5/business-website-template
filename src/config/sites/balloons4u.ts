import type { BusinessConfig } from "@config/types";
import { genericSite } from "@config/sites/generic";

export const balloons4uSite = {
  ...genericSite,
  name: "Balloons4U",
  tagline: "Balloon decor for celebrations, events, and displays",
  contact: {
    phone: "000 000 0000",
    email: "hello@example.com",
    address: "County Galway, Ireland",
  },
  services: [
    {
      title: "Balloon Decor",
      description:
        "Placeholder content for balloon displays for birthdays, parties, launches, and celebrations.",
      href: "/services",
    },
    {
      title: "Personalised Balloons",
      description:
        "Placeholder content for customised balloons, names, colours, themes, and celebration messages.",
      href: "/services",
    },
    {
      title: "Event Displays",
      description:
        "Placeholder content for balloon arches, feature displays, and setup support for special occasions.",
      href: "/services",
    },
  ],
  testimonials: [
    {
      quote:
        "Placeholder testimonial for a colourful and well-organised balloon display.",
      name: "Customer Name",
      role: "Celebration customer",
    },
    {
      quote:
        "Placeholder testimonial for helpful planning and a lovely event setup.",
      name: "Client Name",
      role: "Party organiser",
    },
    {
      quote:
        "Placeholder testimonial for friendly service and personalised details.",
      name: "Reviewer Name",
      role: "Repeat customer",
    },
  ],
  aboutPage: {
    ...genericSite.aboutPage,
    title: "Balloon decor for memorable celebrations",
    description:
      "Placeholder copy for a Balloons4U website focused on balloon decor, personalised balloons, and event displays.",
    introTitle: "Celebration displays shaped around the occasion",
    intro:
      "Replace this placeholder copy with the story, style, service area, and event types for Balloons4U.",
  },
  servicesPage: {
    ...genericSite.servicesPage,
    title: "Balloon decor and celebration services",
    description:
      "Use this page to explain balloon decor options, personalised displays, event setup, and how customers can enquire.",
  },
  galleryPage: {
    ...genericSite.galleryPage,
    title: "Celebration displays and balloon decor",
    description:
      "Use this page to show real balloon arrangements, colours, themes, and event displays when available.",
  },
  seo: {
    title: "Balloons4U | Balloon Decor & Event Displays",
    description:
      "Placeholder website copy for a Balloons4U balloon decor and celebration display business.",
  },
} satisfies BusinessConfig;
