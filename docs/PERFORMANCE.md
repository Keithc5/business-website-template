# Performance

The template is designed to stay static, small, and mostly zero-JavaScript. Astro builds the public pages to static HTML with one compiled CSS asset and no hydrated frontend components.

## Current Strategy

- Keep public pages static.
- Use system fonts through design tokens.
- Keep FAQ behavior native with `details` and `summary`.
- Keep the contact form UI-only until a future submission service is added.
- Avoid client-side frameworks and hydration unless a feature genuinely needs them.

## Images

Current gallery images are local SVG placeholders. They are intentionally kept as SVG because they are small, scalable, and appropriate for placeholder artwork.

Rules:

- Add `width` and `height` attributes where practical.
- Use descriptive `alt` text.
- Use `loading="lazy"` for below-the-fold gallery/content images.
- Do not lazy-load important above-the-fold media.
- Do not migrate images to Cloudinary or CMS storage in this phase.

Future CMS or uploaded images should preserve dimensions and alt text to avoid layout shift.

## Fonts

The template uses system font stacks through `--font-body` and `--font-heading`. There are no third-party font requests, so there is no render-blocking external font dependency.

Do not add new external fonts unless there is a clear brand requirement and a performant local or preloaded strategy is documented.

## JavaScript And Hydration

The public site currently has no hydrated Astro components and no client-side JavaScript bundle. The only script on public pages is JSON-LD structured data in the document head.

The Decap CMS admin page loads Decap from the official CDN, but that script is isolated to `/admin/` and is excluded from the sitemap.

## CSS

CSS is organized by tokens, layout, and component/page files imported through `src/styles/globals.css`. Astro/Vite compiles this into one small CSS asset for the static site.

Keep design tokens as the source of truth. Remove clearly unused styles, but avoid merging all CSS into one large unmaintainable file.

## Production Builds

Run:

```bash
npm run build
```

For site variants:

```bash
npm run build:generic
npm run build:glensound-brother-in-law
npm run build:glensound-dad
npm run build:balloons4u
```

## Lighthouse Testing

After building, preview the site locally and run Lighthouse in Chrome DevTools:

```bash
npm run preview
```

Recommended targets:

- Performance: 90+
- Best Practices: 90+
- SEO: 90+
- Accessibility: do not audit yet, but avoid regressions
- Minimal layout shift
- No unnecessary client JavaScript

## Known Limitations

- Placeholder domains and content should be replaced before production.
- Future CMS images may need explicit dimensions and optimization rules.
- Cloudinary delivery support exists but image upload and CMS migration are not part of this phase.
- A full Lighthouse audit is best performed once deployment or a stable preview environment is available.
