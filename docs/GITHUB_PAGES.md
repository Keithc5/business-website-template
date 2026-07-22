# GitHub Pages Deployment

This repository deploys only the generic template variant to GitHub Pages. The Glensound and Balloons4U variants are kept as examples for multi-site support and should normally be deployed from separate repositories created from this template.

## Expected URL

The initial generic project-site URL is:

```text
https://keithc5.github.io/business-website-template/
```

The generic site config uses the same URL for canonical links, Open Graph URLs, JSON-LD, robots.txt, and sitemap output.

## Base Path

GitHub Pages project sites are served from a repository subpath. For this repository, the Astro base path is enabled only when the deployment build sets:

```text
PUBLIC_DEPLOY_TARGET=github-pages
```

Normal local development and future custom-domain builds keep the root base path.

## Workflow

The workflow lives at `.github/workflows/deploy-pages.yml`.

It runs on pushes to `main` and can also be started manually from the Actions tab. It checks out the repository, installs with `npm ci`, runs `npm run lint`, builds the generic variant with the GitHub Pages target enabled, uploads `dist`, and deploys with the official GitHub Pages actions.

The deployment build command is:

```sh
PUBLIC_SITE_ID=generic PUBLIC_DEPLOY_TARGET=github-pages npm run build:generic
```

On Windows PowerShell, use:

```powershell
$env:PUBLIC_SITE_ID='generic'; $env:PUBLIC_DEPLOY_TARGET='github-pages'; npm run build:generic; Remove-Item Env:\PUBLIC_SITE_ID; Remove-Item Env:\PUBLIC_DEPLOY_TARGET
```

## Required GitHub Setting

Enable GitHub Actions as the Pages source:

```text
Settings -> Pages -> Source -> GitHub Actions
```

## Verification

After a deployment, check:

- The homepage loads at `/business-website-template/`.
- Internal navigation stays under `/business-website-template/`.
- CSS, images, favicon, and admin assets load correctly.
- `/business-website-template/robots.txt` points to the sitemap URL.
- `/business-website-template/sitemap-index.xml` exists and lists only public pages.
- Canonical and Open Graph URLs use `https://keithc5.github.io/business-website-template`.
- `/business-website-template/404.html` exists.

GitHub Pages serves this as a static Astro site with directory-based routes. It does not provide arbitrary SPA fallback behavior.

## Custom Domains

For a custom domain, remove the GitHub Pages project base target, update the relevant site config `siteUrl`, configure the domain in GitHub Pages, and add any required `CNAME` handling as part of that deployment phase.

## Current Limitations

Production Decap authentication is not configured. The contact form remains UI-only. Business-specific production sites should generally use their own repositories so each site can have its own domain, content, CMS backend, and deployment settings.
