import type { BusinessConfig } from "@config/types";
import { balloons4uSite } from "@config/sites/balloons4u";
import { genericSite } from "@config/sites/generic";
import { glensoundBrotherInLawSite } from "@config/sites/glensound-brother-in-law";
import { glensoundDadSite } from "@config/sites/glensound-dad";
import { getSiteId } from "@config/siteSelection";

export const sites = {
  generic: genericSite,
  "glensound-brother-in-law": glensoundBrotherInLawSite,
  "glensound-dad": glensoundDadSite,
  balloons4u: balloons4uSite,
} satisfies Record<string, BusinessConfig>;

export type SiteId = keyof typeof sites;

export const siteId: SiteId = getSiteId(import.meta.env.PUBLIC_SITE_ID);

export const business: BusinessConfig = sites[siteId];
