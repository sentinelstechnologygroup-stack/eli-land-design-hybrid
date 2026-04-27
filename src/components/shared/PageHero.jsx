// src/components/shared/PageHero.jsx
"use client";

import React from "react";

export default function PageHero({
  label,
  title,
  subtitle,
  image,
  heroExtras = null,
  heightClass = "h-[52vh] min-h-[440px] max-h-[680px]",
  contentMax = "max-w-[1440px]",
  titleClassName = "",
  subtitleClassName = "",
  imageClassName = "object-cover object-center",
}) {
  return (
    <section className={`relative w-full overflow-hidden bg-[#102015] ${heightClass}`}>
      {image ? (
        <img
          src={image}
          alt=""
          className={`absolute inset-0 h-full w-full ${imageClassName}`}
          loading="eager"
          decoding="async"
        />
      ) : (
        <div className="absolute inset-0 bg-[#1F2E23]" />
      )}

      <div className="absolute inset-0 bg-[#06100B]/42" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020403]/70 via-[#06100B]/32 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#020403]/45 to-transparent" />

      <div className="absolute inset-0">
        <div className={`${contentMax} mx-auto h-full px-6 md:px-12 lg:px-20`}>
          <div className="flex h-full items-center">
            <div className="w-full max-w-[1280px] text-left">
              {label && (
                <div className="mb-4 type-micro text-white [text-shadow:0_5px_24px_rgba(0,0,0,0.9)]">
                  {label}
                </div>
              )}

              {title && (
                <h1
                  className={[
                    "type-hero max-w-none text-white",
                    "[text-shadow:0_6px_30px_rgba(0,0,0,0.95)]",
                    titleClassName,
                  ].join(" ")}
                >
                  {title}
                </h1>
              )}

              {subtitle && (
                <p
                  className={[
                    "mt-5 max-w-[58rem] type-body font-semibold text-white",
                    "[text-shadow:0_5px_22px_rgba(0,0,0,0.95)]",
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