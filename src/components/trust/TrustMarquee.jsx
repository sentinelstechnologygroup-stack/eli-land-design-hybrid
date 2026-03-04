// src/components/trust/TrustMarquee.jsx
import React, { useMemo } from "react";
import { TRUST_AWARDS } from "@/content/trust";

/**
 * TrustMarquee (Awards-only)
 * - Infinite scrolling row of award badges
 * - NOT links (per your request)
 * - Hardened so it reads as one continuous row (no wrap)
 */
export default function TrustMarquee({
  label = "Houzz Awards",
  items = null, // optional override
  tone = "light", // "light" | "dark"
  speed = "normal", // "slow" | "normal" | "fast"
}) {
  const merged = useMemo(() => {
    const list = Array.isArray(items) && items.length ? items : TRUST_AWARDS;
    return list;
  }, [items]);

  // duplicate list for seamless scroll
  const track = useMemo(() => [...merged, ...merged], [merged]);

  const duration = speed === "slow" ? "70s" : speed === "fast" ? "30s" : "45s";

  const shell =
    tone === "dark"
      ? "bg-[#1F2E23] border-y border-white/10"
      : "bg-[#F5F0EA] border-y border-[#1F2E23]/10";

  const labelText = tone === "dark" ? "text-white/70" : "text-[#1F2E23]/55";

  const chipBg =
    tone === "dark"
      ? "bg-white/5 border-white/10"
      : "bg-white/70 border-[#1F2E23]/10";

  const fadeLeft =
    tone === "dark"
      ? "bg-gradient-to-r from-[#1F2E23] to-transparent"
      : "bg-gradient-to-r from-[#F5F0EA] to-transparent";

  const fadeRight =
    tone === "dark"
      ? "bg-gradient-to-l from-[#1F2E23] to-transparent"
      : "bg-gradient-to-l from-[#F5F0EA] to-transparent";

  return (
    <section className={shell}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className={`text-[10px] tracking-[0.32em] uppercase font-sans-clean font-semibold ${labelText}`}>
              Recognition
            </div>
            <h3
              className={`mt-3 font-serif-display text-2xl md:text-3xl font-light tracking-tight ${
                tone === "dark" ? "text-white" : "text-[#1F2E23]"
              }`}
            >
              {label}
            </h3>
          </div>
        </div>

        <div className="mt-8 relative overflow-hidden rounded-3xl">
          {/* Edge fades (prevents “two sets” look) */}
          <div className={`pointer-events-none absolute inset-y-0 left-0 w-10 md:w-14 ${fadeLeft}`} />
          <div className={`pointer-events-none absolute inset-y-0 right-0 w-10 md:w-14 ${fadeRight}`} />

          <div
            className="flex gap-4 md:gap-5 w-max will-change-transform whitespace-nowrap"
            style={{ animation: `eli-marquee ${duration} linear infinite` }}
            aria-label="Awards marquee"
          >
            {track.map((it, idx) => (
              <div
                key={`${it.src}-${idx}`}
                className={`flex items-center justify-center rounded-2xl border ${chipBg} px-5 md:px-6 py-4 flex-nowrap`}
              >
                <img
                  src={it.src}
                  alt={it.alt || "Award badge"}
                  className="h-10 md:h-12 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  onError={(e) => {
                    // eslint-disable-next-line no-console
                    console.warn("Trust badge failed to load:", it.src);
                    e.currentTarget.style.opacity = "0.35";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes eli-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [aria-label="Awards marquee"] {
            animation: none !important;
            transform: none !important;
            white-space: normal !important;
            flex-wrap: wrap !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}