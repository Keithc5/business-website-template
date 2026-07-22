# Robots And Sitemap

Sitemap generation uses Astro's official `@astrojs/sitemap` integration.

## Site URL

The build reads `PUBLIC_SITE_ID` and selects a matching placeholder `siteUrl`:

- `generic`: `https://example.com`
- `glensound-brother-in-law`: `https://glensound-brother-in-law.example.com`
- `glensound-dad`: `https://glensound-dad.example.com`
- `balloons4u`: `https://balloons4u.example.com`

Missing or unknown values fall back to `generic`.

Replace these placeholder domains before production deployment.

## Included Routes

The sitemap includes the public site pages:

- `/`
- `/about/`
- `/services/`
- `/gallery/`
- `/contact/`
- `/privacy/`

## Excluded Routes

The sitemap excludes:

- `/admin/`
- Decap admin files and config
- static assets

## Robots.txt

`src/pages/robots.txt.ts` generates a site-aware `robots.txt` at build time.

It allows normal crawling, disallows `/admin/`, and points crawlers to the generated sitemap index:

```text
User-agent: *
Allow: /
Disallow: /admin/
Sitemap: https://example.com/sitemap-index.xml
```

The domain changes with `PUBLIC_SITE_ID`.

## Local Verification

Run a build, then inspect:

```bash
npm run build
```

Check:

- `dist/robots.txt`
- `dist/sitemap-index.xml`
- `dist/sitemap-0.xml`

Confirm the sitemap contains public page URLs, does not contain `/admin/`, and that `robots.txt` references the generated sitemap index for the selected site URL.

## Production Checklist

Before deployment:

- Replace placeholder `siteUrl` values with real domains.
- Confirm each deployed site uses the correct `PUBLIC_SITE_ID`.
- Confirm canonical URLs, sitemap URLs, and robots sitemap URLs all use the same domain.
- Keep `/admin/` disallowed unless production CMS access requirements change.

Performance, accessibility, and deployment are handled in later roadmap phases.
