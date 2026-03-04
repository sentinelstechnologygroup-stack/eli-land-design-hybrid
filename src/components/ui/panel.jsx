// src/components/ui/panel.jsx
import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * @typedef {"default" | "light" | "sand" | "dark"} PanelVariant
 */

/**
 * @typedef {Object} PanelProps
 * @property {React.ReactNode=} children
 * @property {string=} className
 * @property {PanelVariant=} variant
 */

/**
 * ELI Standard Panel
 * - Panels (info + image) = rounded-2xl
 * - Keep border + soft backgrounds consistent sitewide
 *
 * @type {React.ForwardRefExoticComponent<
 *   React.PropsWithoutRef<PanelProps & React.HTMLAttributes<HTMLDivElement>> &
 *   React.RefAttributes<HTMLDivElement>
 * >}
 */
const Panel = React.forwardRef(function Panel(
  { className, variant = "default", ...props },
  ref
) {
  const variants = {
    default: "border border-[#1F2E23]/10 bg-[#F8F4ED]",
    light: "border border-[#1F2E23]/10 bg-white/70",
    sand: "border border-[#1F2E23]/10 bg-[#E8E0D4]",
    dark: "border border-white/10 bg-white/5",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl overflow-hidden",
        variants[variant] ?? variants.default,
        className
      )}
      {...props}
    />
  );
});

export { Panel };