// src/pages/DesignCommercial.jsx
import React, { useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageShell from "../PageShell";
import AnimatedSection from "../shared/AnimatedSection";
import { ROUTES } from "@/components/utils/routes";
import PortfolioMarquee from "@/components/portfolio/PortfolioMarquee";
import BottomCTA from "@/components/shared/BottomCTA";

const MEDIA = {
  hero: "/images/design/commercial/hero.jpg",
  card1: "/images/design/commercial/thumbnails/lifestyle-center.jpg",
  card2: "/images/design/commercial/thumbnails/multifamily.jpg",
  card3: "/images/design/commercial/thumbnails/office.jpg",
  card4: "/images/design/commercial/thumbnails/renderings.jpg",
  support: "/images/design/commercial-support.jpg",

  tileCommercial: "/images/design/hub/tile-commercial.jpg",
  tileResidential: "/images/design/hub/tile-residential.jpg",
  hubSupport: "/images/design/hub/support.jpg",
};

const TAGS = ["Site planning", "Circulation", "Grading + drainage", "Materials", "Planted systems"];

const CATEGORIES = [
  {
    slug: "lifestyle-center",
    label: "Property + Category",
    title: "Lifestyle Center",
    description:
      "Entry sequence, plazas, pedestrian flow, and durable materials that elevate the experience and perform long-term.",
    image: MEDIA.card1,
  },
  {
    slug: "multifamily",
    label: "Community + Amenity",
    title: "Multifamily",
    description:
      "Amenity courts, pool decks, lighting, planting strategy, and circulation designed for daily use and durability.",
    image: MEDIA.card2,
  },
  {
    slug: "office",
    label: "Campus + Streetscape",
    title: "Office",
    description:
      "Shade, circulation, signage zones, planting systems, and clean detailing across a cohesive site plan.",
    image: MEDIA.card3,
  },
  {
    slug: "renderings",
    label: "Concept Visualization",
    title: "Renderings",
    description:
      "High-confidence concept and visual direction to align teams before documentation and construction.",
    image: MEDIA.card4,
  },
];

export default function DesignCommercial() {
  const base = ROUTES.designCommercial || "/design/commercial";

  const PORTFOLIO_GALLERIES = useMemo(
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
      currentPageName="DesignCommercial"
      hero
      heroImage={MEDIA.hero}
      eyebrow="Design — Commercial"
      title="Commercial Design"
      subtitle="Landscape architecture for commercial environments—focused on durability, grading rationale, planted systems that perform, and schedule, maintenance, and budget reality."
    >
      {/* TAGS / CHIPS */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <AnimatedSection>
          <div className="flex flex-wrap gap-2 md:gap-3 border-y border-[#1F2E23]/10 py-6 md:py-8">
            {TAGS.map((t) => (
              <span
                key={t}
                className="text-[10px] tracking-[0.22em] uppercase font-sans-clean font-semibold text-[#1F2E23]/55 border border-[#1F2E23]/15 bg-white/50 px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* GRID HEADER */}
      <section className="px-6 md:px-12 lg:px-20 pt-12 md:pt-14 max-w-[1440px] mx-auto">
        <AnimatedSection>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] tracking-[0.28em] uppercase font-sans-clean font-semibold text-[#1F2E23]/55 mb-3">
                Portfolio by category
              </p>
              <h2 className="font-serif-display text-[#1F2E23] text-2xl md:text-3xl font-light">
                Galleries with dedicated pages.
              </h2>
            </div>

            <Link href={ROUTES.gallery ?? "/gallery"}
              className="text-[11px] tracking-[0.2em] uppercase font-sans-clean font-semibold text-[#1F2E23]/70 hover:text-[#1F2E23]"
            >
              View built work →
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* CATEGORY GRID */}
      <section className="px-6 md:px-12 lg:px-20 py-10 md:py-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CATEGORIES.map((c, idx) => (
            <AnimatedSection key={c.slug} delay={idx * 0.08}>
              <Link href={`${base}/${c.slug}`} className="group block">
                <div className="border border-[#1F2E23]/10 bg-white rounded-2xl overflow-hidden">
                  <div className="relative overflow-hidden bg-[#E8E0D4]">
                    <div className="aspect-[16/7]">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* subtle gradient as before */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/35 via-black/0 to-black/0" />

                    {/* ✅ UPDATED PILL: more contrast, still translucent */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="px-7 py-3 rounded-full border border-white/35 bg-black/35 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                        <span className="text-[10px] tracking-[0.28em] uppercase font-sans-clean font-semibold text-white">
                          {c.title}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-7 md:p-8">
                    <p className="text-[10px] tracking-[0.25em] uppercase font-sans-clean font-semibold text-[#1F2E23]/45 mb-3">
                      {c.label}
                    </p>
                    <p className="text-[#1F2E23]/70 font-sans-clean text-sm leading-[1.8] mb-5">
                      {c.description}
                    </p>

                    <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-sans-clean font-semibold text-[#1F2E23]">
                      Explore
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* SUPPORT */}
      <section>
        <div className="px-6 md:px-12 lg:px-20 py-16 md:py-20 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <AnimatedSection>
                <p className="text-[10px] tracking-[0.28em] uppercase font-sans-clean font-semibold text-[#1F2E23]/55 mb-4">
                  Featured focus
                </p>
                <h3 className="font-serif-display text-[#1F2E23] text-3xl md:text-4xl font-light leading-[1.1] mb-6">
                  Clean details. Real-world execution.
                </h3>
                <p className="text-[#1F2E23]/60 font-sans-clean text-base leading-[1.85] mb-6">
                  Commercial work is designed to hold up to schedule pressure, site constraints, and long-term
                  maintenance. The goal is simple: a design that looks sharp and builds clean.
                </p>
                <Link href={ROUTES.contact}
                  className="group inline-flex items-center gap-3 text-[#1F2E23] text-[12px] tracking-[0.2em] uppercase font-sans-clean font-semibold"
                >
                  How we build
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </AnimatedSection>
            </div>

            <div className="md:col-span-5">
              <AnimatedSection delay={0.1}>
                <div className="border border-[#1F2E23]/10 bg-white overflow-hidden rounded-2xl">
                  <div className="aspect-[4/3]">
                    <img
                      src={MEDIA.support}
                      alt="Commercial design details"
                      className="w-full h-full object-cover"
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

      {/* ✅ GALLERY TEASER — MARQUEE */}
      <section className="bg-[#E8E0D4] py-10 md:py-14">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <PortfolioMarquee
            items={PORTFOLIO_GALLERIES}
            title="Commercial Design Portfolio"
            ctaLabel="View Full Portfolio"
            ctaHref={ROUTES.gallery ?? "/gallery"}
            bgColor="#E8E0D4"
          />
        </div>
      </section>

      <BottomCTA />
    </PageShell>
  );
}