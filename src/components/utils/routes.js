// src/components/utils/routes.js

export const ROUTES = {
  home: "/",
  about: "/about",
  contact: "/contact",
  consultation: "/contact",

  designCommercial: "/design/commercial",
  designResidential: "/design/residential",

  commercialGalleries: (slug) => `/design/commercial/galleries/${slug}`,
  residentialGalleries: "/design/residential/galleries",
  residentialGallery: (slug) => `/design/residential/galleries/${slug}`,

  renderings: "/gallery/renderings",

  projects: "/projects",
  projectDetail: (slug) => `/projects/${slug}`,

  newProjects: "/new-projects",
  newProjectDetail: (slug) => `/new-projects/${slug}`,

  gallery: "/gallery",
  reviews: "/reviews",
  careersAtEli: "/careers-at-eli",
};

export const NAV = [
  { label: "Home", href: ROUTES.home },
  { label: "About", href: ROUTES.about },
  { label: "Projects", href: ROUTES.projects },
  { label: "Gallery", href: ROUTES.gallery },
  { label: "Reviews", href: ROUTES.reviews },
  { label: "Careers", href: ROUTES.careersAtEli },
];

export function createProjectUrl(slug) {
  return `/projects/${slug}`;
}

export function createGalleryUrl(collection) {
  return `/gallery/${collection}`;
}

export function createNewProjectUrl(slug) {
  return `/new-projects/${slug}`;
}