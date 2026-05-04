// src/pages/Renderings.jsx
import React, { useMemo } from "react";
import PageShell from "../shared/PageShell";
import GallerySection from "@/components/gallery/GallerySection";
import { ROUTES } from "@/components/utils/routes";
import BottomCTA from "@/components/shared/BottomCTA";

const MEDIA = {
  hero: "/images/hero/residential-renderings-hero.webp",
};

const IMAGES = [
  { src: "/images/design/residential/renderings/01.webp", alt: "Rendering placeholder 01" },
  { src: "/images/design/residential/renderings/02.webp", alt: "Rendering placeholder 02" },
  { src: "/images/design/residential/renderings/03.webp", alt: "Rendering placeholder 03" },
  { src: "/images/design/residential/renderings/04.webp", alt: "Rendering placeholder 04" },
  { src: "/images/design/residential/renderings/05.webp", alt: "Rendering placeholder 05" },
  { src: "/images/design/residential/renderings/06.webp", alt: "Rendering placeholder 06" },
  { src: "/images/design/residential/renderings/07.webp", alt: "Rendering placeholder 07" },
  { src: "/images/design/residential/renderings/08.webp", alt: "Rendering placeholder 08" },
  { src: "/images/design/residential/renderings/09.webp", alt: "Rendering placeholder 09" },
  { src: "/images/design/residential/renderings/10.webp", alt: "Rendering placeholder 10" },
  { src: "/images/design/residential/renderings/11.webp", alt: "Rendering placeholder 11" },
  { src: "/images/design/residential/renderings/12.webp", alt: "Rendering placeholder 12" },
];

export default function Renderings() {
  const items = useMemo(() => IMAGES.filter(Boolean), []);

  return (
    <PageShell
      currentPageName="Renderings"
      hero
      heroImage={MEDIA.hero}
      eyebrow="Gallery"
      title="Renderings"
      subtitle="Concept visualizations and design renderings that support client decision-making and build clarity."
    
      heroContentAlign="center">
      <GallerySection
        backHref={ROUTES.gallery ?? "/gallery"}
        backLabel="Back to Gallery"
        title="Gallery"
        description="Click any image to expand. Use arrows to browse. Click off the image (or press Escape) to close."
        items={items}
        label="Renderings"
        columns={3}
        gap={6}
      />

      <BottomCTA />
    </PageShell>
  );
}