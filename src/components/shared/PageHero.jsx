// src/components/shared/PageHero.jsx
"use client";

import React from "react";

export default function PageHero({
  label,
  title,
  subtitle,
  image,
  heroExtras = null,
  heightClass = "h-[60vh] min-h-[440px] max-h-[720px]",
  contentMax = "max-w-[1440px]",
  titleClassName = "",
  subtitleClassName = "",
  contentAlign = "end",
}) {
  const isCentered = contentAlign === "center";

  return (
    <section className={`relative w-full overflow-hidden ${heightClass}`}>
      {image ? (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
      ) : (
        <div className="absolute inset-0 bg-[#1F2E23]" />
      )}

      <div className="absolute inset-0 bg-[#08110C]/34" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020403]/42 via-[#06100B]/20 to-[#08110C]/52" />

      <div className="absolute inset-0">
        <div className={`${contentMax} mx-auto h-full px-6 md:px-12 lg:px-20`}>
          <div className="flex h-full items-center">
            <div className="w-full max-w-[1200px] text-left">
              {label && (
                <div className="mb-4 type-micro text-white [text-shadow:0_6px_30px_rgba(0,0,0,0.65)]">
                  {label}
                </div>
              )}

              {title && (
                <h1
                  className={[
                    "type-hero text-white",
                    "[text-shadow:0_6px_30px_rgba(0,0,0,0.65)]",
                    "[text-wrap:balance]",
                    "max-w-[18ch] md:max-w-[20ch]",
                    titleClassName,
                  ].join(" ")}
                >
                  {title}
                </h1>
              )}

              {subtitle && (
                <p
                  className={[
                    "mt-5 type-body text-white",
                    "[text-shadow:0_6px_30px_rgba(0,0,0,0.65)]",
                    "max-w-[48rem]",
                    subtitleClassName,
                  ].join(" ")}
                >
                  {subtitle}
                </p>
              )}

              {heroExtras && <div className="mt-6">{heroExtras}</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}