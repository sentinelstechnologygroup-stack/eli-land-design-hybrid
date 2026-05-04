// src/pages/LifestyleCenter.jsx
import React, { useMemo } from "react";
import PageShell from "../shared/PageShell";
import GallerySection from "@/components/gallery/GallerySection";
import { ROUTES } from "@/components/utils/routes";

const MEDIA = {
  hero: "/images/hero/lifestyle-center-hero.webp",
};

const IMAGES = [
  { src: "/images/design/commercial/lifestyle-center/01.webp", alt: "Lifestyle Center placeholder 01" },
  { src: "/images/design/commercial/lifestyle-center/02.webp", alt: "Lifestyle Center placeholder 02" },
  { src: "/images/design/commercial/lifestyle-center/03.webp", alt: "Lifestyle Center placeholder 03" },
  { src: "/images/design/commercial/lifestyle-center/04.webp", alt: "Lifestyle Center placeholder 04" },
  { src: "/images/design/commercial/lifestyle-center/05.webp", alt: "Lifestyle Center placeholder 05" },
  { src: "/images/design/commercial/lifestyle-center/06.webp", alt: "Lifestyle Center placeholder 06" },
  { src: "/images/design/commercial/lifestyle-center/07.webp", alt: "Lifestyle Center placeholder 07" },
  { src: "/images/design/commercial/lifestyle-center/08.webp", alt: "Lifestyle Center placeholder 08" },
  { src: "/images/design/commercial/lifestyle-center/09.webp", alt: "Lifestyle Center placeholder 09" },
  { src: "/images/design/commercial/lifestyle-center/10.webp", alt: "Lifestyle Center placeholder 10" },
  { src: "/images/design/commercial/lifestyle-center/11.webp", alt: "Lifestyle Center placeholder 11" },
  { src: "/images/design/commercial/lifestyle-center/12.webp", alt: "Lifestyle Center placeholder 12" },
];

export default function LifestyleCenter() {
  const items = useMemo(() => IMAGES.filter(Boolean), []);

  return (
    <PageShell
      currentPageName="LifestyleCenter"
      hero
      heroImage={MEDIA.hero}
      eyebrow="Commercial Design Category"
      title="Lifestyle Center"
      subtitle="Entry sequence, plazas, pedestrian flow, and durable materials that elevate the experience and perform long-term."
    
      heroContentAlign="center">
      <GallerySection
        backHref={ROUTES.designCommercial ?? "/design/commercial"}
        backLabel="Back to Commercial Categories"
        title="Gallery"
        description="Click any image to expand. Use arrows to browse. Click off the image (or press Escape) to close."
        items={items}
        label="Lifestyle Center"
        columns={3}
        gap={6}
      />
    </PageShell>
  );
}