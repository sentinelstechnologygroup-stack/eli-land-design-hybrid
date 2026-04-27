// src/components/utils/routes.js

export const ROUTES = {
  home: "/",
  about: "/about",
  contact: "/contact",
  consultation: "/contact",

  commercialGallery: "/gallery/commercial",
  residentialGalleryMain: "/gallery/residential",

  gallery: "/gallery",
  reviews: "/reviews",
  careersAtEli: "/careers-at-eli",
};

export const NAV = [
  { label: "Home", href: ROUTES.home },
  { label: "About", href: ROUTES.about },
  { label: "Commercial Gallery", href: ROUTES.commercialGallery },
  { label: "Residential Gallery", href: ROUTES.residentialGalleryMain },
  { label: "Reviews", href: ROUTES.reviews },
  { label: "Careers", href: ROUTES.careersAtEli },
];