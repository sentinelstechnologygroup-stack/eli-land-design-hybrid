// src/components/shared/AnimatedSection.jsx
"use client";

import React from "react";

/**
 * Hardening phase:
 * remove entrance drift/fade so content does not "move" on page load.
 * Keep the wrapper so existing page imports do not break.
 */
export default function AnimatedSection({
  children,
  className = "",
}) {
  return <div className={className}>{children}</div>;
}