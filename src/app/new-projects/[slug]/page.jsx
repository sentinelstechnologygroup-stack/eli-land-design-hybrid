// app/new-projects/[slug]/page.jsx

import NewProjectDetailPage from "@/components/pages/NewProjectDetail";
import { getNewProjects } from "@/data/newProjectsData";

export function generateStaticParams() {
  return getNewProjects().map((project) => ({
    slug: project.slug,
  }));
}

export default function Page({ params }) {
  return <NewProjectDetailPage slug={params.slug} />;
}