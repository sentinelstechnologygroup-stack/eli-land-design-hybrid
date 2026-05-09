// src/app/robots.js

import { SITE } from "@/config/site";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/sis", "/systems/sis", "/api/private"],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}