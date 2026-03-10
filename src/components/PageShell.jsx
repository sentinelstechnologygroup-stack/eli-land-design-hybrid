"use client";

import React, { useEffect } from "react";
import CTAStrip from "./shared/CTAStrip";
import BottomCTA from "./shared/BottomCTA";
import PageHero from "./shared/PageHero";

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

    const cls = "eli-has-hero";
    if (hasHero) document.body.classList.add(cls);
    else document.body.classList.remove(cls);

    return () => {
      document.body.classList.remove(cls);
    };
  }, [hasHero]);

  return (
    <main className="bg-[#F5F0EA]">
      {hasHero ? (
        <PageHero
          label={eyebrow}
          title={title}
          subtitle={subtitle}
          image={heroImage}
          heroExtras={heroExtras}
        />
      ) : null}

      {hasHero && showCtaStrip ? <CTAStrip /> : null}

      <div>{children}</div>

      {showBottomCta && !hasHero ? <BottomCTA {...bottomCtaProps} /> : null}
    </main>
  );
}
