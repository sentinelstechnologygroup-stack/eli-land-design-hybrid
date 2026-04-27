// src/components/home/CTASection.jsx
"use client";

import React from "react";
import Link from "next/link";
import { ROUTES } from "@/components/utils/routes";

export default function CTASection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/home/cta.jpg"
          alt="Landscape design project"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0B1A12]/70" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20 lg:px-20">
        <div className="max-w-[720px]">
          <h2 className="text-[32px] md:text-[42px] font-semibold text-[#F5F0EA] leading-tight">
            Ready to discuss your project?
          </h2>

          <p className="mt-4 text-[#F5F0EA]/80 text-[15px] leading-[1.8]">
            Schedule a consultation to discuss your site, project scope, and timeline.
            We typically respond within one business day.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {/* Primary CTA */}
            <Link
              href={ROUTES.contact}
              className="inline-flex items-center justify-center h-14 px-10 bg-[#F5F0EA] text-[#1F2E23]
                         text-[11px] tracking-[0.22em] uppercase"
            >
              Schedule Consultation
            </Link>

            {/* Secondary CTA (FIXED) */}
            <Link
              href={ROUTES.gallery}   // ✅ FIX HERE
              className="inline-flex items-center justify-center h-14 px-10
                         bg-[#6B7F5E] text-[#F5F0EA]
                         text-[11px] tracking-[0.22em] uppercase"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}