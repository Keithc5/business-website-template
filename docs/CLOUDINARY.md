# Cloudinary

Cloudinary support is prepared for future hosted image delivery. The current template still uses local image paths, including the SVG gallery placeholders in `public/images/gallery`.

## Environment Setup

Create a local `.env` file when you are ready to enable Cloudinary:

```bash
PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
```

This value is public and is safe to expose in browser-delivered code. Do not add API keys, API secrets, upload presets, or other private credentials to source control.

Cloudinary is optional at this stage. If `PUBLIC_CLOUDINARY_CLOUD_NAME` is missing, the template continues to build and local image paths continue to work.

## Local Images

Gallery items use a simple image string:

```ts
{
  title: "Recent Project",
  image: "/images/gallery/recent-project.svg",
  alt: "Abstract placeholder for a completed business project",
}
```

That field can remain a local path or be replaced later with a full Cloudinary delivery URL.

## Building A Delivery URL

The helper in `src/utils/cloudinary.ts` can convert a Cloudinary public ID into a delivery URL:

```ts
import { buildCloudinaryImageUrl } from "@utils/cloudinary";

const image = buildCloudinaryImageUrl("gallery/recent-project", {
  width: 800,
});
```

With `PUBLIC_CLOUDINARY_CLOUD_NAME` configured, this produces a URL shaped like:

```text
https://res.cloudinary.com/your-cloud-name/image/upload/f_auto,q_auto,w_800/gallery/recent-project
```

The helper uses automatic format and quality by default and does not fetch or upload anything.

## Not Included Yet

This phase does not include image uploads, Cloudinary credentials, Decap CMS integration, multi-site support, or deployment.
