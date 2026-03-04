// @ts-nocheck
// src/pages/CareersAtELI.jsx
import React from "react";
import Link from "next/link";
import { ArrowRight, Briefcase, Users, MapPin, Mail } from "lucide-react";
import PageShell from "../PageShell";
import AnimatedSection from "../shared/AnimatedSection";
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
    summary: "Support conceptual design, documentation, and client-ready presentation deliverables.",
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
    summary: "Assist with site coordination, scheduling touchpoints, and construction documentation flow.",
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
    summary: "Help with organization, research, and basic drafting/layout tasks under supervision.",
    bullets: ["Willingness to learn and grow.", "Basic drafting familiarity a plus.", "Strong work ethic.", "Ability to take direction well."],
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
      showCtaStrip={false} // ✅ Careers does NOT use the global CTA strip
      showBottomCta={false} // ✅ Careers does NOT use the standard BottomCTA
    >
      {/* Intro */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto pt-14 md:pt-16 pb-10">
        <AnimatedSection>
          <p className="text-[#1F2E23]/60 font-sans-clean text-base leading-[1.9] max-w-3xl">
            We’re a small team that values clear communication, professional standards, and practical
            design thinking. Roles may be contract, part-time, or project-based depending on workload.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={ROUTES.gallery}
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase font-sans-clean font-semibold text-[#1F2E23]/70 hover:text-[#1F2E23] transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              View Work Examples
            </Link>

            <Link href={ROUTES.contact}
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase font-sans-clean font-semibold text-[#1F2E23]/70 hover:text-[#1F2E23] transition-colors"
            >
              Contact
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* Openings */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto pb-16">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-5 h-5 text-[#1F2E23]/60" />
            <div className="text-[11px] tracking-[0.28em] uppercase font-sans-clean font-semibold text-[#1F2E23]/70">
              Current Openings
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {OPENINGS.map((o) => (
              <Panel key={o.title} className="border border-[#1F2E23]/10 bg-white/70 p-7">
                <div className="font-serif-display text-[22px] leading-[1.2] text-[#1F2E23] font-light">
                  {o.title}
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-[#1F2E23]/60 font-sans-clean">
                  <MapPin className="w-4 h-4" />
                  {o.location}
                </div>

                <p className="mt-4 text-sm text-[#1F2E23]/60 font-sans-clean leading-[1.9]">
                  {o.summary}
                </p>

                {Array.isArray(o.bullets) && o.bullets.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {o.bullets.map((item, i) => (
                      <li
                        key={`${o.title}-b-${i}`}
                        className="flex items-start gap-3 text-sm text-[#1F2E23]/70 font-sans-clean"
                      >
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#1F2E23]/35 shrink-0" />
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

      {/* Interest submission */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto pb-24 md:pb-32">
        <AnimatedSection>
          <Panel className="border border-[#1F2E23]/10 bg-[#F5F0EA]/55 p-8 md:p-10">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-[#1F2E23]/60" />
              <div className="text-[11px] tracking-[0.28em] uppercase font-sans-clean font-semibold text-[#1F2E23]/70">
                Submit Interest
              </div>
            </div>

            <p className="mt-5 text-[#1F2E23]/60 font-sans-clean text-base leading-[1.9] max-w-3xl">
              For now, please email your resume and a brief note on the type of work you’re looking for.
            </p>

            <div className="mt-8">
              <Button asChild variant="eli" size="eli">
                <a href="mailto:chris@elilanddesign.com" className="inline-flex items-center gap-4">
                  <Mail className="w-4 h-4" />
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