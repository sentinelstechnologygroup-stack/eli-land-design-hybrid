// src/components/pages/About.jsx
"use client";

import React from "react";
import { Award, Users, MapPin } from "lucide-react";
import PageShell from "@/components/shared/PageShell";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Panel } from "@/components/ui/panel";

const MEDIA = {
  hero: "/images/hero/about-hero.webp",
  authority: "/images/about/authority.webp",
  chris: "/images/about/chris.webp",
  matt: "/images/about/matt.webp",
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
    title: "Design",
    description:
      "Landscape architecture, planting design, irrigation coordination, and visual planning shaped around aesthetics, constructability, and long-term performance.",
  },
  {
    title: "Coordination",
    description:
      "Clear documentation and coordination support for builders, consultants, vendors, and project teams so design intent carries through the construction process.",
  },
];

const HISTORY = [
  "ELI Land Design was founded in 1997 by Chris K. Eiseman with a strong work ethic and a commitment to quality work that performs in the field.",
  "With expertise in landscape architecture, planning, and construction documentation, the firm supports projects from conceptual planning through detailed implementation guidance.",
  "That founding mindset continues today—focused on practical design, clear communication, and outdoor spaces that are both beautiful and buildable.",
];

const TIMELINE = [
  { year: "1997", label: "Founded by Chris K. Eiseman" },
  { year: "2002", label: "Chris graduates Texas A&M" },
  { year: "2012", label: "Matt Louderback joins as Professional Landscape Architect" },
  { year: "Today", label: "27+ years of experience" },
];

const TEAM = [
  {
    label: "Founder",
    name: "Chris K. Eiseman",
    suffix: "RLA",
    image: MEDIA.chris,
    bio:
      "With over 27 years of experience, Chris brings both design and construction expertise to every project.",
  },
  {
    label: "Landscape Architect, Lead Designer",
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
        className="aspect-[4/3] w-full object-cover"
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
      title="Landscape Architecture & Site Planning in Texas"
      subtitle="Landscape architecture focused on real-world performance, constructability, and long-term value."
      heroContentAlign="end"
    >
      <section className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 md:py-16 lg:px-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:items-start">
          <div className="space-y-8">
            <AnimatedSection>
              <h2 className="type-h2 text-[#1F2E23]">
                Technical site planning.
                <br />
                Practical design.
              </h2>
              <div className="mt-4 h-px w-16 bg-[#D86F3D]" />
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <Panel className="overflow-hidden border border-[#1F2E23]/10 bg-white shadow-none">
                <img
                  src={MEDIA.authority}
                  alt="Landscape planning and construction documentation"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </Panel>
            </AnimatedSection>
          </div>

          <div className="space-y-6">
            <AnimatedSection>
              <p className="type-body text-eli-muted">
                ELI Land Design is a landscape architecture firm providing site
                planning and design for residential and commercial projects
                across The Woodlands, Houston, and surrounding Texas markets.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <p className="type-body text-eli-muted">
                ELI focuses on creating landscapes that are not only
                visually compelling, but also buildable, efficient, and durable
                over time. Every project is approached with a balance of design
                intent, engineering awareness, and construction coordination.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.16}>
              <p className="type-body text-eli-muted">
                Services include master planning, grading, drainage design,
                irrigation systems, planting design, and full construction
                documentation.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.24}>
              <p className="type-body text-eli-muted">
                We specialize in technically challenging sites and
                complex coordination environments where planning quality
                directly impacts buildability, schedule, and long-term
                performance.
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
                      <p className="mt-2 type-small text-eli-muted">
                        {item.description}
                      </p>
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
            <h2 className="type-h2 text-white">Professional Approach</h2>
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            {APPROACH.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.08}>
                <div>
                  <h3 className="type-h3 text-white">{item.title}</h3>
                  <p className="mt-4 type-body text-white/90">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#1F2E23]/10">
        <div className="mx-auto max-w-[1120px] px-6 py-14 md:px-10 md:py-16">
          <AnimatedSection>
            <h2 className="type-h2 text-[#2c2e1f]">History</h2>
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
                <div className="mt-4 type-small text-[#1F2E23]/55">
                  {item.label}
                </div>
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
    </PageShell>
  );
}