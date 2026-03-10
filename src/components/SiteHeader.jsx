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
 * SiteHeader is "dumb":
 * - It does NOT decide hero/non-hero by route.
 * - Layout decides that and passes heroUnderHeader.
 */
export default function SiteHeader({ currentPageName, heroUnderHeader = false }) {
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  const heroMode = Boolean(heroUnderHeader);

  const HEADER_CONTAINER = "max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20";

  const headerBase =
    "fixed top-0 left-0 right-0 z-[1000] transition-colors duration-300";

  const headerBg =
    heroMode && !scrolled
      ? "bg-transparent"
      : "bg-[#F5F0EA] border-b border-[#1F2E23]/10";

  const textColor = heroMode && !scrolled ? "text-white" : "text-[#1F2E23]";
  const navText =
    heroMode && !scrolled
      ? "text-white/80 hover:text-white"
      : "text-[#1F2E23]/65 hover:text-[#1F2E23]";

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
    <header ref={headerRef} className={`${headerBase} ${headerBg}`}>
      <div className={`${HEADER_CONTAINER} h-[72px] flex items-center justify-between`}>
        {/* Brand */}
        <Link href={ROUTES.home} className={`flex items-center gap-3 ${textColor}`}>
          <div className="leading-none">
            <div className="font-sans-clean font-semibold tracking-[0.28em] text-[12px]">
              ELI
            </div>
            <div className="text-[9px] tracking-[0.28em] uppercase opacity-70">
              Land Design
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
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
                    className={`text-[11px] tracking-[0.28em] uppercase font-sans-clean font-semibold transition-colors inline-flex items-center gap-2 ${navText}`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4 opacity-70" />
                  </button>

                  <AnimatePresence>
                    {open ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 mt-3 w-[260px] rounded-2xl bg-[#F5F0EA] border border-[#1F2E23]/10 shadow-[0_18px_60px_rgba(0,0,0,0.12)] overflow-hidden"
                      >
                        <div className="p-2">
                          {item.children.map((c) => (
                            <Link
                              key={c.label}
                              href={c.href}
                              className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-[#1F2E23]/5 transition"
                            >
                              <span className="text-[12px] text-[#1F2E23]/75 font-sans-clean">
                                {c.label}
                              </span>
                              <ArrowUpRight className="w-4 h-4 text-[#1F2E23]/45" />
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
        {/* Desktop CTA */}
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
              Schedule Consultation <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-2xl border border-[#1F2E23]/10 bg-white/70"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-5 h-5 text-[#1F2E23]/70" />
          ) : (
            <Menu className="w-5 h-5 text-[#1F2E23]/70" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-[998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 bottom-0 w-[88vw] max-w-[420px] bg-[#F5F0EA] z-[999] shadow-2xl border-l border-[#1F2E23]/10"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            >
              <div className="h-[72px] px-6 flex items-center justify-between border-b border-[#1F2E23]/10">
                <div className="text-[11px] tracking-[0.28em] uppercase font-sans-clean font-semibold text-[#1F2E23]/70">
                  Menu
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-11 h-11 rounded-2xl border border-[#1F2E23]/10 bg-white"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-[#1F2E23]/70 mx-auto" />
                </button>
              </div>

              <div className="px-6 py-6 space-y-6">
                {MOBILE_SECTIONS.map((section) => (
                  <div key={section.label}>
                    <div className="text-[10px] tracking-[0.3em] uppercase font-sans-clean font-semibold text-[#1F2E23]/45 mb-3">
                      {section.label}
                    </div>

                    <div className="space-y-2">
                      {section.items.map((it) => (
                        <Link
                          key={it.label}
                          href={it.href}
                          className="block px-4 py-3 rounded-2xl bg-white border border-[#1F2E23]/10 text-[#1F2E23]/75 hover:text-[#1F2E23] hover:bg-[#1F2E23]/5 transition"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[12px] font-sans-clean font-semibold">
                              {it.label}
                            </span>
                            <ArrowUpRight className="w-4 h-4 text-[#1F2E23]/40" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-[#1F2E23]/10">
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