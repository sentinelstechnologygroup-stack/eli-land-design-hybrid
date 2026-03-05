// src/components/shared/BottomCTA.jsx
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { ROUTES } from "@/components/utils/routes";
import { trackCTA } from "@/lib/intelligence";
import { Button } from "@/components/ui/button";

export default function BottomCTA({
  eyebrow = "Ready to start?",
  title = "Schedule a Landscape Design Consultation",
  body = "E.L.I. Land Design is based in The Woodlands and designs projects throughout the Houston area. Schedule a consultation to discuss your site, goals, and timeline. We typically respond within one business day.",
  primaryLabel = "Schedule Consultation",
  primaryHref = ROUTES.consultation,
  secondaryLabel = "View Projects",
  secondaryHref = ROUTES.projects,
  tone = "forest", // "forest" | "sage"
}) {
  const toneClass = tone === "sage" ? "bg-[#6B7F5E]" : "bg-[#545E55]";

  return (
    <section className={`border-t border-[#1F2E23]/10 ${toneClass}`}>
      <div className="py-12 md:py-16 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <AnimatedSection>
          <div className="text-center">
            {eyebrow ? (
              <div className="text-[10px] tracking-[0.35em] uppercase font-sans-clean font-semibold text-[#F5F0EA]/70 mb-6">
                {eyebrow}
              </div>
            ) : null}

            <h2 className="font-serif-display text-[#F5F0EA] text-3xl md:text-4xl lg:text-5xl font-light leading-[1.05]">
              {title}
            </h2>

            {body ? (
              <p className="mt-6 text-[#F5F0EA]/75 font-sans-clean text-sm md:text-base leading-[1.9] max-w-3xl mx-auto">
                {body}
              </p>
            ) : null}

            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
              <Button asChild variant="cta" size="ctaLg">
                <Link
                  href={primaryHref}
                  onClick={() => trackCTA("schedule-consultation", "bottom-cta")}
                >
                  {primaryLabel}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button asChild variant="ctaSecondary" size="ctaLg">
                <Link
                  href={secondaryHref}
                  onClick={() => trackCTA("view-projects", "bottom-cta")}
                >
                  {secondaryLabel}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}