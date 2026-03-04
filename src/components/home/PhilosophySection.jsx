// src/components/home/PhilosophySection.jsx
import React from "react";

const MEDIA = {
  panel: "/images/home/philosophy-panel.jpg",
};

export default function PhilosophySection() {
  return (
    <section className="bg-[#F5F0EA]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT */}
          <div className="lg:col-span-6">
            <h2 className="font-serif-display text-[#1F2E23] text-4xl md:text-5xl font-light leading-[1.05]">
              Informed design. Built to last.
            </h2>

            {/* Image panel (single, controlled size) */}
            <div className="mt-8">
              <div className="border border-[#1F2E23]/15 rounded-2xl overflow-hidden">
                <div className="h-[240px] md:h-[280px]">
                  <img
                    src={MEDIA.panel}
                    alt="Landscape architecture detail"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-6">
            <p className="text-[#1F2E23]/65 font-sans-clean text-sm md:text-base leading-[1.85]">
              E.L.I. Land Design provides landscape architecture, site planning, and
              construction services for residential and commercial projects throughout
              The Woodlands, Houston, and surrounding Texas markets. Established in
              1997, we specialize in projects that require technical site planning—
              grading and drainage design, circulation layouts, construction
              documentation, and planting systems adapted to regional conditions.
            </p>

            <p className="mt-6 text-[#1F2E23]/65 font-sans-clean text-sm md:text-base leading-[1.85]">
              With licensed landscape architects on staff and in-house construction
              crews, we manage projects from concept through installation—ensuring
              continuity, quality control, and accountability throughout the entire
              process.
            </p>

            <div className="mt-10 pt-8 border-t border-[#1F2E23]/10">
              <div className="grid grid-cols-3 gap-10">
                <div>
                  <div className="font-serif-display text-3xl md:text-4xl font-light text-[#1F2E23]">
                    27+
                  </div>
                  <div className="mt-2 text-[9px] tracking-[0.3em] uppercase font-sans-clean font-semibold text-[#1F2E23]/45">
                    Years
                  </div>
                </div>

                <div>
                  <div className="font-serif-display text-3xl md:text-4xl font-light text-[#1F2E23]">
                    500+
                  </div>
                  <div className="mt-2 text-[9px] tracking-[0.3em] uppercase font-sans-clean font-semibold text-[#1F2E23]/45">
                    Projects
                  </div>
                </div>

                <div>
                  <div className="font-serif-display text-3xl md:text-4xl font-light text-[#1F2E23]">
                    TX
                  </div>
                  <div className="mt-2 text-[9px] tracking-[0.3em] uppercase font-sans-clean font-semibold text-[#1F2E23]/45">
                    Licensed
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}