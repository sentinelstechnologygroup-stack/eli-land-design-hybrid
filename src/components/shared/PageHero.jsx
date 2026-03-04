// src/components/shared/PageHero.jsx
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/**
 * PageHero — standardized full-bleed hero/banner that sits behind the fixed header.
 * ✅ Matches your existing tone: serif-display headline, clean sans subcopy, restrained overlay.
 *
 * Required assets:
 * - Provide an image path in /public/images/... (recommended)
 *
 * Notes:
 * - This is designed to be the FIRST thing on a page when heroUnderHeader is enabled.
 * - It intentionally consumes viewport height so the header + hero feel like one system.
 */
export default function PageHero({
  label,
  title,
  subtitle,
  image,
  heightClass = "min-h-[80vh] md:min-h-[88vh]",
  overlayClass = "bg-black/45",
  contentMax = "max-w-[1440px]",
  align = "left", // "left" | "center"
  ctaLabel,
  ctaHref,
}) {
  const alignWrap =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <section className={`relative w-full ${heightClass} overflow-hidden`}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className={`absolute inset-0 ${overlayClass}`} />
      </div>

      {/* Content */}
      <div className={`${contentMax} mx-auto px-6 md:px-12 lg:px-20`}>
        <div className={`relative pt-32 md:pt-40 pb-20 ${alignWrap}`}>
          {label ? (
            <div className="text-[10px] tracking-[0.3em] uppercase font-sans-clean font-semibold text-white/70 mb-8">
              {label}
            </div>
          ) : null}

          {title ? (
            <h1 className="font-serif-display text-white text-5xl md:text-7xl font-light tracking-tight leading-[1.02] max-w-[18ch]">
              {title}
            </h1>
          ) : null}

          {subtitle ? (
            <p className="mt-8 text-white/80 font-sans-clean text-sm md:text-base leading-[1.8] max-w-[62ch]">
              {subtitle}
            </p>
          ) : null}

          {ctaLabel && ctaHref ? (
            <div className="mt-12">
              <Link href={ctaHref}
                className="inline-flex items-center gap-2 px-7 py-3 border text-[11px] tracking-[0.22em] uppercase font-sans-clean font-semibold transition-all duration-300 hover:bg-white hover:text-[#1F2E23] hover:border-white border-white/40 text-white"
              >
                {ctaLabel}
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}