// src/lib/seo.js
export const SITE = {
  name: "ELI Land Design",
  url: "https://eli-land-design-hybrid.vercel.app",
  title: "ELI Land Design",
  description:
    "ELI Land Design is a Texas-based landscape architecture, site planning, and construction firm serving residential and commercial clients throughout The Woodlands, Houston, and surrounding markets.",
  ogImage: "/images/seo/eli-social.jpg",
  location: {
    city: "Houston",
    state: "Texas",
    country: "US",
  },
};

const PAGE_SEO = {
  home: {
    title: "Landscape Architecture, Site Planning, and Construction Services",
    description:
      "Landscape architecture, site planning, grading design, and construction services for residential and commercial projects throughout The Woodlands, Houston, and surrounding Texas markets.",
    path: "/",
  },
  about: {
    title: "About ELI Land Design",
    description:
      "Learn about ELI Land Design, our history, leadership, landscape architecture practice, and construction-backed design approach in Texas.",
    path: "/about",
  },
  design: {
    title: "Landscape Architecture Services",
    description:
      "Licensed landscape architecture services including site planning, grading strategy, drainage design, and construction documentation for residential and commercial work.",
    path: "/design",
  },
  designCommercial: {
    title: "Commercial Landscape Architecture Services",
    description:
      "Commercial landscape architecture for lifestyle centers, multifamily, office environments, and supporting renderings across Texas.",
    path: "/design/commercial",
  },
  designResidential: {
    title: "Residential Landscape Architecture Services",
    description:
      "Residential landscape architecture for private estates, master plans, grading strategy, pool and outdoor living, drainage, and planting design.",
    path: "/design/residential",
  },
  construction: {
    title: "Landscape Construction Services",
    description:
      "Landscape construction services for hardscape, irrigation, lighting, drainage, planting, and coordinated installation in The Woodlands and Houston.",
    path: "/construction",
  },
  projects: {
    title: "Featured Projects",
    description:
      "Explore featured residential, commercial, and construction-coordinated landscape architecture projects by ELI Land Design.",
    path: "/projects",
  },
  gallery: {
    title: "Project Gallery",
    description:
      "Browse commercial and residential gallery imagery, renderings, and project visuals from ELI Land Design.",
    path: "/gallery",
  },
  contact: {
    title: "Schedule a Consultation",
    description:
      "Contact ELI Land Design to schedule a consultation for residential or commercial landscape architecture, site planning, or construction services.",
    path: "/contact",
  },
  reviews: {
    title: "Client Reviews",
    description:
      "Read client reviews and testimonials for ELI Land Design, serving The Woodlands, Houston, and surrounding Texas markets.",
    path: "/reviews",
  },
  careersAtEli: {
    title: "Careers at ELI Land Design",
    description:
      "Explore opportunities to join ELI Land Design and learn about current openings, standards, and application pathways.",
    path: "/careers-at-eli",
  },
  newProjects: {
    title: "New Projects",
    description:
      "Browse recent and newly added residential and commercial project folders from ELI Land Design.",
    path: "/new-projects",
  },
};

function withBrand(title) {
  return title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
}

function buildMetadata({
  title,
  description,
  path = "/",
  image = SITE.ogImage,
  noIndex = false,
}) {
  const fullTitle = withBrand(title);

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE.name,
      images: [
        {
          url: image,
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
      images: [image],
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
  noIndex = false,
}) {
  return buildMetadata({
    title,
    description,
    path,
    image,
    noIndex,
  });
}

export { PAGE_SEO };