import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // ✅ Disable image optimization to avoid Vercel plan limit errors
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.facebook.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
