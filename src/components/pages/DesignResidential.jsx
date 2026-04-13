// src/components/pages/DesignResidential.jsx
"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/shared/PageShell";
import AnimatedSection from "@/components/shared/AnimatedSection";
import HubBreakCTA from "@/components/home/HubBreakCTA";
import BottomCTA from "@/components/shared/BottomCTA";
import PortfolioMarquee from "@/components/portfolio/PortfolioMarquee";
import { ROUTES } from "@/components/utils/routes";

const MEDIA = {
  hero: "/images/design/residential/residential-hero.jpg",
  masterPlans: "/images/design/residential/thumbnails/master-plans-grading.jpg",
  poolOutdoor: "/images/design/residential/thumbnails/pool-outdoor-living.jpg",
  drainagePlanting: "/images/design/residential/thumbnails/drainage-planting-design.jpg",
  renderings: "/images/design/residential/thumbnails/renderings.jpg",
  support: "/images/design/residential/support.jpg",

  tileMasterPlans: "/images/design/residential/thumbnails/master-plans-grading.jpg",
  tilePoolOutdoor: "/images/design/residential/thumbnails/pool-outdoor-living.jpg",
  tileDrainagePlanting: "/images/design/residential/thumbnails/drainage-planting-design.jpg",
  tileRenderings: "/images/design/residential/thumbnails/renderings.jpg",
};

const GRID_ITEMS = [
  {
    title: "Master Plans & Grading",
    href: ROUTES.residentialMasterPlans || "/design/residential/master-plans",
    image: MEDIA.masterPlans,
  },
  {
    title: "Pool & Outdoor Living",
    href: ROUTES.residentialPoolOutdoorLiving || "/design/residential/pool-outdoor-living",
    image: MEDIA.poolOutdoor,
  },
  {
    title: "Drainage & Planting Design",
    href: ROUTES.residentialDrainagePlanting || "/design/residential/drainage-planting",
    image: MEDIA.drainagePlanting,
  },
  {
    title: "Renderings",
    href: ROUTES.galleryRenderings || "/gallery/renderings",
    image: MEDIA.renderings,
  },
];

function GridCard({ item, delay = 0 }) {
  return (
    <AnimatedSection delay={delay}>
      <Link href={item.href} className="group block h-full no-underline">
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
                <h3 className="type-card-title-single text-[1.15rem] text-white sm:text-[1.3rem] md:text-[1.7rem] lg:text-[2.15rem]">
                  {item.title}
                </h3>
              </div>

              <div className="pt-4 lg:pt-8">
                <div className="border-t border-white/18 pt-4 lg:pt-5">
                  <div className="type-micro text-white/65">Typical Scope</div>
                  <div className="mt-4 inline-flex items-center gap-2 type-button text-white">
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

export default function DesignResidential() {
  const portfolioGalleries = useMemo(
    () => [
      {
        href: ROUTES.residentialMasterPlans || "/design/residential/master-plans",
        title: "Master Plans & Grading",
        subtitle: "Drainage logic, grading strategy, and buildable hardscape layout.",
        image: MEDIA.tileMasterPlans,
      },
      {
        href: ROUTES.residentialPoolOutdoorLiving || "/design/residential/pool-outdoor-living",
        title: "Pool & Outdoor Living",
        subtitle: "Circulation, structure coordination, and outdoor use planning.",
        image: MEDIA.tilePoolOutdoor,
      },
      {
        href: ROUTES.residentialDrainagePlanting || "/design/residential/drainage-planting",
        title: "Drainage & Planting Design",
        subtitle: "Texas-ready drainage solutions and coordinated planting systems.",
        image: MEDIA.tileDrainagePlanting,
      },
      {
        href: ROUTES.galleryRenderings || "/gallery/renderings",
        title: "Renderings",
        subtitle: "Concept visuals and presentation-ready residential imagery.",
        image: MEDIA.tileRenderings,
      },
      {
        href: ROUTES.residentialPoolOutdoorLiving || "/design/residential/pool-outdoor-living",
        title: "Outdoor Living",
        subtitle: "Pools, terraces, kitchens, and layered planting coordination.",
        image: MEDIA.poolOutdoor,
      },
      {
        href: ROUTES.residentialMasterPlans || "/design/residential/master-plans",
        title: "Site Planning",
        subtitle: "Master planning that balances beauty, drainage, and constructability.",
        image: MEDIA.masterPlans,
      },
    ],
    []
  );

  return (
    <PageShell
      hero
      heroImage={MEDIA.hero}
      eyebrow="Residential Design"
      title="Residential Design"
      subtitle="Master planning, grading and drainage strategy, outdoor living design, planting systems, and construction documentation for private estates and custom homes."
    
      heroContentAlign="center">
      <section className="bg-[#F5F0EA]">
        <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 md:py-16 lg:px-20">
          <div className="max-w-3xl">
            <p className="type-body text-eli-muted">
              Residential work succeeds when it’s both beautiful and buildable. We develop
              master plans and documentation that address grading, drainage, circulation,
              structures, and planting systems—so the installed result matches the design intent.
            </p>
          </div>

          <AnimatedSection>
            <h2 className="mt-16 type-h2 text-[#1F2E23]">Residential Design Categories</h2>
            <div className="mt-4 h-[2px] w-14 bg-[#D86F3D]" />
          </AnimatedSection>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {GRID_ITEMS.map((item, index) => (
              <GridCard key={item.title} item={item} delay={index * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <HubBreakCTA />

      <section>
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20 lg:px-20">
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-7">
              <AnimatedSection>
                <p className="mb-4 type-micro text-[#1F2E23]/55">Featured Focus</p>
                <h3 className="type-h2 text-[#1F2E23]">Beautiful plans. Buildable execution.</h3>
                <p className="mt-6 type-body text-eli-muted">
                  Residential design works best when grading, drainage, structures,
                  planting, and outdoor living zones are coordinated early. The result
                  is a landscape that reads clean on paper and performs clean in the field.
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
                      alt="Residential design focus"
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
            title="Residential Design Portfolio"
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