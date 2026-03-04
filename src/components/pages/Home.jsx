// src/components/pages/Home.jsx
"use client";

import React, { useEffect } from "react";
import HeroSection from "../home/HeroSection";
import PhilosophySection from "../home/PhilosophySection";
import ServicesSection from "../home/ServicesSection";
import FeaturedProjects from "../home/FeaturedProjects";
import TestimonialsSection from "../home/TestimonialsSection.jsx";
import MiddleCTA from "../shared/MiddleCTA";
import CTASection from "@/components/home/CTASection";
import TrustMarquee from "@/components/trust/TrustMarquee";
import { registerPageMeta } from "@/lib/intelligence";

export default function Home() {
  useEffect(() => {
    registerPageMeta({
      page: "Home",
      route: "/",
      intent: "discovery",
      primaryCta: "View Projects",
    });
  }, []);

  return (
    <main>
      <HeroSection />
      <PhilosophySection />

      <TrustMarquee label="Houzz Awards" tone="light" speed="normal" />

      <MiddleCTA tone="dark" />

      <ServicesSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}