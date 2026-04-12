// src/components/pages/CareersAtELI.jsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Briefcase, Users, MapPin, Mail } from "lucide-react";
import PageShell from "@/components/shared/PageShell";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { ROUTES } from "@/components/utils/routes";
import { Panel } from "@/components/ui/panel";
import { Button } from "@/components/ui/button";

const MEDIA = {
  hero: "/images/contact/careers-at-eli/apply/hero.jpg",
};

const OPENINGS = [
  {
    title: "Landscape Designer (Contract / Part-Time)",
    location: "The Woodlands / Houston, TX",
    summary:
      "Support conceptual design, documentation, and client-ready presentation deliverables.",
    bullets: [
      "3–5 years landscape architecture experience preferred.",
      "Proficiency in CAD and rendering workflows.",
      "Strong organization and deadline discipline.",
      "Client presentation confidence.",
    ],
  },
  {
    title: "Field Coordination (Project Support)",
    location: "Greater Houston",
    summary:
      "Assist with site coordination, scheduling touchpoints, and construction documentation flow.",
    bullets: [
      "Experience reading landscape plans.",
      "Strong communication with crews and vendors.",
      "Detail-oriented documentation skills.",
      "Reliable transportation required.",
    ],
  },
  {
    title: "Intern / Junior Support (Seasonal)",
    location: "Hybrid",
    summary:
      "Help with organization, research, and basic drafting/layout tasks under supervision.",
    bullets: [
      "Willingness to learn and grow.",
      "Basic drafting familiarity a plus.",
      "Strong work ethic.",
      "Ability to take direction well.",
    ],
  },
];

export default function CareersAtELI() {
  return (
    <PageShell
      hero
      heroImage={MEDIA.hero}
      eyebrow="Careers"
      title="Build disciplined landscapes with a team that takes pride in the work."
      subtitle="Current openings and interest submissions. If you’re aligned with disciplined planning and build-ready execution, we’d like to hear from you."
      showCtaStrip={false}
      showBottomCta={false}
    >
      <section className="mx-auto max-w-[1440px] px-6 pb-10 pt-14 md:px-10 md:pt-16 lg:px-20">
        <AnimatedSection>
          <p className="max-w-3xl type-body text-eli-muted">
            We’re a small team that values clear communication, professional standards,
            and practical design thinking. Roles may be contract, part-time, or
            project-based depending on workload.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={ROUTES.gallery}
              className="inline-flex items-center gap-3 type-button text-[#1F2E23]/70 transition-colors hover:text-[#1F2E23] no-underline"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              View Work Examples
            </Link>

            <Link
              href={ROUTES.contact}
              className="inline-flex items-center gap-3 type-button text-[#1F2E23]/70 transition-colors hover:text-[#1F2E23] no-underline"
            >
              Contact
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-16 md:px-10 lg:px-20">
        <AnimatedSection>
          <div className="mb-6 flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-[#1F2E23]/60" />
            <div className="type-micro text-[#1F2E23]/70">Current Openings</div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {OPENINGS.map((opening) => (
              <Panel key={opening.title} className="border border-[#1F2E23]/10 bg-white/70 p-7 shadow-none">
                <div className="type-h3 text-[#1F2E23]">{opening.title}</div>

                <div className="mt-4 flex items-center gap-2 type-small text-[#1F2E23]/60">
                  <MapPin className="h-4 w-4" />
                  {opening.location}
                </div>

                <p className="mt-4 type-small text-[#1F2E23]/60">{opening.summary}</p>

                {opening.bullets?.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {opening.bullets.map((item, index) => (
                      <li
                        key={`${opening.title}-${index}`}
                        className="flex items-start gap-3 type-small text-[#1F2E23]/70"
                      >
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-[#1F2E23]/35" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Panel>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-10 md:pb-32 lg:px-20">
        <AnimatedSection>
          <Panel className="border border-[#1F2E23]/10 bg-[#F5F0EA]/55 p-8 shadow-none md:p-10">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-[#1F2E23]/60" />
              <div className="type-micro text-[#1F2E23]/70">Submit Interest</div>
            </div>

            <p className="mt-5 max-w-3xl type-body text-eli-muted">
              For now, please email your resume and a brief note on the type of work
              you’re looking for.
            </p>

            <div className="mt-8">
              <Button asChild variant="eli" size="eli">
                <a href="mailto:chris@elilanddesign.com" className="inline-flex items-center gap-4">
                  <Mail className="h-4 w-4" />
                  Email Resume
                </a>
              </Button>
            </div>
          </Panel>
        </AnimatedSection>
      </section>
    </PageShell>
  );
}