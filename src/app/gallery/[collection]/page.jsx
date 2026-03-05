// src/app/gallery/[collection]/page.jsx
import Component from "@/components/pages/GalleryCollection.jsx";

export const metadata = {
  title: "Gallery Collection",
  description:
    "Explore a gallery collection of ELI Land Design work organized by category and project type.",
};

export default function Page() {
  return <Component />;
}