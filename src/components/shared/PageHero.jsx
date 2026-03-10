// src/components/shared/PageHero.jsx
import React from "react";

const HERO_TITLE_CLASS =
  "max-w-[24ch] font-serif-display text-[2.6rem] sm:text-[3.1rem] md:text-[3.55rem] lg:text-[3.9rem] xl:text-[4.15rem] font-light leading-[0.98] tracking-[-0.02em] text-white [text-wrap:balance] [text-shadow:0_2px_16px_rgba(0,0,0,0.34)]";

export default function PageHero({
  label,
  title,
  subtitle,
  image,
  heroExtras = null,
  heightClass = "h-[56vh] min-h-[460px] max-h-[740px]",
  contentMax = "max-w-[1440px]",
  titleClassName = "",
  subtitleClassName = "",
}) {
  return (
    <section className={`relative w-full overflow-hidden ${heightClass}`}>
      {image ? (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
      ) : (
        <div className="absolute inset-0 bg-[#1F2E23]" />
      )}

      <div className="absolute inset-0 bg-[#102018]/48" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#09110D]/72 via-[#102018]/28 to-[#102018]/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1B15]/28 via-transparent to-[#0F1B15]/10" />
      <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[#102018]/84 to-transparent" />

      <div className="absolute inset-0">
        <div className={`${contentMax} mx-auto h-full px-6 md:px-12 lg:px-20`}>
          <div className="flex h-full items-end pb-12 md:pb-14">
            <div className="w-full max-w-5xl">
              {label ? (
                <div className="mb-5 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.34em] text-white/84">
                  {label}
                </div>
              ) : null}

              {title ? (
                <h1 className={`${HERO_TITLE_CLASS} ${titleClassName}`.trim()}>{title}</h1>
              ) : null}

              {subtitle ? (
                <p
                  className={`mt-5 max-w-[54rem] font-sans-clean text-sm leading-[1.72] text-white/90 md:text-[17px] ${subtitleClassName}`.trim()}
                >
                  {subtitle}
                </p>
              ) : null}

              {heroExtras ? <div className="mt-8">{heroExtras}</div> : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
