# New Site Guide

## Recommended repository model

Keep this repository as the reusable template and demonstration site. Create one separate repository for each real business. That gives each business an independent domain, content history, deployment settings, access control, form integration, CMS backend, and release cycle. Carry shared improvements back manually, or selectively cherry-pick reviewed commits between repositories.

This costs more maintenance than a monorepo or published package because fixes must be merged deliberately. In return, deployments remain isolated and a change for one client cannot accidentally publish another client's data. The generic template may remain a GitHub Pages demonstration, but unrelated businesses should not be hosted beneath one GitHub Pages project path. This guide intentionally does not introduce a monorepo or package distribution system.

## Launch process

1. Create a repository from the template, or clone it and set the new repository remote.
2. Install Node.js 22.12+ and run `npm install` (use `npm ci` in CI).
3. Copy an existing file in `src/config/sites/` and create a fully typed `BusinessConfig` containing the real business content.
4. Register the site ID in both `src/config/siteSelection.ts` and `src/config/activeSite.ts`; add it to `scripts/site-command.mjs` and optional `dev:<id>`/`build:<id>` package scripts.
5. Add owner-approved services, about copy, FAQs, calls to action, opening hours, contact details, and legal content.
6. Replace placeholder gallery, social, and favicon images with licensed optimized assets and accurate alt text.
7. Set the production `siteUrl` consistently in the site config and `siteSelection.ts`. Use the GitHub Pages deployment target only for a project site that needs its repository base path.
8. Copy `.env.example` to `.env` locally. Set `PUBLIC_SITE_ID`; set `PUBLIC_DEPLOY_TARGET` only when appropriate; set `PUBLIC_CLOUDINARY_CLOUD_NAME` only if Cloudinary delivery is used. Configure CI variables separately and never commit secrets.
9. Run `npm run lint`, `npm run build:<id>`, and `npm run check`. Inspect the selected build after the final command because each build replaces `dist`.
10. Configure the host/CI workflow, production domain, HTTPS, cache behavior, and any required `CNAME`. A business repository should build its own site ID, not the generic demonstration.
11. Connect the contact form to a real backend, then test success, failure, validation, spam controls, recipients, and privacy handling.
12. If CMS editing is required, configure Decap authentication and map CMS data into the selected site's content model. Otherwise remove or disable the admin surface after review.
13. Verify canonical URLs, metadata, structured data, robots.txt, sitemap, 404 behavior, accessibility, images, links, keyboard use, mobile layouts, and supported browsers on the deployed URL.
14. Complete `PRODUCTION_CHECKLIST.md`, update release notes, commit the reviewed output, and create an annotated production release tag.

## Example: add another config without duplicating components

Create `src/config/sites/acme.ts` by reusing the common shape:

```ts
import type { BusinessConfig } from "@config/types";
import { genericSite } from "@config/sites/generic";

export const acmeSite: BusinessConfig = {
  ...genericSite,
  name: "Acme Services",
  siteUrl: "https://www.acme.example",
  contact: {
    phone: "+353 00 000 0000",
    email: "contact@acme.example",
    address: "Confirmed business address",
  },
  seo: {
    ...genericSite.seo,
    title: "Acme Services | Service Area",
    siteName: "Acme Services",
  },
};
```

Then add `acme` and its URL to `siteUrls`, import `acmeSite` and add it to `sites`, allow `acme` in `site-command.mjs`, and add scripts if desired. All existing pages, layouts, sections, and styles will consume the new config; do not copy components into an Acme-specific tree. Replace every example value above before production.
