# Accessibility

The template is built around practical WCAG 2.2 AA expectations for a static small-business website. Public pages should remain semantic, keyboard-friendly, readable, and usable without client-side JavaScript.

## Semantic Structure

`BaseLayout.astro` provides the document structure for every public page:

- one `header`
- one `main` landmark with `id="main-content"`
- one `footer`

Each public page has one visible `h1`. Section headings then continue with `h2` and card-level headings generally use `h3`.

## Keyboard Support

Interactive elements use native HTML wherever possible:

- links for navigation and linked cards
- buttons for form submission
- `details` and `summary` for FAQ disclosure
- native form fields and browser validation

Focus indicators use the shared `--color-focus` token and are visible on links, buttons, cards, FAQ summaries, form controls, and navigation controls.

## Skip Link

A "Skip to main content" link is the first meaningful focusable element in the body. It is visually hidden until focused and targets `#main-content`.

## Navigation

Desktop navigation is a standard labelled `nav`. Mobile navigation uses native `details` and `summary`, so it works without JavaScript.

The active page uses:

- `aria-current="page"`
- an underline
- colour change

This avoids relying on colour alone.

## Forms

The contact form uses persistent labels, native `required` attributes, appropriate input types, and autocomplete values. Required and optional fields are identified in visible text.

The form remains UI-only and does not submit to a backend in this phase.

## Images

Gallery images keep descriptive `alt` text because they represent showcased work or placeholders for future work. Placeholder SVGs include their own internal titles/descriptions, but the rendered `img` alt text remains the accessible name.

Decorative images should use `alt=""` in future additions.

## Colour And Focus

Core text, muted text, links, buttons, focus rings, and form borders use shared design tokens. Reviewed token values include:

- body text `#1f2937` on white
- muted text `#6b7280` on white
- primary blue `#2563eb`
- focus blue `#1d4ed8`
- stronger form border `#9ca3af`

These values are intended to maintain WCAG AA contrast on the current white and muted surfaces.

## Reduced Motion

A global `prefers-reduced-motion: reduce` rule disables non-essential transition and animation duration while preserving usability.

## Manual Test Checklist

Before production, test:

- Tab order starts with the skip link.
- Skip link moves focus to main content.
- Desktop and mobile navigation are keyboard reachable.
- Active navigation is announced as current page.
- Each public page has one `main` landmark and one `h1`.
- FAQ items open and close with keyboard.
- Contact form labels and required states are announced.
- Browser validation is usable.
- Images have useful alt text.
- Page remains usable at narrow widths and 200% zoom.
- Reduced-motion setting removes non-essential motion.

## Known Limitations

No automated axe, Lighthouse, or screen-reader tooling was added in this phase. Manual source and build inspection was used. Before production, run axe, Lighthouse, keyboard-only testing, and at least one screen reader pass.

The Decap `/admin/` route is not part of the public-site accessibility audit.
