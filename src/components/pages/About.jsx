// src/components/pages/About.jsx
"use client";

import React from "react";
import { Award, Users, MapPin } from "lucide-react";
import PageShell from "@/components/shared/PageShell";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Panel } from "@/components/ui/panel";
import BottomCTA from "@/components/shared/BottomCTA";

const MEDIA = {
  hero: "/images/about/hero.jpg",
  authority: "/images/about/authority.jpg",
  chris: "/images/about/chris.jpg",
  matt: "/images/about/matt.jpg",
};

const METRICS = [
  {
    icon: Award,
    value: "27+ Years",
    description:
      "Licensed landscape architecture practice serving Texas clients since 1997",
  },
  {
    icon: Users,
    value: "500+ Projects",
    description:
      "Residential estates, commercial developments, and community landscapes completed",
  },
  {
    icon: MapPin,
    value: "Regional Focus",
    description:
      "The Woodlands, Houston, and surrounding Montgomery and Harris county communities",
  },
];

const APPROACH = [
  {
    title: "Planning",
    description:
      "Site analysis, grading strategy, drainage design, and construction documentation that account for existing conditions, municipal requirements, and buildability constraints.",
  },
  {
    title: "Execution",
    description:
      "In-house construction crews managing hardscape installation, grading, irrigation, and planting so design intent translates cleanly to built reality.",
  },
  {
    title: "Stewardship",
    description:
      "Long-term project support, warranty service, and consultation for maintenance strategies that preserve design quality and system performance.",
  },
];

const HISTORY = [
  "ELI Land Design was founded in 1997 by Chris K. Eiseman with a strong work ethic and a commitment to quality work that performs in the field.",
  "With expertise in both design and construction, the firm delivers full-scope landscape architecture from conceptual planning through installation.",
  "That founding mindset continues today—focused on craftsmanship, collaboration, and outdoor spaces that are both beautiful and buildable.",
];

const TIMELINE = [
  { year: "1997", label: "Founded by Chris K. Eiseman" },
  { year: "2002", label: "Chris graduates Texas A&M" },
  { year: "2012", label: "Matt Louderback joins as RLA" },
  { year: "Today", label: "27+ years of excellence" },
];

const TEAM = [
  {
    label: "Founder & Lead Designer",
    name: "Chris K. Eiseman",
    suffix: "RLA",
    image: MEDIA.chris,
    bio:
      "With over 27 years of experience, Chris brings both design and construction expertise to every project.",
  },
  {
    label: "Landscape Architect",
    name: "Matt Louderback",
    suffix: "RLA",
    image: MEDIA.matt,
    bio:
      "Matt focuses on design development, construction documentation, and visualization.",
  },
];

function TeamCard({ person }) {
  return (
    <Panel className="overflow-hidden border border-[#1F2E23]/10 bg-white shadow-none">
      <img
        src={person.image}
        alt={`${person.name}, ${person.suffix}`}
        className="w-full aspect-[4/3] object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="p-5 md:p-6">
        <h3 className="type-h3 text-[#1F2E23]">
          {person.name}, {person.suffix}
        </h3>
        <div className="mt-2 type-micro text-[#D86F3D]">{person.label}</div>
        <p className="mt-4 type-body text-eli-muted">{person.bio}</p>
      </div>
    </Panel>
  );
}

export default function About() {
  return (
    <PageShell
      hero
      heroImage={MEDIA.hero}
      eyebrow="About ELI Land Design"
      title="Landscape Architecture & Construction Services in Texas"
      subtitle="27+ Years of experience delivering landscape architecture and construction services across Texas."
    >
      <section className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 md:py-16 lg:px-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:items-start">
          <div className="space-y-8">
            <AnimatedSection>
              <h2 className="type-h2 text-[#1F2E23]">
                Technical site planning.
                <br />
                Quality construction.
              </h2>
              <div className="mt-4 h-px w-16 bg-[#D86F3D]" />
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <Panel className="overflow-hidden border border-[#1F2E23]/10 bg-white shadow-none">
                <img
                  src={MEDIA.authority}
                  alt="Landscape planning and construction documentation"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </Panel>
            </AnimatedSection>
          </div>

          <div className="space-y-6">
            <AnimatedSection>
              <p className="type-body text-eli-muted">
                ELI Land Design provides landscape architecture and site planning
                built for real-world conditions—balancing aesthetics, constructability,
                and long-term performance.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <p className="type-body text-eli-muted">
                Services include master planning, grading, drainage, irrigation,
                planting plans, and full design-build coordination.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.16}>
              <p className="type-body text-eli-muted">
                The firm specializes in technically challenging sites and complex
                coordination environments where planning quality directly affects
                buildability, schedule, and long-term results.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="border-t border-[#1F2E23]/10">
        <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-10 md:py-14 lg:px-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {METRICS.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.value} delay={index * 0.08}>
                  <div className="flex items-start gap-4">
                    <Icon className="mt-1 h-5 w-5 text-[#6B7F5E]" />
                    <div>
                      <div className="type-h3 text-[#1F2E23]">{item.value}</div>
                      <p className="mt-2 type-small text-eli-muted">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#1F2E23]">
        <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 md:py-16 lg:px-20">
          <AnimatedSection>
            <h2 className="type-h2 text-[#F5F0EA]">Professional Approach</h2>
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            {APPROACH.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.08}>
                <div>
                  <h3 className="type-h3 text-[#F5F0EA]">{item.title}</h3>
                  <p className="mt-3 type-body text-[#F5F0EA]/78">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#1F2E23]/10">
        <div className="mx-auto max-w-[1120px] px-6 py-14 md:px-10 md:py-16">
          <AnimatedSection>
            <h2 className="type-h2 text-[#1F2E23]">History</h2>
            <div className="mt-4 h-px w-14 bg-[#D86F3D]" />
          </AnimatedSection>

          <div className="mt-10 space-y-6">
            {HISTORY.map((paragraph, index) => (
              <AnimatedSection key={index} delay={index * 0.04}>
                <p className="type-body text-eli-muted">{paragraph}</p>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 text-center md:grid-cols-4">
            {TIMELINE.map((item, index) => (
              <AnimatedSection key={item.year} delay={index * 0.04}>
                <div className="text-[30px] font-semibold leading-none text-[#D86F3D] md:text-[34px]">
                  {item.year}
                </div>
                <div className="mt-4 type-small text-[#1F2E23]/55">{item.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1120px] px-6 py-14 md:px-10 md:py-16">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="type-h2 text-[#1F2E23]">Our Team</h2>
              <div className="mx-auto mt-4 h-px w-14 bg-[#D86F3D]" />
            </div>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {TEAM.map((person, index) => (
              <AnimatedSection key={person.name} delay={index * 0.08}>
                <TeamCard person={person} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA />
    </PageShell>
  );
}