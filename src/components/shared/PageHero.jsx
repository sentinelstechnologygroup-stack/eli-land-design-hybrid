// src/components/shared/PageHero.jsx
"use client";

import React from "react";

export default function PageHero({
  label,
  title,
  subtitle,
  image,
  heroExtras = null,
  heightClass = "h-[48vh] min-h-[340px] max-h-[560px]",
  contentMax = "max-w-[1440px]",
  titleClassName = "",
  subtitleClassName = "",
}) {
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

      <div className="absolute inset-0 bg-[#07100B]/62" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#040806]/82 via-[#08110C]/50 to-[#102018]/86" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#08110C]/42 via-[#08110C]/16 to-[#08110C]/30" />
      <div className="absolute inset-0 backdrop-[brightness(.62)]" />
      <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#08110C]/94 to-transparent" />

      <div className="absolute inset-0">
        <div className={`${contentMax} mx-auto h-full px-6 md:px-12 lg:px-20`}>
          <div className="flex h-full items-end pb-10 md:pb-12">
            <div className="w-full max-w-5xl">
              {label ? (
                <div className="mb-4 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.34em] text-[#F5F0EA]/88">
                  {label}
                </div>
              ) : null}

              {title ? (
                <h1
                  className={[
                    "max-w-[16ch] sm:max-w-[18ch] md:max-w-[20ch] lg:max-w-[22ch] font-serif-display text-[2.85rem] font-light leading-[0.94] tracking-[-0.03em] text-[#F5F0EA] sm:text-[3.2rem] md:text-[3.6rem] lg:text-[4rem] xl:text-[4.25rem] [text-wrap:balance] [text-shadow:0_3px_18px_rgba(0,0,0,0.52)]",
                    titleClassName,
                  ].join(" ").trim()}
                >
                  {title}
                </h1>
              ) : null}

              {subtitle ? (
                <p
                  className={[
                    "mt-5 max-w-[46rem] font-sans-clean text-[15px] leading-[1.72] text-[#F5F0EA]/92 md:text-[17px] [text-shadow:0_2px_12px_rgba(0,0,0,0.42)]",
                    subtitleClassName,
                  ].join(" ").trim()}
                >
                  {subtitle}
                </p>
              ) : null}

              {heroExtras ? <div className="mt-6">{heroExtras}</div> : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
