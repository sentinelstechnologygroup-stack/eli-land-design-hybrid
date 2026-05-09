// src/components/shared/PageShell.jsx
"use client";

import React from "react";
import SiteHeader from "@/components/SiteHeader";
import PageHero from "@/components/shared/PageHero";
import CTAStrip from "@/components/shared/CTAStrip";
import BottomCTA from "@/components/shared/BottomCTA";

export default function PageShell({
  children,
  hero = false,
  heroImage = "",
  eyebrow = "",
  title = "",
  subtitle = "",
  heroExtras = null,
  heroTitleClassName = "",
  heroubtitleClassName = "",
  heroImageClassName = "object-cover object-center",
  ctaStripProps = null,
  showCtaStrip = true,
  showBottomCta = true,
  currentPageName,
}) {
  return (
    <div className="min-h-screen bg-[#F7F5EF] text-[#1F2E23]">
      <SiteHeader currentPageName={currentPageName} />

      <main>
        {hero && (
          <PageHero
            label={eyebrow}
            title={title}
            subtitle={subtitle}
            image={heroImage}
            heroExtras={heroExtras}
            titleClassName={heroTitleClassName}
            subtitleClassName={heroubtitleClassName}
            imageClassName={heroImageClassName}
          />
        )}

        {showCtaStrip && ctaStripProps && (
          <CTAStrip
            title={ctaStripProps.title}
            description={ctaStripProps.description}
          />
        )}

        {children}
      </main>

      {showBottomCta && <BottomCTA />}
    </div>
  );
}