// src/components/shared/PageHero.jsx
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * PageHero — standardized full-bleed hero/banner that sits behind the fixed header.
 * ✅ Matches your existing tone: serif-display headline, clean sans subcopy, restrained overlay.
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
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <section className={`relative w-full ${heightClass} overflow-hidden`}>
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className={`absolute inset-0 ${overlayClass}`} />
      </div>

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
              <Button asChild variant="ctaOutline" size="cta">
                <Link href={ctaHref}>
                  {ctaLabel}
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}