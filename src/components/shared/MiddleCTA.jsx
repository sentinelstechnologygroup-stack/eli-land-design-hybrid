// src/components/shared/MiddleCTA.jsx
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { ROUTES } from "@/components/utils/routes";
import { trackCTA } from "@/lib/intelligence";
import { Button } from "@/components/ui/button";

export default function MiddleCTA({
  eyebrow = "Ready to start?",
  title = "Schedule a Landscape Design Consultation",
  body = "",
  primaryLabel = "Schedule Consultation",
  primaryHref = ROUTES.consultation,
  secondaryLabel = "View Projects",
  secondaryHref = ROUTES.gallery,
  tone = "forest",
}) {
  const toneClass = tone === "sage" ? "bg-[#6B7F5E]" : "bg-[#545E55]";

  return (
    <section className={`border-t border-[#1F2E23]/10 ${toneClass} text-[#F5F0EA]`}>
      <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-10 lg:px-14">
        <AnimatedSection>
          <div className="text-center">
            {eyebrow ? (
              <div className="mb-6 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.35em] text-[#F5F0EA]/72">
                {eyebrow}
              </div>
            ) : null}

            <h2 className="font-serif-display text-3xl font-light leading-[1.05] text-[#F5F0EA] md:text-4xl lg:text-5xl">
              {title}
            </h2>

            {body ? (
              <p className="mx-auto mt-6 max-w-3xl font-sans-clean text-sm leading-[1.9] text-[#F5F0EA]/82 md:text-base">
                {body}
              </p>
            ) : null}

            <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">
              <Button asChild variant="cta" size="ctaLg">
                <Link
                  href={primaryHref}
                  onClick={() => trackCTA("schedule-consultation", "middle-cta")}
                >
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="ctaSecondary" size="ctaLg">
                <Link
                  href={secondaryHref}
                  onClick={() => trackCTA("view-projects", "middle-cta")}
                >
                  {secondaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
