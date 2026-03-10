"use client";

// src/Layout.jsx
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { trackScrollDepth, trackPageView, startEngagementTimer } from "@/lib/intelligence";

export default function Layout({ children, currentPageName = "unknown" }) {
  const pathname = usePathname();
  const HEADER_OFFSET = "pt-20 md:pt-24";

  const [hasHeroClass, setHasHeroClass] = useState(false);

  // ✅ Observe body class changes (PageShell sets eli-has-hero)
  useEffect(() => {
    if (typeof document === "undefined") return;

    const read = () => {
      setHasHeroClass(document.body.classList.contains("eli-has-hero"));
    };

    read();

    const Obs = typeof MutationObserver !== "undefined" ? MutationObserver : null;
    if (!Obs) return;

    const observer = new Obs(read);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, [pathname]);

  // ✅ Hero mode is now contract-driven (PageShell), with a Home fallback
  const heroUnderHeader = hasHeroClass || pathname === "/";

  // ✅ Hook #1: page view + dwell time
  useEffect(() => {
    trackPageView(pathname);
    return startEngagementTimer(pathname);
  }, [pathname]);

  // ✅ Hook #2: scroll depth (throttled by rAF)
  useEffect(() => {
    if (typeof window === "undefined") return;

    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        const denom = document.body.scrollHeight - window.innerHeight;
        if (denom <= 0) return;
        const depth = (window.scrollY / denom) * 100;
        trackScrollDepth(depth);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial ping

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F0EA]">
      <SiteHeader currentPageName={currentPageName} heroUnderHeader={heroUnderHeader} />
      <div className={heroUnderHeader ? "" : HEADER_OFFSET}>{children}</div>
      <SiteFooter />
    </div>
  );
}