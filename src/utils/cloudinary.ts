import { cloudinary } from "@config/cloudinary";

interface CloudinaryImageOptions {
  width?: number;
  height?: number;
  crop?: string;
  quality?: string;
  format?: string;
}

const encodePath = (path: string) =>
  path
    .split("/")
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join("/");

export const buildCloudinaryImageUrl = (
  publicId: string,
  options: CloudinaryImageOptions = {},
) => {
  if (!cloudinary.isConfigured || !publicId.trim()) {
    return "";
  }

  const {
    width,
    height,
    crop,
    quality = "auto",
    format = "auto",
  } = options;

  const transformations = [
    format && `f_${format}`,
    quality && `q_${quality}`,
    width && `w_${width}`,
    height && `h_${height}`,
    crop && `c_${crop}`,
  ].filter(Boolean);

  const transformationPath = transformations.length
    ? `${transformations.join(",")}/`
    : "";

  return `https://res.cloudinary.com/${encodeURIComponent(
    cloudinary.cloudName,
  )}/image/upload/${transformationPath}${encodePath(publicId)}`;
};
