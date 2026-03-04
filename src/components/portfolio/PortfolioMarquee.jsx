// @ts-nocheck
// src/components/portfolio/PortfolioMarquee.jsx
import React, { useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * PortfolioMarquee — Single Source of Truth
 *
 * DEFAULT sizing matches the "Commercial + Residential" teaser marquee you approved:
 * - Card width: 220/240/260/280 responsive
 * - Image: aspect-[4/3]
 * - Padding: 4
 *
 * If you ever need the larger Design hub version later, you can add a `size="large"` preset.
 */
export default function PortfolioMarquee({
  items = [],
  title = "Design Portfolio",
  ctaLabel = "View Full Portfolio",
  ctaHref = "/gallery",
  bgColor = "#E8E0D4",
  eyebrow = "Portfolio",
  speedSeconds = 34,
  gapPx = 16,
  size = "small", // ✅ default is the Commercial/Residential baseline
}) {
  const doubled = useMemo(() => [...items, ...items], [items]);

  const preset =
    size === "large"
      ? {
          // optional future preset (not required right now)
          cardClass: "group shrink-0 w-[240px] sm:w-[260px] md:w-[300px] lg:w-[320px]",
          imgWrapClass: "h-[190px] sm:h-[210px] md:h-[230px] overflow-hidden",
          bodyClass: "p-6",
          titleClass: "text-xl",
          subClass: "text-sm leading-[1.75]",
          labelClass: "text-[10px] tracking-[0.25em]",
          viewClass: "text-[11px] tracking-[0.22em]",
        }
      : {
          // ✅ Commercial/Residential baseline preset
          cardClass: "group shrink-0 w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px]",
          imgWrapClass: "aspect-[4/3] overflow-hidden",
          bodyClass: "p-4",
          titleClass: "text-[16px] leading-[1.15]",
          subClass: "text-[12px] leading-[1.6]",
          labelClass: "text-[9px] tracking-[0.24em]",
          viewClass: "text-[10px] tracking-[0.22em]",
        };

  return (
    <div className="relative">
      <style>{`
        @keyframes eli-marquee {
          0% { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-50%,0,0); }
        }
        .eli-marquee-outer { overflow: hidden; position: relative; }
        .eli-marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: eli-marquee ${speedSeconds}s linear infinite;
        }
        .eli-marquee-outer:hover .eli-marquee-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .eli-marquee-track { animation: none !important; transform: none !important; }
        }
      `}</style>

      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-[10px] tracking-[0.28em] uppercase font-sans-clean font-semibold text-[#1F2E23]/55 mb-3">
            {eyebrow}
          </p>
          <h2 className="font-serif-display text-[#1F2E23] text-2xl md:text-3xl font-light tracking-tight">
            {title}
          </h2>
        </div>
      </div>

      <div className="mt-8">
        <div className="eli-marquee-outer">
          {/* edge fades */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-12 z-10"
            style={{ background: `linear-gradient(to right, ${bgColor}, transparent)` }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-12 z-10"
            style={{ background: `linear-gradient(to left, ${bgColor}, transparent)` }}
          />

          <div className="eli-marquee-track" style={{ gap: `${gapPx}px`, paddingBottom: "10px" }}>
            {doubled.map((it, idx) => (
              <Link key={`${it.title}-${idx}`} href={it.href} className={preset.cardClass}>
                <div className="rounded-2xl border border-[#1F2E23]/10 bg-[#F8F4ED] overflow-hidden">
                  <div className={preset.imgWrapClass}>
                    <img
                      src={it.image}
                      alt={it.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className={preset.bodyClass}>
                    <div
                      className={`${preset.labelClass} uppercase font-sans-clean font-semibold text-[#1F2E23]/45`}
                    >
                      Project Gallery
                    </div>

                    <div className={`mt-2 font-serif-display text-[#1F2E23] font-light ${preset.titleClass}`}>
                      {it.title}
                    </div>

                    {it.subtitle ? (
                      <p className={`mt-2 text-[#1F2E23]/65 font-sans-clean ${preset.subClass}`}>
                        {it.subtitle}
                      </p>
                    ) : null}

                    <div
                      className={`mt-3 inline-flex items-center gap-2 uppercase font-sans-clean font-semibold text-[#1F2E23]/80 ${preset.viewClass}`}
                    >
                      View Gallery
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link href={ctaHref}
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase font-sans-clean font-semibold text-[#1F2E23]/70 hover:text-[#1F2E23] transition-colors"
          >
            {ctaLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}