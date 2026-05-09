// src/app/gallery/residential/page.jsx

import Component from "@/components/pages/GalleryResidential.jsx";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("galleryResidential");

export default function Page() {
  return <Component />;
}