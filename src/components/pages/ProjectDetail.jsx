// src/pages/ProjectDetail.jsx
import React, { useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, MapPin, Calendar, Tag } from "lucide-react";
import PageShell from "../PageShell";
import AnimatedSection from "../shared/AnimatedSection";
import GallerySection from "@/components/gallery/GallerySection";

// Placeholder project data - replace with real data source
const PROJECTS = {
  "woodhaven-village": {
    title: "Woodhaven Village",
    subtitle: "Community landscape with native plantings and gathering spaces",
    category: "Commercial",
    location: "The Woodlands, TX",
    completionDate: "2024",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
    description: [
      "A comprehensive community landscape that integrates native plantings with functional gathering spaces. The project responds to the natural character of the site while creating a welcoming entry sequence.",
      "Our design approach focused on sustainability, using native and adapted plant materials that thrive in the local climate with minimal irrigation.",
    ],
    services: ["Master Planning", "Site Design", "Construction Documentation", "Construction Administration"],
    gallery: [
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80", alt: "Project image 01" },
      { src: "https://images.unsplash.com/photo-1600566753190-17fbaa2a6c3b?w=1400&q=80", alt: "Project image 02" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80", alt: "Project image 03" },
      { src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&q=80", alt: "Project image 04" },
      { src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1400&q=80", alt: "Project image 05" },
      { src: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1400&q=80", alt: "Project image 06" },
    ],
  },
  "carlton-woods-estate": {
    title: "Carlton Woods Estate",
    subtitle: "Resort-style outdoor living with custom pool and kitchen",
    category: "Residential",
    location: "The Woodlands, TX",
    completionDate: "2023",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
    description: [
      "A multi-acre estate landscape featuring resort-quality outdoor living areas, custom pool design, and integrated hardscape elements. The design balances formal entertaining spaces with naturalized garden areas.",
    ],
    services: ["Landscape Architecture", "Pool Design", "Hardscape Design", "Lighting Design", "Construction"],
    gallery: [
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80", alt: "Project image 01" },
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80", alt: "Project image 02" },
      { src: "https://images.unsplash.com/photo-1600566753190-17fbaa2a6c3b?w=1400&q=80", alt: "Project image 03" },
      { src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&q=80", alt: "Project image 04" },
      { src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1400&q=80", alt: "Project image 05" },
      { src: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1400&q=80", alt: "Project image 06" },
    ],
  },
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS[slug];

  const galleryItems = useMemo(() => (project?.gallery || []).filter(Boolean), [project]);

  if (!project) {
    return (
      <PageShell eyebrow="Projects" title="Project not found" subtitle="The project you're looking for doesn't exist.">
        <Link href="/projects"
          className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-sans-clean font-medium text-[#1F2E23] hover:text-[#6B7F5E] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </PageShell>
    );
  }

  return (
    <PageShell hero heroImage={project.heroImage} eyebrow="Project" title={project.title} subtitle={project.subtitle}>
      {/* Project Details */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <AnimatedSection>
          <div className="mb-12">
            <Link href="/projects"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-sans-clean font-medium text-[#1F2E23] hover:text-[#6B7F5E] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            {/* Main Content */}
            <div className="md:col-span-7">
              {project.description.map((para, idx) => (
                <p
                  key={idx}
                  className="text-[#1F2E23]/60 font-sans-clean text-base md:text-lg leading-[1.8] mb-6"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Sidebar */}
            <div className="md:col-span-5">
              <div className="border-t border-[#1F2E23]/10 pt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <Tag className="w-5 h-5 text-[#6B7F5E] mt-1" />
                  <div>
                    <span className="text-[9px] tracking-[0.3em] uppercase text-[#1F2E23]/40 font-sans-clean font-semibold block mb-1">
                      Category
                    </span>
                    <span className="text-[#1F2E23] font-sans-clean text-sm">{project.category}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#6B7F5E] mt-1" />
                  <div>
                    <span className="text-[9px] tracking-[0.3em] uppercase text-[#1F2E23]/40 font-sans-clean font-semibold block mb-1">
                      Location
                    </span>
                    <span className="text-[#1F2E23] font-sans-clean text-sm">{project.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-[#6B7F5E] mt-1" />
                  <div>
                    <span className="text-[9px] tracking-[0.3em] uppercase text-[#1F2E23]/40 font-sans-clean font-semibold block mb-1">
                      Completion
                    </span>
                    <span className="text-[#1F2E23] font-sans-clean text-sm">{project.completionDate}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#1F2E23]/10">
                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#1F2E23]/40 font-sans-clean font-semibold block mb-3">
                    Services
                  </span>
                  <ul className="space-y-2">
                    {project.services.map((service) => (
                      <li
                        key={service}
                        className="text-[#1F2E23]/60 font-sans-clean text-sm flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-[#6B7F5E] rounded-full" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Project Gallery (canonical Projects-style behavior) */}
      <GallerySection
        title="Project Gallery"
        description="Click any image to expand. Use arrows to browse. Click off the image (or press Escape) to close."
        items={galleryItems}
        label={project.title}
        columns={3}
        gap={6}
      />

      {/* SHARED BOTTOM CTA */}
    </PageShell>
  );
}