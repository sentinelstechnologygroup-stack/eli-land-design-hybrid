// src/components/shared/BottomCTA.jsx
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { ROUTES } from "@/components/utils/routes";

export default function BottomCTA({
  eyebrow = "Ready to start?",
  title = "Schedule a Landscape Design Consultation",
  body = "E.L.I. Land Design is based in The Woodlands and designs projects throughout the Houston area. Schedule a consultation to discuss your site, goals, and timeline. We typically respond within one business day.",
  primaryLabel = "Contact Us",
  primaryHref = ROUTES.contact,
  secondaryLabel = "View Projects",
  secondaryHref = ROUTES.projects,

  // styling hooks
  tone = "forest", // "forest" | "sage"
}) {
  const toneClass =
    tone === "sage"
      ? "bg-[#6B7F5E]"
      : "bg-[#545E55]"; // your existing bottom CTA vibe

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