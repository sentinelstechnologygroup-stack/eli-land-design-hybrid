// src/data/newProjectsData.js

export const NEW_PROJECTS = [
  {
    slug: "carlton-woods-estate",
    title: "Carlton Woods Estate",
    category: "Residential",
    location: "The Woodlands, TX",
    heroImage: "/images/new-projects/hero.jpg",
    coverImage: "/images/new-projects/residential/carlton-woods-estate/hero.jpg",
    description:
      "A multi-acre estate landscape featuring resort-quality outdoor living areas, custom pool design, and integrated hardscape elements. The design balances formal entertaining spaces with naturalized garden areas.",
    images: [
      "/images/new-projects/residential/carlton-woods-estate/01.jpg",
      "/images/new-projects/residential/carlton-woods-estate/02.jpg",
      "/images/new-projects/residential/carlton-woods-estate/03.jpg",
      "/images/new-projects/residential/carlton-woods-estate/04.jpg",
      "/images/new-projects/residential/carlton-woods-estate/05.jpg",
      "/images/new-projects/residential/carlton-woods-estate/06.jpg",
    ],
  },

  {
    slug: "woodhaven-village",
    title: "Woodhaven Village",
    category: "Commercial",
    location: "The Woodlands, TX",
    heroImage: "/images/new-projects/hero.jpg",
    coverImage: "/images/new-projects/commercial/woodhaven-village/hero.jpg",
    description:
      "A comprehensive community landscape that integrates native plantings with functional gathering spaces. The project responds to the natural character of the site while creating a welcoming entry sequence. Our design approach focused on sustainability, using native and adapted plant materials that thrive in the local climate with minimal irrigation.",
    images: [
      "/images/new-projects/commercial/woodhaven-village/01.jpg",
      "/images/new-projects/commercial/woodhaven-village/02.jpg",
      "/images/new-projects/commercial/woodhaven-village/03.jpg",
      "/images/new-projects/commercial/woodhaven-village/04.jpg",
      "/images/new-projects/commercial/woodhaven-village/05.jpg",
      "/images/new-projects/commercial/woodhaven-village/06.jpg",
    ],
  },

  {
    slug: "project-three",
    title: "Project Three",
    category: "Residential",
    location: "Bellaire, TX",
    heroImage: "/images/new-projects/hero.jpg",
    coverImage: "/images/new-projects/residential/project-3/01.jpg",
    description:
      "Brief project summary goes here. Keep this short and practical.",
    images: [
      "/images/new-projects/residential/project-3/01.jpg",
      "/images/new-projects/residential/project-3/02.jpg",
      "/images/new-projects/residential/project-3/03.jpg",
      "/images/new-projects/residential/project-3/04.jpg",
      "/images/new-projects/residential/project-3/05.jpg",
      "/images/new-projects/residential/project-3/06.jpg",
    ],
  },

  {
    slug: "project-4",
    title: "Project 4",
    category: "Commercial",
    location: "Bellaire, TX",
    heroImage: "/images/new-projects/hero.jpg",
    coverImage: "/images/new-projects/commercial/project-4/01.jpg",
    description:
      "Brief project summary goes here. Keep this short and practical.",
    images: [
      "/images/new-projects/commercial/project-4/01.jpg",
      "/images/new-projects/commercial/project-4/02.jpg",
      "/images/new-projects/commercial/project-4/03.jpg",
      "/images/new-projects/commercial/project-4/04.jpg",
      "/images/new-projects/commercial/project-4/05.jpg",
      "/images/new-projects/commercial/project-4/06.jpg",
    ],
  },
];

export function getNewProjects() {
  return NEW_PROJECTS;
}

export function getNewProjectBySlug(slug) {
  return NEW_PROJECTS.find((project) => project.slug === slug) || null;
}