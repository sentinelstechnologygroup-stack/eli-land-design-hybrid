// src/components/pages/Reviews.jsx
"use client";

import React, { useMemo, useState } from "react";
import { Quote, Star } from "lucide-react";
import PageShell from "@/components/shared/PageShell";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Panel } from "@/components/ui/panel";
import { Button } from "@/components/ui/button";

const MEDIA = {
  hero: "/images/hero/reviews-hero.jpg",
};

const REVIEW_SOURCES = [
  { name: "Facebook", href: "#" },
  { name: "Houzz", href: "#" },
  { name: "Google", href: "#" },
];

const REVIEWS = [
  {
    name: "Mickey Barrett",
    meta: "E.L.I Client",
    quote:
      "Ian placed to recommend Chris Eiseman and ELI Land Design. Chris and his company completed a thorough and creative design on our entire 2.8 acre lot including tennis and basketball courts, a bridge, and complex drainage system. Their execution of the design and installation was excellent as was their communication throughout.",
  },
  {
    name: "Brian Foster",
    meta: "Sugar Creek Homes",
    quote:
      "The ELI team consistently provides my clients with the highest standard in residential landscape architecture. Chris works with each client to create an outdoor living space tailored to their individual lifestyle. Combined with the quality of craftsmanship, I have peace of mind that my clients receive the best value.",
  },
  {
    name: "Jean Smith",
    meta: "Lake Conroe",
    quote:
      "ELI has been the perfect fit for our landscaping needs. When we decided to remodel our home and update our landscaping Chris worked closely with us to develop an innovative design that works great with our lifestyle. Upon completion of the project, our yard was breathtaking and our home was brought to life.",
  },
  {
    name: "Pamela and Randall Ponder",
    meta: "The Woodlands",
    quote:
      "My husband and I interviewed a number of landscapes to help us complete our pool landscape. When we met Chris Eiseman we could instantly feel the value in working with a Landscape Architect. We knew the look we wanted for our pool landscape and some of the plant species that we wanted incorporated into the design. The result was beautiful and functional.",
  },
  {
    name: "Casey and Carrie Salge",
    meta: "Cypress",
    quote:
      "We have used Chris Eiseman and his company’s services on two homes now. Our first home in Fairfield 10 years ago was in serious need of updated landscaping. Chris and his team designed and installed a turn key product including irrigation and landscaping. My wife was absolutely delighted, and I was impressed by the professionalism and follow-through.",
  },
  {
    name: "Dan Mosher",
    meta: "ELI Client",
    quote:
      "All the members of the crew that did our upgrade were friendly and professional from design through completion of the job.",
  },
  {
    name: "Ron Proctor",
    meta: "ELI Client",
    quote:
      "ELI designed our swimming pool and backyard environment. Chris, Matt, and James did an awesome job. We were thrilled with the design, work process, and final outcome. They created a great vision and transformed our backyard into a truly beautiful and functional retreat.",
  },
  {
    name: "Alejandra Palmeros-Irvine",
    meta: "ELI Client",
    quote:
      "Excellent experience. We hired Chris to renovate our front entry, landscaping and drainage. We wanted a clean, modern and updated design with a water feature. Chris had great ideas and the final result was amazing. Very professional and timely project despite it occurring during bad weather.",
  },
  {
    name: "Chuck Jordan",
    meta: "ELI Client",
    quote:
      "We have used Chris and his team at ELI for almost 5 years and they have done an awesome job. Very attentive to the client's requests and do a fabulous job.",
  },
];

function HeroSourcePill({ name, href }) {
  return (
    <a
      href={href}
      className="inline-flex items-center border border-white/18 bg-white/10 px-4 py-2 type-micro text-white/78 no-underline backdrop-blur-sm transition hover:bg-white/16"
    >
      {name}
    </a>
  );
}

function ReviewCard({ quote, name, meta }) {
  return (
    <Panel className="flex min-h-[420px] flex-col border-0 bg-[#879184] p-8 shadow-none">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[#D7B55C]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <div className="type-micro text-white/55">Client Review</div>
      </div>

      <div className="mt-6 flex flex-1 items-start gap-3 overflow-hidden">
        <Quote className="mt-1 h-5 w-5 flex-shrink-0 text-[#D7B55C]" />
        <div className="review-scroll min-h-0 flex-1 overflow-y-auto pr-2">
          <p className="type-small text-white/90 md:text-[15px] md:leading-[1.85]">
            {quote}
          </p>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-6">
        <div className="text-sm font-semibold text-white">
          {String(name).toUpperCase()}
        </div>
        <div className="mt-2 type-micro text-white/55">{meta}</div>
      </div>
    </Panel>
  );
}

export default function Reviews() {
  const [visibleCount, setVisibleCount] = useState(9);

  const visibleReviews = useMemo(
    () => REVIEWS.slice(0, visibleCount),
    [visibleCount]
  );

  const hasMore = visibleCount < REVIEWS.length;

  return (
    <PageShell
      hero
      heroImage={MEDIA.hero}
      heroImageClassName="object-cover object-center"
      eyebrow="Reviews"
      title="Reviews & Client Feedback"
      subtitle="Disciplined planning. Clear deliverables. Professional execution. Explore feedback and updates across our profiles."
      heroExtras={
        <div className="flex flex-wrap items-center gap-3">
          {REVIEW_SOURCES.map((source) => (
            <HeroSourcePill
              key={source.name}
              name={source.name}
              href={source.href}
            />
          ))}
        </div>
      }
    >
      <section className="bg-[#F5F0EA] px-6 py-14 md:px-10 md:py-16 lg:px-20">
        <div className="mx-auto max-w-[1440px]">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="mb-6 type-micro text-[#1F2E23]/45">
                Client Reviews
              </div>
              <h2 className="type-h2 text-[#1F2E23]">
                Trusted for disciplined planning and results that hold up over
                time.
              </h2>
              <p className="mt-5 max-w-[78ch] type-body text-eli-muted">
                Below are selected reviews.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {visibleReviews.map((review, index) => (
              <AnimatedSection key={`${review.name}-${index}`}>
                <ReviewCard {...review} />
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