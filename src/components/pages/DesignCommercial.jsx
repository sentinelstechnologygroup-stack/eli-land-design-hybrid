// src/pages/DesignCommercial.jsx
import React, { useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageShell from "../shared/PageShell";
import AnimatedSection from "../shared/AnimatedSection";
import { ROUTES } from "@/components/utils/routes";
import PortfolioMarquee from "@/components/portfolio/PortfolioMarquee";
import BottomCTA from "@/components/shared/BottomCTA";
import HubBreakCTA from "@/components/home/HubBreakCTA";

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
    scope: [
      "Site planning",
      "Amenity coordination",
      "Hardscape + planted systems",
    ],
  },
  {
    slug: "multifamily",
    label: "Community + Amenity",
    title: "Multifamily",
    description:
      "Amenity courts, pool decks, lighting, planting strategy, and circulation designed for daily use and durability.",
    image: MEDIA.card2,
    scope: [
      "Amenity courts",
      "Pool + common areas",
      "Lighting + landscape coordination",
    ],
  },
  {
    slug: "office",
    label: "Campus + Streetscape",
    title: "Office",
    description:
      "Shade, circulation, signage zones, planting systems, and clean detailing across a cohesive site plan.",
    image: MEDIA.card3,
    scope: [
      "Campus planning",
      "Circulation + entries",
      "Streetscape + planting",
    ],
  },
  {
    slug: "renderings",
    label: "Concept Visualization",
    title: "Renderings",
    description:
      "High-confidence concept and visual direction to align teams before documentation and construction.",
    image: MEDIA.card4,
    scope: [
      "Concept visuals",
      "Presentation imagery",
      "Design communication",
    ],
  },
];

function CommercialGridCard({ item, href, delay = 0 }) {
  return (
    <AnimatedSection delay={delay}>
      <Link href={href} className="group block h-full">
        <article className="relative isolate h-full overflow-hidden border border-[#1F2E23]/10 bg-[#D7D1C7] shadow-[0_18px_50px_rgba(16,24,18,0.12)] transition-all duration-500 group-hover:shadow-[0_28px_70px_rgba(16,24,18,0.18)]">
          <div className="relative aspect-[1/1] sm:aspect-[1.08/1] lg:aspect-[1.42/1]">
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              loading="lazy"
              decoding="async"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/75" />
            <div className="absolute inset-0 bg-[#1F2E23]/10 mix-blend-multiply" />

            <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 md:p-6 lg:p-8">
              <div>
                <h3 className="max-w-[14ch] font-serif-display text-[1.15rem] font-light leading-[1.02] tracking-[-0.02em] text-white sm:text-[1.3rem] md:text-[1.7rem] lg:text-[2.15rem]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[32rem] font-sans-clean text-[12px] leading-[1.6] text-white/85 sm:text-[12.5px] md:text-[13px] lg:mt-5 lg:text-[15px] lg:leading-[1.75]">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 lg:pt-8">
                <div className="border-t border-white/18 pt-4 lg:pt-5">
                  <div className="mb-3 text-[9px] font-sans-clean font-semibold uppercase tracking-[0.28em] text-white/65 lg:text-[10px]">
                    
                  </div>

                  <ul className="space-y-2 lg:space-y-3">
                    {item.scope.map((scopeItem) => (
                      <li
                        key={scopeItem}
                        className="flex items-start gap-2.5 text-white/85"
                      >
                        <span className="mt-[7px] h-[5px] w-[5px] shrink-0 bg-white/80" />
                        <span className="font-sans-clean text-[11px] leading-[1.45] sm:text-[11.5px] md:text-[12px] lg:text-[15px] lg:leading-[1.55]">
                          {scopeItem}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 inline-flex items-center gap-2 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.24em] text-white lg:mt-6 lg:text-[11px]">
                  View Gallery
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
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
                className="text-[10px] tracking-[0.22em] uppercase font-sans-clean font-semibold text-[#1F2E23]/55 border border-[#1F2E23]/15 bg-white/50 px-3 py-1 rounded-none"
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

            <Link
              href={ROUTES.gallery ?? "/gallery"}
              className="text-[11px] tracking-[0.2em] uppercase font-sans-clean font-semibold text-[#1F2E23]/70 hover:text-[#1F2E23]"
            >
              View built work →
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* CATEGORY GRID */}
      <section className="px-6 md:px-12 lg:px-20 py-10 md:py-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 lg:gap-8">
          {CATEGORIES.map((c, idx) => (
            <CommercialGridCard
              key={c.slug}
              item={c}
              href={`${base}/${c.slug}`}
              delay={idx * 0.08}
            />
          ))}
        </div>
      </section>

      {/* HUB BREAK CTA */}
      <HubBreakCTA />

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
                <Link
                  href={ROUTES.contact}
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
        <section className="bg-[#F5F0EA] py-10 md:py-14">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <PortfolioMarquee
              items={PORTFOLIO_GALLERIES}
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