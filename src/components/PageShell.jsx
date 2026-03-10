// src/components/PageShell.jsx
"use client";

import React, { useEffect } from "react";
import CTAStrip from "./shared/CTAStrip";
import BottomCTA from "./shared/BottomCTA";

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
      document.body.dataset.eliPageMode = "standard";
    };
  }, [hasHero]);

  return (
    <div className="bg-[#F5F0EA]">
      {hasHero ? (
        <section className="relative w-full overflow-hidden">
          <div className="relative h-[52vh] min-h-[440px] max-h-[700px]">
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

            <div className="absolute inset-0 bg-[#102018]/54" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#09110D]/60 via-[#102018]/28 to-[#102018]/72" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F1B15]/28 via-transparent to-[#0F1B15]/12" />
            <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[#102018]/84 to-transparent" />

            <div className="absolute inset-0">
              <div className="mx-auto flex h-full max-w-[1440px] items-end px-6 pb-12 pt-[calc(var(--eli-header-height)+2rem)] md:px-12 md:pb-14 lg:px-20">
                <div className="w-full max-w-[920px]">
                  {eyebrow ? (
                    <div className="mb-5 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.34em] text-white/84">
                      {eyebrow}
                    </div>
                  ) : null}

                  {title ? (
                    <h1
                      className="max-w-[14ch] font-serif-display text-[clamp(2.5rem,5vw,5rem)] font-light leading-[0.96] text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.34)]"
                      style={{ textWrap: "balance" }}
                    >
                      {title}
                    </h1>
                  ) : null}

                  {subtitle ? (
                    <p className="mt-5 max-w-[54rem] font-sans-clean text-sm leading-[1.72] text-white/90 md:text-[17px]">
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

      {hasHero && showCtaStrip ? <CTAStrip /> : null}

      <div>{children}</div>

      {!hasHero && showBottomCta ? <BottomCTA {...bottomCtaProps} /> : null}
    </div>
  );
}