// src/components/shared/PageHero.jsx
"use client";

import React from "react";

export default function PageHero({
  label,
  title,
  subtitle,
  image,
  heroExtras = null,
heightClass = "h-[60vh] min-h-[520px] max-h-[720px]",
  contentMax = "max-w-[1440px]",
  titleClassName = "",
  subtitleClassName = "",
  imageClassName = "object-cover object-[center_65%]",
}) {
  return (
    <section className={`relative w-full overflow-hidden bg-[#0F1C14] ${heightClass}`}>
{image ? (
  <>
    {/* Full-bleed blurred background fill */}
    <img
      src={image}
      alt=""
      className="absolute inset-0 h-full w-full scale-110 object-cover object-center blur-md"
      loading="eager"
      decoding="async"
    />

    {/* Full image visible, no crop */}
    <div className="absolute inset-0 flex items-center justify-center">
      <img
        src={image}
        alt=""
        className="h-full w-auto max-w-full object-contain"
        loading="eager"
        decoding="async"
      />
    </div>
  </>
) : (
  <div className="absolute inset-0 bg-[#1F2E23]" />
)}

      <div className="absolute inset-0 bg-[#06100B]/42" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020403]/68 via-[#06100B]/28 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#020403]/44 to-transparent" />

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