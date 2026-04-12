// src/app/about/page.jsx
import Component from "@/components/pages/About.jsx";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("about");

export default function Page() {
  return <Component />;
}