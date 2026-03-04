"use client";

// src/app/affiliations/page.js

import React, { useEffect, useState } from "react";

export default function AffiliationsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent SSR from evaluating anything that depends on window/document
  if (!mounted) return null;

  return (
    <main>
      {/* Your existing Affiliations page JSX goes here */}
    </main>
  );
}