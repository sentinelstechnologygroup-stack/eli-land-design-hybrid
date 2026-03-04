// src/components/eli/Band.jsx
import React from "react";
import Link from "next/link";

/**
 * IMPORTANT:
 * This component should be a 1:1 extraction of the existing Band component
 * from Home.jsx (same markup + same classNames) to guarantee zero visual change.
 */

export default function Band({
  title,
  subtitle,
  cta,
  href,
  image,
  tone = "light",
}) {
  return (
    <Link href={href}
      className={`eliBand eliBand--${tone}`}
      aria-label={title}
    >
      <div className="eliBand__inner">
        <div className="eliBand__copy">
          <div className="eliBand__label">Design</div>
          <h3 className="eliBand__title">{title}</h3>
          <p className="eliBand__sub">{subtitle}</p>
          <div className="eliBand__cta">
            <span className="eliBand__ctaText">{cta}</span>
            <span className="eliBand__arrow" aria-hidden="true">
              →
            </span>
          </div>
        </div>

        <div className="eliBand__media" aria-hidden="true">
          <img className="eliBand__img" src={image} alt="" loading="lazy" />
        </div>
      </div>
    </Link>
  );
}
