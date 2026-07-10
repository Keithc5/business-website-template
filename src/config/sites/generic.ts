import type { BusinessConfig } from "@config/types";

export const genericSite: BusinessConfig = {
  name: "Business Name",
  tagline: "Professional websites for small local businesses",

  contact: {
    phone: "087 123 4567",
    email: "hello@example.ie",
    address: "County Galway, Ireland",
  },

  openingHours: [
    { label: "Monday - Friday", value: "9:00 - 17:00" },
    { label: "Saturday", value: "By appointment" },
    { label: "Sunday", value: "Closed" },
  ],

  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },

  services: [
    {
      title: "Event Services",
      description:
        "Flexible support for launches, celebrations, community events, and business occasions.",
      href: "/services",
    },
    {
      title: "Equipment Hire",
      description:
        "Reliable hire options for customers who need practical equipment without long-term commitment.",
      href: "/services",
    },
    {
      title: "Consultation",
      description:
        "Clear guidance to help customers choose the right service, package, or next step.",
      href: "/services",
    },
  ],

  gallery: [
    {
      title: "Recent Project",
      image: "/images/gallery/recent-project.svg",
      alt: "Abstract placeholder for a completed business project",
      href: "/gallery",
    },
    {
      title: "Customer Setup",
      image: "/images/gallery/customer-setup.svg",
      alt: "Abstract placeholder for a customer setup",
      href: "/gallery",
    },
    {
      title: "Featured Work",
      image: "/images/gallery/featured-work.svg",
      alt: "Abstract placeholder for featured business work",
      href: "/gallery",
    },
  ],

  testimonials: [
    {
      quote:
        "The whole process was clear, professional, and easy from the first conversation.",
      name: "Customer Name",
      role: "Local customer",
    },
    {
      quote:
        "A reliable service with helpful communication and a result that suited exactly what we needed.",
      name: "Client Name",
      role: "Small business owner",
    },
    {
      quote:
        "Friendly, practical, and dependable. I would happily recommend this business to others.",
      name: "Reviewer Name",
      role: "Repeat customer",
    },
  ],

  faqs: [
    {
      question: "How do I adapt this template for my business?",
      answer:
        "Update the business configuration with your services, contact details, images, and customer-facing copy.",
    },
    {
      question: "Can the sections be reused on other pages?",
      answer:
        "Yes. Each section is built from reusable components and accepts data through props, so it can be placed wherever it is needed.",
    },
    {
      question: "Can this support different types of local businesses?",
      answer:
        "Yes. The content and imagery are intentionally generic so the same structure can support service providers, event companies, shops, and other small businesses.",
    },
  ],

  contactCta: {
    eyebrow: "Ready to talk?",
    title: "Start a conversation about your next project",
    description:
      "Use this section to invite enquiries, bookings, consultations, or quote requests.",
    primaryCtaLabel: "Contact us",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "View services",
    secondaryCtaHref: "/services",
  },

  contactForm: {
    eyebrow: "Contact",
    title: "Send us a message",
    description:
      "This form is ready for a future submission service. For now, it provides the reusable contact UI.",
  },

  aboutPage: {
    eyebrow: "About",
    title: "A flexible business website template",
    description:
      "Introduce the business, explain what makes it useful, and give visitors a clear reason to get in touch.",
    introTitle: "Built for clear, confident local business websites",
    intro:
      "This page is designed to work for a wide range of small businesses. Replace this copy with a short story about who the business serves, what it does well, and why customers trust it.",
    values: [
      {
        title: "Practical service",
        description:
          "A straightforward approach that helps customers understand their options and take the next step.",
      },
      {
        title: "Reliable communication",
        description:
          "Clear expectations, useful guidance, and timely responses throughout the customer journey.",
      },
      {
        title: "Local focus",
        description:
          "Content and structure that can be adapted for local audiences, service areas, and community needs.",
      },
    ],
  },

  servicesPage: {
    eyebrow: "Services",
    title: "Services that adapt to the business",
    description:
      "Use this page to explain what the business offers, who each service is for, and how customers can take the next step.",
    processTitle: "How it works",
    processDescription:
      "A simple process helps customers understand what to expect before they get in touch.",
    process: [
      {
        title: "Tell us what you need",
        description:
          "Start with a short enquiry so the business can understand the customer, service area, timeline, and goal.",
      },
      {
        title: "Choose the right option",
        description:
          "Recommend a suitable service, package, or next step based on the customer's priorities.",
      },
      {
        title: "Confirm the details",
        description:
          "Agree the scope, timing, and practical details so everything is clear before work begins.",
      },
    ],
  },

  galleryPage: {
    eyebrow: "Gallery",
    title: "A flexible showcase for recent work",
    description:
      "Use this page to present projects, products, events, installations, or customer outcomes with clear image captions.",
    featuredTitle: "Featured work",
    featuredDescription:
      "Highlight a recent project or important example here, then replace the placeholder image with real photography when available.",
  },

  contactPage: {
    eyebrow: "Contact",
    title: "Get in touch",
    description:
      "Use this page to help customers make an enquiry, request a quote, or ask a question.",
    detailsTitle: "Contact details",
    detailsDescription:
      "Replace these details with the best ways for customers to reach the business.",
    hoursTitle: "Opening hours",
    hoursDescription:
      "Show standard availability, appointment notes, or seasonal opening times.",
  },

  theme: {
    primary: "#111827",
    secondary: "#6B7280",
    accent: "#2563EB",
    background: "#FFFFFF",
  },

  seo: {
    title: "Business Name | Local Irish Business",
    description:
      "A modern, professional website template for small local Irish businesses.",
  },
};
