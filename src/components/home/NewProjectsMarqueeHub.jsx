"use client";

import React, { useEffect, useMemo, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";

/**
 * =========================================================
 * EDIT THIS ONLY:
 * - cover: image shown in marquee card
 * - images: full folder gallery for that project
 * =========================================================
 */
const PROJECTS = [
  {
    id: "residential-master-plan",
    title: "Residential Master Plan",
    subtitle: "Private estate planning and luxury outdoor visioning",
    cover: "/images/home/projects/residential-master-plan/cover.webp",
    images: [
      "/images/home/projects/residential-master-plan/1.webp",
      "/images/home/projects/residential-master-plan/2.webp",
      "/images/home/projects/residential-master-plan/3.webp",
      "/images/home/projects/residential-master-plan/4.webp",
    ],
  },
  {
    id: "pool-outdoor-living",
    title: "Pool & Outdoor Living",
    subtitle: "Integrated resort-style exterior design concepts",
    cover: "/images/home/projects/pool-outdoor-living/cover.webp",
    images: [
      "/images/home/projects/pool-outdoor-living/1.webp",
      "/images/home/projects/pool-outdoor-living/2.webp",
      "/images/home/projects/pool-outdoor-living/3.webp",
      "/images/home/projects/pool-outdoor-living/4.webp",
    ],
  },
  {
    id: "commercial-entry-sequence",
    title: "Commercial Entry Sequence",
    subtitle: "Brand-forward arrival and landscape architecture planning",
    cover: "/images/home/projects/commercial-entry-sequence/cover.webp",
    images: [
      "/images/home/projects/commercial-entry-sequence/1.webp",
      "/images/home/projects/commercial-entry-sequence/2.webp",
      "/images/home/projects/commercial-entry-sequence/3.webp",
    ],
  },
  {
    id: "drainage-planting-design",
    title: "Drainage & Planting Design",
    subtitle: "Technical function balanced with visual cohesion",
    cover: "/images/home/projects/drainage-planting-design/cover.webp",
    images: [
      "/images/home/projects/drainage-planting-design/1.webp",
      "/images/home/projects/drainage-planting-design/2.webp",
      "/images/home/projects/drainage-planting-design/3.webp",
      "/images/home/projects/drainage-planting-design/4.webp",
    ],
  },
  {
    id: "estate-approach-sequence",
    title: "Estate Approach Sequence",
    subtitle: "Long-view site planning with premium curb presence",
    cover: "/images/home/projects/estate-approach-sequence/cover.webp",
    images: [
      "/images/home/projects/estate-approach-sequence/1.webp",
      "/images/home/projects/estate-approach-sequence/2.webp",
      "/images/home/projects/estate-approach-sequence/3.webp",
    ],
  },
  {
    id: "garden-courtyard-study",
    title: "Garden Courtyard Study",
    subtitle: "Layered planting, structure, and livable exterior rooms",
    cover: "/images/home/projects/garden-courtyard-study/cover.webp",
    images: [
      "/images/home/projects/garden-courtyard-study/1.webp",
      "/images/home/projects/garden-courtyard-study/2.webp",
      "/images/home/projects/garden-courtyard-study/3.webp",
      "/images/home/projects/garden-courtyard-study/4.webp",
    ],
  },
];

function ProjectCard({ project, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group relative h-[340px] w-[320px] shrink-0 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 text-left shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white/40 md:h-[380px] md:w-[360px]"
      aria-label={`Open ${project.title} gallery`}
    >
      <img
        src={project.cover}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.18)_35%,rgba(0,0,0,0.72)_100%)]" />

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <div className="text-[1.05rem] font-semibold tracking-[-0.02em] text-white md:text-[1.15rem]">
              {project.title}
            </div>
            <div className="mt-2 line-clamp-2 text-sm leading-6 text-white/80">
              {project.subtitle}
            </div>
          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/18">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </button>
  );
}

function Lightbox({ project, index, setIndex, onClose }) {
  const total = project.images.length;

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + total) % total);
  }, [setIndex, total]);

  const goNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % total);
  }, [setIndex, total]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [goNext, goPrev, onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-md md:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative flex h-full max-h-[92vh] w-full max-w-[1400px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#07111d] shadow-[0_20px_120px_rgba(0,0,0,0.55)]"
          initial={{ opacity: 0, y: 18, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.985 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 md:px-6">
            <div className="min-w-0">
              <div className="text-lg font-semibold tracking-[-0.02em] text-white md:text-[1.25rem]">
                {project.title}
              </div>
              <div className="mt-1 text-sm text-white/70">
                {index + 1} of {total}
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
              aria-label="Close gallery"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative min-h-0 flex-1 bg-black">
            <img
              src={project.images[index]}
              alt={`${project.title} ${index + 1}`}
              className="h-full w-full object-contain"
            />

            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-black/55 md:left-5"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-black/55 md:right-5"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {total > 1 && (
            <div className="border-t border-white/10 px-4 py-4 md:px-5">
              <div className="flex gap-3 overflow-x-auto pb-1">
                {project.images.map((img, thumbIndex) => {
                  const active = thumbIndex === index;

                  return (
                    <button
                      key={`${project.id}-thumb-${thumbIndex}`}
                      type="button"
                      onClick={() => setIndex(thumbIndex)}
                      className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl border transition-all md:h-24 md:w-36 ${
                        active
                          ? "border-white/60 ring-2 ring-white/30"
                          : "border-white/10 opacity-80 hover:opacity-100"
                      }`}
                      aria-label={`Go to image ${thumbIndex + 1}`}
                    >
                      <img
                        src={img}
                        alt={`${project.title} thumbnail ${thumbIndex + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function NewProjectsMarqueeHub() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const marqueeItems = useMemo(() => [...PROJECTS, ...PROJECTS], []);

  function handleOpen(project) {
    setActiveProject(project);
    setActiveIndex(0);
  }

  function handleClose() {
    setActiveProject(null);
    setActiveIndex(0);
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[820px]">
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
              New Projects
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
              Explore recent work through a live project gallery hub.
            </h2>
            <p className="mt-4 max-w-[760px] text-base leading-7 text-white/72 md:text-lg">
              Each panel opens into a dedicated project gallery so visitors can
              move through a full visual sequence instead of seeing a single
              static image.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#020817] to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#020817] to-transparent md:w-28" />

        <div className="group overflow-hidden">
          <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-5 px-6 group-hover:[animation-play-state:paused] md:gap-6 md:px-10 lg:px-16">
            {marqueeItems.map((project, idx) => (
              <ProjectCard
                key={`${project.id}-${idx}`}
                project={project}
                onOpen={handleOpen}
              />
            ))}
          </div>
        </div>
      </div>

      {activeProject && (
        <Lightbox
          project={activeProject}
          index={activeIndex}
          setIndex={setActiveIndex}
          onClose={handleClose}
        />
      )}

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 10px));
          }
        }
      `}</style>
    </section>
  );
}