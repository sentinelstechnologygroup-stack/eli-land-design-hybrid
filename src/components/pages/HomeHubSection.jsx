// src/components/home/HomeHubSection.jsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

function HubCard({ item, delay = 0 }) {
  return (
    <AnimatedSection delay={delay}>
      <Link href={item.href} className="group block h-full">
        <article className="relative isolate h-full overflow-hidden rounded-[none] border border-white/20 bg-[#D7D1C7] shadow-[0_18px_50px_rgba(16,24,18,0.12)] transition-all duration-500 group-hover:shadow-[0_28px_70px_rgba(16,24,18,0.18)]">
          <div className="relative aspect-[1/1] sm:aspect-[1.08/1] lg:aspect-[1.42/1]">
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              loading="lazy"
              decoding="async"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/75" />
            <div className="absolute inset-0 bg-[#1F2E23]/10 mix-blend-multiply" />
            <div className="absolute inset-x-0 top-0 h-[1px] bg-white/25" />

            <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 md:p-6 lg:p-8">
              <div>
                <h3 className="max-w-[14ch] font-serif-display text-[1.15rem] font-light leading-[1.02] tracking-[-0.02em] text-white sm:text-[1.3rem] md:text-[1.7rem] lg:text-[2.15rem]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[32rem] font-sans-clean text-[12px] leading-[1.6] text-white/85 sm:text-[12.5px] md:text-[13px] lg:mt-5 lg:text-[15px] lg:leading-[1.75]">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 lg:pt-8">
                <div className="border-t border-white/18 pt-4 lg:pt-5">
                  <div className="mb-3 text-[9px] font-sans-clean font-semibold uppercase tracking-[0.28em] text-white/65 lg:text-[10px]">
                    Typical Scope
                  </div>

                  <ul className="space-y-2 lg:space-y-3">
                    {item.includes.map((scopeItem) => (
                      <li
                        key={scopeItem}
                        className="flex items-start gap-2.5 text-white/85"
                      >
                        <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-none bg-white/80" />
                        <span className="font-sans-clean text-[11px] leading-[1.45] sm:text-[11.5px] md:text-[12px] lg:text-[15px] lg:leading-[1.55]">
                          {scopeItem}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 inline-flex items-center gap-2 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.24em] text-white lg:mt-6 lg:text-[11px]">
                  {item.ctaLabel || "View Page"}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </AnimatedSection>
  );
}

export default function HomeHubSection({ title, items }) {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] px-4 pb-6 md:px-8 md:pb-8 lg:px-20 lg:pb-10">
        <AnimatedSection>
          <h2 className="mb-4 font-sans-clean text-[13px] font-semibold text-[#1F2E23] md:mb-5 md:text-[15px]">
            {title}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5 lg:gap-7">
          {items.map((item, index) => (
            <HubCard key={item.title} item={item} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}