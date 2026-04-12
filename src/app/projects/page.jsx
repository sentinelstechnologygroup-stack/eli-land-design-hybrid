// src/app/projects/page.jsx
import Projects from "@/components/pages/Projects.jsx";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("projects");

export default function Page() {
  return <Projects />;
}