// src/app/gallery/renderings/page.jsx

import Component from "@/components/pages/Renderings.jsx";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("galleryRenderings");

export default function Page() {
  return <Component />;
}