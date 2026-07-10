import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const fallbackBusinessSettings = {
  id: "business",
  name: "Business Name",
  tagline: "Professional websites for small local businesses",
  seoTitle: "Business Name | Local Irish Business",
  seoDescription:
    "A modern, professional website template for small local Irish businesses.",
  email: "hello@example.ie",
  phone: "087 123 4567",
  location: "County Galway, Ireland",
};

const businessSettings = defineCollection({
  loader: file("src/content/settings/business.json", {
    parser: (text) => {
      try {
        return [{ id: "business", ...JSON.parse(text) }];
      } catch {
        return [fallbackBusinessSettings];
      }
    },
  }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    email: z.string(),
    phone: z.string(),
    location: z.string(),
  }),
});

export const collections = {
  businessSettings,
};
