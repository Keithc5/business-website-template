# v1.0.0 Release Notes

## Summary

Version 1.0.0 completes Phases 1–6 and 7.1–7.6: project foundation, reusable design system and components, core business pages, configuration-driven variants, SEO/accessibility/performance work, Cloudinary and Decap foundations, multi-site support, GitHub Pages automation, and final production documentation/review.

## Main features

- Astro 7 static business-site template with shared responsive components and plain CSS
- Typed `BusinessConfig` content, branding, contact, SEO, gallery, FAQ, and testimonial data
- Four selectable variants: `generic`, `glensound-brother-in-law`, `glensound-dad`, and `balloons4u`
- Canonical/Open Graph metadata, JSON-LD, robots.txt, sitemap, accessible navigation, and 404 output
- Optional Cloudinary delivery helper and experimental Decap CMS/admin foundation
- Cross-platform site commands, all-site verification, and a generic GitHub Pages workflow

## Deployment model

The included workflow deploys the generic variant as a demonstration. Each real business should use a separate repository and domain, selectively merging shared template improvements. Unrelated businesses should not be deployed under one GitHub Pages project path.

## Known limitations

- Three example business variants contain placeholder domains, contact details, copy, testimonials, hours, and images; the generic variant also contains demonstration content and placeholder artwork.
- The contact form has no submission backend.
- Decap production authentication is not configured, and its settings collection is not wired into per-site TypeScript config.
- Cloudinary upload/migration is not implemented; only public delivery URL support is prepared.
- Legal/privacy content requires business- and jurisdiction-specific review.
- The repository build can be verified locally, but a live deployment must be checked separately.

## Changes from v0.9.0

No published v0.9.0 contract or migration record exists in this repository, so no specific breaking change is declared. For any private v0.9.0 consumer, review the finalized environment variables, `BusinessConfig` shape, site-registration maps, GitHub Pages base behavior, and Node.js 22.12+ requirement before upgrading.

## Recommended next steps

1. Complete `PRODUCTION_CHECKLIST.md` for the selected business.
2. Create a separate repository and follow `NEW_SITE_GUIDE.md`.
3. Integrate a contact backend and, if needed, production CMS authentication.
4. Replace all placeholder assets/content, perform legal review, and verify the deployed URL.

## Manual release commands

Run these only after reviewing `git status` and the final diff:

```sh
git add .
git commit -m "chore: prepare v1.0.0 release"
git tag -a v1.0.0 -m "Business website template v1.0.0"
git push origin main
git push origin v1.0.0
```

The tag is deliberately not created by the preparation work.
