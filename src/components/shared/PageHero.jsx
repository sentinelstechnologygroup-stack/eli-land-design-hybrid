// src/components/shared/PageHero.jsx
"use client";

import React from "react";

export default function PageHero({
  label,
  title,
  subtitle,
  image,
  heroExtras = null,
  titleClassName = "",
  subtitleClassName = "",
  imageClassName = "object-cover object-center",
}) {
  return (
    <section className="relative w-full h-[760px] max-h-[calc(100vh-90px)] min-h-[560px] overflow-hidden bg-[#102015]">
      {image && (
        <img
          src={image}
          alt=""
          className={`absolute inset-0 h-full w-full ${imageClassName}`}
          loading="eager"
          decoding="async"
        />
      )}

      {/* Lighter image protection: keeps text readable without making every hero feel too dark */}
      <div className="absolute inset-0 bg-[#040907]/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#040907]/48 via-[#040907]/14 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#040907]/26 via-transparent to-transparent" />

      <div className="relative z-10 flex h-full w-full items-center">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-20">
          <div className="max-w-[980px] text-left">
            {label && (
              <div
                className="mb-4 text-xs uppercase tracking-[0.22em] text-white/85"
                style={{
                  textShadow: "0 2px 10px rgba(0,0,0,0.55)",
                }}
              >
                {label}
              </div>
            )}

            {title && (
              <h1
                className={`mb-4 text-4xl md:text-6xl font-semibold leading-tight text-white ${titleClassName}`}
                style={{
                  textShadow:
                    "0 4px 22px rgba(0,0,0,0.72), 0 2px 10px rgba(0,0,0,0.55)",
                }}
              >
                {title}
              </h1>
            )}

            {subtitle && (
              <p
                className={`max-w-2xl text-base md:text-lg font-medium text-white ${subtitleClassName}`}
                style={{
                  textShadow:
                    "0 4px 18px rgba(0,0,0,0.82), 0 2px 8px rgba(0,0,0,0.7)",
                }}
              >
                {subtitle}
              </p>
            )}

            {heroExtras && <div className="mt-6">{heroExtras}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}