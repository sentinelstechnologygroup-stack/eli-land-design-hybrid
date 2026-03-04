"use client";

// src/components/utils/ScrollToTop.jsx
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // no animation, production-safe
    });
  }, [pathname]);

  return null;
}