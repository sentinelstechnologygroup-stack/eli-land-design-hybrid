"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";

function StandardPanelVisual({ image = "", title = "" }) {
  return (
    <>
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.18)_36%,rgba(0,0,0,0.70)_100%)]" />
    </>
  );
}

function Lightbox({ project, activeIndex, setActiveIndex, onClose }) {
  const total = project?.images?.length || 0;

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && total > 1) {
        setActiveIndex((prev) => (prev - 1 + total) % total);
      }
      if (e.key === "ArrowRight" && total > 1) {
        setActiveIndex((prev) => (prev + 1) % total);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, setActiveIndex, total]);

  if (!project || !total) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[1200px] overflow-hidden rounded-[24px] bg-[#111111] shadow-[0_20px_100px_rgba(0,0,0,0.55)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 md:px-5">
          <div>
            <h3 className="text-[16px] font-semibold text-white md:text-[18px]">
              {project.title}
            </h3>
            <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/60">
              {activeIndex + 1} of {total}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="relative aspect-[16/10] w-full bg-black">
          <img
            src={project.images[activeIndex]}
            alt={`${project.title} ${activeIndex + 1}`}
            className="h-full w-full object-contain"
          />

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) => (prev - 1 + total) % total)
                }
                className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white transition hover:bg-black/60"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev + 1) % total)}
                className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white transition hover:bg-black/60"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {total > 1 && (
          <div className="flex gap-3 overflow-x-auto border-t border-white/10 px-4 py-4 md:px-5">
            {project.images.map((img, idx) => {
              const active = idx === activeIndex;
              return (
                <button
                  key={`${project.id}-${idx}`}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-[14px] border ${
                    active
                      ? "border-white/60 ring-2 ring-white/20"
                      : "border-white/10"
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt={`${project.title} thumbnail ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function MarqueePanelVisual({ projects = [], onOpenProject }) {
  const marqueeProjects =
    Array.isArray(projects) && projects.length ? [...projects, ...projects] : [];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/30" />
<div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.18)_36%,rgba(0,0,0,0.70)_100%)]" />

<div className="relative z-[3] flex h-full w-max animate-[hubMarquee_24s_linear_infinite] gap-3 px-3 py-3 group-hover:[animation-play-state:paused]">
        {marqueeProjects.map((project, idx) => (
          <button
            key={`${project.id}-${idx}`}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onOpenProject(project);
            }}
            className="h-full w-[220px] shrink-0 overflow-hidden rounded-[20px] md:w-[240px]"
            aria-label={`Open ${project.title}`}
          >
            <img
              src={project.cover}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function HubCard({ item, onOpenProject }) {
  const {
    title,
    includes = [],
    href = "#",
    image,
    ctaLabel = "View Page",
    isMarquee = false,
    marqueeProjects = [],
  } = item;

  const cardBody = (
    <div className="relative min-h-[440px] w-full overflow-hidden">
      {isMarquee ? (
        <MarqueePanelVisual
          projects={marqueeProjects}
          onOpenProject={onOpenProject}
        />
      ) : (
        <StandardPanelVisual image={image} title={title} />
      )}

      <div className="absolute inset-0 z-10 flex flex-col p-5 md:p-6">
        <div>
          <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-white md:text-[26px]">
            {title}
          </h3>

          <div className="mt-3 h-[2px] w-full bg-white/65" />

          {includes.length > 0 ? (
            <div className="mt-4">
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-white">
                Typical Scope
              </p>

              <ul className="mt-2 space-y-1.5">
                {includes.map((entry) => (
                  <li
                    key={`${title}-${entry}`}
                    className="text-[14px] leading-[1.6] text-white md:text-[15px]"
                  >
                    {entry}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-white">
            {ctaLabel}
          </span>

          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/18">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </div>
  );

  if (isMarquee) {
    return (
      <div className="group relative flex min-h-[440px] overflow-hidden rounded-[28px] border border-black/10 bg-[#D8D0C4] shadow-[0_20px_60px_rgba(31,46,35,0.10)]">
        {cardBody}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className="group relative flex min-h-[440px] overflow-hidden rounded-[28px] border border-black/10 bg-[#D8D0C4] shadow-[0_20px_60px_rgba(31,46,35,0.10)] transition-transform duration-300 hover:-translate-y-1"
    >
      {cardBody}
    </Link>
  );
}

export default function HomeHubSection({ title = "Explore", items = [] }) {
  const [lightboxProject, setLightboxProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openProject = (project) => {
    setLightboxProject(project);
    setActiveIndex(0);
  };

  const closeProject = () => {
    setLightboxProject(null);
    setActiveIndex(0);
  };

  return (
    <section className="pb-10 md:pb-14 lg:pb-16">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-20">
        <div className="mb-5 md:mb-7">
          <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-[#1F2E23] md:text-[36px]">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {items.map((item) => (
            <HubCard
              key={item.title}
              item={item}
              onOpenProject={openProject}
            />
          ))}
        </div>
      </div>

      {lightboxProject ? (
        <Lightbox
          project={lightboxProject}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          onClose={closeProject}
        />
      ) : null}

      <style jsx>{`
        @keyframes hubMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 6px));
          }
        }
      `}</style>
    </section>
  );
}