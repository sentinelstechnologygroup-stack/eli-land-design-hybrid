// src/components/home/HeroSection.jsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/components/utils/routes";
import { trackCTA } from "@/lib/intelligence";


const HERO_IMAGES = [
  {
    src: "/images/hero/home-hero-01.jpg",
    alt: "Residential landscape architecture project featuring custom home, outdoor living space, and waterfront design in The Woodlands, Texas",
  },
  {
    src: "/images/hero/home-hero-02.jpg",
    alt: "Commercial landscape architecture and site planning project for multi-family development in the Houston area",
  },
  {
    src: "/images/hero/home-hero-03.jpg",
    alt: "Residential landscape design and construction project with lawn grading, planting, and outdoor space planning in Texas",
  },
  {
    src: "/images/hero/home-hero-04.jpg",
    alt: "Commercial landscape construction project with apartment complex, hardscape, and amenity layout design",
  },
  {
    src: "/images/hero/home-hero-05.jpg",
    alt: "Residential landscape architecture project featuring luxury outdoor living, pool design, and architectural lighting",
  },
  {
    src: "/images/hero/home-hero-06.jpg",
    alt: "Commercial landscape architecture project with pool amenity, hardscape, and community layout for multi-family development",
  },
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

  const activeImage = HERO_IMAGES[currentSlide];

  return (
    <section className="relative h-[clamp(420px,39.583vw,760px)] w-full overflow-hidden bg-[#102015]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeImage.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.33, 1, 0.68, 1] }}
          className="absolute inset-0"
        >
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />

          <div className="absolute inset-0 bg-[#08110C]/28" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08110C]/50 via-[#08110C]/12 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08110C]/48 via-[#08110C]/14 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#08110C]/62 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-20 -translate-y-[4%]">
          <div className="max-w-[980px]">
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.25, ease: [0.33, 1, 0.68, 1] }}
              className="font-serif-display max-w-[13ch] text-[clamp(2.6rem,5vw,4.75rem)] font-semibold leading-[0.94] tracking-[-0.03em] text-[#F5F0EA] [text-shadow:0_3px_18px_rgba(0,0,0,0.45)] [text-wrap:balance] sm:max-w-[14ch] md:max-w-[15ch] lg:max-w-[16ch]"
            >
              Architecture, Site Planning, and Construction Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.42, ease: [0.33, 1, 0.68, 1] }}
              className="mt-5 max-w-[660px] type-body text-[#F5F0EA]/90 [text-shadow:0_2px_10px_rgba(0,0,0,0.35)]"
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
                href={ROUTES.gallery}
                onClick={() => trackCTA("view-gallery", "home-hero")}
                className="inline-flex h-12 items-center justify-center gap-3 bg-[#6B7F5E] px-8 type-button text-[#F5F0EA] no-underline transition-colors duration-300 hover:bg-[#5C714F]"
              >
                View gallery
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 flex gap-2 md:left-10 lg:left-20">
        {HERO_IMAGES.map((image, idx) => (
          <button
            key={image.src}
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