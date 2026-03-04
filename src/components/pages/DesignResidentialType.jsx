// src/pages/DesignResidentialType.jsx
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowRight, Home } from "lucide-react";
import PageShell from "../PageShell";
import AnimatedSection from "../shared/AnimatedSection";
import GallerySection from "../gallery/GallerySection";
import { ROUTES } from "@/components/utils/routes";
import BottomCTA from "@/components/shared/BottomCTA";

// Local hero placeholders (swap later)
const MEDIA = {
  hero: "/images/design/residential.jpg",
};

const TYPE_MAP = {
  "front-yard": {
    title: "Front Yard & Curb Appeal",
    lead: "First impressions matter—we design entry sequences, driveways, foundation planting, and front-yard landscapes that establish presence and welcome.",
    whatWeDeliver: [
      "Entry drive & walk design",
      "Foundation planting layout",
      "Accent & feature lighting",
      "Materials & hardscape detailing",
      "Drainage & grading",
      "Construction documents",
    ],
    idealFor: ["New construction homes", "Renovation & refresh projects", "Estate properties", "Custom home sites"],
  },
  backyard: {
    title: "Backyard Master Plan",
    lead: "Comprehensive outdoor living design that establishes spatial zones, circulation, grading, and the framework for every future decision.",
    whatWeDeliver: [
      "Space planning & layout",
      "Grading & drainage plans",
      "Circulation & access routes",
      "Hardscape & structure zones",
      "Planting & screening strategy",
      "Phasing & budget estimates",
    ],
    idealFor: ["New construction", "Major renovations", "Estate properties", "Clients planning to build in phases"],
  },
  "pool-outdoor-living": {
    title: "Pool & Outdoor Living",
    lead: "Resort-style outdoor environments with pools, spas, outdoor kitchens, fire features, and entertainment areas designed for year-round use.",
    whatWeDeliver: [
      "Pool deck & coping design",
      "Outdoor kitchen & bar layout",
      "Fire features & seating zones",
      "Shade structures & pavilions",
      "Accent & feature lighting",
      "Materials & finishes specification",
    ],
    idealFor: ["Pool addition projects", "Outdoor kitchen renovations", "Backyard entertainment upgrades", "Resort-style living"],
  },
  "drainage-grading": {
    title: "Drainage & Grading",
    lead: "Site engineering that solves water issues, creates buildable spaces, and establishes the foundation for everything else.",
    whatWeDeliver: [
      "Grading & drainage plans",
      "French drains & surface drainage",
      "Retaining walls & terracing",
      "Swale & channel design",
      "Erosion control strategies",
      "Construction staking plans",
    ],
    idealFor: ["Problematic drainage sites", "Sloped properties", "Foundation water issues", "Site preparation projects"],
  },
  "planting-design": {
    title: "Planting Design",
    lead: "Layered, artful plant compositions that create texture, seasonal interest, and year-round beauty—designed for Texas conditions.",
    whatWeDeliver: [
      "Plant selection & palette",
      "Planting layout & spacing",
      "Seasonal interest strategy",
      "Native & adapted species focus",
      "Irrigation zones & layout",
      "Maintenance guidelines",
    ],
    idealFor: ["New landscape installations", "Garden renovations", "Foundation & border planting", "Screening & privacy"],
  },
  lighting: {
    title: "Outdoor Lighting",
    lead: "Integrated lighting design for safety, function, and ambiance—enhancing architecture, landscape, and outdoor living after dark.",
    whatWeDeliver: [
      "Path & step lighting",
      "Accent & uplighting",
      "Feature & focal lighting",
      "Safety & security zones",
      "Fixture selection & specification",
      "Layout & installation plans",
    ],
    idealFor: ["New construction", "Landscape renovations", "Outdoor living upgrades", "Safety & security improvements"],
  },
};

export default function DesignResidentialType() {
  const { type } = useParams();
  const content = TYPE_MAP[type];

  if (!content) {
    return (
      <PageShell
        hero
        heroImage={MEDIA.hero}
        eyebrow="Residential Design"
        title="Page Not Found"
        subtitle="The page you're looking for doesn't exist."
      >
        <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto text-center">
          <Link href={ROUTES.designResidential}
            className="group inline-flex items-center gap-3 text-[#1F2E23] hover:text-[#6B7F5E] transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Residential Design
          </Link>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell hero heroImage={MEDIA.hero} eyebrow="Residential" title={content.title} subtitle={content.lead}>
      {/* Breadcrumbs */}
      <section className="py-8 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto border-b border-[#1F2E23]/10">
        <div className="flex items-center gap-2 text-xs font-sans-clean text-[#1F2E23]/40">
          <Link href={ROUTES.design} className="hover:text-[#1F2E23] transition-colors">
            Design
          </Link>
          <span>/</span>
          <Link href={ROUTES.designResidential} className="hover:text-[#1F2E23] transition-colors">
            Residential
          </Link>
          <span>/</span>
          <span className="text-[#1F2E23]">{content.title}</span>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <AnimatedSection>
            <h3 className="font-serif-display text-[#1F2E23] text-2xl font-light mb-6">What we deliver</h3>
            <ul className="space-y-3">
              {content.whatWeDeliver.map((item) => (
                <li key={item} className="text-[#1F2E23]/60 font-sans-clean text-sm flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#6B7F5E] rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h3 className="font-serif-display text-[#1F2E23] text-2xl font-light mb-6">Ideal for</h3>
            <ul className="space-y-3">
              {content.idealFor.map((item) => (
                <li key={item} className="text-[#1F2E23]/60 font-sans-clean text-sm flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#6B7F5E] rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#E8E0D4] py-24 md:py-36">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          {/* @ts-expect-error - GallerySection prop typing differs across builds */}
          <GallerySection tags={["residential", type]} limit={12} title="Related Work" columns={3} className="!py-0" />
        </div>
      </section>

      {/* SHARED BOTTOM CTA */}

    </PageShell>
  );
}