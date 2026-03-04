// src/components/home/AboutTeaser.jsx
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "../shared/AnimatedSection";
import { ROUTES } from "@/components/utils/routes";

const IMG = "/images/home/about-teaser.jpg";

export default function AboutTeaser() {
  return (
    <section className="py-10 md:py-14 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto border-t border-[#1F2E23]/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
        <AnimatedSection>
          <div className="relative">
            <img
              src={IMG}
              alt="Chris K. Eiseman, Principal"
              className="w-full aspect-[3/4] object-cover"
              loading="lazy"
            />
            <div className="absolute top-6 right-6 bg-[#1F2E23] text-[#F5F0EA] px-4 py-2 text-[10px] tracking-[0.25em] uppercase font-sans-clean">
              Est. 1997
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col justify-center h-full">
            <div className="text-[9px] tracking-[0.3em] uppercase text-[#1F2E23]/40 font-sans-clean font-semibold mb-6">
              Principal
            </div>
            <h2 className="font-serif-display text-[#1F2E23] text-4xl md:text-5xl font-light mb-8 leading-[1.05]">
              Chris K. Eiseman
            </h2>
            <div className="w-16 h-px bg-[#1F2E23] mb-8" />
            <p className="text-[#1F2E23]/70 font-sans-clean text-base leading-[1.75] mb-6">
              Founder and principal of E.L.I. Land Design. Licensed landscape architect with 27+ years of experience in residential estate design, commercial site planning, and landscape construction throughout Texas.
            </p>
            <p className="text-[#1F2E23]/70 font-sans-clean text-base leading-[1.75] mb-10">
              Specializes in projects requiring technical site analysis, grading and drainage solutions, and coordination with civil engineers, architects, and general contractors.
            </p>
            <Link href={ROUTES.about}
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase font-sans-clean font-semibold text-[#1F2E23] hover:text-[#6B7F5E] transition-colors"
            >
              About the Firm
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}