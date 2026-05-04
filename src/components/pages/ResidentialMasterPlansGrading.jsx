// src/pages/ResidentialMasterPlansGrading.jsx
import React, { useMemo } from "react";
import PageShell from "../shared/PageShell";
import GallerySection from "@/components/gallery/GallerySection";
import { ROUTES } from "@/components/utils/routes";

const MEDIA = {
  hero: "/images/hero/master-plans-hero.webp",
};

const IMAGES = [
  { src: "/images/design/residential/master-plans/01.webp", alt: "Master Plans placeholder 01" },
  { src: "/images/design/residential/master-plans/02.webp", alt: "Master Plans placeholder 02" },
  { src: "/images/design/residential/master-plans/03.webp", alt: "Master Plans placeholder 03" },
  { src: "/images/design/residential/master-plans/04.webp", alt: "Master Plans placeholder 04" },
  { src: "/images/design/residential/master-plans/05.webp", alt: "Master Plans placeholder 05" },
  { src: "/images/design/residential/master-plans/06.webp", alt: "Master Plans placeholder 06" },
  { src: "/images/design/residential/master-plans/07.webp", alt: "Master Plans placeholder 07" },
  { src: "/images/design/residential/master-plans/08.webp", alt: "Master Plans placeholder 08" },
  { src: "/images/design/residential/master-plans/09.webp", alt: "Master Plans placeholder 09" },
  { src: "/images/design/residential/master-plans/10.webp", alt: "Master Plans placeholder 10" },
  { src: "/images/design/residential/master-plans/11.webp", alt: "Master Plans placeholder 11" },
  { src: "/images/design/residential/master-plans/12.webp", alt: "Master Plans placeholder 12" },
  { src: "/images/design/residential/master-plans/13.webp", alt: "Master Plans placeholder 13" },
  { src: "/images/design/residential/master-plans/14.webp", alt: "Master Plans placeholder 14" },
  { src: "/images/design/residential/master-plans/15.webp", alt: "Master Plans placeholder 15" },
  { src: "/images/design/residential/master-plans/16.webp", alt: "Master Plans placeholder 16" },
];

export default function ResidentialMasterPlansGrading() {
  const items = useMemo(() => IMAGES.filter(Boolean), []);

  return (
    <PageShell
      currentPageName="ResidentialMasterPlansGrading"
      hero
      heroImage={MEDIA.hero}
      eyebrow="Residential Design Category"
      title="Master Plans & Grading"
      subtitle="Buildable master plans with grading strategy, drainage performance, and coordinated hardscape layout."
    
      heroContentAlign="center">
      <GallerySection
        backHref={ROUTES.designResidential ?? "/design/residential"}
        backLabel="Back to Residential Categories"
        title="Gallery"
        description="Click any image to expand. Use arrows to browse. Click off the image (or press Escape) to close."
        items={items}
        label="Master Plans & Grading"
        columns={3}
        gap={6}
      />
    </PageShell>
  );
}