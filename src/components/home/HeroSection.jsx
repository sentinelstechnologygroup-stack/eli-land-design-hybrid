// src/components/home/HeroSection.jsx
"use client";

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
    if (typeof document === "undefined") return;
    document.body.classList.add("eli-has-hero");
    return () => document.body.classList.remove("eli-has-hero");
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
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
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />

          <div className="absolute inset-0 bg-[#07100B]/58" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#040806]/82 via-[#08110C]/52 to-[#102018]/84" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08110C]/44 via-[#08110C]/18 to-[#08110C]/34" />
          <div className="absolute inset-0 backdrop-[brightness(.58)]" />
          <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#08110C]/92 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-end px-6 pb-16 md:px-12 md:pb-20 lg:px-20">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
              className="max-w-[20ch] sm:max-w-[25ch] md:max-w-[30ch] lg:max-w-[35ch] xl:max-w-[40ch] font-serif-display text-[2.6rem] font-light leading-[0.96] tracking-[-0.03em] text-[#F5F0EA] sm:text-[3.1rem] md:text-[3.5rem] lg:text-[3.85rem] xl:text-[4.15rem] [text-wrap:balance] [text-shadow:0_3px_18px_rgba(0,0,0,0.52)]"
            >
              Landscape Architecture, Site Planning, and Construction Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
              className="mt-6 max-w-xl font-sans-clean text-base leading-[1.72] text-[#F5F0EA]/92 md:text-lg [text-shadow:0_2px_12px_rgba(0,0,0,0.42)]"
            >
              Site planning, grading design, and landscape construction for
              residential and commercial projects throughout The Woodlands and
              Houston.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.65, ease: [0.33, 1, 0.68, 1] }}
              className="mt-9"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <Link
                  href={ROUTES.projects}
                  onClick={() => trackCTA("view-projects", "home-hero")}
                  className="inline-flex h-14 items-center justify-center gap-3 rounded-none bg-[#6B7F5E] px-10 font-sans-clean text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F5F0EA] transition-all duration-300 hover:bg-[#5C714F]"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-6 flex gap-2 md:left-12 lg:left-20">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-px w-8 rounded-none transition-all ${
              idx === currentSlide ? "bg-[#F5F0EA]" : "bg-[#F5F0EA]/30"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}