// src/components/ClientOnly.jsx
"use client";

import React from "react";

export default function ClientOnly({ children, fallback = null }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return fallback;
  return <>{children}</>;
}