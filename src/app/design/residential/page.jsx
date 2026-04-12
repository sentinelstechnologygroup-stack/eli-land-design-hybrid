// src/app/design/residential/page.jsx
import DesignResidential from "@/components/pages/DesignResidential";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("designResidential");

export default function ResidentialDesignPage() {
  return <DesignResidential />;
}