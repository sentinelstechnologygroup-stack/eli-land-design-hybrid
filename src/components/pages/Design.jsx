// src/pages/Design.jsx
import React, { useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageShell from "../shared/PageShell";
import AnimatedSection from "../shared/AnimatedSection";
import { ROUTES } from "@/components/utils/routes";
import PortfolioMarquee from "@/components/portfolio/PortfolioMarquee";
import BottomCTA from "@/components/shared/BottomCTA";

const MEDIA = {
  hero: "/images/hero/design-hero.jpg",
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
        subtitle:
          "Grading, drainage strategy, outdoor circulation, and planting systems.",
        image: MEDIA.support,
      },
      {
        href: ROUTES.gallery ?? "/gallery",
        title: "Pool & Outdoor Living",
        subtitle:
          "Outdoor living layout, lighting, materials coordination, and build-ready details.",
        image: MEDIA.residential,
      },
      {
        href: ROUTES.gallery ?? "/gallery",
        title: "Commercial Site Plan",
        subtitle:
          "Site planning, civil coordination, and documentation for permitting.",
        image: MEDIA.commercial,
      },
      {
        href: ROUTES.gallery ?? "/gallery",
        title: "Drainage + Planting Systems",
        subtitle:
          "Performance-first drainage solutions with cohesive planting design.",
        image: MEDIA.support,
      },
      {
        href: ROUTES.gallery ?? "/gallery",
        title: "Entry + Streetscape Improvements",
        subtitle:
          "Arrival sequence, hardscape structure, and planting composition.",
        image: MEDIA.residential,
      },
      {
        href: ROUTES.gallery ?? "/gallery",
        title: "Multifamily / Community Landscape",
        subtitle:
          "Phasing, durability, and cohesive design across shared amenities.",
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
      heroContentAlign="center"
      eyebrow="Design"
      title="Landscape Architecture Services"
      subtitle="Licensed landscape architects providing site planning, grading design, drainage engineering, and construction documentation for residential and commercial projects throughout Texas."
    >
      <section className="mx-auto max-w-[1440px] px-6 py-14 md:px-12 md:py-18 lg:px-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {HUBS.map((hub, idx) => (
            <AnimatedSection key={hub.title} delay={idx * 0.1}>
              <Link href={hub.href} className="group block h-full">
                <div className="relative h-full overflow-hidden rounded-3xl border border-[#1F2E23]/10 bg-[#E8E0D4]">
                  <div className="h-[360px] overflow-hidden md:h-[420px] lg:h-[460px]">
                    <img
                      src={hub.image}
                      alt={hub.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/0" />

                  <div className="absolute inset-0 p-7 md:p-9">
                    <div className="flex items-center gap-3 font-sans-clean text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                      {hub.enterLabel}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>

                    <p className="mt-10 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">
                      Design Hub
                    </p>

                    <h3 className="mt-3 font-serif-display text-2xl font-light leading-[1.1] text-white md:text-3xl">
                      {hub.title}
                    </h3>

                    <p className="mt-4 max-w-[56ch] font-sans-clean text-sm leading-[1.8] text-white/70">
                      {hub.subtitle}
                    </p>

                    <div className="absolute bottom-7 left-7 right-7 md:bottom-9 md:left-9 md:right-9">
                      <div className="flex flex-wrap gap-2">
                        {hub.meta.map((m) => (
                          <span
                            key={m}
                            className="rounded-none border border-white/20 px-3 py-1 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75"
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

      <section>
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24 lg:px-20">
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-5">
              <AnimatedSection>
                <div className="relative overflow-hidden rounded-2xl border border-[#1F2E23]/10 bg-white">
                  <div className="h-[260px] overflow-hidden sm:h-[300px] md:h-[320px]">
                    <img
                      src={MEDIA.support}
                      alt="Design details and execution"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                <p className="mt-4 font-sans-clean text-xs leading-[1.6] text-[#1F2E23]/45">
                  Image or video may live on this page.
                </p>
              </AnimatedSection>
            </div>

            <div className="md:col-span-7">
              <AnimatedSection delay={0.1}>
                <p className="mb-5 font-sans-clean text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1F2E23]/55">
                  Approach
                </p>

                <h2 className="mb-6 font-serif-display text-3xl font-light leading-[1.1] text-[#1F2E23] md:text-4xl">
                  Clean details. Real-world execution.
                </h2>

                <p className="mb-6 font-sans-clean text-base leading-[1.85] text-[#1F2E23]/60">
                  Our documentation is developed to coordinate disciplines,
                  satisfy municipal requirements, and translate clearly to the
                  field. We prioritize grading logic, drainage performance,
                  constructible details, and planting systems that hold up over time.
                </p>

                <p className="mb-10 font-sans-clean text-base leading-[1.85] text-[#1F2E23]/60">
                  Whether the scope is a commercial site plan or a residential
                  master plan, the goal is the same: a cohesive design supported
                  by accurate drawings, smart detailing, and accountability
                  through install.
                </p>

                <Link
                  href={ROUTES.gallery ?? "/gallery"}
                  className="group inline-flex items-center gap-3 font-sans-clean text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1F2E23]"
                >
                  View Design Portfolio
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E8E0D4] py-10 md:py-14">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
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