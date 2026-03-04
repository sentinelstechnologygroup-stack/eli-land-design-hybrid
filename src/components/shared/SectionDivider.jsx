import React from "react";
import AnimatedSection from "./AnimatedSection";

export default function SectionDivider({ label }) {
  return (
    <AnimatedSection className="flex items-center gap-6 w-full">
      <div className="h-px bg-[#1F2E23]/20 flex-1" />
      {label && (
        <span className="text-[11px] tracking-[0.3em] uppercase text-[#1F2E23]/50 font-sans-clean font-medium">
          {label}
        </span>
      )}
      <div className="h-px bg-[#1F2E23]/20 flex-1" />
    </AnimatedSection>
  );
}