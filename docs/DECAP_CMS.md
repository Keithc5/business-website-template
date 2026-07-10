# Decap CMS

Decap CMS is being added as a safe editing foundation for the reusable business website template. In this phase, it manages a small business settings JSON file only. Most website content still comes from the TypeScript site configs in `src/config/sites/`.

## Admin URL

Run the Astro dev server and visit:

```text
http://localhost:4321/admin/
```

The admin page lives in `public/admin/index.html` and loads Decap CMS from the official CDN.

## Local Backend

The CMS config enables Decap's local backend:

```yml
local_backend: true
```

For local editing, run the Decap proxy from the project root:

```bash
npm run cms:proxy
```

In another terminal, run:

```bash
npm run dev
```

The proxy lets Decap write changes to the local repository instead of a remote Git provider. Production authentication and backend setup are not configured yet.

## Editable Content

The first editable file is:

```text
src/content/settings/business.json
```

It contains a single business settings record with:

- business name
- tagline
- SEO title
- SEO description
- email
- phone
- location

The current site still uses TypeScript site configs as the primary content source for services, gallery items, testimonials, FAQs, page copy, opening hours, and most reusable sections.

Site selection currently comes from `PUBLIC_SITE_ID`, handled by `src/config/activeSite.ts`. The CMS settings JSON is still an experimental foundation and is not automatically mapped per selected site yet.

## Media Uploads

Uploaded images are configured to be stored in:

```text
public/images/uploads
```

Decap will write public image paths as:

```text
/images/uploads
```

Cloudinary delivery support remains optional and separate from this CMS foundation.

## Future Migration Steps

Next CMS phases can gradually move selected content from TypeScript site configs into CMS-managed JSON or content collections, add per-site CMS files, connect uploaded images to gallery fields, and configure a production backend such as GitHub OAuth, Git Gateway, or another supported provider.

This phase does not include production authentication, image upload workflows beyond local folder configuration, deployment, or multi-site support.
