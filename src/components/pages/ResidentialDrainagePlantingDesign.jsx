// src/pages/ResidentialDrainagePlantingDesign.jsx
import React, { useMemo } from "react";
import PageShell from "../PageShell";
import GallerySection from "@/components/gallery/GallerySection";
import { ROUTES } from "@/components/utils/routes";

const MEDIA = {
  hero: "/images/design/residential/drainage-planting/drainage-planting-hero.jpg",
};

const IMAGES = [
  { src: "/images/design/residential/drainage-planting/01.jpg", alt: "Drainage & Planting placeholder 01" },
  { src: "/images/design/residential/drainage-planting/02.jpg", alt: "Drainage & Planting placeholder 02" },
  { src: "/images/design/residential/drainage-planting/03.jpg", alt: "Drainage & Planting placeholder 03" },
  { src: "/images/design/residential/drainage-planting/04.jpg", alt: "Drainage & Planting placeholder 04" },
  { src: "/images/design/residential/drainage-planting/05.jpg", alt: "Drainage & Planting placeholder 05" },
  { src: "/images/design/residential/drainage-planting/06.jpg", alt: "Drainage & Planting placeholder 06" },
  { src: "/images/design/residential/drainage-planting/07.jpg", alt: "Drainage & Planting placeholder 07" },
  { src: "/images/design/residential/drainage-planting/08.jpg", alt: "Drainage & Planting placeholder 08" },
  { src: "/images/design/residential/drainage-planting/09.jpg", alt: "Drainage & Planting placeholder 09" },
  { src: "/images/design/residential/drainage-planting/10.jpg", alt: "Drainage & Planting placeholder 10" },
  { src: "/images/design/residential/drainage-planting/11.jpg", alt: "Drainage & Planting placeholder 11" },
  { src: "/images/design/residential/drainage-planting/12.jpg", alt: "Drainage & Planting placeholder 12" },
  { src: "/images/design/residential/drainage-planting/13.jpg", alt: "Drainage & Planting placeholder 13" },
  { src: "/images/design/residential/drainage-planting/14.jpg", alt: "Drainage & Planting placeholder 14" },
  { src: "/images/design/residential/drainage-planting/15.jpg", alt: "Drainage & Planting placeholder 15" },
  { src: "/images/design/residential/drainage-planting/16.jpg", alt: "Drainage & Planting placeholder 16" },
];

export default function ResidentialDrainagePlantingDesign() {
  const items = useMemo(() => IMAGES.filter(Boolean), []);

  return (
    <PageShell
      hero
      heroImage={MEDIA.hero}
      eyebrow="Residential Design Category"
      title="Drainage & Planting Design"
      subtitle="Drainage solutions and planting systems designed for Texas conditions and maintenance reality."
    >
      <GallerySection
        backHref={ROUTES.designResidential ?? "/design/residential"}
        backLabel="Back to Residential Categories"
        title="Gallery"
        description="Click any image to expand. Use arrows to browse. Click off the image (or press Escape) to close."
        items={items}
        label="Drainage & Planting"
        columns={3}
        gap={6}
      />

      {/* SHARED BOTTOM CTA */}
    </PageShell>
  );
}