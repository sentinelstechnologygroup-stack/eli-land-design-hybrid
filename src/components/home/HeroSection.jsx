// src/components/home/HeroSection.jsx
"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/components/utils/routes";
import { trackCTA } from "@/lib/intelligence";
import HeroBanner from "@/components/shared/HeroBanner";

const HERO_IMAGES = [
  "/images/home/hero-01.jpg",
  "/images/home/hero-02.jpg",
  "/images/home/hero-03.jpg",
  "/images/home/hero-04.jpg",
];

export default function HeroSection() {
  useEffect(() => {
    document.body.dataset.eliPageMode = "hero";
    return () => {
      document.body.dataset.eliPageMode = "standard";
    };
  }, []);

  return (
    <HeroBanner
      images={HERO_IMAGES}
      imageAlt="Luxury landscape architecture project"
      title="Landscape Architecture, Site Planning, and Construction Services"
      subtitle="Site planning, grading design, and landscape construction for residential and commercial projects throughout The Woodlands and Houston."
      actions={
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <Link
            href={ROUTES.projects}
            onClick={() => trackCTA("view-projects", "home-hero")}
            className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#6B7F5E] px-10 font-sans-clean text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F5F0EA] transition-all duration-300 hover:bg-[#5C714F]"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      }
      dots
    />
  );
}
