// src/components/pages/Home.jsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageShell from "@/components/shared/PageShell";
import { ROUTES } from "@/components/utils/routes";

const HERO_IMAGES = [
  {
    src: "/images/marquebanner/banner-01.webp",
    alt: "Commercial multi-family lifestyle area",
    caption: "Commercial multi-family lifestyle area",
  },
  {
    src: "/images/marquebanner/banner-02.webp",
    alt: "Residential landscape design",
    caption: "Residential landscape design",
  },
  {
    src: "/images/marquebanner/banner-03.webp",
    alt: "Commercial landscape rendering",
    caption: "Commercial landscape rendering",
  },
  {
    src: "/images/marquebanner/banner-04.webp",
    alt: "Residential landscape rendering",
    caption: "Residential landscape rendering",
  },
  {
    src: "/images/marquebanner/banner-05.webp",
    alt: "Commercial landscape architecture project",
    caption: "Commercial landscape architecture project",
  },
  {
    src: "/images/marquebanner/banner-06.webp",
    alt: "Residential outdoor living design",
    caption: "Residential outdoor living design",
  },
  {
    src: "/images/marquebanner/banner-07.webp",
    alt: "Commercial landscape rendering",
    caption: "Commercial landscape rendering",
  },
  {
    src: "/images/marquebanner/banner-08.webp",
    alt: "Residential landscape rendering",
    caption: "Residential landscape rendering",
  },
];

const MAIN_PANELS = [
  {
    title: "Commercial Landscape Architecture",
    href: ROUTES.commercialGallery,
    label: "View Gallery",
    image: "/images/hero/commercial-hero.webp",
    includes: [
      "Apartments",
      "Retail / commercial sites",
      "Amenity areas",
      "Site planning renderings",
    ],
  },
  {
    title: "Residential Landscape Architecture",
    href: ROUTES.residentialGalleryMain,
    label: "View Gallery",
    image: "/images/hero/residential-hero.webp",
    includes: [
      "Pools & outdoor living",
      "Residential master plans",
      "Planting design",
      "Drainage / grading concepts",
    ],
  },
  {
    title: "About ELI Land Design",
    href: ROUTES.about,
    label: "View Page",
    image: "/images/hero/about-hero.webp",
    includes: [
      "Firm background",
      "Design approach",
      "Landscape architecture process",
    ],
  },
  {
    title: "Gallery",
    href: ROUTES.gallery,
    label: "View Gallery",
    image: "/images/hero/gallery-hero.webp",
    includes: [
      "Commercial renderings",
      "Residential renderings",
      "Built landscape projects",
    ],
  },
  {
    title: "Client Reviews",
    href: ROUTES.reviews,
    label: "View Reviews",
    image: "/images/hero/reviews-hero.webp",
    includes: [
      "Client feedback",
      "Project experience",
      "Service quality",
    ],
  },
  {
    title: "Careers at ELI Land Design",
    href: ROUTES.careersAtEli,
    label: "View Careers",
    image: "/images/hero/careers-hero.webp",
    includes: [
      "Design production",
      "Landscape architecture",
      "Team opportunities",
    ],
  },
];

function PanelCard({ item }) {
  return (
    <Link
      href={item.href}
      className="group relative block min-h-[440px] overflow-hidden border border-black/10 bg-[#D8D0C4] shadow-[0_20px_60px_rgba(31,46,35,0.10)] transition-transform duration-300 hover:-translate-y-1"
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        loading="lazy"
        decoding="async"
      />

      {/* MATCH PageHero EXACTLY */}
      <div className="absolute inset-0 bg-[#040907]/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#040907]/55 via-[#040907]/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#040907]/40 via-transparent to-transparent" />

      <div className="relative z-10 flex min-h-[440px] flex-col p-5 md:p-6">
        <div>
          <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white md:text-[26px]">
            {item.title}
          </h2>

          <div className="mt-3 h-[2px] w-full bg-white/65" />

          <ul className="mt-4 space-y-1.5">
            {item.includes.map((entry) => (
              <li
                key={`${item.title}-${entry}`}
                className="flex items-start gap-2 text-[14px] leading-[1.6] text-white md:text-[15px]"
              >
                <span className="mt-[9px] h-[5px] w-[5px] shrink-0 bg-white/85" />
                <span>{entry}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-white">
            {item.label}
          </span>

          <span className="inline-flex h-11 w-11 items-center justify-center border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/18">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  const activeImage = HERO_IMAGES[currentSlide];

  return (
    <PageShell>
      <section className="relative h-[clamp(420px,39.583vw,760px)] w-full overflow-hidden bg-[#102015]">
        {HERO_IMAGES.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}

        {/* MATCH PageHero EXACTLY */}
        <div className="absolute inset-0 bg-[#040907]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040907]/55 via-[#040907]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040907]/40 via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-20">
            <div className="max-w-[960px]">
              <h1
                className="font-serif-display text-[clamp(2.45rem,5vw,4.75rem)] font-semibold leading-[0.94] tracking-[-0.03em] text-white"
                style={{
                  textShadow:
                    "0 4px 20px rgba(0,0,0,0.65), 0 2px 10px rgba(0,0,0,0.5)",
                }}
              >
                Landscape Architecture,
                <br />
                Site Planning & Landscape
                <br />
                Construction Service
              </h1>

              <p
                className="mt-5 max-w-[720px] text-[15px] font-medium leading-[1.7] text-white md:text-[17px]"
                style={{
                  textShadow: "0 2px 10px rgba(0,0,0,0.45)",
                }}
              >
                High-end residential and commercial landscape design across The
                Woodlands and Greater Houston.
              </p>

              <div className="mt-8">
                <Link
                  href={ROUTES.gallery}
                  className="inline-flex h-12 items-center justify-center gap-3 bg-[#6B7F5E] px-8 text-[#F5F0EA] transition hover:bg-[#5C714F]"
                >
                  View gallery
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col gap-4 md:left-10 md:right-10 lg:left-20 lg:right-20">
          <div className="max-w-[620px] border-l-2 border-white/60 pl-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/80">
              Featured Project
            </p>
            <p
              className="mt-1 text-[14px] text-white md:text-[15px]"
              style={{
                textShadow: "0 2px 10px rgba(0,0,0,0.45)",
              }}
            >
              {activeImage.caption}
            </p>
          </div>

          <div className="flex gap-2">
            {HERO_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-px w-8 ${
                  idx === currentSlide ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F0EA] py-10 md:py-14 lg:py-16">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-5 px-4 md:grid-cols-2 md:px-8 lg:gap-7 lg:px-20">
          {MAIN_PANELS.map((item) => (
            <PanelCard key={item.title} item={item} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}