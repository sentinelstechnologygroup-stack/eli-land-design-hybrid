// src/pages/About.jsx
import React from "react";
import Link from "next/link";
import { ArrowRight, Award, Users, MapPin } from "lucide-react";
import PageShell from "../PageShell";
import AnimatedSection from "../shared/AnimatedSection";
import { ROUTES } from "@/components/utils/routes";
import { Button } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import BottomCTA from "@/components/shared/BottomCTA";

// =============================
// Easy-to-edit Config Blocks
// =============================

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
      "Site analysis, grading strategy, drainage design, and construction documentation that accounts for existing conditions, municipal requirements, and buildability constraints.",
  },
  {
    title: "Execution",
    description:
      "In-house construction crews managing hardscape installation, grading, irrigation, and planting—ensuring design intent translates to built reality without coordination gaps.",
  },
  {
    title: "Stewardship",
    description:
      "Long-term project support, warranty service, and consultation for landscape maintenance strategies that preserve design quality and system performance.",
  },
];

const TEAM = [
  {
    label: "Principal",
    name: "Chris K. Eiseman",
    suffix: "RLA",
    credentials: [],
    image: MEDIA.chris,
    email: "chris@elilanddesign.com",
    bio: [
      "Chris grew up in northern California then moved to Texas where his family decided to call home. As the son of a master carpenter and a florist, his childhood was always surrounded by plants and construction, and not much has changed.",
      "Chris began his career in the landscape field at the age of 10 by cutting grass and gardening within the local community. Those early years provided great educational experience teaching him the importance of quality work as well as many lessons in customer service.",
      "Chris founded E.L.I. land design in the spring of 1997 at the age of 20 and quickly realized that he wanted to set his business apart from the everyday landscape company. To do so he turned to Texas A&M's College of Architecture. In 2002, Chris graduated with a bachelor’s degree in Landscape Architecture and since then has been designing and building landscapes for commercial and residential clients in the Houston area.",
      "Today, Chris is married to his college sweetheart Katie. They have settled down in Montgomery with their two dogs. They love to cook, travel, and enjoy the outdoors. Chris is an avid outdoorsman, practitioner of Brazilian Jiu Jitsu, and an instrument rated pilot.",
      "He is a licensed landscape architect in the state of Texas and holds a Texas Irrigators license. He is known for his honesty and quality craftsmanship. Very rarely do you have someone who not only can design a site but can do the construction as well (and sometimes both simultaneously).",
      "Whether working on a large scale multi-acre facility or small private garden, working with plants remains Chris’s most passionate aspect of landscape architecture. The ELI website is a good sampling of his work but he is always looking for a new challenge—feel free to contact Chris directly to discuss your upcoming project.",
    ],
  },
  {
    label: "Landscape Architect",
    name: "Matt Louderback",
    suffix: "RLA",
    credentials: [],
    image: MEDIA.matt,
    email: null,
    bio: [
      "Matt Louderback joined E.L.I. land design in 2012 after graduating from Texas A&M University. Matt’s childhood was spent growing up in Colorado where he developed a love for the outdoors and the natural environment.",
      "Upon moving to Texas, Matt developed a passion for art and graphite drawing. He enjoys being able to create something out of nothing. Those two passions led him to pursue a degree in Landscape Architecture at Texas A&M.",
      "Matt is a registered Landscape Architect and is involved with the design, construction documentation, and renderings at E.L.I. land design.",
    ],
  },
];

function CredentialsLine({ suffix, credentials }) {
  const list = [
    suffix ? suffix : null,
    ...(Array.isArray(credentials) ? credentials : []),
  ].filter(Boolean);

  if (!list.length) return null;

  return (
    <div className="text-[11px] tracking-[0.22em] uppercase text-[#1F2E23]/45 font-sans-clean font-semibold mt-2">
      {list.join(" • ")}
    </div>
  );
}

function LeaderText({ person }) {
  return (
    <div className="flex flex-col justify-start h-full">
      <div className="text-[9px] tracking-[0.3em] uppercase text-[#1F2E23]/40 font-sans-clean font-semibold mb-4">
        {person.label}
      </div>

      <h3 className="font-serif-display text-[#1F2E23] text-3xl md:text-4xl font-light">
        {person.name}
      </h3>

      <CredentialsLine suffix={person.suffix} credentials={person.credentials} />

      <div className="w-14 h-px bg-[#1F2E23]/80 my-7"></div>

      <div className="space-y-5 text-[#1F2E23]/70 font-sans-clean text-[15px] leading-[1.75]">
        {person.bio.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {person.email ? (
        <div className="mt-7">
          <a
            href={`mailto:${person.email}`}
            className="text-[#1F2E23]/65 font-sans-clean text-sm underline underline-offset-4 hover:text-[#1F2E23] transition-colors"
          >
            {person.email}
          </a>
        </div>
      ) : null}
    </div>
  );
}

export default function About() {
  return (
    <PageShell
      hero
      heroImage={MEDIA.hero}
      eyebrow="About E.L.I. Land Design"
      title="Landscape Architecture & Construction Services in Texas"
      subtitle="Licensed landscape architects and construction specialists serving residential and commercial clients throughout The Woodlands, Houston, and surrounding markets since 1997."
    >
      {/* Authority Statement */}
        <section className="py-10 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            
            {/* LEFT COLUMN */}
            <div className="space-y-10">
              <AnimatedSection>
                <h2 className="font-serif-display text-[#1F2E23] text-4xl md:text-5xl font-light leading-[1.05]">
                  Technical site planning.
                  <br />
                  Quality construction.
                </h2>
                <div className="w-16 h-px bg-[#1F2E23] mt-6"></div>
              </AnimatedSection>

              {/* ✅ Rounded Image Panel */}
              <AnimatedSection delay={0.15}>
                <Panel className="shadow-sm border border-[#1F2E23]/10">
                  <img
                    src={MEDIA.authority}
                    alt="Landscape design planning and construction documentation"
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </Panel>
              </AnimatedSection>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">
              <AnimatedSection delay={0.2}>
                <p className="text-[#1F2E23]/70 font-sans-clean text-base leading-[1.75]">
                  E.L.I. Land Design was established in 1997 by Chris K. Eiseman, a
                  licensed Texas landscape architect with expertise in residential
                  estate design, commercial site planning, and landscape
                  construction. The firm provides comprehensive services from
                  initial site analysis through final installation, with in-house
                  design and construction capabilities.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p className="text-[#1F2E23]/70 font-sans-clean text-base leading-[1.75]">
                  Project types include private estates, custom residential
                  properties, multifamily communities, office parks, retail
                  centers, and municipal landscapes. Services include master
                  planning, grading and drainage design, construction
                  documentation, irrigation design, planting plans, and design-build
                  installation.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <p className="text-[#1F2E23]/70 font-sans-clean text-base leading-[1.75]">
                  The firm specializes in technically challenging sites—poor
                  drainage, steep slopes, tight budgets, and coordination with
                  civil engineers, architects, and general contractors.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

      {/* Experience Stats */}
      <section className="py-10 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto border-t border-[#1F2E23]/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {METRICS.map((m, idx) => {
            const Icon = m.icon;
            return (
              <AnimatedSection key={m.value} delay={idx * 0.1}>
                <div className="flex items-start gap-4">
                  <Icon className="w-6 h-6 text-[#6B7F5E] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-serif-display text-3xl text-[#1F2E23] font-light mb-2">
                      {m.value}
                    </div>
                    <p className="text-[#1F2E23]/60 font-sans-clean text-sm leading-[1.7]">
                      {m.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* Approach (Color Band) */}
      <section className="border-t border-[#1F2E23]/10">
        <div className="bg-[#1F2E23]">
          <div className="py-10 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
            <AnimatedSection>
              <h2
                className="font-serif-display text-4xl md:text-5xl font-light mb-20"
                style={{ color: "#F5F0EA" }}
              >
                Professional Approach
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {APPROACH.map((item, idx) => (
                <AnimatedSection key={item.title} delay={idx * 0.1}>
                  <div>
                    <h3
                      className="font-serif-display text-2xl font-light mb-4"
                      style={{ color: "#F5F0EA" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="font-sans-clean text-sm leading-[1.7]"
                      style={{ color: "rgba(245,240,234,0.78)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-10 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto border-t border-[#1F2E23]/10">
        <AnimatedSection>
          <h2 className="font-serif-display text-[#1F2E23] text-4xl md:text-5xl font-light mb-20">
            Leadership
          </h2>
        </AnimatedSection>

        <div className="space-y-24">
          {TEAM.map((p, idx) => {
            const reverse = idx % 2 === 1;

            return (
              <div
                key={p.name}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start"
              >
                {/* IMAGE COLUMN */}
                <AnimatedSection
                  className={reverse ? "order-1 md:order-2" : "order-1 md:order-1"}
                >
                  <Panel className="border border-[#1F2E23]/10 bg-[#F8F4ED]">
                    <img
                      src={p.image}
                      alt={`${p.name}${p.suffix ? `, ${p.suffix}` : ""}`}
                      className="w-full aspect-[4/3] md:aspect-[1/1] object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </Panel>
                </AnimatedSection>

                {/* TEXT COLUMN */}
                <AnimatedSection
                  delay={0.15}
                  className={reverse ? "order-2 md:order-1" : "order-2 md:order-2"}
                >
                  <LeaderText person={p} />
                </AnimatedSection>
              </div>
            );
          })}
        </div>
      </section>

      {/* SHARED BOTTOM CTA */}

    </PageShell>
  );
}