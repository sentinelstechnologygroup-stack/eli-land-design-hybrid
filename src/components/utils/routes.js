// src/components/utils/routes.js
export const ROUTES = {
  home: "/",
  about: "/about",

  // Contact + Careers
  contact: "/contact",
  consultation: "/contact#schedule",
  careers: "/careers-at-eli",

  // Reviews
  reviews: "/reviews",

  // Hubs
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

  construction: "/construction",

  projects: "/projects",
  projectDetail: "/projects/:slug",

  gallery: "/gallery",
  galleryCollection: "/gallery/:collection",
};

export const NAV = [
  { label: "Home", href: ROUTES.home },
  { label: "About", href: ROUTES.about },

  {
    label: "Design",
    href: ROUTES.design,
    children: [
      { label: "Overview", href: ROUTES.design },
      { label: "Commercial", href: ROUTES.designCommercial },
      { label: "Residential", href: ROUTES.designResidential },
    ],
  },

  { label: "Construction", href: ROUTES.construction },

  {
    label: "Projects",
    href: ROUTES.projects,
    children: [
      { label: "All Projects", href: ROUTES.projects },
      { label: "Gallery", href: ROUTES.gallery },
    ],
  },

  {
    label: "Contact",
    href: ROUTES.consultation,
    children: [
      { label: "Schedule Consultation", href: ROUTES.consultation },
      { label: "Reviews", href: ROUTES.reviews },
      { label: "Careers", href: ROUTES.careers },

      // ✅ add here so it’s easy to find, but not mixed into Awards marquee
      //{ label: "Affiliations", href: ROUTES.affiliations },
    ],
  },
];

// Existing helpers (keep shape the app expects)
export function createProjectUrl(slug) {
  return `/projects/${slug}`;
}

export function createGalleryUrl(collection) {
  return `/gallery/${collection}`;
}