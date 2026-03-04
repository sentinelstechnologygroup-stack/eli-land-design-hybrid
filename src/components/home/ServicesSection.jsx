// src/components/home/ServicesSection.jsx
import React from "react";
import Link from "next/link";
import AnimatedSection from "../shared/AnimatedSection";
import { ROUTES } from "@/components/utils/routes";

const SERVICES = [
  {
    title: "Residential Landscape Architecture",
    subtitle: "Master Planning & Outdoor Living",
    description:
      "Comprehensive landscape design for private estates and custom homes—from site analysis and grading plans to planting systems and construction documentation.",
    image: "/images/home/services-residential.jpg",
    page: ROUTES.designResidential,
    tags: ["Master Planning", "Grading & Drainage", "Pool & Outdoor Living", "Planting Design"],
  },
  {
    title: "Commercial Site Planning & Design",
    subtitle: "Multifamily, Office & Retail",
    description:
      "Site planning, grading design, and landscape architecture for commercial developments—multifamily communities, office parks, retail centers, and mixed-use projects.",
    image: "/images/home/services-commercial.jpg",
    page: ROUTES.designCommercial,
    tags: ["Site Planning", "Entry Monuments", "Amenity Design", "Permitting"],
  },
  {
    title: "Landscape Construction & Installation",
    subtitle: "Design-Build Implementation",
    description:
      "In-house construction crews executing landscape plans from grading and hardscape installation to irrigation systems and planting—ensuring design intent translates to built reality.",
    image: "/images/home/services-construction.jpg",
    page: ROUTES.construction,
    tags: ["Hardscape", "Irrigation", "Grading", "Planting Installation"],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-10 md:py-14 bg-[#1F2E23]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* ✅ Match gallery spacing (no “mosaic” gap-1) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <AnimatedSection key={service.title} delay={idx * 0.15}>
              <Link href={service.page} className="block">
                <div className="group relative overflow-hidden h-[70vh] bg-[#1F2E23] rounded-2xl">
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1F2E23]/20 to-[#1F2E23]/90" />
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="text-[9px] tracking-[0.3em] uppercase text-[#F5F0EA]/100 font-sans-clean font-semibold mb-3">
                      {service.subtitle}
                    </div>
                    <h3 className="font-serif-display text-[#F5F0EA]/100 text-2xl md:text-3xl font-light mb-4 leading-[1.1]">
                      {service.title}
                    </h3>
                    <p className="text-[#F5F0EA]/100 font-sans-clean text-sm leading-[1.7] mb-6">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] tracking-[0.15em] uppercase text-[#F5F0EA]/100 font-sans-clean px-3 py-1 border border-[#F5F0EA]/100 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}