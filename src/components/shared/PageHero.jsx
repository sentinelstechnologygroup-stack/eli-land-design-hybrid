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

      <div className="absolute inset-0 bg-[#102018]/42" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#09110D]/58 via-[#102018]/18 to-[#102018]/58" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1B15]/22 via-transparent to-[#0F1B15]/08" />
      <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[#102018]/72 to-transparent" />

      <div className="absolute inset-0">
        <div className={`${contentMax} mx-auto h-full px-6 md:px-12 lg:px-20`}>
          <div className="flex h-full items-end pb-10 md:pb-12">
            <div className="w-full max-w-5xl">
              {label ? (
                <div className="mb-4 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.34em] text-white/84">
                  {label}
                </div>
              ) : null}

              {title ? (
                <h1
                  className={[
                    "max-w-[20ch] sm:max-w-[20ch] md:max-w-[18ch] lg:max-w-[16ch] xl:max-w-[15ch] font-serif-display text-[2.6rem] font-light leading-[0.96] tracking-[-0.028em] text-white sm:text-[3.1rem] md:text-[3.5rem] lg:text-[3.85rem] xl:text-[4.15rem] [text-wrap:balance] [text-shadow:0_2px_16px_rgba(0,0,0,0.34)]",
                    titleClassName,
                  ].join(" ").trim()}
                >
                  {title}
                </h1>
              ) : null}

              {subtitle ? (
                <p
                  className={[
                    "mt-6 max-w-[58rem] font-sans-clean text-sm leading-[1.72] text-white/90 md:text-[17px] [text-shadow:0_1px_12px_rgba(0,0,0,0.26)]",
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