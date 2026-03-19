// src/components/pages/Home.jsx
"use client";

import React, { useEffect } from "react";
import HeroSection from "../home/HeroSection";
import CTASection from "@/components/home/CTASection";
import HomeHubSection from "@/components/home/HomeHubSection";
import HubBreakCTA from "@/components/home/HubBreakCTA";
import { ROUTES } from "@/components/utils/routes";
import { registerPageMeta } from "@/lib/intelligence";

const COMMERCIAL_ITEMS = [
  {
    title: "Lifestyle Center",
    description:
      "Entry sequence, plazas, pedestrian flow, and durable material selection planned for long-term use and clean execution.",
    includes: ["Site planning", "Arrival + circulation", "Hardscape + planted systems"],
    href: ROUTES.commercialLifestyleCenter,
    image: "/images/design/commercial/thumbnails/lifestyle-center.jpg",
  },
  {
    title: "Multifamily",
    description:
      "Amenity environments, circulation, planting coordination, and grading strategy designed for daily resident use and maintenance reality.",
    includes: ["Amenity courts", "Pool + common areas", "Lighting + landscape coordination"],
    href: ROUTES.commercialMultifamily,
    image: "/images/design/commercial/thumbnails/multifamily.jpg",
  },
  {
    title: "Office",
    description:
      "Campus and office landscapes structured around visibility, movement, shade, materials, and durable site performance.",
    includes: ["Campus planning", "Circulation + entries", "Streetscape + planting"],
    href: ROUTES.commercialOffice,
    image: "/images/design/commercial/thumbnails/office.jpg",
  },
  {
    title: "Renderings",
    description:
      "Concept visuals that clarify design intent, align stakeholders, and support presentation before documentation and construction.",
    includes: ["Concept visuals", "Presentation imagery", "Design communication"],
    href: ROUTES.commercialRenderings,
    image: "/images/design/commercial/thumbnails/renderings.jpg",
  },
];

const RESIDENTIAL_ITEMS = [
  {
    title: "Master Plans & Grading",
    description:
      "Buildable master plans with grading strategy, drainage performance, and coordinated hardscape layout.",
    includes: ["Site analysis", "Grading + drainage", "Phasing + constructability"],
    href: ROUTES.residentialMasterPlans,
    image: "/images/design/residential/thumbnails/master-plans.jpg",
  },
  {
    title: "Pool & Outdoor Living",
    description:
      "Outdoor living environments planned for circulation, structure coordination, and long-term use.",
    includes: ["Pools + terraces", "Outdoor kitchens", "Lighting + planting coordination"],
    href: ROUTES.residentialPoolOutdoorLiving,
    image: "/images/design/residential/thumbnails/pool-outdoor-living.jpg",
  },
  {
    title: "Drainage & Planting Design",
    description:
      "Drainage solutions and planting systems designed for Texas conditions and maintenance reality.",
    includes: ["Drainage strategy", "Planting systems", "Irrigation coordination"],
    href: ROUTES.residentialDrainagePlanting,
    image: "/images/design/residential/thumbnails/drainage-planting.jpg",
  },
  {
    title: "Renderings",
    description:
      "Concept renderings that help visualize design intent, materials, and spatial relationships before construction.",
    includes: ["Concept visuals", "Material + lighting studies", "Presentation-ready imagery"],
    href: ROUTES.renderings,
    image: "/images/design/residential/thumbnails/renderings.jpg",
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
              ELI Land Design provides landscape architecture, site planning, and
              construction services for residential and commercial projects
              throughout The Woodlands, Houston, and surrounding Texas markets.
            </p>
          </div>
        </div>
      </section>

      <HomeHubSection
        title="Commercial Design Categories"
        items={COMMERCIAL_ITEMS}
      />

      <HubBreakCTA />

      <HomeHubSection
        title="Residential Design Categories"
        items={RESIDENTIAL_ITEMS}
      />

      <CTASection />
    </main>
  );
}