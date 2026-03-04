// src/components/home/FeaturedProjects.jsx
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "../shared/AnimatedSection";
import { ROUTES } from "@/components/utils/routes";

const PROJECTS = [
  { title: "Playa Vista Apartments", category: "Multifamily Landscape", image: "/images/home/featured-01.jpg" },
  { title: "Magnolia, TX Residence", category: "Residential Landscape Architecture", image: "/images/home/featured-02.jpg" },
  { title: "Spring Creek Residence", category: "Pool & Outdoor Living", image: "/images/home/featured-03.jpg" },
  { title: "Woodlands Commons", category: "Landscape Architecture", image: "/images/home/featured-04.jpg" },
];

export default function FeaturedProjects() {
  return (
    <section className="pb-24 md:pb-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* ✅ Match gallery spacing (no “mosaic” gap-1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <AnimatedSection key={project.title} delay={idx * 0.1}>
              <Link href={ROUTES.projects} className="block">
                <div className="group relative overflow-hidden aspect-[4/3] rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2E23]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-[9px] tracking-[0.3em] uppercase text-[#F5F0EA]/40 font-sans-clean font-semibold mb-2">
                      {project.category}
                    </div>
                    <h3 className="font-serif-display text-[#F5F0EA] text-xl md:text-2xl font-light">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-12 md:mt-14 text-center">
          <Link href={ROUTES.projects}
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase font-sans-clean font-semibold text-[#1F2E23] hover:text-[#6B7F5E] transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}