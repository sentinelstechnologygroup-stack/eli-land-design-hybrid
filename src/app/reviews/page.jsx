// src/app/reviews/page.jsx
import ReviewsClient from "./ReviewsClient";

export const metadata = {
  title: "Client Reviews",
  description:
    "Read client reviews and testimonials for ELI Land Design. Landscape architecture and land planning in Texas.",
};

export default function Page() {
  return <ReviewsClient />;
}