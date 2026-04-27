// src/components/pages/Home.jsx
"use client";

import React, { useEffect } from "react";
import HeroSection from "../home/HeroSection";
import CTASection from "@/components/home/CTASection";
import HomeHubSection from "@/components/home/HomeHubSection";
import { ROUTES } from "@/components/utils/routes";
import { registerPageMeta } from "@/lib/intelligence";

const HOME_HUB_ITEMS = [
  {
    title: "Commercial Landscape Architecture",
    description:
      "Entry sequence, plazas, pedestrian flow, and durable material selection planned for long-term use and clean execution.",
    includes: [],
    href: ROUTES.commercialGallery,
    image: "/images/gallery/commercial/01.jpg",
    ctaLabel: "View Gallery",
  },
  {
    title: "Residential Landscape Architecture",
    description:
      "Amenity environments, circulation, planning coordination, and grading strategy designed for daily resident use and maintenance reality.",
    includes: [],
    href: ROUTES.residentialGalleryMain,
    image: "/images/gallery/residential/01.jpg",
    ctaLabel: "View Gallery",
  },
  {
    title: "About ELI Land Design",
    description:
      "Learn more about ELI Land Design, our history, professional approach, and the team behind the work.",
    includes: [],
    href: ROUTES.about,
    image: "/images/design/commercial/thumbnails/office.jpg",
    ctaLabel: "View Page",
  },
  {
    title: "Gallery",
    description:
      "Concept visuals, project imagery, and presentation-ready renderings that communicate design intent and craftsmanship.",
    includes: [],
    href: ROUTES.gallery,
    image: "/images/design/commercial/thumbnails/renderings.jpg",
    ctaLabel: "View Gallery",
  },
    {
    title: "Client Reviews",
    href: ROUTES.reviews,
    image: "/images/hero/reviews-hero.jpg", // use existing reviews hero image
    ctaLabel: "View Reviews",
  },
  //{
  //  title: "New Projects",
  //  description:
  //    "Browse current and recently added project folders in a separate gallery kept apart from the main Projects portfolio.",
  //  includes: [],
  //  href: ROUTES.newProjects,
  //  image: "/images/new-projects/hero.jpg",
  //  ctaLabel: "View Gallery",
  //},
  {
    title: "Careers at ELI Land Design",
    description:
      "Explore opportunities to join ELI Land Design and learn what the firm values in design, planning, and project delivery.",
    includes: [],
    href: ROUTES.careersAtEli,
    image: "/images/hero/careers-hero.jpg",
    ctaLabel: "View Careers",
  },
];

export default function Home() {
  useEffect(() => {
    registerPageMeta({
      page: "Home",
      route: "/",
      intent: "hub",
      primaryCta: "Schedule Consultation",
    });
  }, []);

  return (
    <main className="bg-[#F5F0EA]">
      <HeroSection />

      <section>
        <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-8 md:py-10 lg:px-20">
          <div className="max-w-4xl">
            <h2 className="text-[13px] font-sans-clean font-semibold text-[#1F2E23] md:text-[15px]">
              Welcome to ELI Land Design
            </h2>

            <p className="mt-3 max-w-3xl font-sans-clean text-[13px] leading-[1.75] text-[#1F2E23]/75 md:text-[15px] md:leading-[1.9]">
              ELI Land Design provides landscape architecture, site planning,
              and construction services for residential and commercial projects
              throughout The Woodlands, Houston, and surrounding Texas markets.
            </p>
          </div>
        </div>
      </section>

      <HomeHubSection title="" items={HOME_HUB_ITEMS} />

      <CTASection />
    </main>
  );
}