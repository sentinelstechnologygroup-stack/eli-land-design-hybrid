// src/pages/CommercialRenderings.jsx
import React, { useMemo } from "react";
import PageShell from "../PageShell";
import GallerySection from "@/components/gallery/GallerySection";
import { ROUTES } from "@/components/utils/routes";
import BottomCTA from "@/components/shared/BottomCTA";

const MEDIA = {
  hero: "/images/design/commercial/renderings/renderings-hero.jpg",
};

const IMAGES = [
  { src: "/images/design/commercial/renderings/01.jpg", alt: "Commercial rendering placeholder 01" },
  { src: "/images/design/commercial/renderings/02.jpg", alt: "Commercial rendering placeholder 02" },
  { src: "/images/design/commercial/renderings/03.jpg", alt: "Commercial rendering placeholder 03" },
  { src: "/images/design/commercial/renderings/04.jpg", alt: "Commercial rendering placeholder 04" },
  { src: "/images/design/commercial/renderings/05.jpg", alt: "Commercial rendering placeholder 05" },
  { src: "/images/design/commercial/renderings/06.jpg", alt: "Commercial rendering placeholder 06" },
  { src: "/images/design/commercial/renderings/07.jpg", alt: "Commercial rendering placeholder 07" },
  { src: "/images/design/commercial/renderings/08.jpg", alt: "Commercial rendering placeholder 08" },
  { src: "/images/design/commercial/renderings/09.jpg", alt: "Commercial rendering placeholder 09" },
  { src: "/images/design/commercial/renderings/10.jpg", alt: "Commercial rendering placeholder 10" },
  { src: "/images/design/commercial/renderings/11.jpg", alt: "Commercial rendering placeholder 11" },
  { src: "/images/design/commercial/renderings/12.jpg", alt: "Commercial rendering placeholder 12" },
];

export default function CommercialRenderings() {
  const items = useMemo(() => IMAGES.filter(Boolean), []);

  return (
    <PageShell
      currentPageName="CommercialRenderings"
      hero
      heroImage={MEDIA.hero}
      eyebrow="Commercial Design Category"
      title="Commercial Renderings"
      subtitle="Visualizations that align stakeholders and accelerate design decisions—materials, lighting, and spatial experience."
    >
      <GallerySection
        backHref={ROUTES.designCommercial ?? "/design/commercial"}
        backLabel="Back to Commercial Categories"
        title="Gallery"
        description="Click any image to expand. Use arrows to browse. Click off the image (or press Escape) to close."
        items={items}
        label="Commercial Renderings"
        columns={3}
        gap={10}
      />

      <BottomCTA />
    </PageShell>
  );
}