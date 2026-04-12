// src/components/shared/CTAStrip.jsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/components/utils/routes";
import { trackCTA } from "@/lib/intelligence";

export default function CTAStrip({
  eyebrow,
  title = "Schedule a design consultation today.",
  description = "Click the button to Schedule Consultation. We look forward to speaking with you about your project.",
  primaryLabel = "Schedule Consultation",
  primaryHref,
  secondaryLabel = "View Projects",
  secondaryHref,
  className = "",
}) {
  const safePrimaryHref = primaryHref || ROUTES.consultation || ROUTES.contact || "/contact";
  const safeSecondaryHref = secondaryHref || ROUTES.projects || "/projects";

  return (
    <section className={`bg-[#1F2E23] text-[#F5F0EA] ${className}`}>
      <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 md:py-16 lg:px-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1.35fr_auto] lg:gap-12">
          <div>
            {eyebrow ? (
              <div className="text-[11px] font-sans-clean font-semibold uppercase tracking-[0.28em] text-[#F5F0EA]/62">
                {eyebrow}
              </div>
            ) : null}

            <h2
              className={`font-serif-display text-[34px] font-light leading-[1.04] text-[#F5F0EA] md:text-[42px] ${
                eyebrow ? "mt-4" : ""
              }`}
            >
              {title}
            </h2>

            <p className="mt-4 max-w-[760px] font-sans-clean text-[15px] leading-7 text-[#F5F0EA]/80">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row">
            <Button asChild variant="cta" size="cta">
              <Link
                href={safePrimaryHref}
                onClick={() => trackCTA("schedule-consultation", "cta-strip")}
              >
                {primaryLabel}
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button asChild variant="ctaSecondary" size="cta">
              <Link
                href={safeSecondaryHref}
                onClick={() => trackCTA("view-projects", "cta-strip")}
              >
                {secondaryLabel}
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}