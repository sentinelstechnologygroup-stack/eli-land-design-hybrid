"use client";

// src/Layout.jsx
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { trackScrollDepth, trackPageView, startEngagementTimer } from "@/lib/intelligence";

const HEADER_HEIGHT = 72;

export default function Layout({ children, currentPageName = "unknown" }) {
  const pathname = usePathname();
  const [pageMode, setPageMode] = useState(pathname === "/" ? "hero" : "standard");

  useEffect(() => {
    if (typeof document === "undefined") return;

    const readPageMode = () => {
      const nextMode = document.body.dataset.eliPageMode;
      setPageMode(nextMode || (pathname === "/" ? "hero" : "standard"));
    };

    readPageMode();

    const Obs = typeof MutationObserver !== "undefined" ? MutationObserver : null;
    if (!Obs) return;

    const observer = new Obs(readPageMode);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-eli-page-mode"],
    });

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    trackPageView(pathname);
    return startEngagementTimer(pathname);
  }, [pathname]);

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
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const isHeroPage = pageMode === "hero";

  return (
    <div
      className="min-h-screen bg-[#F5F0EA]"
      style={{ "--eli-header-height": `${HEADER_HEIGHT}px` }}
    >
      <SiteHeader currentPageName={currentPageName} pageMode={pageMode} />
      <div style={isHeroPage ? undefined : { paddingTop: "var(--eli-header-height)" }}>
        {children}
      </div>
      <SiteFooter />
    </div>
  );
}
