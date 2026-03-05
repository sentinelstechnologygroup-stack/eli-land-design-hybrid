// src/pages/DesignResidential.jsx
import React, { useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import PageShell from "../PageShell";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { ROUTES } from "@/components/utils/routes";
import PortfolioMarquee from "@/components/portfolio/PortfolioMarquee";
import BottomCTA from "@/components/shared/BottomCTA";

const MEDIA = {
  hero: "/images/design/residential/hero.jpg",
};

const CATEGORIES = [
  {
    slug: "master-plans",
    title: "Master Plans & Grading",
    description:
      "Buildable master plans with grading strategy, drainage performance, and coordinated hardscape layout.",
    includes: ["Site analysis", "Grading + drainage", "Phasing + constructability"],
    href: ROUTES.residentialMasterPlans,
    image: "/images/design/residential/thumbnails/master-plans.jpg",
  },
  {
    slug: "pool-outdoor-living",
    title: "Pool & Outdoor Living",
    description:
      "Outdoor living environments planned for circulation, structure coordination, and long-term use.",
    includes: ["Pools + terraces", "Outdoor kitchens", "Lighting + planting coordination"],
    href: ROUTES.residentialPoolOutdoorLiving,
    image: "/images/design/residential/thumbnails/pool-outdoor-living.jpg",
  },
  {
    slug: "drainage-planting",
    title: "Drainage & Planting Design",
    description:
      "Drainage solutions and planting systems designed for Texas conditions and maintenance reality.",
    includes: ["Drainage strategy", "Planting systems", "Irrigation coordination"],
    href: ROUTES.residentialDrainagePlanting,
    image: "/images/design/residential/thumbnails/drainage-planting.jpg",
  },
  {
    slug: "renderings",
    title: "Renderings",
    description:
      "Concept renderings that help visualize design intent, materials, and spatial relationships before construction.",
    includes: ["Concept visuals", "Material + lighting studies", "Presentation-ready imagery"],
    href: ROUTES.renderings,
    image: "/images/design/residential/thumbnails/renderings.jpg",
  },
];

export default function DesignResidential() {
  const PORTFOLIO_GALLERIES = useMemo(() => [], []);

  return (
    <PageShell
      currentPageName="DesignResidential"
      hero
      heroImage={MEDIA.hero}
      eyebrow="Design"
      title="Residential Design"
      subtitle="Master planning, grading and drainage strategy, outdoor living design, planting systems, and construction documentation for private estates and custom homes."
    >
      {/* Intro */}
      <section className="px-6 md:px-12 lg:px-20 pt-14 md:pt-16 pb-10 max-w-[1440px] mx-auto">
        <AnimatedSection>
          <p className="text-[#1F2E23]/60 font-sans-clean text-base leading-[1.9] max-w-3xl">
            Residential work succeeds when it’s both beautiful and buildable. We develop master plans and
            documentation that address grading, drainage, circulation, structures, and planting systems—so
            the installed result matches the design intent.
          </p>
        </AnimatedSection>
      </section>

      {/* CATEGORY GRID */}
      <section>
        <div className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-[1440px] mx-auto">
          <AnimatedSection>
            <h2 className="font-serif-display text-[#1F2E23] text-3xl md:text-4xl font-light mb-12">
              Residential Design Categories
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {CATEGORIES.map((c, idx) => (
              <AnimatedSection key={c.slug} delay={idx * 0.1}>
                <Link href={c.href} className="group block">
                  <div className="relative overflow-hidden rounded-2xl border border-[#1F2E23]/10">

                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
                    </div>

                    {/* Foreground Content */}
                    <div className="relative p-8 md:p-10">
                      <h3 className="font-serif-display text-white text-2xl md:text-3xl font-light mb-3">
                        {c.title}
                      </h3>

                      <p className="text-white/75 font-sans-clean text-sm leading-[1.8] mb-6 max-w-[60ch]">
                        {c.description}
                      </p>

                      <div className="border-t border-white/20 pt-6">
                        <div className="text-[10px] tracking-[0.25em] uppercase text-white/55 font-sans-clean font-semibold mb-3">
                          Typical Scope
                        </div>

                        <ul className="space-y-2">
                          {c.includes.map((item) => (
                            <li
                              key={item}
                              className="text-white/75 font-sans-clean text-sm flex items-center gap-2"
                            >
                              <span className="w-1 h-1 bg-white/70 rounded-full" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 inline-flex items-center gap-2 text-white text-[11px] tracking-[0.2em] uppercase font-sans-clean font-medium">
                        View Gallery
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA />
    </PageShell>
  );
}