// src/app/sitemap.js

import { SITE } from "@/config/site";

const routes = [
  "/",
  "/about",
  "/gallery",
  "/gallery/commercial",
  "/gallery/residential",
  "/gallery/renderings",
  "/reviews",
  "/contact",
  "/careers-at-eli",
  "/construction",
];

export default function sitemap() {
  const now = new Date();

  return routes.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.includes("gallery") ? 0.85 : 0.7,
  }));
}