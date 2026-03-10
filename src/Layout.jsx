// src/Layout.jsx
"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import {
  trackScrollDepth,
  trackPageView,
  startEngagementTimer,
} from "@/lib/intelligence";

export default function Layout({ children, currentPageName = "unknown" }) {
  const pathname = usePathname();
  const [pageMode, setPageMode] = useState("standard");

  useEffect(() => {
    if (typeof document === "undefined") return;

    const readMode = () => {
      const mode = document.body.dataset.eliPageMode || "standard";
      setPageMode(mode);
    };

    readMode();

    const observer = new MutationObserver(readMode);
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

  return (
    <div
      className="min-h-screen bg-[#F5F0EA]"
      style={{ "--eli-header-height": "72px" }}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[2000] focus:rounded-lg focus:bg-[#1F2E23] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <SiteHeader currentPageName={currentPageName} pageMode={pageMode} />

      <main
        id="main-content"
        className="w-full"
        style={{
          paddingTop:
            pageMode === "hero" ? "0px" : "var(--eli-header-height)",
        }}
      >
        {children}
      </main>

      <SiteFooter />
    </div>
  );
}