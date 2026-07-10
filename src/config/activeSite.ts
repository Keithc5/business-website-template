import type { BusinessConfig } from "@config/types";
import { balloons4uSite } from "@config/sites/balloons4u";
import { genericSite } from "@config/sites/generic";
import { glensoundBrotherInLawSite } from "@config/sites/glensound-brother-in-law";
import { glensoundDadSite } from "@config/sites/glensound-dad";

export const sites = {
  generic: genericSite,
  "glensound-brother-in-law": glensoundBrotherInLawSite,
  "glensound-dad": glensoundDadSite,
  balloons4u: balloons4uSite,
} satisfies Record<string, BusinessConfig>;

export type SiteId = keyof typeof sites;

const isSiteId = (value: string): value is SiteId => value in sites;

const requestedSiteId = import.meta.env.PUBLIC_SITE_ID ?? "generic";

export const siteId: SiteId = isSiteId(requestedSiteId)
  ? requestedSiteId
  : "generic";

export const business: BusinessConfig = sites[siteId];
