// src/components/utils/routes.js
export const ROUTES = {
  home: "/",
  about: "/about",

  // Contact + Careers
  contact: "/contact",
  careers: "/careers-at-eli",

  // Reviews
  reviews: "/reviews",

  // ✅ New: Affiliations page
  //affiliations: "/affiliations",

  // Hubs
  design: "/design",
  designCommercial: "/design/commercial",
  designResidential: "/design/residential",

  // ✅ Residential Category Pages (explicit, so cards + routes match)
  residentialMasterPlans: "/design/residential/master-plans",
  residentialPoolOutdoorLiving: "/design/residential/pool-outdoor-living",
  residentialDrainagePlanting: "/design/residential/drainage-planting",
  residentialOutdoorLivingLegacy: "/design/residential/outdoor-living",

  // ✅ Commercial Category Pages (explicit, so cards + routes match)
  commercialLifestyleCenter: "/design/commercial/lifestyle-center",
  commercialMultifamily: "/design/commercial/multifamily",
  commercialOffice: "/design/commercial/office",
  commercialRenderings: "/design/commercial/renderings",

  // ✅ (Optional) Commercial "Galleries" aliases if you ever want them
  commercialGalleries: "/design/commercial/galleries",
  commercialGallery: "/design/commercial/galleries/:slug",

  // ✅ (Optional) Residential Galleries (kept)
  residentialGalleries: "/design/residential/galleries",
  residentialGallery: "/design/residential/galleries/:slug",

  // ✅ Renderings Gallery (sitewide gallery page)
  renderings: "/gallery/renderings",

  construction: "/construction",

  // Projects + Gallery
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
    label: "Schedule Consultation",
    href: ROUTES.contact,
    children: [
      { label: "Schedule Consultation", href: ROUTES.contact },
      { label: "Careers", href: ROUTES.careers },
      { label: "Reviews", href: ROUTES.reviews },
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