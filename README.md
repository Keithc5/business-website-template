# Business Website Template

Reusable Astro business website template with multi-site configuration, optional Cloudinary delivery support, Decap CMS foundations, SEO metadata, sitemap/robots support, and accessibility/performance baselines.

## Local Development

Install dependencies:

```sh
npm install
```

Start the default local site:

```sh
npm run dev
```

## Builds

Build the default site:

```sh
npm run build
```

Build the generic template variant:

```sh
npm run build:generic
```

Site-specific development and build commands are also available:

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

## GitHub Pages

This repository deploys only the generic template variant to GitHub Pages. The expected project-site URL is:

```text
https://keithc5.github.io/business-website-template/
```

The GitHub Actions workflow builds with `PUBLIC_SITE_ID=generic` and `PUBLIC_DEPLOY_TARGET=github-pages`, which enables Astro's `/business-website-template` base path for deployed assets and links.

See [docs/GITHUB_PAGES.md](docs/GITHUB_PAGES.md) for setup, verification, and production notes.

## Current Limitations

Decap production authentication is not configured. The contact form is UI-only. Placeholder domains and placeholder business content should be replaced before production use, and business-specific sites should generally be deployed from separate repositories created from this template.
