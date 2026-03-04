// src/components/shared/CTAStrip.jsx
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { ROUTES } from "@/components/utils/routes";

export default function CTAStrip({
  title = "Schedule a design consultation today.",
  body = "Click the button to Schedule Consultation. We look forward to speaking with you about your project.",
  primaryLabel = "Schedule Consultation",
  primaryHref = ROUTES.consultation,
  secondaryLabel = "View Projects",
  secondaryHref = ROUTES.projects,
}) {
  return (
    <section className="bg-[#1F2E23] py-6 md:py-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            <div className="max-w-2xl">
              <h3 className="font-serif-display text-[#F5F0EA] text-3xl md:text-4xl font-light leading-[1.2]">
                {title}
              </h3>

              <p className="mt-5 text-[#F5F0EA]/75 font-sans-clean text-base md:text-lg leading-[1.8]">
                {body}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link href={primaryHref}
                className="inline-flex items-center justify-center gap-3 bg-[#F5F0EA] text-[#1F2E23] px-10 py-4 text-[11px] tracking-[0.25em] uppercase font-sans-clean font-semibold rounded-full hover:bg-[#E8E0D4] transition-colors"
              >
                {primaryLabel}
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link href={secondaryHref}
                className="inline-flex items-center justify-center gap-3 bg-[#6B7F5E] text-[#F5F0EA] px-10 py-4 text-[11px] tracking-[0.25em] uppercase font-sans-clean font-semibold rounded-full hover:bg-[#5E7152] transition-colors"
              >
                {secondaryLabel}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}