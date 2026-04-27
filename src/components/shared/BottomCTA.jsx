// src/components/shared/BottomCTA.jsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { ROUTES } from "@/components/utils/routes";

const IMG = "/images/home/cta.jpg";

export default function BottomCTA() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <img
        src={IMG}
        alt="Landscape architecture consultation"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />

      <div className="absolute inset-0 bg-[#1F2E23]/80" />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <AnimatedSection>
          <div className="max-w-2xl">
            <h2 className="font-serif-display text-4xl font-light leading-[1.05] text-[#F5F0EA] md:text-5xl">
              Ready to discuss your project?
            </h2>

            <p className="mt-6 max-w-xl font-sans-clean text-base text-[#F5F0EA]/75">
              Schedule a consultation to discuss your site, project scope, and
              timeline. We typically respond within one business day.
            </p>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row">
              <Link
                href={ROUTES.consultation}
                className="inline-flex h-14 items-center justify-center gap-3 rounded-none bg-[#F5F0EA] px-10 font-sans-clean text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1F2E23] transition-all duration-300 hover:bg-[#E8DDCC]"
              >
                Schedule Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href={ROUTES.gallery}
                className="inline-flex h-14 items-center justify-center gap-3 rounded-none bg-[#6B7F5E] px-10 font-sans-clean text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F5F0EA] transition-all duration-300 hover:bg-[#5C714F]"
              >
                View Gallery
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}