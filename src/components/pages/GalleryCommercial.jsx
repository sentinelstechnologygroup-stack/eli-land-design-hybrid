// src/components/pages/GalleryCommercial.jsx
"use client";

import React from "react";
import GalleryImagePage from "@/components/pages/GalleryImagePage";

export default function GalleryCommercial() {
  return (
    <GalleryImagePage
      mode="commercial"
      title="Commercial Landscape Architecture"
      subtitle="Browse commercial landscape architecture and site planning gallery images."
    />
  );
}