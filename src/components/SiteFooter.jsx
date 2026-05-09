// src/components/SiteFooter.jsx
"use client";

import React from "react";
import Link from "next/link";
import { ROUTES } from "@/components/utils/routes";
import { SITE } from "@/config/site";

const FOOTER_LINKS = [
  { label: "Home", href: ROUTES.home },
  { label: "About", href: ROUTES.about },
  { label: "Commercial Gallery", href: ROUTES.commercialGallery },
  { label: "Residential Gallery", href: ROUTES.residentialGalleryMain },
  { label: "Reviews", href: ROUTES.reviews },
  { label: "Careers at ELI", href: ROUTES.careersAtEli },
  { label: "Contact", href: ROUTES.contact },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#1F2E23] text-[#F5F0EA]">
      <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 md:py-16 lg:px-20">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          <div>
            <img
              src={SITE.whiteLogo}
              alt={SITE.name}
              className="h-36 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />

            <p className="mt-5 max-w-[320px] type-small text-[#F5F0EA]/72 md:text-[14px] md:leading-[1.8]">
              Disciplined landscape architecture and outdoor design with a focus
              on clarity, buildability, and long-term value.
            </p>
          </div>

          <div>
            <div className="type-micro text-[#F5F0EA]/50">Navigation</div>

            <div className="mt-5 flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  data-sis-event="cta_click"
                  data-sis-label={`footer_nav_${link.label
                    .toLowerCase()
                    .replaceAll(" ", "_")}`}
                  className="w-fit type-small text-[#F5F0EA]/72 no-underline transition-colors hover:text-[#F5F0EA] focus:outline-none focus:ring-2 focus:ring-[#F5F0EA]/20"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="type-micro text-[#F5F0EA]/50">Contact</div>

            <div className="mt-5 flex flex-col gap-3 type-small text-[#F5F0EA]/72 md:text-[14px] md:leading-[1.8]">
              <a
                href={SITE.phoneHref}
                data-sis-event="phone_click"
                data-sis-label="footer_phone"
                className="w-fit no-underline transition-colors hover:text-[#F5F0EA]"
              >
                {SITE.phoneDisplay}
              </a>

              <a
                href={`mailto:${SITE.email}`}
                data-sis-event="email_click"
                data-sis-label="footer_email"
                className="w-fit no-underline transition-colors hover:text-[#F5F0EA]"
              >
                {SITE.email}
              </a>

              <span>{SITE.market}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}