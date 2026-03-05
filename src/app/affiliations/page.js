// src/app/affiliations/page.js
import AffiliationsClient from "./AffiliationsClient";

export const metadata = {
  title: "Affiliations",
  description:
    "Professional affiliations and recognition for ELI Land Design and our landscape architecture practice.",
};

export default function Page() {
  return <AffiliationsClient />;
}