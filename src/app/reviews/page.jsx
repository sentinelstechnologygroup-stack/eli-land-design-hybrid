// src/app/reviews/page.jsx
import ReviewsClient from "./ReviewsClient";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("reviews");

export default function Page() {
  return <ReviewsClient />;
}