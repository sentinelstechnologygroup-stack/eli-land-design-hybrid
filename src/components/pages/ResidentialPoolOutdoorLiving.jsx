// src/pages/ResidentialPoolOutdoorLiving.jsx
import React, { useMemo } from "react";
import PageShell from "../PageShell";
import GallerySection from "@/components/gallery/GallerySection";
import { ROUTES } from "@/components/utils/routes";

const MEDIA = {
  hero: "/images/design/residential/pool-outdoor-living/hero.jpg",
};

const IMAGES = [
  { src: "/images/design/residential/pool-outdoor-living/01.jpg", alt: "Pool & Outdoor Living placeholder 01" },
  { src: "/images/design/residential/pool-outdoor-living/02.jpg", alt: "Pool & Outdoor Living placeholder 02" },
  { src: "/images/design/residential/pool-outdoor-living/03.jpg", alt: "Pool & Outdoor Living placeholder 03" },
  { src: "/images/design/residential/pool-outdoor-living/04.jpg", alt: "Pool & Outdoor Living placeholder 04" },
  { src: "/images/design/residential/pool-outdoor-living/05.jpg", alt: "Pool & Outdoor Living placeholder 05" },
  { src: "/images/design/residential/pool-outdoor-living/06.jpg", alt: "Pool & Outdoor Living placeholder 06" },
  { src: "/images/design/residential/pool-outdoor-living/07.jpg", alt: "Pool & Outdoor Living placeholder 07" },
  { src: "/images/design/residential/pool-outdoor-living/08.jpg", alt: "Pool & Outdoor Living placeholder 08" },
  { src: "/images/design/residential/pool-outdoor-living/09.jpg", alt: "Pool & Outdoor Living placeholder 09" },
  { src: "/images/design/residential/pool-outdoor-living/10.jpg", alt: "Pool & Outdoor Living placeholder 10" },
  { src: "/images/design/residential/pool-outdoor-living/11.jpg", alt: "Pool & Outdoor Living placeholder 11" },
  { src: "/images/design/residential/pool-outdoor-living/12.jpg", alt: "Pool & Outdoor Living placeholder 12" },
  { src: "/images/design/residential/pool-outdoor-living/13.jpg", alt: "Pool & Outdoor Living placeholder 13" },
  { src: "/images/design/residential/pool-outdoor-living/14.jpg", alt: "Pool & Outdoor Living placeholder 14" },
  { src: "/images/design/residential/pool-outdoor-living/15.jpg", alt: "Pool & Outdoor Living placeholder 15" },
  { src: "/images/design/residential/pool-outdoor-living/16.jpg", alt: "Pool & Outdoor Living placeholder 16" },
];

export default function ResidentialPoolOutdoorLiving() {
  const items = useMemo(() => IMAGES.filter(Boolean), []);

  return (
    <PageShell
      hero
      heroImage={MEDIA.hero}
      eyebrow="Residential Design Category"
      title="Pool & Outdoor Living"
      subtitle="Outdoor living environments planned for circulation, structure coordination, and long-term use."
    >
      <GallerySection
        backHref={ROUTES.designResidential ?? "/design/residential"}
        backLabel="Back to Residential Categories"
        title="Gallery"
        description="Click any image to expand. Use arrows to browse. Click off the image (or press Escape) to close."
        items={items}
        label="Pool & Outdoor Living"
        columns={3}
        gap={6}
      />

      {/* SHARED BOTTOM CTA */}
    </PageShell>
  );
}