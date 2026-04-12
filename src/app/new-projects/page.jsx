// src/app/new-projects/page.jsx
import NewProjectsPage from "@/components/pages/NewProjects";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("newProjects");

export default function Page() {
  return <NewProjectsPage />;
}