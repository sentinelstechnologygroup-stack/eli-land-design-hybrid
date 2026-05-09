// src/config/schema.js

import { SITE } from "@/config/site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: `${SITE.url}${SITE.logo}`,
  image: `${SITE.url}${SITE.ogImage}`,
  description: SITE.description,
  telephone: SITE.phoneDisplay,
  email: SITE.email,
  areaServed: SITE.serviceAreas,
  foundingDate: SITE.founded,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.location.locality,
    addressRegion: SITE.location.region,
    addressCountry: SITE.location.country,
  },
  serviceType: [
    "Landscape Architecture",
    "Site Planning",
    "Commercial Landscape Architecture",
    "Residential Landscape Architecture",
    "Landscape Construction",
    "Grading Design",
    "Drainage Design",
    "Planting Design",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  publisher: {
    "@type": "Organization",
    name: SITE.name,
  },
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Landscape Architecture, Site Planning, and Landscape Construction",
  provider: {
    "@type": "ProfessionalService",
    name: SITE.name,
    url: SITE.url,
  },
  areaServed: SITE.serviceAreas,
  serviceType: [
    "Residential Landscape Architecture",
    "Commercial Landscape Architecture",
    "Site Planning",
    "Landscape Construction",
  ],
};