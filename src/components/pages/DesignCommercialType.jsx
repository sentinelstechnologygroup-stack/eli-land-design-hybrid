// location: pages/DesignCommercialType.jsx

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowRight, Home } from "lucide-react";
import PageShell from "../PageShell";
import AnimatedSection from "../shared/AnimatedSection";
import GallerySection from "../gallery/GallerySection";
import { ROUTES } from "@/components/utils/routes";
import BottomCTA from "@/components/shared/BottomCTA";

const TYPE_MAP = {
  "site-planning": {
    title: "Site Planning",
    lead: "Comprehensive master plans that establish grading, circulation, drainage, and landscape zones—balancing function, aesthetics, and budget while meeting municipal requirements.",
    whatWeDeliver: [
      "Site analysis & constraints mapping",
      "Master plan concepts & phasing",
      "Grading & drainage plans",
      "Circulation & parking layout",
      "Materials & plant palette",
      "Construction cost estimates",
    ],
    idealFor: [
      "Mixed-use developments",
      "Multifamily communities",
      "Commercial centers",
      "Master-planned communities",
    ],
  },
  "entry-monuments": {
    title: "Entry & Identity",
    lead: "Signature entry features, monument signage, and landscape elements that establish brand presence and create a memorable first impression.",
    whatWeDeliver: [
      "Entry monument design & detailing",
      "Landscape & hardscape integration",
      "Lighting design & specification",
      "Materials & finish selection",
      "Construction documents",
    ],
    idealFor: [
      "Residential communities",
      "Office & corporate campuses",
      "Retail developments",
      "HOA & property management",
    ],
  },
  "amenities": {
    title: "Amenities",
    lead: "Community gathering spaces, trails, pools, cabanas, and outdoor amenities that enhance property value and resident experience.",
    whatWeDeliver: [
      "Amenity space planning",
      "Pool deck & cabana design",
      "Trail & fitness zone layout",
      "Dog park & play area design",
      "Shade structures & seating",
      "Lighting & irrigation",
    ],
    idealFor: [
      "Multifamily communities",
      "Residential subdivisions",
      "HOA common areas",
      "Master-planned developments",
    ],
  },
  "multifamily": {
    title: "Multifamily",
    lead: "Landscape design for apartment communities—from streetscape to courtyards—that balances curb appeal, function, and long-term maintenance.",
    whatWeDeliver: [
      "Courtyard & common area design",
      "Streetscape & parking landscape",
      "Pool & amenity areas",
      "Entry & leasing office landscape",
      "Screening & buffering",
      "Maintenance-friendly planting",
    ],
    idealFor: [
      "Garden-style apartments",
      "Mid-rise & high-rise communities",
      "Student housing",
      "Senior living communities",
    ],
  },
  "retail": {
    title: "Retail",
    lead: "High-traffic commercial landscape designed for heavy use, limited maintenance, and long-term performance under contractor budgets.",
    whatWeDeliver: [
      "Parking lot islands & buffers",
      "Entry & storefront landscape",
      "Pedestrian zones & seating",
      "Screening & trash enclosures",
      "Irrigation & drainage",
      "Low-maintenance plant palettes",
    ],
    idealFor: [
      "Strip centers & shopping malls",
      "Restaurants & drive-throughs",
      "Big-box retail",
      "Service & convenience stores",
    ],
  },
  "office": {
    title: "Office & Corporate",
    lead: "Professional landscape environments for corporate campuses and office buildings—balancing aesthetics, function, and corporate identity.",
    whatWeDeliver: [
      "Entry plaza & drop-off design",
      "Campus landscape & circulation",
      "Parking & screening landscape",
      "Outdoor seating & gathering areas",
      "Accent & feature lighting",
      "Seasonal interest planting",
    ],
    idealFor: [
      "Corporate campuses",
      "Office buildings & parks",
      "Medical & professional buildings",
      "Tech & research facilities",
    ],
  },
};

export default function DesignCommercialType() {
  const { type } = useParams();
  const content = TYPE_MAP[type];

  if (!content) {
    return (
      <PageShell
        eyebrow="Commercial Design"
        title="Page Not Found"
        subtitle="The page you're looking for doesn't exist."
      >
        <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto text-center">
          <Link href={ROUTES.designCommercial}
            className="group inline-flex items-center gap-3 text-[#1F2E23] hover:text-[#6B7F5E] transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Commercial Design
          </Link>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell
      hero
      heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
      eyebrow="Commercial"
      title={content.title}
      subtitle={content.lead}
    >
      {/* Breadcrumbs */}
      <section className="py-8 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto border-b border-[#1F2E23]/10">
        <div className="flex items-center gap-2 text-xs font-sans-clean text-[#1F2E23]/40">
          <Link href={ROUTES.design} className="hover:text-[#1F2E23] transition-colors">
            Design
          </Link>
          <span>/</span>
          <Link href={ROUTES.designCommercial} className="hover:text-[#1F2E23] transition-colors">
            Commercial
          </Link>
          <span>/</span>
          <span className="text-[#1F2E23]">{content.title}</span>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <AnimatedSection>
            <h3 className="font-serif-display text-[#1F2E23] text-2xl font-light mb-6">
              What we deliver
            </h3>
            <ul className="space-y-3">
              {content.whatWeDeliver.map((item) => (
                <li
                  key={item}
                  className="text-[#1F2E23]/60 font-sans-clean text-sm flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 bg-[#6B7F5E] rounded-full mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h3 className="font-serif-display text-[#1F2E23] text-2xl font-light mb-6">
              Ideal for
            </h3>
            <ul className="space-y-3">
              {content.idealFor.map((item) => (
                <li
                  key={item}
                  className="text-[#1F2E23]/60 font-sans-clean text-sm flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 bg-[#6B7F5E] rounded-full mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#E8E0D4] py-24 md:py-36">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <GallerySection
            tags={["commercial", type]}
            limit={12}
            title="Related Work"
            columns={3}
            className="!py-0"
          />
        </div>
      </section>

      {/* SHARED BOTTOM CTA */}

    </PageShell>
  );
}