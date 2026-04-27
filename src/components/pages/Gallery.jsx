// src/components/pages/Gallery.jsx
"use client";

import React from "react";
import GalleryImagePage from "@/components/pages/GalleryImagePage";

export default function Gallery() {
  return (
    <GalleryImagePage
      mode="all"
      title="Project Gallery"
      subtitle="Browse all commercial and residential gallery images, or filter by category."
    />
  );
}