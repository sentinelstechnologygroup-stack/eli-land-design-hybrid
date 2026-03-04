// src/components/shared/TrustMarquee.jsx
import React, { useMemo } from "react";
import { TRUST_AWARDS, TRUST_AFFILIATIONS } from "@/content/trustLogos";

/**
 * TrustMarquee
 * - Reusable trust banner: awards marquee + affiliations row
 * - No dependency on header or PageShell
 *
 * Props:
 * - mode: "awards" | "affiliations" | "both"
 * - tone: "light" | "dark"
 * - speed: "slow" | "normal" | "fast"
 */
export default function TrustMarquee({
  mode = "both",
  tone = "light",
  speed = "normal",
  className = "",
}) {
  const isDark = tone === "dark";

  const awards = TRUST_AWARDS;
  const affiliations = TRUST_AFFILIATIONS;

  const duration = useMemo(() => {
    if (speed === "slow") return "42s";
    if (speed === "fast") return "22s";
    return "30s";
  }, [speed]);

  const surface = isDark ? "bg-[#1F2E23] text-[#F5F0EA]" : "bg-[#F5F0EA] text-[#1F2E23]";
  const border = isDark ? "border-white/10" : "border-[#1F2E23]/10";
  const chip = isDark ? "bg-white/5 border-white/10" : "bg-white/60 border-[#1F2E23]/10";

  const showAwards = mode === "awards" || mode === "both";
  const showAffiliations = mode === "affiliations" || mode === "both";

  const Logo = ({ item }) => {
    const img = (
      <img
        src={item.src}
        alt={item.label}
        className="h-10 md:h-12 w-auto object-contain"
        loading="lazy"
        decoding="async"
      />
    );

    return item.href ? (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer noopener"
        className={`inline-flex items-center justify-center rounded-2xl border ${chip} px-4 py-3 hover:opacity-90 transition`}
        aria-label={item.label}
        title={item.label}
      >
        {img}
      </a>
    ) : (
      <div className={`inline-flex items-center justify-center rounded-2xl border ${chip} px-4 py-3`}>
        {img}
      </div>
    );
  };

  return (
    <section className={`${surface} border-y ${border} ${className}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-12">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className={`text-[10px] tracking-[0.34em] uppercase font-sans-clean font-semibold ${isDark ? "text-white/70" : "text-[#1F2E23]/55"}`}>
                Recognition & Affiliations
              </div>
              <h3 className={`mt-3 font-serif-display text-2xl md:text-3xl font-light tracking-tight ${isDark ? "text-[#F5F0EA]" : "text-[#1F2E23]"}`}>
                Trusted by clients. Recognized by industry platforms.
              </h3>
            </div>
            <div className={`text-sm font-sans-clean leading-[1.8] max-w-[52ch] ${isDark ? "text-white/70" : "text-[#1F2E23]/65"}`}>
              Awards and professional memberships that reflect consistent planning, execution, and follow-through.
            </div>
          </div>

          {/* Awards marquee */}
          {showAwards && (
            <div>
              <div className={`text-[9px] tracking-[0.34em] uppercase font-sans-clean font-semibold mb-4 ${isDark ? "text-white/60" : "text-[#1F2E23]/45"}`}>
                Houzz Awards
              </div>

              <div className="relative overflow-hidden">
                {/* soft edge fades */}
                <div className={`pointer-events-none absolute inset-y-0 left-0 w-10 md:w-14 ${isDark ? "bg-gradient-to-r from-[#1F2E23] to-transparent" : "bg-gradient-to-r from-[#F5F0EA] to-transparent"}`} />
                <div className={`pointer-events-none absolute inset-y-0 right-0 w-10 md:w-14 ${isDark ? "bg-gradient-to-l from-[#1F2E23] to-transparent" : "bg-gradient-to-l from-[#F5F0EA] to-transparent"}`} />

                <div
                  className="eli-marquee"
                  style={{ ["--eli-marquee-duration"]: duration }}
                  aria-label="Awards marquee"
                >
                  <div className="eli-marquee__track">
                    {/* duplicate list for seamless scroll */}
                    {[...awards, ...awards].map((item, idx) => (
                      <div key={`${item.key}-${idx}`} className="eli-marquee__item">
                        <Logo item={item} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Reduced motion fallback spacing */}
              <style jsx global>{`
                .eli-marquee {
                  --eli-marquee-duration: 30s;
                }
                .eli-marquee__track {
                  display: flex;
                  gap: 14px;
                  width: max-content;
                  animation: eli-marquee var(--eli-marquee-duration) linear infinite;
                }
                .eli-marquee:hover .eli-marquee__track {
                  animation-play-state: paused;
                }
                .eli-marquee__item {
                  flex: 0 0 auto;
                }
                @keyframes eli-marquee {
                  from {
                    transform: translateX(0);
                  }
                  to {
                    transform: translateX(-50%);
                  }
                }
                @media (prefers-reduced-motion: reduce) {
                  .eli-marquee__track {
                    animation: none !important;
                    flex-wrap: wrap;
                    width: 100%;
                  }
                }
              `}</style>
            </div>
          )}

          {/* Affiliations row */}
          {showAffiliations && (
            <div>
              <div className={`text-[9px] tracking-[0.34em] uppercase font-sans-clean font-semibold mb-4 ${isDark ? "text-white/60" : "text-[#1F2E23]/45"}`}>
                Affiliations
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {affiliations.map((item) => (
                  <Logo key={item.key} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}