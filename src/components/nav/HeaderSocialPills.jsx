// src/components/nav/HeaderSocialPills.jsx
import React from "react";
import { ExternalLink } from "lucide-react";

const LINKS = [
  { name: "Facebook", href: "https://www.facebook.com/elilanddesign/" },
  {
    name: "Houzz",
    href: "https://www.houzz.com/professionals/landscape-architects-and-landscape-designers/e-l-i-land-design-llc-pfvwus-pf~378023936",
  },
  { name: "Growcycle", href: "https://growcycle.com/services/pro/e-l-i-land-design-llc" },
];

export default function HeaderSocialPills({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {LINKS.map((l) => (
        <a
          key={l.name}
          href={l.href}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-[10px] tracking-[0.18em] uppercase font-sans-clean font-semibold hover:bg-white/15 hover:border-white/30 transition-colors"
        >
          <span>{l.name}</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
        </a>
      ))}
    </div>
  );
}