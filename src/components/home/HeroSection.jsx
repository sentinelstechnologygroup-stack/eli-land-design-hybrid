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
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden h-[54vh] min-h-[440px] max-h-[720px] md:h-[58vh]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.33, 1, 0.68, 1] }}
          className="absolute inset-0"
        >
          <img
            src={HERO_IMAGES[currentSlide]}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[#08110C]/56" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08110C]/72 via-[#08110C]/34 to-[#08110C]/82" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08110C]/52 via-[#08110C]/22 to-[#08110C]/22" />
          <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#08110C]/92 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-[1440px] px-6 pb-14 md:px-10 md:pb-16 lg:px-20 lg:pb-20">
          <div className="max-w-[860px]">
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.25, ease: [0.33, 1, 0.68, 1] }}
              className="type-hero max-w-[16ch] text-[#F5F0EA] [text-shadow:0_3px_18px_rgba(0,0,0,0.44)]"
            >
              Landscape Architecture, Site Planning, and Construction Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.42, ease: [0.33, 1, 0.68, 1] }}
              className="mt-5 max-w-[660px] type-body text-[#F5F0EA]/92 [text-shadow:0_2px_10px_rgba(0,0,0,0.34)]"
            >
              Site planning, grading design, and landscape construction for residential and
              commercial projects throughout The Woodlands and Houston.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.56, ease: [0.33, 1, 0.68, 1] }}
              className="mt-8"
            >
              <Link
                href={ROUTES.projects}
                onClick={() => trackCTA("view-projects", "home-hero")}
                className="inline-flex h-12 items-center justify-center gap-3 bg-[#6B7F5E] px-8 type-button text-[#F5F0EA] transition-colors duration-300 hover:bg-[#5C714F] no-underline"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 flex gap-2 md:left-10 lg:left-20">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            className={`h-px w-8 transition-all ${
              idx === currentSlide ? "bg-[#F5F0EA]" : "bg-[#F5F0EA]/28"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}