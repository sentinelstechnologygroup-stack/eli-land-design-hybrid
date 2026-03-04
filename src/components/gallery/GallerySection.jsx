// src/components/gallery/GallerySection.jsx
import React from "react";
import Link from "next/link";
import GalleryGrid from "./GalleryGrid";

export default function GallerySection({
  title = "Gallery",
  description,
  backHref,
  backLabel = "Back",
  items = [],
  label = "Gallery",
  columns = 3,
  gap = 10, // ✅ increased spacing
}) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20 pt-12 md:pt-14 pb-24 md:pb-32">
        {backHref && (
          <div className="mb-8">
            <Link href={backHref}
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase font-sans-clean font-semibold text-[#1F2E23]/70 hover:text-[#1F2E23] transition-colors"
            >
              <span className="text-base leading-none">←</span> {backLabel}
            </Link>
          </div>
        )}

        {(title || description) && (
          <header className="mb-10">
            {title && (
              <h1 className="font-serif-display text-[#1F2E23] text-3xl md:text-4xl font-light leading-[1.1]">
                {title}
              </h1>
            )}
            {description && (
              <p className="mt-3 max-w-2xl text-sm md:text-base text-[#1F2E23]/60 font-sans-clean leading-[1.9]">
                {description}
              </p>
            )}
          </header>
        )}

        <GalleryGrid items={items} label={label} columns={columns} gap={gap} tileAspect="aspect-[4/3]" />
      </div>
    </section>
  );
}