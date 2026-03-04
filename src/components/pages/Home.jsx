// src/pages/Home.jsx
import React from "react";
import HeroSection from "../home/HeroSection";
import PhilosophySection from "../home/PhilosophySection";
import ServicesSection from "../home/ServicesSection";
import FeaturedProjects from "../home/FeaturedProjects";
import TestimonialsSection from "../home/TestimonialsSection.jsx";
import MiddleCTA from "../shared/MiddleCTA";
import CTASection from "@/components/home/CTASection";
import TrustMarquee from "@/components/trust/TrustMarquee";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PhilosophySection />

      {/* Awards trust band */}
      <TrustMarquee label="Houzz Awards" tone="light" speed="normal" />

      {/* Single mid-page CTA band (keep this one) */}
      <MiddleCTA tone="dark" />

      <ServicesSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}