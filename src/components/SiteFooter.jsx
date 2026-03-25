// src/components/SiteFooter.jsx
"use client";

import React from "react";
import Link from "next/link";
import { ROUTES } from "@/components/utils/routes";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#1F2E23] text-[#F5F0EA]">
      <div className="h-px bg-[#F5F0EA]/12" />

      <div className="mx-auto max-w-[1440px] px-6 py-8 md:px-12 md:py-10 lg:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <div className="mb-7">
              <span className="font-serif-display text-4xl font-light tracking-tight">
                ELI
              </span>
              <span className="mt-1 block font-sans-clean text-[10px] font-medium uppercase tracking-[0.35em] text-[#F5F0EA]/55">
                Land Design
              </span>
            </div>

            <p className="max-w-sm font-sans-clean text-sm leading-relaxed text-[#F5F0EA]/55">
              Creating inspired outdoor environments grounded in informed design
              and executed with meticulous attention to detail since 1997.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-6 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.32em] text-[#F5F0EA]/40">
              Navigate
            </h4>

            <div className="flex flex-col gap-3">
              {[
                { label: "Home", href: ROUTES.home },
                { label: "About", href: ROUTES.about },
                { label: "Projects", href: ROUTES.projects },
                { label: "Gallery", href: ROUTES.gallery },
                { label: "Reviews", href: ROUTES.reviews },
                { label: "Contact", href: ROUTES.contact },
                { label: "Careers at ELI", href: ROUTES.careers },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit rounded-none font-sans-clean text-sm text-[#F5F0EA]/70 transition-colors hover:text-[#F5F0EA] focus:outline-none focus:ring-2 focus:ring-[#F5F0EA]/20"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-6 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.32em] text-[#F5F0EA]/40">
              Services
            </h4>

            <div className="flex flex-col gap-3 font-sans-clean text-sm text-[#F5F0EA]/70">
              <span>Landscape Architecture</span>
              <span>Landscape Construction</span>
              <span>Land Planning</span>
              <span>Site Analysis</span>
              <span>Hardscape Design</span>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-6 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.32em] text-[#F5F0EA]/40">
              Contact
            </h4>

            <div className="flex flex-col gap-4 font-sans-clean text-sm text-[#F5F0EA]/70">
              <div>
                <div className="mb-1 text-[11px] text-[#F5F0EA]/40">Phone</div>
                <a
                  href="tel:2812592610"
                  className="rounded-none transition-colors hover:text-[#F5F0EA] focus:outline-none focus:ring-2 focus:ring-[#F5F0EA]/20"
                >
                  281.259.2610
                </a>
              </div>

              <div>
                <div className="mb-1 text-[11px] text-[#F5F0EA]/40">Address</div>
                <div className="leading-relaxed">
                  P.O. Box 131264
                  <br />
                  The Woodlands, TX 77393
                </div>
              </div>

              <div>
                <div className="mb-1 text-[11px] text-[#F5F0EA]/40">Email</div>
                <a
                  href="mailto:chris@elilanddesign.com"
                  className="rounded-none transition-colors hover:text-[#F5F0EA] focus:outline-none focus:ring-2 focus:ring-[#F5F0EA]/20"
                >
                  chris@elilanddesign.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-[#F5F0EA]/10 pt-7 md:flex-row">
          <p className="font-sans-clean text-xs text-[#F5F0EA]/35">
            © {new Date().getFullYear()} E.L.I. Land Design LLC. All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            <a
              href="https://www.houzz.com/pro/elilanddesign/eli-land-design-llc"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans-clean text-xs uppercase tracking-[0.15em] text-[#F5F0EA]/35 transition-colors hover:text-[#F5F0EA]/75"
            >
              Houzz
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans-clean text-xs uppercase tracking-[0.15em] text-[#F5F0EA]/35 transition-colors hover:text-[#F5F0EA]/75"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans-clean text-xs uppercase tracking-[0.15em] text-[#F5F0EA]/35 transition-colors hover:text-[#F5F0EA]/75"
            >
              Facebook
            </a>
          </div>

          <div className="text-right font-sans-clean text-xs text-[#F5F0EA]/30">
            Custom Build By:{" "}
            <span className="uppercase tracking-[0.15em] text-[#F5F0EA]/60">
              Big Boom Hosting
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}