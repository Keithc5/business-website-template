# SEO

The SEO foundation is rendered by `src/components/layout/SEO.astro` through `BaseLayout.astro`.

## Titles And Descriptions

Each page passes a page-specific `title` and `description` to `BaseLayout`. If a page omits either value, the SEO component falls back to the active site config:

```text
src/config/sites/*.ts
```

The default values live under `seo.title` and `seo.description`.

## Canonical URLs

Canonical URLs are built from the active site's `siteUrl` plus the current page path. A page can override this by passing `canonicalUrl` to `BaseLayout`.

Before production, replace placeholder URLs such as:

```text
https://example.com
```

with the real domain for each site variant.

## Open Graph And Twitter Images

The default social preview image comes from:

```text
public/images/social/default-social.svg
```

Each site config references it through `seo.image`. Replace this with a production social image when each site has real branding or photography.

Relative image paths are resolved against `siteUrl` so social platforms receive absolute image URLs.

## JSON-LD

The SEO component emits conservative JSON-LD using `ProfessionalService`. It includes only values already available in the active config:

- business name
- site URL
- description
- email
- phone
- location
- image

It does not include reviews, ratings, coordinates, legal IDs, or generated opening-hours schema.

## Noindex

Pass `noindex` to `BaseLayout` for pages that should not be indexed:

```astro
<BaseLayout title="Draft | Business Name" noindex>
```

Privacy is currently indexable.

## Production Checklist

Before launch, replace:

- `siteUrl`
- placeholder contact details
- placeholder social images
- placeholder page descriptions
- optional social handles

Sitemap, robots, performance, accessibility, and deployment are handled in later roadmap phases.
