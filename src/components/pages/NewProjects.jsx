// src/components/pages/NewProjects.jsx

"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageShell from "../shared/PageShell";
import AnimatedSection from "../shared/AnimatedSection";
import BottomCTA from "../shared/BottomCTA";
import { getNewProjects } from "@/data/newProjectsData";

const FILTERS = [
  { key: "All", label: "All" },
  { key: "Residential", label: "Residential" },
  { key: "Commercial", label: "Commercial" },
];

function FilterButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "border px-5 py-3 text-[11px] font-sans-clean font-semibold uppercase tracking-[0.28em] transition-colors",
        active
          ? "border-[#1F2E23] bg-[#1F2E23] text-white"
          : "border-[#1F2E23]/12 bg-white/50 text-[#1F2E23] hover:bg-white hover:border-[#1F2E23]/20",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export default function NewProjects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const allProjects = getNewProjects();

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return allProjects;
    return allProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter, allProjects]);

  const heroImage =
    allProjects.find((project) => project.coverImage)?.coverImage ||
    "/images/projects/hero.jpg";

  return (
    <PageShell
      hero
      heroImage={heroImage}
      eyebrow="Fresh Work"
      title="New Projects"
      subtitle="Browse recent residential and commercial work in a clean gallery format."
    >
      <section className="bg-[#F5F0EA]">
        <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 md:py-16 lg:px-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="text-[11px] font-sans-clean font-semibold uppercase tracking-[0.28em] text-[#7B776F]">
                Gallery Index
              </div>
              <h2 className="mt-3 font-serif-display text-[36px] leading-tight text-[#1F1A17] md:text-[44px]">
                Browse by Project
              </h2>
              <p className="mt-4 max-w-[760px] font-sans-clean text-[15px] leading-7 text-[#4B4741]">
                Select a project to open its dedicated gallery page.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-8 flex flex-wrap gap-3">
              {FILTERS.map((filter) => (
                <FilterButton
                  key={filter.key}
                  active={activeFilter === filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  {filter.label}
                </FilterButton>
              ))}
            </div>
          </AnimatedSection>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.slug} delay={(index % 6) * 0.04}>
                <Link
                  href={`/new-projects/${project.slug}`}
                  className="group block overflow-hidden border border-[#1F2E23]/10 bg-white transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(16,24,18,0.10)]"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#E8E0D4]">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="p-6">
                    <div className="text-[11px] font-sans-clean font-semibold uppercase tracking-[0.28em] text-[#7B776F]">
                      {project.category}
                    </div>

                    <div className="mt-3 flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="font-serif-display text-[28px] leading-tight text-[#1F1A17]">
                          {project.title}
                        </h3>
                        {project.location ? (
                          <div className="mt-2 font-sans-clean text-[12px] text-[#6A655D]">
                            {project.location}
                          </div>
                        ) : null}
                      </div>

                      <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#1F1A17] transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                    {project.description ? (
                      <p className="mt-4 font-sans-clean text-[14px] leading-7 text-[#4B4741]">
                        {project.description}
                      </p>
                    ) : null}
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