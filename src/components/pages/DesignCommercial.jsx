// src/components/pages/DesignCommercial.jsx
"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/shared/PageShell";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { ROUTES } from "@/components/utils/routes";
import PortfolioMarquee from "@/components/portfolio/PortfolioMarquee";
import BottomCTA from "@/components/shared/BottomCTA";
import HubBreakCTA from "@/components/home/HubBreakCTA";

const MEDIA = {
  hero: "//images/hero/commercial-hero.webp",
  card1: "/images/design/commercial/thumbnails/lifestyle-center.webp",
  card2: "/images/design/commercial/thumbnails/multifamily.webp",
  card3: "/images/design/commercial/thumbnails/office.webp",
  card4: "/images/design/commercial/thumbnails/renderings.webp",
  support: "/images/design/commercial-support.webp",

  tileCommercial: "/images/design/hub/tile-commercial.webp",
  tileResidential: "/images/design/hub/tile-residential.webp",
  hubSupport: "/images/design/hub/support.webp",
};

const TAGS = [
  "Site planning",
  "Circulation",
  "Grading + drainage",
  "Materials",
  "Planted systems",
];

const CATEGORIES = [
  {
    slug: "lifestyle-center",
    label: "Property + Category",
    title: "Lifestyle Center",
    description: "",
    image: MEDIA.card1,
    scope: [],
  },
  {
    slug: "multifamily",
    label: "Community + Amenity",
    title: "Multifamily",
    description: "",
    image: MEDIA.card2,
    scope: [],
  },
  {
    slug: "office",
    label: "Campus + Streetscape",
    title: "Office",
    description: "",
    image: MEDIA.card3,
    scope: [],
  },
  {
    slug: "renderings",
    label: "Concept Visualization",
    title: "Renderings",
    description: "",
    image: MEDIA.card4,
    scope: [],
  },
];

function CommercialGridCard({ item, href, delay = 0 }) {
  return (
    <AnimatedSection delay={delay}>
      <Link href={href} className="group block h-full no-underline">
        <article className="relative isolate h-full overflow-hidden border border-[#1F2E23]/10 bg-[#D7D1C7] shadow-[0_18px_50px_rgba(16,24,18,0.12)] transition-all duration-500 group-hover:shadow-[0_28px_70px_rgba(16,24,18,0.18)]">
          <div className="relative aspect-[1/1] sm:aspect-[1.08/1] lg:aspect-[1.42/1]">
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-black/28 to-black/64" />
            <div className="absolute inset-0 bg-[#1F2E23]/10 mix-blend-multiply" />

            <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 md:p-6 lg:p-8">
              <div>
                <div className="mb-3 type-micro text-white/65">{item.label}</div>
                <h3 className="type-card-title-single text-[1.15rem] text-white sm:text-[1.3rem] md:text-[1.7rem] lg:text-[2.15rem]">
                  {item.title}
                </h3>
              </div>

              <div className="pt-4 lg:pt-8">
                <div className="border-t border-white/18 pt-4 lg:pt-5">
                  <div className="inline-flex items-center gap-2 type-button text-white">
                    View Gallery
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </AnimatedSection>
  );
}

export default function DesignCommercial() {
  const base = ROUTES.designCommercial || "/design/commercial";

  const portfolioGalleries = useMemo(
    () => [
      {
        href: ROUTES.gallery ?? "/gallery",
        title: "Lifestyle Center",
        subtitle: "Entry sequence, plazas, pedestrian flow, durable materials.",
        image: MEDIA.tileCommercial,
      },
      {
        href: ROUTES.gallery ?? "/gallery",
        title: "Multifamily Amenities",
        subtitle: "Amenity courts, pool decks, lighting, circulation.",
        image: MEDIA.card2,
      },
      {
        href: ROUTES.gallery ?? "/gallery",
        title: "Office Campus",
        subtitle: "Shade, circulation, signage zones, cohesive planting.",
        image: MEDIA.card3,
      },
      {
        href: ROUTES.gallery ?? "/gallery",
        title: "Streetscape + Entries",
        subtitle: "Arrival sequence, hardscape structure, planted systems.",
        image: MEDIA.hubSupport,
      },
      {
        href: ROUTES.gallery ?? "/gallery",
        title: "Renderings",
        subtitle: "Concept visualization to align teams before docs.",
        image: MEDIA.card4,
      },
      {
        href: ROUTES.gallery ?? "/gallery",
        title: "Community Landscapes",
        subtitle: "Phasing, durability, performance under maintenance reality.",
        image: MEDIA.tileResidential,
      },
    ],
    []
  );

  return (
    <PageShell
      hero
      heroImage={MEDIA.hero}
      heroContentAlign="center"
      eyebrow="Design — Commercial"
      title="Commercial Design"
      subtitle="Landscape architecture for commercial environments—focused on durability, grading rationale, planted systems that perform, and schedule, maintenance, and budget reality."
    >
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        <AnimatedSection>
          <div className="flex flex-wrap gap-2 border-y border-[#1F2E23]/10 py-6 md:gap-3 md:py-8">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="border border-[#1F2E23]/15 bg-white/50 px-3 py-1 type-micro text-[#1F2E23]/55"
              >
                {tag}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pt-12 md:px-10 md:pt-14 lg:px-20">
        <AnimatedSection>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 type-micro text-[#1F2E23]/55">
                Portfolio by category
              </p>
              <h2 className="type-h2 text-[#1F2E23]">
                Galleries with dedicated pages.
              </h2>
            </div>

            <Link
              href={ROUTES.gallery ?? "/gallery"}
              className="type-button text-[#1F2E23]/70 hover:text-[#1F2E23] no-underline"
            >
              View built work →
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-10 md:px-10 md:py-12 lg:px-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {CATEGORIES.map((category, idx) => (
            <CommercialGridCard
              key={category.slug}
              item={category}
              href={`${base}/${category.slug}`}
              delay={idx * 0.08}
            />
          ))}
        </div>
      </section>

      <HubBreakCTA />

      <section>
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20 lg:px-20">
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-7">
              <AnimatedSection>
                <p className="mb-4 type-micro text-[#1F2E23]/55">
                  Featured Focus
                </p>
                <h3 className="type-h2 text-[#1F2E23]">
                  Clean details. Real-world execution.
                </h3>
                <p className="mt-6 type-body text-eli-muted">
                  Commercial work is designed to hold up to schedule pressure,
                  site constraints, and long-term maintenance. The goal is simple:
                  a design that looks sharp and builds clean.
                </p>
                <Link
                  href={ROUTES.contact}
                  className="mt-8 inline-flex items-center gap-3 type-button text-[#1F2E23] no-underline"
                >
                  How we build
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </AnimatedSection>
            </div>

            <div className="md:col-span-5">
              <AnimatedSection delay={0.1}>
                <div className="overflow-hidden border border-[#1F2E23]/10 bg-white">
                  <div className="aspect-[4/3]">
                    <img
                      src={MEDIA.support}
                      alt="Commercial design details"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F0EA] py-10 md:py-14">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <PortfolioMarquee
            items={portfolioGalleries}
            title="Commercial Design Portfolio"
            ctaLabel="View Full Portfolio"
            ctaHref={ROUTES.gallery ?? "/gallery"}
            bgColor="#F5F0EA"
          />
        </div>
      </section>

      <BottomCTA />
    </PageShell>
  );
}