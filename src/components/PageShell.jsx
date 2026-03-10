// src/components/PageShell.jsx
"use client";

import React, { useEffect } from "react";
import CTAStrip from "./shared/CTAStrip";
import BottomCTA from "./shared/BottomCTA";
import HeroBanner from "./shared/HeroBanner";

export default function PageShell({
  hero = false,
  heroImage,
  eyebrow,
  title,
  subtitle,
  children,
  showCtaStrip = true,
  heroExtras = null,
  showBottomCta = true,
  bottomCtaProps = {},
}) {
  const hasHero = Boolean(hero || heroImage);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.dataset.eliPageMode = hasHero ? "hero" : "standard";
    return () => {
      document.body.dataset.eliPageMode = "standard";
    };
  }, [hasHero]);

  return (
    <main className="bg-[#F5F0EA]">
      {hasHero ? (
        <HeroBanner
          image={heroImage}
          imageAlt={typeof title === "string" ? title : "ELI Land Design"}
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          extras={heroExtras}
          bodyClassName="pt-[calc(var(--eli-header-height)+1.25rem)] md:pt-[calc(var(--eli-header-height)+1.75rem)]"
        />
      ) : null}

      {hasHero && showCtaStrip ? <CTAStrip /> : null}

      <div>{children}</div>

      {!hasHero && showBottomCta ? <BottomCTA {...bottomCtaProps} /> : null}
    </main>
  );
}
