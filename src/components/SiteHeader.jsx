// src/components/SiteHeader.jsx
"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { NAV, ROUTES } from "./utils/routes";
import { trackCTA, trackLeadIntent } from "@/lib/intelligence";

/**
 * Stable header contract:
 * - Home + hero pages overlap the header
 * - Header is transparent on hero top, solid after scroll
 * - Nav text is strong enough in BOTH states
 */
export default function SiteHeader({ currentPageName, heroUnderHeader = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const headerRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  const isHome = pathname === "/";
  const heroMode = Boolean(heroUnderHeader || isHome);
  const heroTop = heroMode && !scrolled;

  const HEADER_CONTAINER = "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20";

  const headerBase =
    "fixed top-0 left-0 right-0 z-[1000] transition-[background-color,border-color,box-shadow] duration-300";

  const headerChrome = heroTop
    ? "border-b border-white/10 bg-transparent shadow-none"
    : "border-b border-[#1F2E23]/10 bg-[#F5F0EA]/98 shadow-[0_10px_28px_rgba(16,24,18,0.08)]";

  const brandColor = heroTop ? "text-white" : "text-[#1F2E23]";
  const heroShadow = heroTop ? "[text-shadow:0_1px_10px_rgba(0,0,0,0.55)]" : "";

  // IMPORTANT: strong text in both states
  const navTone = heroTop
    ? "text-white hover:text-white"
    : "text-[#1F2E23] hover:text-[#1F2E23]";

  const navClass = `text-[11px] tracking-[0.28em] uppercase font-sans-clean font-semibold transition-colors ${navTone} ${heroShadow}`;
  const navButtonClass = `inline-flex items-center gap-2 ${navClass}`;

  const mobileToggleChrome = heroTop
    ? "border-white/25 bg-white/10 backdrop-blur-md"
    : "border-[#1F2E23]/10 bg-white";

  const mobileToggleIcon = heroTop ? "text-white" : "text-[#1F2E23]";

  const MOBILE_SECTIONS = useMemo(() => {
    const design = NAV.find((n) => n.label === "Design");
    const construction = NAV.find((n) => n.label === "Construction");
    const projects = NAV.find((n) => n.label === "Projects");
    const contact = NAV.find((n) => n.label === "Contact");

    return [
      { label: "Design", items: design?.children ?? [design].filter(Boolean) },
      { label: "Construction", items: [construction].filter(Boolean) },
      { label: "Projects", items: projects?.children ?? [projects].filter(Boolean) },
      { label: "Contact", items: contact?.children ?? [contact].filter(Boolean) },
    ].filter((s) => s.items && s.items.length);
  }, []);

  const onScheduleClick = (where) => {
    trackCTA("Schedule Consultation", where, {
      page: currentPageName || "unknown",
    });
    trackLeadIntent("contact_open", {
      source: where,
      page: currentPageName || "unknown",
    });
  };

  return (
    <header ref={headerRef} className={`${headerBase} ${headerChrome}`}>
      <div className={`${HEADER_CONTAINER} flex h-[72px] items-center justify-between`}>
        <Link href={ROUTES.home} className={`flex items-center gap-3 ${brandColor} ${heroShadow}`}>
          <div className="leading-none">
            <div className="font-sans-clean text-[12px] font-semibold tracking-[0.28em]">
              ELI
            </div>
            <div className="text-[9px] uppercase tracking-[0.28em] opacity-85">
              Land Design
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => {
            if (item.children?.length) {
              const open = openMenu === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button type="button" className={navButtonClass}>
                    {item.label}
                    <ChevronDown className="h-4 w-4 opacity-85" />
                  </button>

                  <AnimatePresence>
                    {open ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 mt-3 w-[260px] overflow-hidden rounded-2xl border border-[#1F2E23]/10 bg-[#F5F0EA] shadow-[0_18px_60px_rgba(0,0,0,0.12)]"
                      >
                        <div className="p-2">
                          {item.children.map((c) => (
                            <Link
                              key={c.label}
                              href={c.href}
                              className="flex items-center justify-between rounded-xl px-4 py-3 transition hover:bg-[#1F2E23]/5"
                            >
                              <span className="font-sans-clean text-[12px] font-medium text-[#1F2E23]/88">
                                {c.label}
                              </span>
                              <ArrowUpRight className="h-4 w-4 text-[#1F2E23]/55" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link key={item.label} href={item.href} className={navClass}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center">
          <Link
            href={ROUTES.contact}
            aria-label="Schedule a consultation"
            onClick={() => onScheduleClick("Header CTA")}
            className={`inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-[13px] font-semibold transition ${
              heroTop
                ? "border border-white/35 bg-white/10 text-white backdrop-blur-md hover:bg-white/16"
                : "border border-[#1F2E23]/14 bg-[#1F2E23] text-white shadow-[0_8px_24px_rgba(16,24,18,0.12)] hover:bg-[#2A3B2E]"
            }`}
          >
            <span>Schedule Consultation</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border lg:hidden ${mobileToggleChrome}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className={`h-5 w-5 ${mobileToggleIcon}`} />
          ) : (
            <Menu className={`h-5 w-5 ${mobileToggleIcon}`} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.div
              className="fixed inset-0 z-[998] bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 bottom-0 z-[999] w-[88vw] max-w-[420px] border-l border-[#1F2E23]/10 bg-[#F5F0EA] shadow-2xl"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            >
              <div className="flex h-[72px] items-center justify-between border-b border-[#1F2E23]/10 px-6">
                <div className="font-sans-clean text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1F2E23]/70">
                  Menu
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="h-11 w-11 rounded-2xl border border-[#1F2E23]/10 bg-white"
                  aria-label="Close menu"
                >
                  <X className="mx-auto h-5 w-5 text-[#1F2E23]/70" />
                </button>
              </div>

              <div className="space-y-6 px-6 py-6">
                {MOBILE_SECTIONS.map((section) => (
                  <div key={section.label}>
                    <div className="mb-3 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.3em] text-[#1F2E23]/45">
                      {section.label}
                    </div>

                    <div className="space-y-2">
                      {section.items.map((it) => (
                        <Link
                          key={it.label}
                          href={it.href}
                          className="block rounded-2xl border border-[#1F2E23]/10 bg-white px-4 py-3 text-[#1F2E23]/88 transition hover:bg-[#1F2E23]/5 hover:text-[#1F2E23]"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-sans-clean text-[12px] font-semibold">
                              {it.label}
                            </span>
                            <ArrowUpRight className="h-4 w-4 text-[#1F2E23]/50" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#1F2E23]/10 p-6">
                <Link
                  href={ROUTES.contact}
                  onClick={() => {
                    onScheduleClick("Mobile CTA");
                    setMobileOpen(false);
                  }}
                  aria-label="Schedule a consultation"
                  className="inline-flex h-11 w-full items-center justify-center rounded-full border border-[#1F2E23]/14 bg-[#1F2E23] px-6 text-[13px] font-semibold text-white transition hover:bg-[#2A3B2E]"
                >
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}