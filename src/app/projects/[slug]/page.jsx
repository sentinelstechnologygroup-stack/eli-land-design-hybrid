// src/app/projects/[slug]/page.jsx
import Component from "@/components/pages/ProjectDetail.jsx";

export const metadata = {
  title: "Project Details",
  description:
    "Project details from the ELI Land Design portfolio, including scope, goals, and visual outcomes.",
};

export default function Page() {
  return <Component />;
}