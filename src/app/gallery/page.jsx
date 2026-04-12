// src/app/gallery/page.jsx
import Component from "@/components/pages/Gallery.jsx";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("gallery");

export default function Page() {
  return <Component />;
}