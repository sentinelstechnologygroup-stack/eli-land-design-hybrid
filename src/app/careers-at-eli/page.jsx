// src/app/careers-at-eli/page.jsx
import Component from "@/components/pages/CareersAtELI.jsx";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("careersAtEli");

export default function Page() {
  return <Component />;
}