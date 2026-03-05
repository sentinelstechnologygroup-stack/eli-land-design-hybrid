// src/pages/Design.jsx
import React, { useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageShell from "../PageShell";
import AnimatedSection from "../shared/AnimatedSection";
import { ROUTES } from "@/components/utils/routes";
import PortfolioMarquee from "@/components/portfolio/PortfolioMarquee";
import BottomCTA from "@/components/shared/BottomCTA";

const MEDIA = {
  hero: "/images/design/hub/hero.jpg",
  commercial: "/images/design/hub/tile-commercial.jpg",
  residential: "/images/design/hub/tile-residential.jpg",
  support: "/images/design/hub/support.jpg",
};

const HUBS = [
  {
    href: ROUTES.designCommercial,
    title: "Commercial Site Planning & Design",
    subtitle:
      "Comprehensive landscape architecture and grading plans for commercial developments, multifamily communities, and office campuses.",
    meta: ["Site Planning", "Grading + Drainage", "Permitting Docs"],
    image: MEDIA.commercial,
    enterLabel: "Enter Commercial Design Hub",
  },
  {
    href: ROUTES.designResidential,
    title: "Residential Landscape Architecture",
    subtitle:
      "Custom home master plans and buildable documentation—outdoor living, drainage strategy, planting systems, and details.",
    meta: ["Master Plans", "Outdoor Living", "Drainage + Planting"],
    image: MEDIA.residential,
    enterLabel: "Enter Residential Design Hub",
  },
];

export default function Design() {
  const PORTFOLIO_GALLERIES = useMemo(
    () => [
      {
        href: ROUTES.gallery ?? "/gallery",
        title: "Residential Estate Master Plan",
        subtitle: "Grading, drainage strategy, outdoor circulation, and planting systems.",
        image: MEDIA.support,
      },
      {
        href: ROUTES.gallery ?? "/gallery",
        title: "Pool & Outdoor Living",
        subtitle: "Outdoor living layout, lighting, materials coordination, and build-ready details.",
        image: MEDIA.residential,
      },
      {
        href: ROUTES.gallery ?? "/gallery",
        title: "Commercial Site Plan",
        subtitle: "Site planning, civil coordination, and documentation for permitting.",
        image: MEDIA.commercial,
      },
      {
        href: ROUTES.gallery ?? "/gallery",
        title: "Drainage + Planting Systems",
        subtitle: "Performance-first drainage solutions with cohesive planting design.",
        image: MEDIA.support,
      },
      {
        href: ROUTES.gallery ?? "/gallery",
        title: "Entry + Streetscape Improvements",
        subtitle: "Arrival sequence, hardscape structure, and planting composition.",
        image: MEDIA.residential,
      },
      {
        href: ROUTES.gallery ?? "/gallery",
        title: "Multifamily / Community Landscape",
        subtitle: "Phasing, durability, and cohesive design across shared amenities.",
        image: MEDIA.commercial,
      },
    ],
    []
  );

  return (
    <PageShell
      currentPageName="Design"
      hero
      heroImage={MEDIA.hero}
      eyebrow="Design"
      title="Landscape Architecture Services"
      subtitle="Licensed landscape architects providing site planning, grading design, drainage engineering, and construction documentation for residential and commercial projects throughout Texas."
    >
      {/* HUB TILES */}
      <section className="px-6 md:px-12 lg:px-20 py-14 md:py-18 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {HUBS.map((hub, idx) => (
            <AnimatedSection key={hub.title} delay={idx * 0.1}>
              <Link href={hub.href} className="group block h-full">
                {/* Card */}
                <div className="relative h-full overflow-hidden border border-[#1F2E23]/10 bg-[#E8E0D4] rounded-3xl">
                  {/* Image */}
                  <div className="h-[360px] md:h-[420px] lg:h-[460px] overflow-hidden">
                    <img
                      src={hub.image}
                      alt={hub.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/0" />

                  {/* Content overlay */}
                  <div className="absolute inset-0 p-7 md:p-9">
                    {/* ✅ Top-left: ENTER HUB (replaces "Design Hub" position) */}
                    <div className="flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase font-sans-clean font-semibold text-white">
                      {hub.enterLabel}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* ✅ Keep the rest of the text EXACTLY where it was (no flex / no reflow) */}
                    <p className="mt-10 text-[10px] tracking-[0.28em] uppercase font-sans-clean font-semibold text-white/70">
                      Design Hub
                    </p>

                    <h3 className="mt-3 font-serif-display text-white text-2xl md:text-3xl font-light leading-[1.1]">
                      {hub.title}
                    </h3>

                    <p className="mt-4 text-white/70 font-sans-clean text-sm leading-[1.8] max-w-[56ch]">
                      {hub.subtitle}
                    </p>

                    {/* ✅ Pills pinned to bottom of the IMAGE PANEL */}
                    <div className="absolute left-7 right-7 bottom-7 md:left-9 md:right-9 md:bottom-9">
                      <div className="flex flex-wrap gap-2">
                        {hub.meta.map((m) => (
                          <span
                            key={m}
                            className="text-[10px] tracking-[0.22em] uppercase font-sans-clean font-semibold text-white/75 border border-white/20 px-3 py-1 rounded-full"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
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
        <div className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-5">
              <AnimatedSection>
                <div className="relative overflow-hidden border border-[#1F2E23]/10 bg-white rounded-2xl">
                  <div className="h-[260px] sm:h-[300px] md:h-[320px] overflow-hidden">
                    <img
                      src={MEDIA.support}
                      alt="Design details and execution"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                <p className="mt-4 text-[#1F2E23]/45 font-sans-clean text-xs leading-[1.6]">
                  Image or video may live on this page.
                </p>
              </AnimatedSection>
            </div>

            <div className="md:col-span-7">
              <AnimatedSection delay={0.1}>
                <p className="text-[11px] tracking-[0.28em] uppercase font-sans-clean font-semibold text-[#1F2E23]/55 mb-5">
                  Approach
                </p>

                <h2 className="font-serif-display text-[#1F2E23] text-3xl md:text-4xl font-light leading-[1.1] mb-6">
                  Clean details. Real-world execution.
                </h2>

                <p className="text-[#1F2E23]/60 font-sans-clean text-base leading-[1.85] mb-6">
                  Our documentation is developed to coordinate disciplines, satisfy municipal requirements,
                  and translate clearly to the field. We prioritize grading logic, drainage performance,
                  constructible details, and planting systems that hold up over time.
                </p>

                <p className="text-[#1F2E23]/60 font-sans-clean text-base leading-[1.85] mb-10">
                  Whether the scope is a commercial site plan or a residential master plan, the goal is the
                  same: a cohesive design supported by accurate drawings, smart detailing, and
                  accountability through install.
                </p>

                <Link href={ROUTES.gallery ?? "/gallery"}
                  className="group inline-flex items-center gap-3 text-[#1F2E23] text-[12px] tracking-[0.2em] uppercase font-sans-clean font-semibold"
                >
                  View Design Portfolio
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY TEASER — SINGLE SOURCE OF TRUTH */}
      <section className="bg-[#E8E0D4] py-10 md:py-14">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <PortfolioMarquee
            items={PORTFOLIO_GALLERIES}
            title="Design Project Portfolio"
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