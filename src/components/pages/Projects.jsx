// src/pages/Projects.jsx
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Award, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import PageShell from "../PageShell";
import AnimatedSection from "../shared/AnimatedSection";
import { ROUTES, createProjectUrl } from "@/components/utils/routes";
import { Panel } from "@/components/ui/panel";
import BottomCTA from "@/components/shared/BottomCTA";

const CATEGORIES = ["All Projects", "Residential", "Commercial", "Construction"];

const PROJECTS = [
  {
    title: "Carlton Woods Estate",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
    slug: "carlton-woods-estate",
    location: "The Woodlands, TX",
  },
  {
    title: "Harper’s Landing",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1600566753190-17fbaa2a6c3b?w=1600&q=80",
    slug: "harpers-landing",
    location: "Houston, TX",
  },
  {
    title: "Spring Creek Residence",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
    slug: "spring-creek-residence",
    location: "Spring, TX",
  },
  {
    title: "Woodlands Commons",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&q=80",
    slug: "woodlands-commons",
    location: "The Woodlands, TX",
  },
];

export default function Projects() {
  const [active, setActive] = useState("All Projects");

  const filtered = useMemo(() => {
    if (active === "All Projects") return PROJECTS;
    return PROJECTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <PageShell
      currentPageName="Projects"
      hero
      heroImage="/images/projects/all-projects/projects-hero.jpg"
      eyebrow="Portfolio"
      title={
        <>
          Featured
          <br />
          <span className="text-[#D4C5A9]">Projects.</span>
        </>
      }
      subtitle="Explore a curated view of our work across residential, commercial, and construction coordination."
    >
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <AnimatedSection>
          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-10">
            {CATEGORIES.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={[
                    "px-4 py-2 rounded-full border text-[11px] tracking-[0.22em] uppercase font-sans-clean",
                    isActive
                      ? "border-[#1F2E23]/20 bg-[#1F2E23] text-[#F5F0EA]"
                      : "border-[#1F2E23]/15 bg-white/60 text-[#1F2E23] hover:bg-white",
                  ].join(" ")}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((p) => (
                <Link
                  key={p.slug} href={typeof createProjectUrl === "function" ? createProjectUrl(p.slug) : ROUTES.projects}
                  className="block"
                >
                  <Panel
                    variant="light"
                    className="group cursor-pointer overflow-hidden rounded-2xl"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] bg-[#E5DED4] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#1F2E23]/0 group-hover:bg-[#1F2E23]/40 transition-all duration-500" />
                    </div>

                    {/* Info */}
                    <div className="p-6">
                      <span className="text-[9px] tracking-[0.22em] uppercase text-[#1F2E23]/55 font-sans-clean">
                        {p.category}
                      </span>

                      <h3 className="font-serif-display text-[#1F2E23] text-2xl font-light mt-3 mb-3 group-hover:text-[#6B7F5E] transition-colors">
                        {p.title}
                      </h3>

                      <div className="flex items-center gap-2 text-[#1F2E23]/55 text-sm font-sans-clean">
                        <MapPin className="w-4 h-4" />
                        <span>{p.location}</span>
                      </div>

                      <div className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase font-sans-clean text-[#1F2E23]/70 group-hover:text-[#1F2E23] transition-colors">
                        View Project <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Panel>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Bottom note */}
          <div className="mt-14 flex items-center gap-3 text-[#1F2E23]/70">
            <Award className="w-5 h-5" />
            <span className="font-sans-clean text-sm">
              Built for constructability, clarity, and consistent visual standards.
            </span>
          </div>
        </AnimatedSection>
      </section>

      {/* SHARED BOTTOM CTA */}
      <BottomCTA />
    </PageShell>
  );
}