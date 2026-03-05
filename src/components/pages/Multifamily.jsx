"use client";

// src/pages/Multifamily.jsx
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

import PageShell from "../PageShell";
import AnimatedSection from "../shared/AnimatedSection";
import { ROUTES } from "@/components/utils/routes";
import { Panel } from "@/components/ui/panel";
import BottomCTA from "@/components/shared/BottomCTA";

const MEDIA = {
  hero: "/images/design/commercial/multifamily/multifamily-hero.jpg",
};

const IMAGES = [
  { src: "/images/design/commercial/multifamily/01.jpg", alt: "Multifamily placeholder 01" },
  { src: "/images/design/commercial/multifamily/02.jpg", alt: "Multifamily placeholder 02" },
  { src: "/images/design/commercial/multifamily/03.jpg", alt: "Multifamily placeholder 03" },
  { src: "/images/design/commercial/multifamily/04.jpg", alt: "Multifamily placeholder 04" },
  { src: "/images/design/commercial/multifamily/05.jpg", alt: "Multifamily placeholder 05" },
  { src: "/images/design/commercial/multifamily/06.jpg", alt: "Multifamily placeholder 06" },
  { src: "/images/design/commercial/multifamily/07.jpg", alt: "Multifamily placeholder 07" },
  { src: "/images/design/commercial/multifamily/08.jpg", alt: "Multifamily placeholder 08" },
  { src: "/images/design/commercial/multifamily/09.jpg", alt: "Multifamily placeholder 09" },
  { src: "/images/design/commercial/multifamily/10.jpg", alt: "Multifamily placeholder 10" },
  { src: "/images/design/commercial/multifamily/11.jpg", alt: "Multifamily placeholder 11" },
  { src: "/images/design/commercial/multifamily/12.jpg", alt: "Multifamily placeholder 12" },
];

export default function Multifamily() {
  const images = useMemo(() => IMAGES.filter(Boolean), []);
  const [activeIndex, setActiveIndex] = useState(-1);

  const isOpen = activeIndex >= 0;

  const close = () => setActiveIndex(-1);
  const prev = () => setActiveIndex((i) => (i <= 0 ? images.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i >= images.length - 1 ? 0 : i + 1));

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, images.length]);

  const active = images[activeIndex] || null;

  return (
    <PageShell
      currentPageName="Multifamily"
      hero
      heroImage={MEDIA.hero}
      eyebrow="Commercial Design Category"
      title="Multifamily"
      subtitle="Amenity courts, pool decks, lighting, planting strategy, and circulation designed for daily use and durability."
    >
      {/* Intro */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto pt-14 md:pt-16 pb-10">
        <AnimatedSection>
          <p className="text-[#1F2E23]/60 font-sans-clean text-base leading-[1.9] max-w-3xl">
            This gallery uses the same interaction pattern as Projects: click a tile to expand, use arrows to
            browse, and click off the image to close.
          </p>

          <div className="mt-8">
            <Link href={ROUTES.designCommercial ?? "/design/commercial"}
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase font-sans-clean font-semibold text-[#1F2E23]/70 hover:text-[#1F2E23] transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Commercial Categories
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* 3-wide grid */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <Panel key={img.src} variant="light" className="bg-transparent overflow-hidden rounded-3xl">
              <button
                type="button"
                onClick={() => setActiveIndex(idx)}
                className="group relative w-full h-full aspect-[4/3] text-left"
                aria-label={`Open image ${idx + 1}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2E23]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-[9px] tracking-[0.3em] uppercase text-[#F5F0EA]/40 font-sans-clean font-semibold mb-2">
                    Multifamily
                  </div>
                  <div className="font-serif-display text-[#F5F0EA] text-xl font-light">
                    Placeholder {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>
              </button>
            </Panel>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] bg-[#1F2E23]/80"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center px-4 md:px-10">
              <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative w-full "
              >
                <button
                  type="button"
                  onClick={close}
                  className="absolute -top-12 right-0 inline-flex items-center gap-2 text-[#F5F0EA]/80 hover:text-[#F5F0EA] transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                  <span className="text-[11px] tracking-[0.25em] uppercase font-sans-clean font-semibold">
                    Close
                  </span>
                </button>

                <div className="relative bg-[#0F1713] rounded-2xl overflow-hidden border border-[#F5F0EA]/15">
                  <img
                    src={active.src}
                    alt={active.alt}
                    className="w-full h-[70vh] object-contain bg-[#0F1713]"
                    draggable={false}
                  />
                </div>

                <div className="mt-4 text-center">
                  <div className="text-[#F5F0EA]/50 font-sans-clean text-xs">
                    {activeIndex + 1} / {images.length}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-10 w-12 h-12 flex items-center justify-center border border-[#F5F0EA]/25 bg-[#1F2E23]/30 hover:bg-[#1F2E23]/55 transition-colors rounded-xl"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-[#F5F0EA]" />
                </button>

                <button
                  type="button"
                  onClick={next}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-10 w-12 h-12 flex items-center justify-center border border-[#F5F0EA]/25 bg-[#1F2E23]/30 hover:bg-[#1F2E23]/55 transition-colors rounded-xl"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-[#F5F0EA]" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BottomCTA />
    </PageShell>
  );
}