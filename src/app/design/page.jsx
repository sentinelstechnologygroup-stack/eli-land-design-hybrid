// src/app/design/page.jsx
import Design from "@/components/pages/Design.jsx";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("design");

export default function DesignRoutePage() {
  return <Design />;
}