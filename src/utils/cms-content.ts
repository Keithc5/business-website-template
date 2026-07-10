import { getEntry } from "astro:content";
import { business } from "@config/activeSite";

interface CmsBusinessSettings {
  name: string;
  tagline: string;
  seoTitle: string;
  seoDescription: string;
  email: string;
  phone: string;
  location: string;
}

export const fallbackCmsBusinessSettings: CmsBusinessSettings = {
  name: business.name,
  tagline: business.tagline,
  seoTitle: business.seo.title,
  seoDescription: business.seo.description,
  email: business.contact.email,
  phone: business.contact.phone,
  location: business.contact.address,
};

export const getCmsBusinessSettings = async () => {
  try {
    const entry = await getEntry("businessSettings", "business");

    return entry?.data ?? fallbackCmsBusinessSettings;
  } catch {
    return fallbackCmsBusinessSettings;
  }
};
