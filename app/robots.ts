// app/robots.ts
// Generates /robots.txt automatically — no config needed.

import type { MetadataRoute } from "next";

const BASE_URL = "https://www.bigbl.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
          "/checkout",
          "/cart",
          "/order/",
          "/profile",
          "/user/",
          "/sign-in",
          "/sign-up",
          "/unauthorized",
        ],
      },
      // Block AI training crawlers from scraping your content
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "Claude-Web", disallow: "/" },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
