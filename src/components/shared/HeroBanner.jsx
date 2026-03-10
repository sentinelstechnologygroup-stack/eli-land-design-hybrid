// src/components/shared/HeroBanner.jsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DEFAULT_TRANSITION = { duration: 1.2, ease: [0.33, 1, 0.68, 1] };

export default function HeroBanner({
  images,
  image,
  imageAlt = "",
  eyebrow,
  title,
  subtitle,
  actions = null,
  extras = null,
  className = "",
  bodyClassName = "",
  titleClassName = "",
  subtitleClassName = "",
  overlayClassName = "",
  dots = false,
  heightClassName = "h-[56vh] min-h-[460px] max-h-[740px]",
}) {
  const heroImages = useMemo(() => {
    if (Array.isArray(images) && images.length) return images;
    if (image) return [image];
    return [];
  }, [images, image]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const isSlider = heroImages.length > 1;

  useEffect(() => {
    if (!isSlider) return undefined;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length, isSlider]);

  const currentImage = heroImages[currentSlide] || "";

  return (
    <section className={`relative w-full overflow-hidden ${heightClassName} ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage || "hero-static"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={DEFAULT_TRANSITION}
          className="absolute inset-0"
        >
          {currentImage ? (
            <img
              src={currentImage}
              alt={imageAlt}
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
          ) : (
            <div className="absolute inset-0 bg-[#1F2E23]" />
          )}

          <div className="absolute inset-0 bg-[#102018]/48" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#09110D]/72 via-[#102018]/28 to-[#102018]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1B15]/28 via-transparent to-[#0F1B15]/10" />
          <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[#102018]/84 to-transparent" />
          {overlayClassName ? <div className={`absolute inset-0 ${overlayClassName}`} /> : null}
        </motion.div>
      </AnimatePresence>

      <div className={`absolute inset-0 flex items-end px-6 pb-16 md:px-12 md:pb-20 lg:px-20 ${bodyClassName}`}>
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="max-w-4xl">
            {eyebrow ? (
              <div className="mb-6 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.34em] text-white/82 [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
                {eyebrow}
              </div>
            ) : null}

            {title ? (
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                className={[
                  "max-w-[24ch] font-serif-display text-[2.6rem] font-light leading-[0.98] tracking-[-0.02em] text-[#F5F0EA] sm:text-[3.1rem] md:text-[3.6rem] lg:text-[3.9rem] xl:text-[4.15rem] [text-wrap:balance] [text-shadow:0_2px_16px_rgba(0,0,0,0.34)]",
                  titleClassName,
                ].join(" ")}
              >
                {title}
              </motion.h1>
            ) : null}

            {subtitle ? (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.35, ease: [0.33, 1, 0.68, 1] }}
                className={[
                  "mt-5 max-w-[58rem] font-sans-clean text-sm leading-[1.72] text-[#F5F0EA]/90 md:text-[17px] [text-shadow:0_1px_12px_rgba(0,0,0,0.26)]",
                  subtitleClassName,
                ].join(" ")}
              >
                {subtitle}
              </motion.p>
            ) : null}

            {actions ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
                className="mt-9"
              >
                {actions}
              </motion.div>
            ) : null}

            {extras ? <div className="mt-8">{extras}</div> : null}
          </div>
        </div>
      </div>

      {dots && isSlider ? (
        <div className="absolute bottom-8 left-6 flex gap-2 md:left-12 lg:left-20">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-px w-8 rounded-full transition-all ${idx === currentSlide ? "bg-[#F5F0EA]" : "bg-[#F5F0EA]/30"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
