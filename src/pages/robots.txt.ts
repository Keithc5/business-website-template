import type { APIRoute } from "astro";
import { business } from "@config/activeSite";

const trimTrailingSlash = (value: string) => value.replace(/\/$/, "");

export const GET: APIRoute = () => {
  const siteUrl = trimTrailingSlash(business.siteUrl);
  const sitePath = new URL(`${siteUrl}/`).pathname.replace(/\/$/, "");
  const adminPath = sitePath ? `${sitePath}/admin/` : "/admin/";

  return new Response(
    [
      "User-agent: *",
      "Allow: /",
      "Disallow: /admin/",
      ...(adminPath === "/admin/" ? [] : [`Disallow: ${adminPath}`]),
      `Sitemap: ${siteUrl}/sitemap-index.xml`,
      "",
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
};
