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
  const REVIEWS = useMemo(() => getReviews(), []);
  const visibleReviews = REVIEWS.slice(0, visibleCount);
  const hasMore = visibleCount < REVIEWS.length;

  const HeroSourcePill = ({ name, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-[11px] font-sans-clean font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:border-white/35 hover:bg-white/15"
    >
      <span>{name}</span>
      <ExternalLink className="h-4 w-4 opacity-80" />
    </a>
  );

  const ReviewCard = ({ quote, name, meta }) => (
    <Panel className="flex h-[420px] flex-col rounded-2xl border border-white/10 bg-[#203328] p-8 text-white shadow-[0_12px_30px_rgba(0,0,0,0.12)] md:p-9">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 text-[#D7B55C]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <div className="font-sans-clean text-[10px] font-semibold uppercase tracking-[0.25em] text-white/55">
          Client Review
        </div>
      </div>

      <div className="mt-6 flex min-h-0 flex-1 items-start gap-3 overflow-hidden">
        <Quote className="mt-1 h-5 w-5 flex-shrink-0 text-[#D7B55C]" />
        <div className="review-scroll min-h-0 flex-1 overflow-y-auto pr-2">
          <p className="font-sans-clean text-sm leading-[1.85] text-white/88 md:text-[15px]">
            {quote}
          </p>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-6">
        <div className="font-sans-clean text-sm font-semibold text-white">{String(name).toUpperCase()}</div>
        <div className="mt-2 font-sans-clean text-[11px] uppercase tracking-[0.14em] text-white/55">
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
      heroExtras={
        <div className="flex flex-wrap items-center gap-3">
          {REVIEW_SOURCES.map((s) => (
            <HeroSourcePill key={s.name} name={s.name} href={s.href} />
          ))}
        </div>
      }
    >
      <section className="bg-[#F5F0EA] px-6 py-14 md:px-12 md:py-18 lg:px-20">
        <div className="mx-auto max-w-[1440px]">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="mb-6 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1F2E23]/45">
                Client Reviews
              </div>
              <h2 className="font-serif-display text-3xl font-light leading-[1.12] tracking-tight text-[#1F2E23] md:text-4xl">
                Trusted for disciplined planning and results that hold up over time.
              </h2>
              <p className="mt-5 max-w-[78ch] font-sans-clean text-sm leading-[1.9] text-[#1F2E23]/65 md:text-base">
                Below are selected reviews.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
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
                onClick={() => setVisibleCount((n) => Math.min(n + 9, REVIEWS.length))}
                className="h-auto px-12 py-4"
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
