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
    src: "/images/home/hero-01.jpg",
    alt: "Luxury residential landscape architecture and construction project in The Woodlands, Texas",
  },
    {
    src: "/images/home/hero-02.jpg",
    alt: "Residential landscape architecture site planning project in the Houston area",
  },
    {
    src: "/images/home/hero-03.jpg",
    alt: "Landscape construction and outdoor living design project in Texas",
  },
   {
    src: "/images/home/hero-04.jpg",
    alt: "High-end residential landscape architecture and grading design project in Houston, Texas",
  },
    {
    src: "/images/home/hero-05.jpg",
    alt: "High-end residential landscape architecture and grading design project in Houston, Texas",
  },
    {
    src: "/images/home/hero-07.jpg",
    alt: "High-end residential landscape architecture and grading design project in Houston, Texas",
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
    <section className="relative h-[54vh] min-h-[440px] max-h-[720px] w-full overflow-hidden md:h-[58vh]">
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

          {/* Canonical hero contrast hierarchy */}
          <div className="absolute inset-0 bg-[#08110C]/34" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08110C]/58 via-[#08110C]/18 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08110C]/42 via-[#08110C]/16 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-[#08110C]/74 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-[1440px] px-6 pb-14 md:px-10 md:pb-16 lg:px-20 lg:pb-20">
          <div className="max-w-[980px]">
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.25, ease: [0.33, 1, 0.68, 1] }}
              className="font-serif-display max-w-[13ch] text-[clamp(2.6rem,5vw,4.75rem)] font-semibold leading-[0.94] tracking-[-0.03em] text-[#F5F0EA] [text-shadow:0_3px_18px_rgba(0,0,0,0.32)] [text-wrap:balance] sm:max-w-[14ch] md:max-w-[15ch] lg:max-w-[16ch]"
            >
              Architecture, Site Planning, and Construction Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.42, ease: [0.33, 1, 0.68, 1] }}
              className="mt-5 max-w-[660px] type-body text-[#F5F0EA]/90 [text-shadow:0_2px_10px_rgba(0,0,0,0.22)]"
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