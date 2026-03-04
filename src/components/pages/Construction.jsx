// src/pages/Construction.jsx
import React from "react";
import Link from "next/link";
import { ArrowRight, Hammer, Droplets, Lightbulb, TreePine } from "lucide-react";
import PageShell from "../PageShell";
import AnimatedSection from "../shared/AnimatedSection";
import SectionDivider from "../shared/SectionDivider";
import GallerySection from "../gallery/GallerySection";
import BottomCTA from "@/components/shared/BottomCTA";

const CONSTRUCTION_SERVICES = [
  {
    icon: Hammer,
    title: "Hardscape",
    description:
      "Stone patios, retaining walls, outdoor kitchens, fire features, and custom structures built with precision.",
  },
  {
    icon: Droplets,
    title: "Irrigation Systems",
    description:
      "Efficient, zone-specific irrigation designed to sustain your landscape while conserving water.",
  },
  {
    icon: Lightbulb,
    title: "Landscape Lighting",
    description:
      "Architectural and accent lighting that extends the beauty and usability of your outdoor spaces into the evening.",
  },
  {
    icon: TreePine,
    title: "Planting & Softscape",
    description:
      "Expert plant installation with attention to mature form, seasonal interest, and long-term sustainability.",
  },
];

const PROCESS_STEPS = [
  { step: "01", title: "Pre-Construction", description: "Detailed review of plans, material selection, and scheduling." },
  { step: "02", title: "Site Preparation", description: "Grading, drainage, and infrastructure work." },
  { step: "03", title: "Hardscape Install", description: "Stone, concrete, structures, and water features." },
  { step: "04", title: "Systems", description: "Irrigation, lighting, and drainage systems." },
  { step: "05", title: "Planting", description: "Trees, shrubs, perennials, and ground cover." },
  { step: "06", title: "Final Walkthrough", description: "Quality inspection and client handoff." },
];

export default function Construction() {
  return (
    <PageShell
      hero
      heroImage="/images/construction/hero.jpg"
      eyebrow="Services"
      title="Landscape Construction Services"
      subtitle="Precision installation of hardscape, irrigation, lighting, drainage, and planting systems for residential and commercial projects in The Woodlands and Houston."
    >
      {/* Intro */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <AnimatedSection>
              <h2 className="font-serif-display text-[#1F2E23] text-4xl md:text-5xl font-light leading-[1.05]">
                Design-Build Landscape Construction
              </h2>
            </AnimatedSection>
          </div>

          <div className="md:col-span-7">
            <AnimatedSection delay={0.2}>
              <p className="text-[#1F2E23]/60 font-sans-clean text-base md:text-lg leading-[1.8] mb-6">
                E.L.I. Land Design provides landscape construction services throughout The Woodlands and Houston area. Our crews install hardscape, irrigation systems, landscape lighting, drainage infrastructure, and plant materials according to design specifications. By controlling both design and construction in-house, we ensure build quality matches design intent without communication gaps or substitutions.
              </p>
              <p className="text-[#1F2E23]/60 font-sans-clean text-base md:text-lg leading-[1.8] mb-6">
                We manage all phases of construction—from site preparation and grading through final installation and cleanup. Our process includes pre-construction meetings, material selection verification, phased installation scheduling, and quality control inspections at each stage.
              </p>
              <p className="text-[#1F2E23]/60 font-sans-clean text-base md:text-lg leading-[1.8]">
                Licensed landscape contractors execute the work, ensuring code compliance, proper material specifications, and warranty protection. We coordinate with architects, builders, engineers, and property owners to manage timelines, address site conditions, and deliver projects that perform long-term.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SectionDivider label="Capabilities" />

      {/* Services */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {CONSTRUCTION_SERVICES.map((service, idx) => (
            <AnimatedSection key={service.title} delay={idx * 0.1}>
              <div className="group border-t border-[#1F2E23]/10 pt-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-[#1F2E23]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1F2E23] group-hover:border-[#1F2E23] transition-all duration-500">
                    <service.icon className="w-5 h-5 text-[#6B7F5E] group-hover:text-[#F5F0EA] transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-serif-display text-[#1F2E23] text-2xl font-light mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#1F2E23]/50 font-sans-clean text-sm leading-[1.8]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-36 bg-[#1F2E23]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <AnimatedSection>
            <h2 className="font-serif-display text-[#F5F0EA] text-4xl md:text-5xl font-light mb-16">
              Construction Process
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <AnimatedSection key={step.step} delay={idx * 0.08}>
                <div className="border-t border-[#F5F0EA]/10 pt-6">
                  <span className="font-serif-display text-[#D4C5A9] text-3xl font-light">
                    {step.step}
                  </span>
                  <h3 className="font-serif-display text-[#F5F0EA] text-xl font-light mt-4 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#F5F0EA]/40 font-sans-clean text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Gallery */}
      <div className="px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto py-24">
        <AnimatedSection>
          <GallerySection collectionId="construction" columns={3} />
        </AnimatedSection>
      </div>

      {/* SHARED BOTTOM CTA */}

    </PageShell>
  );
}