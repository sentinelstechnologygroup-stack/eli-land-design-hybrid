// src/pages/Reviews.jsx
import React, { useMemo, useState } from "react";
import { ExternalLink, Quote, Star } from "lucide-react";
import PageShell from "../PageShell";
import AnimatedSection from "../shared/AnimatedSection";
import { Panel } from "@/components/ui/panel";
import { Button } from "@/components/ui/button";
import { REVIEW_SOURCES, getReviews } from "@/content/reviews";

const MEDIA = {
  hero: "/images/contact/reviews/hero.jpg",
};

export default function Reviews() {
  const [visibleCount, setVisibleCount] = useState(9);

  // ✅ derived (deduped) list from content file
  const REVIEWS = useMemo(() => getReviews(), []);
  const visibleReviews = REVIEWS.slice(0, visibleCount);
  const hasMore = visibleCount < REVIEWS.length;

  const HeroSourcePill = ({ name, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/25 bg-white/10 text-white text-[11px] tracking-[0.22em] uppercase font-sans-clean font-semibold hover:bg-white/15 hover:border-white/35 transition-colors"
    >
      <span>{name}</span>
      <ExternalLink className="w-4 h-4 opacity-80" />
    </a>
  );

  const ReviewCard = ({ quote, name, meta }) => (
    <Panel className="border border-[#1F2E23]/10 bg-[#F8F4ED] p-8 md:p-9">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 text-[#545E55]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4" />
          ))}
        </div>
        <div className="text-[10px] tracking-[0.25em] uppercase text-[#1F2E23]/45 font-sans-clean font-semibold">
          Client Review
        </div>
      </div>

      <div className="mt-6 flex items-start gap-3">
        <Quote className="w-5 h-5 text-[#545E55] flex-shrink-0 mt-1" />
        <p className="text-[#1F2E23]/75 font-sans-clean text-sm md:text-[15px] leading-[1.9]">
          {quote}
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-[#1F2E23]/10">
        <div className="text-[#1F2E23] font-sans-clean text-sm font-semibold">
          {String(name).toUpperCase()}
        </div>
        <div className="mt-2 text-[#1F2E23]/55 font-sans-clean text-[11px] tracking-[0.14em] uppercase">
          {meta}
        </div>
      </div>
    </Panel>
  );

  return (
    <PageShell
      hero
      heroImage={MEDIA.hero}
      eyebrow="Reviews"
      title="Reviews & Client Feedback"
      subtitle="Disciplined planning. Clear deliverables. Professional execution. Explore feedback and updates across our profiles."
      // ✅ pills are now inside the hero (and ONLY this page uses them)
      heroExtras={
        <div className="flex flex-wrap items-center gap-3">
          {REVIEW_SOURCES.map((s) => (
            <HeroSourcePill key={s.name} name={s.name} href={s.href} />
          ))}
        </div>
      }
    >
      {/* INTRO + GRID */}
      <section className="py-14 md:py-18 px-6 md:px-12 lg:px-20 bg-[#F5F0EA]">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="text-[10px] tracking-[0.25em] uppercase text-[#1F2E23]/45 font-sans-clean font-semibold mb-6">
                Client Reviews
              </div>
              <h2 className="font-serif-display text-[#1F2E23] text-3xl md:text-4xl font-light tracking-tight leading-[1.12]">
                Trusted for disciplined planning and results that hold up over
                time.
              </h2>
              <p className="mt-5 text-[#1F2E23]/65 font-sans-clean text-sm md:text-base leading-[1.9] max-w-[78ch]">
                Below are selected reviews.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {visibleReviews.map((r, idx) => (
              <AnimatedSection key={`${r.name}-${idx}`}>
                <ReviewCard {...r} />
              </AnimatedSection>
            ))}
          </div>

          {hasMore && (
            <div className="mt-12 flex justify-center">
              <Button
                type="button"
                variant="eli"
                onClick={() =>
                  setVisibleCount((n) => Math.min(n + 9, REVIEWS.length))
                }
                className="px-12 py-4 h-auto"
              >
                Load More Reviews
              </Button>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}