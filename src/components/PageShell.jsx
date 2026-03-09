"use client";

import React, { useEffect } from "react";
import CTAStrip from "./shared/CTAStrip";
import BottomCTA from "./shared/BottomCTA";

/**
 * PageShell
 * - Standard page wrapper
 * - Owns the page mode contract through body dataset: hero | standard
 * - Owns hero spacing under the fixed header
 * - Owns the global CTA strip / Bottom CTA behavior
 */
export default function PageShell({
  hero = false,
  heroImage,
  eyebrow,
  title,
  subtitle,
  children,
  showCtaStrip = true,
  heroExtras = null,
  showBottomCta = true,
  bottomCtaProps = {},
}) {
  const hasHero = Boolean(hero || heroImage);

  useEffect(() => {
    if (typeof document === "undefined") return;

    document.body.dataset.eliPageMode = hasHero ? "hero" : "standard";

    return () => {
      delete document.body.dataset.eliPageMode;
    };
  }, [hasHero]);

  return (
    <main className="bg-[#F5F0EA]">
      {hasHero ? (
        <section className="relative isolate w-full min-h-[500px] h-[56vh] max-h-[740px] overflow-hidden">
          {heroImage ? (
            <img
              src={heroImage}
              alt={title || "ELI Land Design"}
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
          ) : (
            <div className="absolute inset-0 bg-[#1F2E23]" />
          )}

          <div className="absolute inset-0 bg-gradient-to-b from-[#1F2E23]/35 via-[#1F2E23]/55 to-[#1F2E23]/75" />

          <div className="relative z-[2] h-full">
            <div className="mx-auto flex h-full max-w-[1440px] items-center px-6 pt-[calc(var(--eli-header-height)+1.75rem)] pb-14 md:px-12 md:pt-[calc(var(--eli-header-height)+2.25rem)] md:pb-16 lg:px-20">
              <div className="w-full max-w-[70rem]">
                <div className="max-w-[60rem]">
                  {eyebrow ? (
                    <div className="mb-6 text-[10px] font-sans-clean font-semibold uppercase tracking-[0.35em] text-white/75">
                      {eyebrow}
                    </div>
                  ) : null}

                  {title ? (
                    <h1 className="max-w-[18ch] font-serif-display text-[clamp(2.4rem,4.2vw,4.75rem)] font-light leading-[1.02] tracking-tight text-white [text-wrap:balance]">
                      {title}
                    </h1>
                  ) : null}

                  {subtitle ? (
                    <p className="mt-5 max-w-[72ch] text-sm font-sans-clean leading-[1.9] text-white/75 md:text-base">
                      {subtitle}
                    </p>
                  ) : null}

                  {heroExtras ? <div className="mt-8">{heroExtras}</div> : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {hasHero && showCtaStrip ? (
        <div className="pt-2 md:pt-4">
          <CTAStrip />
        </div>
      ) : null}

      <div>{children}</div>

      {showBottomCta ? <BottomCTA {...bottomCtaProps} /> : null}
      <div className="pt-2 md:pt-4" />
    </main>
  );
}
