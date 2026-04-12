// src/pages/About.jsx
import React from "react";
import { Award, Users, MapPin } from "lucide-react";
import PageShell from "../shared/PageShell";
import AnimatedSection from "../shared/AnimatedSection";
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

const HISTORY = [
  "ELI land design was founded in 1997 by Chris K. Eiseman with a single truck, a hard work ethic, and a love for the outdoors. He realized he wanted to set his business apart from the everyday landscape company, so he turned to the school of Landscape Architecture at Texas A&M University.",
  "With the knowledge of both design and construction, ELI land design can utilize these skills to provide our clients with an all-encompassing design from conceptual site planning to placing site furnishings. ELI land design is licensed in Texas and our project experience in design and construction ranges from parks and recreation facilities to high-end resort design.",
  "To this day, that founding spirit of craftsmanship remains a hallmark of our firm, supporting collaboration and innovation. The team that has joined Chris continues to seek a higher purpose for our work—creating outdoor spaces where clients and nature come together in harmony.",
];

const TIMELINE = [
  {
    year: "1997",
    label: "Founded by Chris K. Eiseman",
  },
  {
    year: "2002",
    label: "Chris graduates from Texas A&M",
  },
  {
    year: "2012",
    label: "Matt Louderback joins as RLA",
  },
  {
    year: "Today",
    label: "24+ years of excellence",
  },
];

const TEAM = [
  {
    label: "Founder & Lead Designer",
    name: "Chris K. Eiseman",
    suffix: "RLA",
    image: MEDIA.chris,
    bio:
      "Chris founded ELI land design in 1997 and graduated from Texas A&M's College of Architecture in 2002. With over 24 years of experience, he brings both design artistry and construction expertise to every project.",
  },
  {
    label: "Landscape Architect",
    name: "Matt Louderback",
    suffix: "RLA",
    image: MEDIA.matt,
    bio:
      "Matt joined ELI in 2012 after graduating from Texas A&M University. A registered Landscape Architect, Matt is involved with design, construction documentation, and renderings.",
  },
];

function TeamCard({ person }) {
  return (
    <Panel className="overflow-hidden border border-[#1F2E23]/10 bg-white shadow-none rounded-none">
      <img
        src={person.image}
        alt={`${person.name}, ${person.suffix}`}
        className="w-full aspect-[4/3] object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="p-5 md:p-6">
        <h3 className="font-sans-clean text-[24px] leading-tight text-[#1F2E23]">
          {person.name}, {person.suffix}
        </h3>
        <div className="mt-2 text-[12px] tracking-[0.04em] text-[#D86F3D] font-sans-clean font-semibold">
          {person.label}
        </div>
        <p className="mt-4 text-[#1F2E23]/70 font-sans-clean text-[14px] leading-[1.75]">
          {person.bio}
        </p>
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
      subtitle="Licensed landscape architects and construction specialists serving residential and commercial clients throughout The Woodlands, Houston, and surrounding markets since 1997."
    >
      {/* Authority Statement */}
      <section className="py-10 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div className="space-y-10">
            <AnimatedSection>
              <h2 className="font-serif-display text-[#1F2E23] text-4xl md:text-5xl font-light leading-[1.05]">
                Technical site planning.
                <br />
                Quality construction.
              </h2>
              <div className="w-16 h-px bg-[#1F2E23] mt-6"></div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <Panel className="shadow-sm border border-[#1F2E23]/10 rounded-none overflow-hidden">
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

          <div className="space-y-6">
            <AnimatedSection delay={0.2}>
              <p className="text-[#1F2E23]/70 font-sans-clean text-base leading-[1.75]">
                ELI Land Design was established in 1997 by Chris K. Eiseman, a
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

      {/* Approach */}
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

      {/* History */}
      <section className="py-14 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto border-t border-[#1F2E23]/10">
        <AnimatedSection>
          <div className="max-w-[1120px] mx-auto">
            <h2 className="font-serif-display text-[#1F2E23] text-4xl md:text-5xl font-light">
              History
            </h2>
            <div className="w-14 h-px bg-[#D86F3D] mt-4 mb-10"></div>

            <div className="space-y-6 max-w-[1040px]">
              {HISTORY.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-[#1F2E23]/70 font-sans-clean text-[15px] leading-[1.8]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 text-center">
              {TIMELINE.map((item) => (
                <div key={item.year}>
                  <div className="font-sans-clean text-[30px] md:text-[34px] font-semibold leading-none text-[#D86F3D]">
                    {item.year}
                  </div>
                  <div className="mt-4 text-[#1F2E23]/55 font-sans-clean text-[12px] leading-[1.6]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Our Team */}
      <section className="py-14 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="font-serif-display text-[#1F2E23] text-4xl md:text-5xl font-light">
              Our Team
            </h2>
            <div className="w-14 h-px bg-[#D86F3D] mt-4 mx-auto"></div>
          </div>
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1120px] mx-auto">
          {TEAM.map((person, idx) => (
            <AnimatedSection key={person.name} delay={idx * 0.1}>
              <TeamCard person={person} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      <BottomCTA />
    </PageShell>
  );
}