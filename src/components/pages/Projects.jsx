// src/components/pages/Projects.jsx
"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, PencilRuler } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageShell from "@/components/shared/PageShell";
import { getNewProjects } from "@/data/newProjectsData";

const FILTERS = [
  { key: "all", label: "All Projects" },
  { key: "Residential", label: "Residential" },
  { key: "Commercial", label: "Commercial" },
  { key: "Construction", label: "Construction" },
];

function ProjectCard({ item }) {
  return (
    <Link href={item.href} className="group block overflow-hidden border border-[#1F2E23]/10 bg-white transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(16,24,18,0.10)]">
      <article>
        <div className="aspect-[4/3] overflow-hidden bg-[#E8E0D4]">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="p-6">
          <div className="font-sans-clean text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7B776F]">
            {item.category}
          </div>

          <h3 className="mt-3 font-serif-display text-[28px] leading-tight text-[#1F1A17]">
            {item.title}
          </h3>

          {item.location ? (
            <div className="mt-3 flex items-center gap-2 font-sans-clean text-[12px] text-[#6A655D]">
              <MapPin className="h-3.5 w-3.5" />
              <span>{item.location}</span>
            </div>
          ) : null}

          {item.description ? (
            <p className="mt-4 font-sans-clean text-[14px] leading-7 text-[#4B4741]">
              {item.description}
            </p>
          ) : null}

          <div className="mt-5 inline-flex items-center gap-2 font-sans-clean text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6A655D] transition-colors group-hover:text-[#1F2E23]">
            View Project
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = useMemo(() => {
    return getNewProjects().map((project) => ({
      title: project.title,
      category: project.category,
      location: project.location,
      image: project.coverImage || project.heroImage,
      description: project.description,
      href: `/new-projects/${project.slug}`,
    }));
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects]);

  return (
    <PageShell
      hero
      heroImage="/images/projects/hero.jpg"
      title="Featured Projects"
      subtitle="Explore a curated view of our work across residential, commercial, and construction coordination."
      ctaStripProps={{
        title: "Schedule a design consultation today.",
        description:
          "Click the button below to schedule your consultation. We look forward to speaking with you about your project.",
      }}
    >
      <section className="bg-[#F5F0EA]">
        <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 md:py-16 lg:px-20">
          <div className="mt-2 flex flex-wrap gap-3">
            {FILTERS.map((filter) => {
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
              className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
            >
              {filteredProjects.map((item) => (
                <ProjectCard key={`${item.title}-${item.category}`} item={item} />
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 border-t border-[#1F2E23]/12 pt-8">
            <div className="flex items-start gap-3">
              <PencilRuler className="mt-1 h-4 w-4 text-[#6B7F5E]" />
              <p className="font-sans-clean text-sm leading-7 text-[#5A665D]">
                Built for constructability, clarity, and consistent visual standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
