// src/app/robots.js
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://eli-land-design-hybrid.vercel.app/sitemap.xml",
  };
}