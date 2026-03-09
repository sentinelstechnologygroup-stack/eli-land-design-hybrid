// src/components/SiteHeader.jsx
"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV, ROUTES } from "./utils/routes";
import { trackCTA, trackLeadIntent } from "@/lib/intelligence";

/**
 * SiteHeader is layout-driven.
 * It receives pageMode from Layout and never infers hero state from routes.
 */
export default function SiteHeader({ currentPageName, pageMode = "standard" }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const headerRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  const heroMode = pageMode === "hero";

  const HEADER_CONTAINER = "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20";

  const headerBase =
    "fixed top-0 left-0 right-0 z-[1000] border-b transition-colors duration-300";

  const headerChrome = heroMode && !scrolled
    ? "border-transparent bg-transparent"
    : "border-[#1F2E23]/10 bg-[#F5F0EA]/96 backdrop-blur-md";

  const textColor = heroMode && !scrolled ? "text-white" : "text-[#1F2E23]";
  const navText = heroMode && !scrolled
    ? "text-white/82 hover:text-white"
    : "text-[#1F2E23]/65 hover:text-[#1F2E23]";

  const mobileToggleChrome = heroMode && !scrolled
    ? "border-white/20 bg-white/10 backdrop-blur-md"
    : "border-[#1F2E23]/10 bg-white/70";

  const mobileToggleIcon = heroMode && !scrolled ? "text-white" : "text-[#1F2E23]/70";

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
    trackCTA("Schedule Consultation", where, { page: currentPageName || "unknown" });
    trackLeadIntent("contact_open", { source: where, page: currentPageName || "unknown" });
  };

  return (
    <header ref={headerRef} className={`${headerBase} ${headerChrome}`}>
      <div className={`${HEADER_CONTAINER} flex h-[var(--eli-header-height)] items-center justify-between`}>
        <Link href={ROUTES.home} className={`flex items-center gap-3 ${textColor}`}>
          <div className="leading-none">
            <div className="font-sans-clean text-[12px] font-semibold tracking-[0.28em]">
              ELI
            </div>
            <div className="text-[9px] uppercase tracking-[0.28em] opacity-70">
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
                  <button
                    type="button"
                    className={`inline-flex items-center gap-2 text-[11px] font-sans-clean font-semibold uppercase tracking-[0.28em] transition-colors ${navText}`}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 opacity-70" />
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
                              <span className="font-sans-clean text-[12px] text-[#1F2E23]/75">
                                {c.label}
                              </span>
                              <ArrowUpRight className="h-4 w-4 text-[#1F2E23]/45" />
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
              <Link
                key={item.label}
                href={item.href}
                className={`text-[11px] tracking-[0.28em] uppercase font-sans-clean font-semibold transition-colors ${navText}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center">
          <Button
            asChild
            variant={heroMode && !scrolled ? "frosted" : "primary"}
            size="cta"
            className={heroMode && !scrolled ? "ring-1 ring-white/25" : ""}
          >
            <Link
              href={ROUTES.contact}
              aria-label="Schedule a consultation"
              onClick={() => onScheduleClick("Header CTA")}
            >
              Schedule Consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition-colors lg:hidden ${mobileToggleChrome}`}
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
              <div className="flex h-[var(--eli-header-height)] items-center justify-between border-b border-[#1F2E23]/10 px-6">
                <div className="text-[11px] font-sans-clean font-semibold uppercase tracking-[0.28em] text-[#1F2E23]/70">
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
                    <div className="mb-3 text-[10px] font-sans-clean font-semibold uppercase tracking-[0.3em] text-[#1F2E23]/45">
                      {section.label}
                    </div>

                    <div className="space-y-2">
                      {section.items.map((it) => (
                        <Link
                          key={it.label}
                          href={it.href}
                          className="block rounded-2xl border border-[#1F2E23]/10 bg-white px-4 py-3 text-[#1F2E23]/75 transition hover:bg-[#1F2E23]/5 hover:text-[#1F2E23]"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-sans-clean text-[12px] font-semibold">
                              {it.label}
                            </span>
                            <ArrowUpRight className="h-4 w-4 text-[#1F2E23]/40" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#1F2E23]/10 p-6">
                <Button asChild variant="primary" size="cta" className="w-full">
                  <Link
                    href={ROUTES.contact}
                    onClick={() => {
                      onScheduleClick("Mobile CTA");
                      setMobileOpen(false);
                    }}
                    aria-label="Schedule a consultation"
                  >
                    Schedule Consultation
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
