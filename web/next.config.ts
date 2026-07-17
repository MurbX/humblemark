import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained server build for Docker deploys (Coolify/VPS).
  output: "standalone",
  images: {
    remotePatterns: [
      // Strapi media library (local dev)
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      // Add the production CMS host once it exists, e.g.:
      // { protocol: "https", hostname: "cms.humblemark.com", pathname: "/uploads/**" },
    ],
  },
};

export default nextConfig;
