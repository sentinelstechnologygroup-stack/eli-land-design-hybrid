// src/components/utils/routes.js
export const ROUTES = {
  home: "/",
  about: "/about",

  contact: "/contact",
  consultation: "/contact#contact-form",

  reviews: "/reviews",
  careers: "/careers-at-eli",

  design: "/design",
  designCommercial: "/design/commercial",
  designResidential: "/design/residential",

  residentialMasterPlans: "/design/residential/master-plans",
  residentialPoolOutdoorLiving: "/design/residential/pool-outdoor-living",
  residentialDrainagePlanting: "/design/residential/drainage-planting",
  residentialOutdoorLivingLegacy: "/design/residential/outdoor-living",

  commercialLifestyleCenter: "/design/commercial/lifestyle-center",
  commercialMultifamily: "/design/commercial/multifamily",
  commercialOffice: "/design/commercial/office",
  commercialRenderings: "/design/commercial/renderings",

  commercialGalleries: "/design/commercial/galleries",
  commercialGallery: "/design/commercial/galleries/:slug",

  residentialGalleries: "/design/residential/galleries",
  residentialGallery: "/design/residential/galleries/:slug",

  renderings: "/gallery/renderings",


  projects: "/projects",
  projectDetail: "/projects/:slug",

  gallery: "/gallery",
};

export const NAV = [
  { label: "Home", href: ROUTES.home },
  { label: "About", href: ROUTES.about },
  { label: "Projects", href: ROUTES.projects },
  { label: "Gallery", href: ROUTES.gallery },

  { label: "Reviews", href: ROUTES.reviews },
];

export function createProjectUrl(slug) {
  return `/projects/${slug}`;
}

export function createGalleryUrl(collection) {
  return `/gallery/${collection}`;
}