// src/components/home/HeroSection.jsx
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/components/utils/routes";
import { trackCTA } from "@/lib/intelligence";

const HERO_IMAGES = [
  "/images/home/hero-01.jpg",
  "/images/home/hero-02.jpg",
  "/images/home/hero-03.jpg",
  "/images/home/hero-04.jpg",
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    // ✅ FIX: shorter, consistent hero height
    <section className="relative w-full h-[56vh] min-h-[460px] max-h-[740px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
          className="absolute inset-0"
        >
          <img
            src={HERO_IMAGES[currentSlide]}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1F2E23]/40 to-[#1F2E23]/70" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-end pb-16 md:pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
              className="font-serif-display text-[#F5F0EA] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.02] tracking-tight"
            >
              Landscape architecture built for Texas
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
              className="mt-6 text-[#F5F0EA]/80 font-sans-clean text-base md:text-lg max-w-xl"
            >
              Site planning, grading design, and landscape construction for
              residential and commercial projects throughout The Woodlands and
              Houston.
            </motion.p>

            {/* Pills — corrected to match global style */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.65, ease: [0.33, 1, 0.68, 1] }}
              className="mt-9"
            >
              <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
                {/* Primary Light Pill */}
                <Link
                  href={ROUTES.projects}
                  onClick={() => trackCTA("view-projects", "home-hero")}
                  className="inline-flex items-center justify-center gap-3 h-14 px-10 rounded-full
                           bg-[#6B7F5E] text-[#F5F0EA]
                           text-[11px] tracking-[0.22em] uppercase
                           font-sans-clean font-semibold
                           hover:bg-[#5C714F]
                           transition-all duration-300"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-6 md:left-12 lg:left-20 flex gap-2">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-8 h-px transition-all rounded-full ${
              idx === currentSlide ? "bg-[#F5F0EA]" : "bg-[#F5F0EA]/30"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}