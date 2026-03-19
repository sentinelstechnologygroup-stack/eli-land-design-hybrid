// src/components/home/HubBreakCTA.jsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { ROUTES } from "@/components/utils/routes";

export default function HubBreakCTA() {
  return (
    <section className="w-full pb-6 md:pb-8 lg:pb-10">
      <AnimatedSection>
        {/* FULL BLEED BAR */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#294230] border-y border-[#233227]/40 shadow-[0_10px_24px_rgba(15,22,17,0.18)]">

          {/* CONTENT GRID ALIGNMENT */}
          <div className="mx-auto max-w-[1440px] px-4 py-3 md:px-8 md:py-3.5 lg:px-20 lg:py-4">

            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

              {/* TEXT */}
              <div className="min-w-0">
                <div className="font-serif-display text-[1rem] font-light leading-none text-[#F5F0EA] md:text-[1.1rem] lg:text-[1.2rem]">
                  Schedule a design consultation today
                </div>

                <p className="mt-1 font-sans-clean text-[11px] leading-[1.5] text-[#F5F0EA]/72 md:text-[12px]">
                  Tell us about your site, goals, and scope.
                </p>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap items-center gap-2 md:gap-3 lg:shrink-0">

                <Link
                  href={ROUTES.consultation}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-none bg-[#F5F0EA] px-4 font-sans-clean text-[9px] font-semibold uppercase tracking-[0.22em] text-[#1F2E23] transition-colors duration-300 hover:bg-[#E9E1D4] md:h-11 md:px-5 md:text-[10px]"
                >
                  Schedule Consultation
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <Link
                  href={ROUTES.projects}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-none bg-[#6B7F5E] px-4 font-sans-clean text-[9px] font-semibold uppercase tracking-[0.22em] text-[#F5F0EA] transition-colors duration-300 hover:bg-[#5E7251] md:h-11 md:px-5 md:text-[10px]"
                >
                  View Projects
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

              </div>

            </div>

          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}