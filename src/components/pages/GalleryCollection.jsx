// location: pages/GalleryCollection.jsx
import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import PageShell from "../PageShell";
import GalleryGrid from "../gallery/GalleryGrid";
import GalleryLightbox from "../gallery/GalleryLightbox";
import { getCollectionById } from "../gallery/types";
import AnimatedSection from "../shared/AnimatedSection";
import BottomCTA from "@/components/shared/BottomCTA";

export default function GalleryCollection() {
  const { collection: collectionId } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const collection = getCollectionById(collectionId);

  if (!collection) {
    return (
      <PageShell
        eyebrow="Gallery"
        title="Collection not found"
        subtitle="The collection you're looking for doesn't exist."
      >
        <Link href="/gallery"
          className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-sans-clean font-medium text-[#1F2E23] hover:text-[#6B7F5E] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Gallery
        </Link>
      </PageShell>
    );
  }

  const handleItemClick = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <PageShell
      hero
      heroImage={collection.coverImage}
      eyebrow="Gallery Collection"
      title={collection.title}
      subtitle={collection.subtitle}
    >
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <AnimatedSection>
          <div className="mb-12">
            <Link href="/gallery"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-sans-clean font-medium text-[#1F2E23] hover:text-[#6B7F5E] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Gallery
            </Link>
          </div>

          <GalleryGrid
            items={collection.items}
            columns={3}
            onItemClick={handleItemClick}
          />
        </AnimatedSection>
      </section>

      <GalleryLightbox
        open={lightboxOpen}
        items={collection.items}
        startIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />
      {/* SHARED BOTTOM CTA */}

    </PageShell>
  );
}