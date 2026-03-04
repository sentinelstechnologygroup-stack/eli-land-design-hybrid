// src/components/trust/TrustMarquee.jsx
import React, { useMemo } from "react";
import { TRUST_AWARDS } from "@/content/trust";

/**
 * TrustMarquee (Awards-only)
 * - Infinite scrolling row of award badges
 * - NOT links (per your request)
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

        <div className="mt-8 overflow-hidden rounded-3xl">
          <div
            className="flex gap-4 md:gap-5 w-max will-change-transform"
            style={{ animation: `eli-marquee ${duration} linear infinite` }}
          >
            {track.map((it, idx) => (
              <div
                key={`${it.src}-${idx}`}
                className={`flex items-center justify-center rounded-2xl border ${chipBg} px-5 md:px-6 py-4`}
              >
                <img
                  src={it.src}
                  alt={it.alt || "Award badge"}
                  className="h-10 md:h-12 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  onError={(e) => {
                    // makes debugging instant (check console)
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
      `}</style>
    </section>
  );
}