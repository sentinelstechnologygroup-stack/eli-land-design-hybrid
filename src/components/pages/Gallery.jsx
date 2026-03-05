// src/pages/Gallery.jsx
import React from "react";

import PageShell from "../PageShell";
import GalleryIndex from "../gallery/GalleryIndex";
import AnimatedSection from "../shared/AnimatedSection";
import BottomCTA from "@/components/shared/BottomCTA";

export default function Gallery() {
  return (
    <PageShell
      currentPageName="Gallery"
      hero
      heroImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
      eyebrow="Visual Archive"
      title={
        <>
          Project
          <br />
          <span className="text-[#D4C5A9]">Gallery.</span>
        </>
      }
      subtitle="Explore our portfolio organized by project type and design discipline."
    >
      <section className="py-24 md:py-36">
        <AnimatedSection>
          <GalleryIndex />
        </AnimatedSection>
      </section>

      {/* SHARED BOTTOM CTA */}
      <BottomCTA />
    </PageShell>
  );
}