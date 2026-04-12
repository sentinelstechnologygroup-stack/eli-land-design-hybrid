// src/components/SiteHeader.jsx
"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown, Phone } from "lucide-react";
import { NAV, ROUTES } from "./utils/routes";
import { trackCTA, trackLeadIntent } from "@/lib/intelligence";

export default function SiteHeader({ currentPageName }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const headerRef = useRef(null);
  const pathname = usePathname();

  const navItems = useMemo(() => (Array.isArray(NAV) ? NAV : []), []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  const HEADER_CONTAINER =
    "mx-auto w-full max-w-[1680px] px-4 sm:px-5 md:px-8 lg:px-16 xl:px-20";

  const headerBase =
    "fixed top-0 left-0 right-0 z-[1000] border-b border-[#1F2E23]/10 bg-[#F5F0EA] shadow-[0_8px_20px_rgba(0,0,0,0.08)]";

  const navTone = "text-[#1F2E23] hover:text-[#1F2E23]";

  const PHONE_DISPLAY = "(281) 555-1234";
  const PHONE_LINK = "tel:+12812592610";

  const MOBILE_CTA_WIDTH = "w-[172px]";
  const DESKTOP_CTA_WIDTH = "w-[220px]";

  const MOBILE_SECTIONS = useMemo(() => {
    const home = navItems.find((n) => n.label === "Home");
    const about = navItems.find((n) => n.label === "About");
    const projects = navItems.find((n) => n.label === "Projects");
    const gallery = navItems.find((n) => n.label === "Gallery");
    const reviews = navItems.find((n) => n.label === "Reviews");
    const careers = navItems.find((n) => n.label === "Careers");

    return [
      { label: "Overview", items: [home, about].filter(Boolean) },
      { label: "Explore", items: [projects, gallery].filter(Boolean) },
      { label: "More", items: [reviews, careers].filter(Boolean) },
    ].filter((section) => section.items && section.items.length);
  }, [navItems]);

  const onScheduleClick = (where) => {
    trackCTA("Schedule Consultation", where, {
      page: currentPageName || "unknown",
    });
    trackLeadIntent("contact_open", {
      source: where,
      page: currentPageName || "unknown",
    });
  };

  const onPhoneClick = (where) => {
    trackCTA("Phone Call", where, { page: currentPageName || "unknown" });
    trackLeadIntent("phone_click", {
      source: where,
      page: currentPageName || "unknown",
    });
  };

  return (
    <header ref={headerRef} className={headerBase}>
      <div
        className={`${HEADER_CONTAINER} grid h-[74px] grid-cols-[auto_1fr_auto] items-center gap-3 lg:grid-cols-[1fr_auto_1fr]`}
      >
        <div className="flex items-center justify-start">
          <Link href={ROUTES.home} className="flex shrink-0 items-center">
            <img
              src="/logo/logo.png"
              alt="ELI Land Design"
              className="h-8 w-auto object-contain sm:h-9 lg:h-11"
            />
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-1 lg:hidden">
            <Link
              href={ROUTES.contact}
              aria-label="Schedule a consultation"
              onClick={() => onScheduleClick("Mobile Header CTA")}
              className={`${MOBILE_CTA_WIDTH} inline-flex items-center justify-center gap-1.5 bg-[#6B7F5E] px-3 py-2 text-[11px] font-semibold text-white transition-colors hover:bg-[#5f7353]`}
            >
              <span>Schedule Consultation</span>
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
            </Link>

            <a
              href={PHONE_LINK}
              aria-label={`Call ${PHONE_DISPLAY}`}
              onClick={() => onPhoneClick("Mobile Header Phone")}
              className={`${MOBILE_CTA_WIDTH} inline-flex items-center justify-center gap-1.5 bg-transparent px-3 py-[4px] font-sans-clean text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F2E23] transition-opacity hover:opacity-70`}
            >
              <Phone className="h-3.5 w-3.5 shrink-0" />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </div>

          <div className="hidden lg:flex flex-col items-center gap-1">
            <Link
              href={ROUTES.contact}
              aria-label="Schedule a consultation"
              onClick={() => onScheduleClick("Header CTA")}
              className={`${DESKTOP_CTA_WIDTH} inline-flex items-center justify-center gap-2 bg-[#6B7F5E] px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-[#5f7353]`}
            >
              <span>Schedule Consultation</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" />
            </Link>

            <a
              href={PHONE_LINK}
              aria-label={`Call ${PHONE_DISPLAY}`}
              onClick={() => onPhoneClick("Header Phone")}
              className={`${DESKTOP_CTA_WIDTH} inline-flex items-center justify-center gap-2 bg-transparent px-4 py-[4px] font-sans-clean text-[10px] font-semibold uppercase tracking-[0.22em] text-[#1F2E23] transition-opacity hover:opacity-70`}
            >
              <Phone className="h-3.5 w-3.5 shrink-0" />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => {
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
                      className={`inline-flex items-center gap-2 font-sans-clean text-[11px] font-semibold uppercase tracking-[0.28em] transition-colors ${navTone}`}
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4 opacity-85" />
                    </button>

                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-0 mt-3 w-[260px] overflow-hidden rounded-none border border-[#1F2E23]/10 bg-[#F5F0EA] shadow-[0_18px_60px_rgba(0,0,0,0.12)]"
                        >
                          <div className="p-2">
                            {item.children.map((c) => (
                              <Link
                                key={c.label}
                                href={c.href}
                                className="flex items-center justify-between rounded-none px-4 py-3 transition hover:bg-[#1F2E23]/5"
                              >
                                <span className="font-sans-clean text-[12px] font-medium text-[#1F2E23]/88">
                                  {c.label}
                                </span>
                                <ArrowUpRight className="h-4 w-4 text-[#1F2E23]/55" />
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`font-sans-clean text-[11px] font-semibold uppercase tracking-[0.28em] transition-colors ${navTone}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center border border-[#1F2E23]/10 bg-white"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5 text-[#1F2E23]" />
              ) : (
                <Menu className="h-5 w-5 text-[#1F2E23]" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
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
                  className="h-11 w-11 rounded-none border border-[#1F2E23]/10 bg-white"
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
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-none border border-[#1F2E23]/10 bg-white px-4 py-3 text-[#1F2E23]/88 transition hover:bg-[#1F2E23]/5 hover:text-[#1F2E23]"
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
                <div className="flex flex-col gap-3">
                  <Link
                    href={ROUTES.contact}
                    onClick={() => {
                      onScheduleClick("Mobile Drawer CTA");
                      setMobileOpen(false);
                    }}
                    className="inline-flex w-full items-center justify-center bg-[#6B7F5E] px-4 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#5f7353]"
                  >
                    Schedule Consultation
                  </Link>

                  <a
                    href={PHONE_LINK}
                    onClick={() => {
                      onPhoneClick("Mobile Drawer Phone");
                      setMobileOpen(false);
                    }}
                    className="inline-flex w-full items-center justify-center gap-2 bg-transparent px-4 py-2 font-sans-clean text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1F2E23] transition-opacity hover:opacity-70"
                  >
                    <Phone className="h-4 w-4" />
                    <span>{PHONE_DISPLAY}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}