// src/components/pages/GalleryImagePage.jsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageShell from "@/components/shared/PageShell";
import MiddleCTA from "@/components/shared/MiddleCTA";
import { ROUTES } from "@/components/utils/routes";

const COMMERCIAL_COUNT = 16;
const RESIDENTIAL_COUNT = 74;
const COMMERCIAL_RENDERING_COUNT = 48;
const RESIDENTIAL_RENDERING_COUNT = 39;

const MEDIA = {
  hero: "/images/gallery/hero.webp",
  commercialHero: "/images/hero/commercial-hero.webp",
  residentialHero: "/images/hero/residential-hero.webp",
  commercialFallback: "/images/gallery/commercial/01.webp",
  residentialFallback: "/images/gallery/residential/01.webp",
  commercialRenderingFallback: "/images/renderings/commercial/01.webp",
  residentialRenderingFallback: "/images/renderings/residential/01.webp",
};

function makeImages({ folder, count, titlePrefix, type, category, fallback }) {
  return Array.from({ length: count }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");

    return {
      src: `${folder}/${num}.webp`,
      title: `${titlePrefix} ${num}`,
      type,
      category,
      fallback,
    };
  });
}

const COMMERCIAL_IMAGES = makeImages({
  folder: "/images/gallery/commercial",
  count: COMMERCIAL_COUNT,
  titlePrefix: "Commercial",
  type: "commercial",
  category: "Commercial",
  fallback: MEDIA.commercialFallback,
});

const RESIDENTIAL_IMAGES = makeImages({
  folder: "/images/gallery/residential",
  count: RESIDENTIAL_COUNT,
  titlePrefix: "Residential",
  type: "residential",
  category: "Residential",
  fallback: MEDIA.residentialFallback,
});

const COMMERCIAL_RENDERINGS = makeImages({
  folder: "/images/renderings/commercial",
  count: COMMERCIAL_RENDERING_COUNT,
  titlePrefix: "Commercial Rendering",
  type: "commercial-rendering",
  category: "Commercial Rendering",
  fallback: MEDIA.commercialRenderingFallback,
});

const RESIDENTIAL_RENDERINGS = makeImages({
  folder: "/images/renderings/residential",
  count: RESIDENTIAL_RENDERING_COUNT,
  titlePrefix: "Residential Rendering",
  type: "residential-rendering",
  category: "Residential Rendering",
  fallback: MEDIA.residentialRenderingFallback,
});

const ALL_IMAGES = [
  ...COMMERCIAL_IMAGES,
  ...RESIDENTIAL_IMAGES,
  ...COMMERCIAL_RENDERINGS,
  ...RESIDENTIAL_RENDERINGS,
];

function getFilters(mode) {
  if (mode === "commercial") {
    return [
      { key: "all", label: "All" },
      { key: "commercial", label: "Commercial" },
      { key: "commercial-rendering", label: "Commercial Rendering" },
    ];
  }

  if (mode === "residential") {
    return [
      { key: "all", label: "All" },
      { key: "residential", label: "Residential" },
      { key: "residential-rendering", label: "Residential Rendering" },
    ];
  }

  return [
    { key: "all", label: "All" },
    { key: "commercial", label: "Commercial" },
    { key: "residential", label: "Residential" },
    { key: "commercial-rendering", label: "Commercial Rendering" },
    { key: "residential-rendering", label: "Residential Rendering" },
  ];
}

function getImagesForFilter(filter, mode) {
  if (filter === "commercial") return COMMERCIAL_IMAGES;
  if (filter === "residential") return RESIDENTIAL_IMAGES;
  if (filter === "commercial-rendering") return COMMERCIAL_RENDERINGS;
  if (filter === "residential-rendering") return RESIDENTIAL_RENDERINGS;

  if (mode === "commercial") {
    return [...COMMERCIAL_IMAGES, ...COMMERCIAL_RENDERINGS];
  }

  if (mode === "residential") {
    return [...RESIDENTIAL_IMAGES, ...RESIDENTIAL_RENDERINGS];
  }

  return ALL_IMAGES;
}

function FilterButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "border px-5 py-3 type-button transition-colors",
        active
          ? "border-[#1F2E23] bg-[#1F2E23] text-white"
          : "border-[#1F2E23]/12 bg-white/50 text-[#1F2E23] hover:border-[#1F2E23]/20 hover:bg-white",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function GalleryCheckpointCTA({ activeFilter }) {
  const isCommercial =
    activeFilter === "commercial" || activeFilter === "commercial-rendering";

  const secondaryLabel = isCommercial
    ? "View Residential Work"
    : "View Commercial Work";

  const secondaryHref = isCommercial
    ? ROUTES.residentialGalleryMain
    : ROUTES.commercialGallery;

  return (
    <div className="sm:col-span-2 lg:col-span-3">
      <div className="my-16 md:my-20 lg:my-24">
        <MiddleCTA
          eyebrow="Planning a Project?"
          title="Let’s discuss your site, scope, and timeline."
          body="ELI Land Design helps residential and commercial clients move from early planning to clear, buildable landscape architecture."
          primaryLabel="Schedule Consultation"
          primaryHref={ROUTES.contact}
          secondaryLabel={secondaryLabel}
          secondaryHref={secondaryHref}
          tone="sage"
        />
      </div>
    </div>
  );
}

function SafeGalleryImage({ item, className }) {
  return (
    <img
      src={item.src}
      alt={item.title}
      className={className}
      loading="lazy"
      decoding="async"
      onError={(e) => {
        if (e.currentTarget.dataset.fallbackApplied === "true") return;
        e.currentTarget.dataset.fallbackApplied = "true";
        e.currentTarget.src = item.fallback;
      }}
    />
  );
}

function Lightbox({ items, activeIndex, onClose, onPrev, onNext }) {
  const isOpen = activeIndex !== null && !!items[activeIndex];

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
            onError={(e) => {
              if (e.currentTarget.dataset.fallbackApplied === "true") return;
              e.currentTarget.dataset.fallbackApplied = "true";
              e.currentTarget.src = activeItem.fallback;
            }}
          />

          <div className="mt-4 text-center">
            <div className="type-micro text-white/70">
              {activeItem.category}
            </div>
            <div className="mt-2 type-h3 text-white">{activeItem.title}</div>
            <div className="mt-2 type-small text-white/60">
              {activeIndex + 1} / {items.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GalleryImagePage({
  mode = "all",
  title = "Project Gallery",
  subtitle = "Browse commercial and residential gallery images.",
}) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeIndex, setActiveIndex] = useState(null);

  const availableFilters = useMemo(() => getFilters(mode), [mode]);

  const filteredImages = useMemo(
    () => getImagesForFilter(activeFilter, mode),
    [activeFilter, mode]
  );

  const heroImage =
    mode === "residential"
      ? MEDIA.residentialHero
      : mode === "commercial"
        ? MEDIA.commercialHero
        : MEDIA.hero;

  useEffect(() => {
    setActiveFilter("all");
    setActiveIndex(null);
  }, [mode]);

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  const goPrev = () => {
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return prev === 0 ? filteredImages.length - 1 : prev - 1;
    });
  };

  const goNext = () => {
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return prev === filteredImages.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <PageShell
      hero
      heroImage={heroImage}
      heroImageClassName="object-cover object-center"
      heroTitleClassName="max-w-none xl:whitespace-nowrap"
      eyebrow="Gallery"
      title={title}
      subtitle={subtitle}
    >
      <section className="bg-[#F5F0EA]">
        <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 md:py-16 lg:px-20">
          <div className="flex flex-wrap gap-3">
            {availableFilters.map((filter) => (
              <FilterButton
                key={filter.key}
                active={activeFilter === filter.key}
                onClick={() => {
                  setActiveFilter(filter.key);
                  setActiveIndex(null);
                }}
              >
                {filter.label}
              </FilterButton>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {filteredImages.map((item, index) => (
              <React.Fragment key={item.src}>
                {index > 0 && index % 18 === 0 && (
                  <GalleryCheckpointCTA activeFilter={activeFilter} />
                )}

                <button
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="group block w-full overflow-hidden border border-[#1F2E23]/10 bg-white transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(16,24,18,0.10)]"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#E8E0D4]">
                    <SafeGalleryImage
                      item={item}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        items={filteredImages}
        activeIndex={activeIndex}
        onClose={closeLightbox}
        onPrev={goPrev}
        onNext={goNext}
      />
    </PageShell>
  );
}