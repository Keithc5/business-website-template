# Business Website Template

A reusable Astro 7 template for small-business websites. One component set powers four configurable site variants, with static output suitable for GitHub Pages or another static host.

## Features and stack

- Astro 7, TypeScript, component-scoped templates, and plain CSS
- Typed business content, theme, contact, SEO, gallery, FAQ, and testimonial configuration
- Responsive pages, accessibility and performance baselines, canonical/Open Graph metadata, robots.txt, sitemap, and 404 output
- Optional Cloudinary URL helper and an experimental Decap CMS foundation
- Generic GitHub Pages workflow with project-base-path support

Requirements: Node.js 22.12 or newer and npm (see `.nvmrc`).

## Install and develop

```sh
npm install
npm run dev
```

The default is `generic`. Available site IDs are `generic`, `glensound-brother-in-law`, `glensound-dad`, and `balloons4u`.

```sh
npm run dev:generic
npm run dev:glensound-brother-in-law
npm run dev:glensound-dad
npm run dev:balloons4u

npm run build:generic
npm run build:glensound-brother-in-law
npm run build:glensound-dad
npm run build:balloons4u
```

Run `npm run check` to lint and build every variant. `npm run build` builds the site selected by `PUBLIC_SITE_ID`, or `generic` when unset.

## Configuration and structure

- `src/config/sites/` — typed content and branding for each site
- `src/config/types.ts` — `BusinessConfig` contract
- `src/config/activeSite.ts` and `siteSelection.ts` — registration and selection
- `src/pages/`, `src/layouts/`, `src/components/` — shared routes and UI
- `src/styles/` — global tokens, layout, typography, and component styles
- `public/` — static assets and Decap admin shell
- `docs/` — architecture, operations, and production guidance

Copy `.env.example` to `.env` when environment overrides are needed. See [multi-site configuration](docs/MULTI_SITE.md) and the [new-site guide](docs/NEW_SITE_GUIDE.md).

## Deployment

The included workflow deploys only the generic demonstration variant. It sets `PUBLIC_SITE_ID=generic` and `PUBLIC_DEPLOY_TARGET=github-pages` so links and assets use `/business-website-template`. See [GitHub Pages deployment](docs/GITHUB_PAGES.md).

For real businesses, create a separate repository per business rather than hosting unrelated businesses below one project path. The trade-offs and handoff process are in the [new-site guide](docs/NEW_SITE_GUIDE.md).

## Cloudinary and Decap CMS

The Cloudinary helper can generate delivery URLs when `PUBLIC_CLOUDINARY_CLOUD_NAME` is set, but uploads and asset migration are not implemented. Decap CMS exposes an experimental settings collection; production authentication and full mapping into per-site TypeScript configs are not implemented. See [Cloudinary](docs/CLOUDINARY.md) and [Decap CMS](docs/DECAP_CMS.md).

## Current limitations

The contact form is UI-only. Example variants contain placeholder domains, contact details, copy, testimonials, hours, and images. Legal text needs business-specific review. Complete the [production checklist](docs/PRODUCTION_CHECKLIST.md) before any real deployment.

Browse all guides in the [documentation index](docs/README.md), including accessibility, performance, SEO, robots/sitemap, deployment, release notes, and production review.
