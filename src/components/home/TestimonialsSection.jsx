"use client";

// src/components/home/TestimonialsSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "../shared/AnimatedSection";

const TESTIMONIALS = [
  {
    quote:
      "Chris and his team transformed our backyard into a resort-quality retreat. The attention to detail is extraordinary—every stone, every plant was placed with purpose.",
    author: "The Morrison Family",
    location: "The Woodlands, TX",
  },
  {
    quote:
      "E.L.I. Land Design exceeded our expectations at every turn. Their design vision and construction quality are unmatched in the Houston area.",
    author: "Vargos Development Group",
    location: "Houston, TX",
  },
  {
    quote:
      "Working with Chris was seamless from concept to completion. He has an incredible eye for balancing natural beauty with functional design.",
    author: "The Patterson Residence",
    location: "Carlton Woods, TX",
  },
  {
    quote:
      "My husband and I interviewed a number of landscapers to help us complete our pool landscape. When we met Chris Eiseman we could instantly feel the value in working with a Landscape Architect.",
    author: "PAMELA AND RANDALL PONDER",
    location: "The Woodlands, TX",
  },
  {
    quote:
      "All the members of the crew that did our upgrade were friendly and professional from design through completion of the job.",
    author: "DAN MOSHER",
    location: "Houston, TX",
  },
  {
    quote:
      "The E.L.I. team consistently provides my clients with the highest standard in residential landscape architecture. Chris works with each client to create an outdoor living space that is tailored to their individual lifestyle. Combined with the quality of craftsmanship, I have peace of mind that my clients receive the best value.",
    author: "BRIAN FOSTER",
    location: "Sugar Creek Homes",
  },
  {
    quote:
      "E.L.I. designed our swimming pool and backyard environment. Chris, Matt, and James (and crews) did an awesome job. We are thrilled with the design, work process, and final outcome. They created a great vision, and transformed our backyard into a truly beautiful and functional retreat. Highly recommend!!",
    author: "RON PROCTOR",
    location: "Carlton Woods, TX",
  },
];

export default function TestimonialsSection() {
  const AUTO_MS = 7000; // slide duration
  const TICK_MS = 50; // progress granularity (smooth but cheap)

  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0); // 0..1 for active dot fill

  const intervalRef = useRef(null);
  const isVisibleRef = useRef(true);

  const count = TESTIMONIALS.length;

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetAndStart = () => {
    stop();
    setProgress(0);

    intervalRef.current = setInterval(() => {
      if (!isVisibleRef.current || isPaused) return;

      setProgress((p) => {
        const next = p + TICK_MS / AUTO_MS;

        // When progress completes, advance slide & restart fill
        if (next >= 1) {
          setCurrentIdx((idx) => (idx + 1) % count);
          return 0;
        }

        return next;
      });
    }, TICK_MS);
  };

  // Start / restart when pause toggles or count changes
  useEffect(() => {
    resetAndStart();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, count]);

  // Tab visibility pause
  useEffect(() => {
    const onVis = () => {
      isVisibleRef.current = document.visibilityState === "visible";
    };
    onVis();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const manualSet = (updater) => {
    updater();
    resetAndStart();
  };

  const next = () =>
    manualSet(() => setCurrentIdx((prev) => (prev + 1) % count));
  const prev = () =>
    manualSet(() => setCurrentIdx((prev) => (prev - 1 + count) % count));

  const jumpTo = (i) => manualSet(() => setCurrentIdx(i));

  return (
    <section className="py-10 md:py-14 bg-[#E8E0D4] relative overflow-hidden">
      {/* Large decorative quote */}
      <div className="absolute top-12 left-12 opacity-[0.04] pointer-events-none select-none">
        <Quote className="w-48 h-48 text-[#1F2E23]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <div className="w-8 h-px bg-[#1F2E23]/30" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#1F2E23]/50 font-sans-clean font-semibold">
              Client Voices
            </span>
          </div>
        </AnimatedSection>

        <div
          className="max-w-3xl mx-auto text-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            >
              <blockquote className="font-serif-display text-[#1F2E23] text-2xl md:text-3xl lg:text-4xl font-light leading-[1.4] mb-10">
                "{TESTIMONIALS[currentIdx].quote}"
              </blockquote>

              <div>
                <div className="font-sans-clean text-[#1F2E23] text-sm font-semibold tracking-wide">
                  {TESTIMONIALS[currentIdx].author}
                </div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-[#1F2E23]/40 font-sans-clean mt-1">
                  {TESTIMONIALS[currentIdx].location}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls + Progress Dots */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-12 h-12 border border-[#1F2E23]/20 flex items-center justify-center hover:bg-[#1F2E23] hover:text-[#F5F0EA] hover:border-[#1F2E23] transition-all duration-300 rounded-2xl"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Progress indicator */}
            <div className="flex gap-2 items-center">
              {TESTIMONIALS.map((_, i) => {
                const isActive = i === currentIdx;

                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => jumpTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className="relative h-2 w-10 rounded-full bg-[#1F2E23]/15 overflow-hidden transition-opacity hover:opacity-90"
                  >
                    {/* inactive state keeps subtle bar; active state fills */}
                    {isActive && (
                      <div
                        className="absolute inset-y-0 left-0 bg-[#1F2E23] rounded-full"
                        style={{ width: `${Math.max(0, Math.min(1, progress)) * 100}%` }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 border border-[#1F2E23]/20 flex items-center justify-center hover:bg-[#1F2E23] hover:text-[#F5F0EA] hover:border-[#1F2E23] transition-all duration-300 rounded-2xl"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Optional micro-helper (kept subtle) */}
          <div className="mt-5 text-[10px] tracking-[0.2em] uppercase font-sans-clean text-[#1F2E23]/35">
            {isPaused ? "Paused" : "Auto-advancing"}
          </div>
        </div>
      </div>
    </section>
  );
}