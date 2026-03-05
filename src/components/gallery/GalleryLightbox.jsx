"use client";

// src/components/gallery/GalleryLightbox.jsx
import React, { useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function GalleryLightbox({
  open,
  items = [],
  index = 0,
  onClose,
  onPrev,
  onNext,
  title,
}) {
  const safeIndex = Math.max(0, Math.min(index, Math.max(0, items.length - 1)));
  const active = useMemo(() => items[safeIndex] || null, [items, safeIndex]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {open && active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[2000] bg-[#1F2E23]/80"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose?.();
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center px-4 md:px-10">
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full "
            >
              {/* Close */}
              <button
                type="button"
                onClick={onClose}
                className="absolute -top-12 right-0 inline-flex items-center gap-2 text-[#F5F0EA]/80 hover:text-[#F5F0EA] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
                <span className="text-[11px] tracking-[0.25em] uppercase font-sans-clean font-semibold">
                  Close
                </span>
              </button>

              {/* Image */}
              <div className="relative bg-[#0F1713] rounded-2xl overflow-hidden border border-[#F5F0EA]/15">
                <img
                  src={active.src}
                  alt={active.alt || ""}
                  className="w-full h-[70vh] object-contain bg-[#0F1713]"
                  draggable={false}
                />
              </div>

              {/* Caption / index */}
              <div className="mt-4 text-center">
                <div className="text-[#F5F0EA]/80 font-sans-clean text-sm">
                  {active.caption || active.alt || title || ""}
                </div>
                <div className="text-[#F5F0EA]/50 font-sans-clean text-xs mt-1">
                  {safeIndex + 1} / {items.length}
                </div>
              </div>

              {/* Arrows */}
              {items.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={onPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-10 w-12 h-12 flex items-center justify-center border border-[#F5F0EA]/25 bg-[#1F2E23]/30 hover:bg-[#1F2E23]/55 transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6 text-[#F5F0EA]" />
                  </button>

                  <button
                    type="button"
                    onClick={onNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-10 w-12 h-12 flex items-center justify-center border border-[#F5F0EA]/25 bg-[#1F2E23]/30 hover:bg-[#1F2E23]/55 transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6 text-[#F5F0EA]" />
                  </button>
                </>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}