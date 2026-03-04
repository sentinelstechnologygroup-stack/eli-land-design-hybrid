"use client";

// src/components/SiteHeader.jsx
import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { NAV, ROUTES } from "./utils/routes";

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

  // ✅ Close mobile menu on route change (Next.js)
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // ✅ Single source of truth (from Layout)
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
    const projects = NAV.find((n) => n.label === "Projects");
    const consultation = NAV.find((n) => n.href === ROUTES.consultation);
    const construction = NAV.find((n) => n.label === "Construction");

    return [
      { label: "Main", items: [NAV[0], NAV[1]].filter(Boolean) }, // Home, About
      { label: "Design", items: design?.children ?? [design].filter(Boolean) },
      { label: "Construction", items: [construction].filter(Boolean) },
      { label: "Projects", items: projects?.children ?? [projects].filter(Boolean) },
      {
        label: "Schedule",
        items: consultation?.children ?? [consultation].filter(Boolean),
      },
    ].filter((s) => s.items && s.items.length);
  }, []);

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
          <Link
            href={ROUTES.consultation}
            aria-label="Schedule a consultation"
            className={
              heroMode && !scrolled
                ? "inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/35 text-white text-[11px] tracking-[0.22em] uppercase font-sans-clean font-semibold hover:border-white/55 transition"
                : "inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1F2E23] text-[#F5F0EA] text-[11px] tracking-[0.22em] uppercase font-sans-clean font-semibold hover:opacity-95 transition"
            }
          >
            Schedule Consultation <ArrowUpRight className="w-4 h-4" />
          </Link>
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
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 z-[999]"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-0 right-0 h-full w-[75%] max-w-[420px] bg-[#F5F0EA] z-[1000] shadow-2xl flex flex-col"
            >
              <div className="h-[72px] flex items-center justify-end px-6 border-b border-[#1F2E23]/10">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#1F2E23]/5 transition"
                >
                  <X className="w-5 h-5 text-[#1F2E23]/70" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-6">
                {MOBILE_SECTIONS.map((section) => (
                  <div key={section.label} className="mb-8">
                    <div className="text-[9px] tracking-[0.34em] uppercase text-[#1F2E23]/45 font-sans-clean font-semibold mb-3">
                      {section.label}
                    </div>

                    <div className="flex flex-col gap-3">
                      {section.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-[15px] font-sans-clean text-[#1F2E23]/75 hover:text-[#1F2E23] transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-[#1F2E23]/10">
                <Link
                  href={ROUTES.consultation}
                  onClick={() => setMobileOpen(false)}
                  aria-label="Schedule a consultation"
                  className="block w-full text-center bg-[#1F2E23] text-[#F5F0EA] px-6 py-4 rounded-2xl text-[11px] tracking-[0.28em] uppercase font-sans-clean font-semibold"
                >
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}