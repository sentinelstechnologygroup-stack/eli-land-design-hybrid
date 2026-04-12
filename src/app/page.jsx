// src/app/page.jsx
import Component from "@/components/pages/Home.jsx";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("home");

export default function Page() {
  return <Component />;
}