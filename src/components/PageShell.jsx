"use client";

import React, { useEffect } from "react";
import CTAStrip from "./shared/CTAStrip";
import BottomCTA from "./shared/BottomCTA";

/**
 * PageShell
 * - Standard page wrapper
 * - Hero pages signal Layout/SiteHeader using body class "eli-has-hero"
 * - IMPORTANT: We infer hero mode if heroImage exists (prevents Contact/legacy pages from breaking overlay)
 *
 * Additions:
 * - heroExtras: optional slot rendered inside the hero area (used ONLY by Reviews right now)
 * - BottomCTA is owned here (single source of truth)
 */
export default function PageShell({
  hero = false,
  heroImage,
  eyebrow,
  title,
  subtitle,
  children,

  // CTA STRIP below hero
  showCtaStrip = true,

  // ✅ Hero extras (optional)
  heroExtras = null,

  // ✅ Bottom CTA control
  showBottomCta = true,
  bottomCtaProps = {},
}) {
  const hasHero = Boolean(hero || heroImage);

  useEffect(() => {
    // ✅ SSR-safe guard (even though this is a client component, keep it deterministic)
    if (typeof document === "undefined") return;

    const cls = "eli-has-hero";
    if (hasHero) document.body.classList.add(cls);
    else document.body.classList.remove(cls);

    return () => {
      document.body.classList.remove(cls);
    };
  }, [hasHero]);

  return (
    <main className="bg-[#F5F0EA]">
      {/* HERO */}
      {hasHero && (
        <section className="relative w-full h-[56vh] min-h-[460px] max-h-[740px] overflow-hidden">
          {/* image */}
          {heroImage ? (
            <img
              src={heroImage}
              alt={title || "ELI Land Design"}
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
          ) : (
            <div className="absolute inset-0 bg-[#1F2E23]" />
          )}

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1F2E23]/35 via-[#1F2E23]/55 to-[#1F2E23]/75" />

          {/* content */}
          <div className="absolute inset-0">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 h-full">
              <div className="h-full flex items-center">
                <div className="w-full max-w-3xl -translate-y-8 md:-translate-y-10">
                  {eyebrow && (
                    <div className="text-[10px] tracking-[0.35em] uppercase font-sans-clean font-semibold text-white/75 mb-6">
                      {eyebrow}
                    </div>
                  )}

                  {title && (
                    <h1 className="font-serif-display text-white text-5xl md:text-6xl font-light leading-[1.02]">
                      {title}
                    </h1>
                  )}

                  {subtitle && (
                    <p className="mt-5 text-white/75 font-sans-clean text-sm md:text-base leading-[1.9] max-w-[72ch]">
                      {subtitle}
                    </p>
                  )}

                  {/* ✅ Reviews-only slot (or any page that needs it) */}
                  {heroExtras ? <div className="mt-8">{heroExtras}</div> : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA STRIP (global below hero) */}
      {hasHero && showCtaStrip ? (
        <div className="pt-2 md:pt-4">
          <CTAStrip />
        </div>
      ) : null}

      {/* BODY */}
      <div>{children}</div>

      {/* ✅ BOTTOM CTA (single source of truth) */}
      {showBottomCta ? <BottomCTA {...bottomCtaProps} /> : null}
      <div className="pt-2 md:pt-4" />
    </main>
  );
}