// src/components/pages/Projects.jsx
"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Award, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageShell from "@/components/shared/PageShell";
import { ROUTES } from "@/components/utils/routes";

const PROJECT_CARDS = [
  {
    title: "Commercial Landscape Architecture",
    href: ROUTES.designCommercial || "/design/commercial",
    image: "/images/projects/commercial-landscape-architecture.jpg",
    cta: "View Categories",
  },
  {
    title: "Residential Landscape Architecture",
    href: ROUTES.designResidential || "/design/residential",
    image: "/images/projects/residential-landscape-architecture.jpg",
    cta: "View Categories",
  },
  {
    title: "About ELI Land Design",
    href: ROUTES.about || "/about",
    image: "/images/projects/about-eli-land-design.jpg",
    cta: "View Page",
  },
  {
    title: "Gallery",
    href: ROUTES.gallery || "/gallery",
    image: "/images/projects/gallery.jpg",
    cta: "View Gallery",
  },
  {
    title: "New Projects",
    href: ROUTES.newProjects || "/new-projects",
    image: "/images/projects/new-projects.jpg",
    cta: "View Gallery",
  },
  {
    title: "Careers at ELI Land Design",
    href: ROUTES.careersAtEli || "/careers-at-eli",
    image: "/images/projects/careers.jpg",
    cta: "View Careers",
  },
];

function ProjectCard({ item }) {
  return (
    <Link href={item.href} className="group block">
      <article className="relative overflow-hidden bg-[#D9D2C7]">
        <div className="relative aspect-[1.15/1] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08110C]/18 via-[#08110C]/18 to-[#08110C]/72" />
          <div className="absolute inset-0 bg-[#08110C]/18 transition-colors duration-500 group-hover:bg-[#08110C]/26" />
        </div>

        <div className="absolute inset-x-0 top-0 p-5 md:p-6">
          <h3 className="font-serif-display text-[1.75rem] leading-[1.02] tracking-[-0.02em] text-[#F5F0EA] [text-shadow:0_2px_14px_rgba(0,0,0,0.42)]">
            {item.title}
          </h3>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 md:p-6">
          <span className="font-sans-clean text-[10px] font-semibold uppercase tracking-[0.26em] text-[#F5F0EA]">
            {item.cta}
          </span>

          <span className="inline-flex h-8 w-8 items-center justify-center border border-[#F5F0EA]/28 bg-[#F5F0EA]/10 text-[#F5F0EA] backdrop-blur-sm transition-all duration-300 group-hover:bg-[#F5F0EA] group-hover:text-[#1F2E23]">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </article>
    </Link>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = useMemo(
    () => [
      { key: "all", label: "All" },
      { key: "featured", label: "Featured" },
    ],
    []
  );

  const filteredCards = useMemo(() => {
    if (activeFilter === "all") return PROJECT_CARDS;
    return PROJECT_CARDS;
  }, [activeFilter]);

  return (
    <PageShell
      hero
      heroImage="/images/projects/hero.jpg"
      currentPageName="projects"
      title="Landscape Architecture, Site Planning, and Construction Services"
      description="Explore commercial and residential landscape architecture, project galleries, firm background, and current opportunities at ELI Land Design."
    >
      <section className="bg-[#F5F0EA]">
        <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 md:py-16 lg:px-20">
          <div className="max-w-4xl">
            <p className="font-sans-clean text-[15px] leading-8 text-[#4A564D]">
              ELI Land Design provides landscape architecture, site planning,
              and construction services for residential and commercial projects
              throughout The Woodlands, Houston, and surrounding Texas markets.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.key;
              return (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setActiveFilter(filter.key)}
                  className={`inline-flex items-center justify-center border px-4 py-2 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.22em] transition-colors ${
                    isActive
                      ? "border-[#1F2E23] bg-[#1F2E23] text-[#F5F0EA]"
                      : "border-[#1F2E23]/16 bg-transparent text-[#1F2E23] hover:border-[#1F2E23]/36"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5"
            >
              {filteredCards.map((item) => (
                <ProjectCard key={item.title} item={item} />
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 grid gap-6 border-t border-[#1F2E23]/12 pt-8 md:grid-cols-3">
            <div className="flex items-start gap-3">
              <Award className="mt-1 h-4 w-4 text-[#6B7F5E]" />
              <div>
                <div className="font-serif-display text-[1.5rem] text-[#1F2E23]">
                  27+ Years
                </div>
                <p className="mt-2 font-sans-clean text-sm leading-7 text-[#5A665D]">
                  Licensed landscape architecture practice serving Texas clients
                  since 1997.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Award className="mt-1 h-4 w-4 text-[#6B7F5E]" />
              <div>
                <div className="font-serif-display text-[1.5rem] text-[#1F2E23]">
                  500+ Projects
                </div>
                <p className="mt-2 font-sans-clean text-sm leading-7 text-[#5A665D]">
                  Residential estates, commercial developments, and community
                  landscapes completed.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 text-[#6B7F5E]" />
              <div>
                <div className="font-serif-display text-[1.5rem] text-[#1F2E23]">
                  Regional Focus
                </div>
                <p className="mt-2 font-sans-clean text-sm leading-7 text-[#5A665D]">
                  The Woodlands, Houston, and surrounding Texas markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}