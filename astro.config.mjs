// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { getSiteId, getSiteUrl } from "./src/config/siteSelection.ts";

const requestedSiteId = process.env.PUBLIC_SITE_ID ?? "generic";
const siteId = getSiteId(requestedSiteId);
const isGitHubPagesDeploy = process.env.PUBLIC_DEPLOY_TARGET === "github-pages";
const githubPagesOrigin = "https://keithc5.github.io";
const githubPagesBase = "/business-website-template";
const site = isGitHubPagesDeploy ? githubPagesOrigin : getSiteUrl(siteId);
const base = isGitHubPagesDeploy ? githubPagesBase : "/";

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/admin/"),
    }),
  ],
});
