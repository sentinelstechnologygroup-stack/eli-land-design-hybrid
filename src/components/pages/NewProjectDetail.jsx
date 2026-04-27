// src/components/pages/NewProjectDetail.jsx

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import PageShell from "../shared/PageShell";
import AnimatedSection from "../shared/AnimatedSection";
import BottomCTA from "../shared/BottomCTA";
import { getNewProjectBySlug } from "@/data/newProjectsData";

function Lightbox({ items, activeIndex, onClose, onPrev, onNext }) {
  const isOpen = activeIndex != null && !!items[activeIndex];

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  const activeItem = items[activeIndex];

  return (
    <div
      className="fixed inset-0 z-[1200] bg-black/80 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-[1210] inline-flex h-12 w-12 items-center justify-center border border-white/20 bg-black/35 text-white transition hover:bg-black/55 md:right-6 md:top-6"
        aria-label="Close image"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 top-1/2 z-[1210] inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/35 text-white transition hover:bg-black/55 md:left-6"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 top-1/2 z-[1210] inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/35 text-white transition hover:bg-black/55 md:right-6"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div
        className="flex h-full w-full items-center justify-center px-4 py-16 md:px-12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-h-full max-w-[1400px]">
          <img
            src={activeItem.src}
            alt={activeItem.title}
            className="max-h-[82vh] w-auto max-w-full object-contain shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
            loading="eager"
            decoding="async"
          />

          <div className="mt-4 text-center">
            <div className="font-sans-clean text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
              {activeItem.type}
            </div>
            <div className="mt-2 font-serif-display text-[26px] leading-tight text-white md:text-[32px]">
              {activeItem.title}
            </div>
            <div className="mt-2 font-sans-clean text-[12px] text-white/60">
              {activeIndex + 1} / {items.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NewProjectDetail({ slug }) {
  const project = getNewProjectBySlug(slug);
  const [activeIndex, setActiveIndex] = useState(null);

  if (!project) {
    return (
      <PageShell
        hero
        heroImage="/images/hero/projects-hero.jpg"
        eyebrow="Not Found"
        title="Project Not Found"
        subtitle="The requested project gallery could not be found."
      
      heroContentAlign="center">
        <section className="bg-[#F5F0EA]">
          <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 md:py-16 lg:px-20">
            <Link
              href="/new-projects"
              className="inline-flex items-center gap-2 font-sans-clean text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1F2E23]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to New Projects
            </Link>
          </div>
        </section>

        <BottomCTA />
      </PageShell>
    );
  }

  const lightboxItems = project.images.map((src, index) => ({
    src,
    title: `${project.title} ${String(index + 1).padStart(2, "0")}`,
    type: project.category,
  }));

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  const goPrev = () => {
    setActiveIndex((prev) => {
      if (prev == null) return prev;
      return prev === 0 ? lightboxItems.length - 1 : prev - 1;
    });
  };

  const goNext = () => {
    setActiveIndex((prev) => {
      if (prev == null) return prev;
      return prev === lightboxItems.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <PageShell
      hero
      heroImage={project.coverImage}
      eyebrow={project.category}
      title={project.title}
      subtitle={project.description}
    
      heroContentAlign="center">
      <section className="bg-[#F5F0EA]">
        <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 md:py-16 lg:px-20">
          <AnimatedSection>
            <Link
              href="/new-projects"
              className="inline-flex items-center gap-2 font-sans-clean text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1F2E23]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to New Projects
            </Link>

            <div className="mt-6">
              <h2 className="font-serif-display text-[36px] leading-tight text-[#1F1A17] md:text-[44px]">
                {project.title}
              </h2>

              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-sans-clean text-[12px] text-[#6A655D]">
                <span>{project.category}</span>
                {project.location ? <span>{project.location}</span> : null}
                <span>{project.images.length} Images</span>
              </div>

              {project.description ? (
                <p className="mt-5 max-w-[860px] font-sans-clean text-[15px] leading-7 text-[#4B4741]">
                  {project.description}
                </p>
              ) : null}
            </div>
          </AnimatedSection>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {lightboxItems.map((item, index) => (
              <AnimatedSection key={item.src} delay={(index % 6) * 0.04}>
                <button
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="group block w-full overflow-hidden border border-[#1F2E23]/10 bg-white transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(16,24,18,0.10)]"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#E8E0D4]">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA />

      <Lightbox
        items={lightboxItems}
        activeIndex={activeIndex}
        onClose={closeLightbox}
        onPrev={goPrev}
        onNext={goNext}
      />
    </PageShell>
  );
}