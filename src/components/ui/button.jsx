// src/components/ui/button.jsx
// @ts-nocheck

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * ELI Button
 * - Uses rounded-button token (now pill)
 * - Adds frosted variant for on-image CTAs (header hero mode)
 * - Keeps existing variants compatible
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-button text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Back-compat alias
        default: "bg-[#1F2E23] text-[#F5F0EA] hover:bg-[#2A3F2F]",

        primary: "bg-[#1F2E23] text-[#F5F0EA] hover:bg-[#2A3F2F]",
        secondary:
          "border border-[#1F2E23]/25 bg-transparent text-[#1F2E23] hover:bg-[#1F2E23]/5",
        subtle: "bg-[#1F2E23]/5 text-[#1F2E23] hover:bg-[#1F2E23]/10",

        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",

        link: "text-[#1F2E23] underline-offset-4 hover:underline",

        // CTA (solid light)
        cta:
          "bg-[#F5F0EA] text-[#1F2E23] hover:bg-[#E8E0D4] uppercase tracking-[0.18em] text-[11px] font-semibold",

        // CTA (solid sage)
        ctaSecondary:
          "bg-[#6B7F5E] text-[#F5F0EA] hover:bg-[#5E7152] uppercase tracking-[0.18em] text-[11px] font-semibold",

        // CTA (outline on dark/hero)
        ctaOutline:
          "border border-white/45 text-white hover:bg-white hover:text-[#1F2E23] hover:border-white uppercase tracking-[0.18em] text-[11px] font-semibold",

        // ✅ NEW: Frosted / Glass for hero header CTA (your requested look)
        frosted:
          "bg-white/12 text-white border border-white/35 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.20)] hover:bg-white/18 hover:border-white/45 uppercase tracking-[0.18em] text-[11px] font-semibold",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
        icon: "h-9 w-9",

        cta: "h-auto px-10 py-4",
        ctaLg: "h-auto px-10 py-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const Button = React.forwardRef(function Button(
  { className, variant, size, asChild = false, ...props },
  ref
) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});

export { Button, buttonVariants };