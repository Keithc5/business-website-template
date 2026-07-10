export const cloudName = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME ?? "";
export const isCloudinaryConfigured = Boolean(cloudName);

export const cloudinary = {
  cloudName,
  isConfigured: isCloudinaryConfigured,
} as const;
