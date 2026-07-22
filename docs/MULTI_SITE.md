# Multi-Site Support

One Astro codebase now powers multiple site variants. Pages and components import the active `business` config from `src/config/activeSite.ts`, and the selected config is controlled by `PUBLIC_SITE_ID`.

## Available Site IDs

- `generic`
- `glensound-brother-in-law`
- `glensound-dad`
- `balloons4u`

If `PUBLIC_SITE_ID` is missing or unknown, the site falls back to `generic`.

## Select A Site

Create or update `.env`:

```bash
PUBLIC_SITE_ID=generic
```

Use one of the accepted site IDs above. The default `npm run dev` and `npm run build` commands continue to work and default to `generic` when no site ID is set.

## Site Scripts

Development:

```bash
npm run dev:generic
npm run dev:glensound-brother-in-law
npm run dev:glensound-dad
npm run dev:balloons4u
```

Build:

```bash
npm run build:generic
npm run build:glensound-brother-in-law
npm run build:glensound-dad
npm run build:balloons4u
```

These scripts use `scripts/site-command.mjs` so they work across Windows, macOS, and Linux without Unix-only inline environment syntax.

## Where Configs Live

Shared types live in:

```text
src/config/types.ts
```

Site configs live in:

```text
src/config/sites/
```

The active selector lives in:

```text
src/config/activeSite.ts
```

## Business Config Shape

Each site config satisfies `BusinessConfig` and includes:

- `name`
- `tagline`
- `contact`: phone, email, address
- `openingHours`
- `social`
- `services`
- `gallery`
- `testimonials`
- `faqs`
- `contactCta`
- `contactForm`
- `aboutPage`
- `servicesPage`
- `galleryPage`
- `contactPage`
- `theme`
- `seo`

## Add Another Site

1. Create a new typed config file in `src/config/sites/`.
2. Export a `BusinessConfig` object for the new site.
3. Add its ID and URL to `src/config/siteSelection.ts`.
4. Import it in `src/config/activeSite.ts` and add it to the `sites` map.
5. Add the ID to `scripts/site-command.mjs` and add optional package scripts.
6. Document the new ID in `.env.example` and this file.

See `NEW_SITE_GUIDE.md` for a complete production handoff example.

## CMS Limitations

Decap CMS currently manages the experimental `src/content/settings/business.json` file only. It is not automatically mapped per selected site yet, and the TypeScript site configs remain the main source for page content.

A later CMS migration can add per-site CMS files and decide how those settings override or replace TypeScript config values.
