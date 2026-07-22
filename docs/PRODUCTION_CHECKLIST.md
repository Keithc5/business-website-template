# Production Checklist

Complete this checklist for the selected business config before deploying a real site. The generic variant is a demonstration; the three example business variants deliberately contain production blockers.

## Site identity

- [ ] Replace the business name, tagline, service descriptions, about copy, values, FAQs, calls to action, and page headings in `src/config/sites/<site-id>.ts`.
- [ ] Confirm the theme colours meet the business brand and retain accessible contrast.
- [ ] Replace generic/sample opening hours with confirmed hours, including holiday handling.
- [ ] Update the experimental `src/content/settings/business.json` if Decap CMS will be retained; it does not currently override the active TypeScript config.

## Domain and SEO

- [ ] Replace every `*.example.com` site URL. The current blockers are the `glensound-brother-in-law`, `glensound-dad`, and `balloons4u` entries in both `src/config/siteSelection.ts` and their matching config files.
- [ ] Keep `siteUrl` consistent in both locations, including `https://` and any required path prefix.
- [ ] Replace generic SEO titles, descriptions, site name, locale, and social-sharing metadata.
- [ ] Verify canonical URLs, Open Graph URLs, JSON-LD, robots.txt, and sitemap URLs against the production domain.
- [ ] Decide whether the generic GitHub Pages project base is appropriate; do not enable `PUBLIC_DEPLOY_TARGET=github-pages` for an unrelated custom-domain deployment.

## Contact details

- [ ] Replace `hello@example.com`, `hello@example.ie`, `000 000 0000`, `087 123 4567`, and `County Galway, Ireland` wherever applicable.
- [ ] Verify `mailto:` and `tel:` links on the footer, contact page, and privacy page.
- [ ] Replace or remove empty/example Facebook, Instagram, LinkedIn, and X/Twitter values.
- [ ] Confirm the public service area and postal address wording with the business owner.

## Content

- [ ] Replace all copy explicitly containing “Placeholder” or instructions such as “replace this placeholder copy.”
- [ ] Review the generic business descriptions, service links, FAQs, calls to action, and privacy copy for accuracy.
- [ ] Check spelling, pricing claims, service availability, and opening hours with the business owner.
- [ ] Remove any phase notes or editorial instructions that appear in rendered content.

## Images

- [ ] Replace `public/images/gallery/recent-project.svg`, `customer-setup.svg`, and `featured-work.svg` with licensed, optimized business photography and update image paths/alt text.
- [ ] Replace `public/images/social/default-social.svg` with a production social image of an appropriate aspect ratio.
- [ ] Replace the generic favicon if the business has its own mark.
- [ ] Confirm every image loads at the root and, if relevant, under the GitHub Pages base path.
- [ ] If using Cloudinary, set only `PUBLIC_CLOUDINARY_CLOUD_NAME`, migrate the intended images, and verify generated delivery URLs. Never expose API secrets as `PUBLIC_*` variables.

## Testimonials

- [ ] Replace all generic and explicitly placeholder testimonials, names, and roles with approved customer statements.
- [ ] Obtain permission to publish names, roles, and quotes; otherwise remove the testimonial section/data.

## Legal/privacy review

- [ ] Have the privacy page reviewed for the actual business, jurisdiction, processors, retention policy, and user rights.
- [ ] Add company registration, VAT, trading-address, terms, cookie, or accessibility information when applicable.
- [ ] Update the privacy text after selecting a form provider, CMS authentication provider, analytics, or embedded third-party media.

## Contact form integration

- [ ] Connect the UI-only form to a real backend or form service.
- [ ] Add validation, spam protection, delivery/error states, data-retention rules, and a tested recipient address.
- [ ] Test submission, keyboard use, screen-reader labels, failure handling, and consent wording on production.

## CMS authentication

- [ ] If Decap CMS is required, configure and test a production-compatible authentication/backend flow.
- [ ] Decide whether to map CMS content into each site config; the current settings JSON is only an experimental foundation.
- [ ] Restrict editorial access and confirm uploaded media paths work with the deployment base.
- [ ] Remove `/admin` and unused CMS files if the final site will not offer CMS editing.

## Analytics, if desired

- [ ] Choose a privacy-appropriate analytics provider and document its lawful basis/consent behavior.
- [ ] Add the production property ID through the host configuration, not source code secrets.
- [ ] Verify analytics does not run in local/test builds unless intended.

## Final live testing

- [ ] Run `npm ci`, `npm run check`, and the selected production-target build.
- [ ] Test `/`, `/about/`, `/services/`, `/gallery/`, `/contact/`, `/privacy/`, `/404.html`, `/admin/` (if retained), `/robots.txt`, and `/sitemap-index.xml`.
- [ ] Check canonical/metadata output, structured data, favicon, social preview, all internal links, form behavior, and image alt text.
- [ ] Test keyboard navigation, visible focus, zoom, reduced motion, mobile layouts, real devices, and current browsers.
- [ ] Check for broken links/images, console errors, unexpected client JavaScript, secrets, and source maps.
- [ ] Verify the deployed site itself before announcing it live; a successful local build is not a live-site check.
