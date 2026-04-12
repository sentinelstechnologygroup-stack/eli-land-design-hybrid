// src/app/construction/page.jsx
import Component from "@/components/pages/Construction.jsx";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("construction");

export default function Page() {
  return <Component />;
}