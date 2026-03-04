// src/components/gallery/GalleryGrid.jsx
import React, { useMemo, useState, useCallback } from "react";
import { Panel } from "@/components/ui/panel";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";

export default function GalleryGrid({
  items = [],
  label = "Gallery",
  columns = 3,
  gap = 10, // ✅ increased spacing by default
  tileAspect = "aspect-[4/3]",
}) {
  const images = useMemo(() => (items || []).filter(Boolean), [items]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const isOpen = activeIndex >= 0;
  const close = useCallback(() => setActiveIndex(-1), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i <= 0 ? images.length - 1 : i - 1)),
    [images.length]
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i >= images.length - 1 ? 0 : i + 1)),
    [images.length]
  );

  const gridCols =
    columns === 1
      ? "grid-cols-1"
      : columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  // ✅ Tailwind-safe gap mapping (avoids dynamic class pitfalls)
  const gapClass =
    gap === 0
      ? "gap-0"
      : gap === 1
      ? "gap-1"
      : gap === 2
      ? "gap-2"
      : gap === 3
      ? "gap-3"
      : gap === 4
      ? "gap-4"
      : gap === 5
      ? "gap-5"
      : gap === 6
      ? "gap-6"
      : gap === 7
      ? "gap-7"
      : gap === 8
      ? "gap-8"
      : gap === 9
      ? "gap-9"
      : gap === 10
      ? "gap-10"
      : gap === 12
      ? "gap-12"
      : "gap-10";

  return (
    <>
      <div className={`grid ${gridCols} ${gapClass}`}>
        {images.map((img, idx) => (
          <Panel
            key={img.src || idx}
            variant="light"
            className="bg-transparent overflow-hidden rounded-3xl"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(idx)}
              className="group block w-full text-left"
              aria-label={`Open image ${idx + 1}`}
            >
              {/* ✅ Image ONLY (no caption band below) */}
              <div className={`relative ${tileAspect} bg-[#E5DED4] overflow-hidden`}>
                <img
                  src={img.src}
                  alt={img.alt || `${label} ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-[#1F2E23]/0 group-hover:bg-[#1F2E23]/35 transition-all duration-500" />
              </div>
            </button>
          </Panel>
        ))}
      </div>

      <GalleryLightbox
        open={isOpen}
        items={images}
        index={Math.max(0, activeIndex)}
        onClose={close}
        onPrev={prev}
        onNext={next}
        title={label}
      />
    </>
  );
}