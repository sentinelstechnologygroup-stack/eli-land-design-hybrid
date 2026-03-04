// src/app/sitemap.js
const baseUrl = "https://eli-land-design-hybrid.vercel.app";

const routes = [
  "/",
  "/about",
  "/design",
  "/design/commercial",
  "/design/residential",
  "/design/residential/master-plans",
  "/design/residential/pool-outdoor-living",
  "/design/residential/drainage-planting",
  "/construction",
  "/projects",
  "/gallery",
  "/reviews",
  "/contact",
  "/careers-at-eli",
];

export default function sitemap() {
  const now = new Date();
  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}