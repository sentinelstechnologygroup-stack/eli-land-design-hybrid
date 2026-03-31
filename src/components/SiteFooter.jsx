// src/components/SiteFooter.jsx

"use client";

import React from "react";
import Link from "next/link";
import { ROUTES } from "@/components/utils/routes";

export default function SiteFooter() {
  return (
    <footer className="bg-[#1F2E23] text-[#F5F0EA]">
      <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 lg:px-20">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img
              src="/logo/logo-white.png"
              alt="ELI Land Design"
              className="h-12 w-auto object-contain"
            />
            <p className="mt-5 max-w-[320px] font-sans-clean text-sm leading-7 text-[#F5F0EA]/70">
              Disciplined landscape architecture and outdoor design with a focus
              on clarity, buildability, and long-term value.
            </p>
          </div>

          <div>
            <div className="text-[11px] font-sans-clean font-semibold uppercase tracking-[0.28em] text-[#F5F0EA]/50">
              Navigation
            </div>

            <div className="mt-5 flex flex-col gap-3">
              {[
                { label: "Home", href: ROUTES.home },
                { label: "About", href: ROUTES.about },
                { label: "Projects", href: ROUTES.projects },
                { label: "Gallery", href: ROUTES.gallery },
                { label: "Reviews", href: ROUTES.reviews },
                { label: "Careers at ELI", href: ROUTES.careersAtEli },
                { label: "Contact", href: ROUTES.contact },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit rounded-none font-sans-clean text-sm text-[#F5F0EA]/70 transition-colors hover:text-[#F5F0EA] focus:outline-none focus:ring-2 focus:ring-[#F5F0EA]/20"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-sans-clean font-semibold uppercase tracking-[0.28em] text-[#F5F0EA]/50">
              Contact
            </div>

            <div className="mt-5 flex flex-col gap-3 font-sans-clean text-sm text-[#F5F0EA]/70">
              <a
                href="tel:+12815551234"
                className="w-fit transition-colors hover:text-[#F5F0EA]"
              >
                (281) 555-1234
              </a>
              <a
                href="mailto:info@elilanddesign.com"
                className="w-fit transition-colors hover:text-[#F5F0EA]"
              >
                info@elilanddesign.com
              </a>
              <span>The Woodlands / Houston, TX</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}