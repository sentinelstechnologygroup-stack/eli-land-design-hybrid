// src/config/seo.js

import { SITE, BRAND_KEYWORDS } from "@/config/site";

export const PAGE_SEO = {
  home: {
    title: "Landscape Architecture, Site Planning, and Construction Services",
    description:
      "Residential and commercial landscape design, site planning, grading design, drainage coordination, and landscape construction services across The Woodlands and Greater Houston.",
    path: "/",
    image: SITE.ogImage,
    keywords: [
      ...BRAND_KEYWORDS,
      "ELI Land Design",
      "landscape design The Woodlands",
      "landscape design Houston",
    ],
  },

  about: {
    title: "About ELI Land Design",
    description:
      "Learn about ELI Land Design, a Texas landscape architecture firm serving The Woodlands, Houston, and surrounding markets with design, planning, and construction-backed expertise.",
    path: "/about",
    image: "/images/hero/about-hero.webp",
    keywords: [
      "about ELI Land Design",
      "Texas landscape architecture firm",
      "The Woodlands landscape architecture",
      "Houston landscape architecture",
    ],
  },

  gallery: {
    title: "Landscape Architecture Project Gallery",
    description:
      "Browse ELI Land Design project imagery, including residential landscapes, commercial landscapes, landscape renderings, outdoor living spaces, planting design, and site planning visuals.",
    path: "/gallery",
    image: "/images/hero/gallery-hero.webp",
    keywords: [
      "landscape architecture gallery",
      "commercial landscape gallery",
      "residential landscape gallery",
      "landscape renderings",
    ],
  },

  galleryCommercial: {
    title: "Commercial Landscape Architecture Gallery",
    description:
      "Explore commercial landscape architecture work from ELI Land Design, including multifamily, commercial site planning, amenity spaces, and commercial landscape renderings.",
    path: "/gallery/commercial",
    image: "/images/hero/commercial-hero.webp",
    keywords: [
      "commercial landscape architecture",
      "commercial landscape design",
      "multifamily landscape design",
      "commercial landscape renderings",
    ],
  },

  galleryResidential: {
    title: "Residential Landscape Architecture Gallery",
    description:
      "Explore residential landscape architecture work from ELI Land Design, including outdoor living spaces, pools, planting design, master planning, and residential renderings.",
    path: "/gallery/residential",
    image: "/images/hero/residential-hero.webp",
    keywords: [
      "residential landscape architecture",
      "residential landscape design",
      "pool outdoor living design",
      "residential master planning",
    ],
  },

  galleryRenderings: {
    title: "Landscape Architecture Renderings",
    description:
      "View landscape architecture renderings and visualization work from ELI Land Design for residential and commercial projects.",
    path: "/gallery/renderings",
    image: "/images/hero/gallery-hero.webp",
    keywords: [
      "landscape architecture renderings",
      "commercial renderings",
      "residential renderings",
      "site planning visualization",
    ],
  },

  contact: {
    title: "Schedule a Consultation",
    description:
      "Contact ELI Land Design to schedule a consultation for residential landscape architecture, commercial landscape architecture, site planning, or landscape construction services.",
    path: "/contact",
    image: SITE.ogImage,
    keywords: [
      "schedule landscape consultation",
      "contact landscape architect",
      "The Woodlands landscape architect",
      "Houston landscape architect",
    ],
  },

  reviews: {
    title: "Client Reviews",
    description:
      "Read client reviews and testimonials for ELI Land Design, serving residential and commercial landscape architecture clients across The Woodlands and Greater Houston.",
    path: "/reviews",
    image: SITE.ogImage,
    keywords: [
      "ELI Land Design reviews",
      "landscape architect reviews",
      "The Woodlands landscape reviews",
      "Houston landscape reviews",
    ],
  },

  careersAtEli: {
    title: "Careers at ELI Land Design",
    description:
      "Explore career opportunities with ELI Land Design, a landscape architecture and site planning firm serving The Woodlands, Houston, and surrounding Texas markets.",
    path: "/careers-at-eli",
    image: SITE.ogImage,
    keywords: [
      "landscape architecture careers",
      "ELI Land Design careers",
      "landscape designer jobs",
      "landscape architecture jobs Houston",
    ],
  },

  construction: {
    title: "Landscape Construction Services",
    description:
      "Landscape construction services for residential and commercial projects, including planting, drainage, irrigation, hardscape coordination, and outdoor construction support.",
    path: "/construction",
    image: SITE.ogImage,
    keywords: [
      "landscape construction",
      "landscape construction The Woodlands",
      "landscape construction Houston",
      "outdoor construction services",
    ],
  },

  newProjects: {
    title: "New Projects",
    description:
      "View newly added residential and commercial landscape architecture projects from ELI Land Design.",
    path: "/new-projects",
    image: SITE.ogImage,
    keywords: [
      "new landscape architecture projects",
      "ELI Land Design projects",
      "commercial landscape projects",
      "residential landscape projects",
    ],
  },
};

function withBrand(title) {
  return title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
}

export function absoluteUrl(path = "/") {
  if (!path) return SITE.url;
  if (path.startsWith("http")) return path;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image = SITE.ogImage,
  keywords = BRAND_KEYWORDS,
  noIndex = false,
}) {
  const fullTitle = withBrand(title);
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}

export function getPageMetadata(key, overrides = {}) {
  const base = PAGE_SEO[key] || PAGE_SEO.home;

  return buildMetadata({
    ...base,
    ...overrides,
  });
}

export function getDynamicPageMetadata({
  title,
  description,
  path,
  image = SITE.ogImage,
  keywords = BRAND_KEYWORDS,
  noIndex = false,
}) {
  return buildMetadata({
    title,
    description,
    path,
    image,
    keywords,
    noIndex,
  });
}