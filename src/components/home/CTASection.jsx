// src/components/home/CTASection.jsx
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "../shared/AnimatedSection";
import { ROUTES } from "@/components/utils/routes";

const IMG = "/images/home/cta.jpg";

export default function CTASection() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Image */}
      <img
        src={IMG}
        alt="Landscape architecture consultation"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1F2E23]/80" />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <AnimatedSection>
          <div className="max-w-2xl">
            <h2 className="font-serif-display text-[#F5F0EA] text-4xl md:text-5xl font-light leading-[1.05]">
              Ready to discuss your project?
            </h2>

            <p className="mt-6 text-[#F5F0EA]/75 font-sans-clean text-base max-w-xl">
              Schedule a consultation to discuss your site, project scope, and
              timeline. We typically respond within one business day.
            </p>

            {/* ✅ Updated Buttons (match global CTA system) */}
            <div className="mt-10 flex flex-col sm:flex-row gap-5">
              {/* Primary Light Pill */}
              <Link href={ROUTES.consultation}
                className="inline-flex items-center justify-center gap-3 h-14 px-10 rounded-full
                           bg-[#F5F0EA] text-[#1F2E23]
                           text-[11px] tracking-[0.22em] uppercase
                           font-sans-clean font-semibold
                           hover:bg-[#E8DDCC]
                           transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Secondary Green Pill */}
              <Link href={ROUTES.projects}
                className="inline-flex items-center justify-center gap-3 h-14 px-10 rounded-full
                           bg-[#6B7F5E] text-[#F5F0EA]
                           text-[11px] tracking-[0.22em] uppercase
                           font-sans-clean font-semibold
                           hover:bg-[#5C714F]
                           transition-all duration-300"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}