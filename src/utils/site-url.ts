const basePath = import.meta.env.BASE_URL || "/";

const protocolPattern = /^[a-z][a-z\d+.-]*:/i;

export const isExternalUrl = (url: string) =>
  protocolPattern.test(url) || url.startsWith("//");

export const isFragmentUrl = (url: string) => url.startsWith("#");

export const isInternalPath = (url: string) =>
  url.startsWith("/") && !url.startsWith("//");

const trimTrailingSlash = (value: string) => value.replace(/\/$/, "");

const trimSlashes = (value: string) => value.replace(/^\/+|\/+$/g, "");

export const withBasePath = (url: string) => {
  if (!url || isExternalUrl(url) || isFragmentUrl(url)) {
    return url;
  }

  if (!isInternalPath(url)) {
    return url;
  }

  const base = basePath.endsWith("/") ? basePath : `${basePath}/`;

  if (url === "/") {
    return base;
  }

  return `${base}${url.replace(/^\/+/, "")}`;
};

export const stripBasePath = (pathname: string) => {
  const base = trimSlashes(basePath);

  if (!base) {
    return pathname;
  }

  const prefixedBase = `/${base}`;

  if (pathname === prefixedBase) {
    return "/";
  }

  if (pathname.startsWith(`${prefixedBase}/`)) {
    return pathname.slice(prefixedBase.length) || "/";
  }

  return pathname;
};

export const absoluteSiteUrl = (siteUrl: string, path = "/") => {
  const baseUrl = trimTrailingSlash(siteUrl || "https://example.com");

  if (!path || isFragmentUrl(path)) {
    return `${baseUrl}/`;
  }

  if (isExternalUrl(path)) {
    return path;
  }

  const cleanPath = trimSlashes(path);
  const trailingSlash = path.endsWith("/") ? "/" : "";

  return cleanPath ? `${baseUrl}/${cleanPath}${trailingSlash}` : `${baseUrl}/`;
};
