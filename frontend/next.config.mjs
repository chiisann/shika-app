const isProd = process.env.NODE_ENV === "production";
const prefixPath = isProd ? "/next-template" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  //   output: "export",
  assetPrefix: prefixPath,
  basePath: prefixPath,
  distDir: "dist",
  images: { unoptimized: true },
};

export default nextConfig;
