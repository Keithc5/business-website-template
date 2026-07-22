export const defaultSiteId = "generic";

export const siteUrls = {
  generic: "https://keithc5.github.io/business-website-template",
  "glensound-brother-in-law": "https://glensound-brother-in-law.example.com",
  "glensound-dad": "https://glensound-dad.example.com",
  balloons4u: "https://balloons4u.example.com",
} as const;

export type SiteId = keyof typeof siteUrls;

export const isSiteId = (value: string): value is SiteId => value in siteUrls;

export const getSiteId = (requestedSiteId?: string): SiteId =>
  requestedSiteId && isSiteId(requestedSiteId)
    ? requestedSiteId
    : defaultSiteId;

export const getSiteUrl = (requestedSiteId?: string) =>
  siteUrls[getSiteId(requestedSiteId)];
