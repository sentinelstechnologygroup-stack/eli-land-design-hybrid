// src/app/gallery/commercial/page.jsx

import Component from "@/components/pages/GalleryCommercial.jsx";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("galleryCommercial");

export default function Page() {
  return <Component />;
}