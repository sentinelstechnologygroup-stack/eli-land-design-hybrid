// src/app/contact/page.jsx
import ContactClient from "@/components/pages/Contact.client.jsx";
import { getPageMetadata } from "@/lib/seo";

export const metadata = getPageMetadata("contact");

export default function Page() {
  return <ContactClient />;
}