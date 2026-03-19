// src/pages/About.jsx
import React from "react";
import PageShell from "../PageShell";
import AnimatedSection from "../shared/AnimatedSection";
import BottomCTA from "@/components/shared/BottomCTA";
import { Panel } from "@/components/ui/panel";
import CTASection from "@/components/home/HubBreakCTA";

const MEDIA = {
  hero: "/images/about/hero.jpg",
  philosophy: "/images/about/philosophy.jpg",
  community: "/images/about/community.jpg",
  chris: "/images/about/chris.jpg",
  matt: "/images/about/matt.jpg",
};

const PHILOSOPHY = [
  "E.L.I. Land Design specializes in the planning, design, and installation of commercial and residential landscapes in The Woodlands and Houston area. Thoughtful design and an impeccable execution result in unique outdoor spaces that engage and inspire.",
  "The team at E.L.I. takes delight in our ability to observe the balance between architecture, the natural character of the site, and our clients’ interests. With the experience to manage complex projects and sophisticated clientele, E.L.I. not only brings artistry to landscape installations, but also exacting execution.",
];

const PEOPLE = [
  "We are a community of designers, architects, and craftsmen driven to create places of meaning and beauty. We work to amplify connections between architecture and nature, bringing joy to our clients through innovative design.",
  "E.L.I.’s land design is guided by Chris Eiseman. With over two decades of experience in landscape construction and landscape architectural design, the team creates innovative and dramatic landscapes that reflect an artistic blend of form and function.",
];

const COMMUNITY = [
  "We believe embracing diversity on all levels leads toward quality and inclusivity. We value the integrity of people and recognize the rights of all individuals. Respect, acceptance, and appreciation of others is fundamental to our culture and the impact of our work.",
  "Whether designing a restorative private garden, reimagining an outdoor living space, or developing the vision for a contemporary landscape within a delicate ecosystem, we are committed to creating places that connect people with nature.",
];

const HISTORY = [
  "E.L.I. Land Design was founded in 1997 by Chris K. Eiseman with a single truck, a hard work ethic, and a love for the outdoors. He realized he wanted to set his business apart from the everyday landscape company, so he turned to the School of Landscape Architecture at Texas A&M University.",
  "With the knowledge of both design and construction, E.L.I. Land Design can utilize these skills to provide our clients with an all-encompassing design from conceptual site planning to pacing site furnishings. E.L.I. Land Design is licensed in Texas and our project experience in design and construction ranges from parks and recreation facilities to high-end resort design.",
  "To this day, that founding spirit of craftsmanship remains a hallmark of our firm, supporting collaboration and innovation. The team that has joined Chris continues to seek a higher purpose for our work—creating outdoor spaces where clients and nature come together in harmony.",
];

const TIMELINE = [
  { year: "1997", label: "Founded by Chris K. Eiseman" },
  { year: "2002", label: "Chris graduates from Texas A&amp;M" },
  { year: "2012", label: "Matt Louderback joins as RLA" },
  { year: "Today", label: "Decades of regional experience" },
];

const TEAM = [
  {
    name: "Chris K. Eiseman, RLA",
    role: "Founder & Lead Designer",
    image: MEDIA.chris,
    bio: "Chris founded E.L.I. Land Design in 1997 and graduated from Texas A&amp;M’s College of Architecture in 2002. With decades of experience, he brings both design artistry and construction expertise to every project.",
  },
  {
    name: "Matt Louderback, RLA",
    role: "Landscape Architect",
    image: MEDIA.matt,
    bio: "Matt joined E.L.I. in 2012 after graduating from Texas A&amp;M University. A registered Landscape Architect, Matt is involved with design, construction documentation, and renderings across the firm’s portfolio.",
  },
];

function SectionIntro({ title, centered = false }) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="font-serif-display text-[34px] leading-[1.08] text-[#3D4035] md:text-[46px]">
        {title}
      </h2>
      <div
        className={`mt-4 h-[2px] w-14 bg-[#D47C4E] ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}

function TextColumns({ paragraphs, className = "" }) {
  return (
    <div className={`grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-14 ${className}`}>
      {paragraphs.map((paragraph, idx) => (
        <p
          key={idx}
          className="font-sans-clean text-[15px] leading-[1.9] text-[#5B6157]"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
    </div>
  );
}

function SplitImageText({
  title,
  paragraphs,
  image,
  imageAlt,
  reverse = false,
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
      <AnimatedSection className={reverse ? "order-2 md:order-2" : "order-2 md:order-1"}>
        <Panel className="overflow-hidden border border-[#D9D2C7] bg-white shadow-[0_10px_30px_rgba(15,23,15,0.08)]">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </Panel>
      </AnimatedSection>

      <AnimatedSection
        delay={0.08}
        className={reverse ? "order-1 md:order-1" : "order-1 md:order-2"}
      >
        <SectionIntro title={title} />
        <div className="mt-8 space-y-5">
          {paragraphs.map((paragraph, idx) => (
            <p
              key={idx}
              className="font-sans-clean text-[15px] leading-[1.9] text-[#5B6157]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

function Timeline() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-8 border-t border-[#D9D2C7] pt-10 md:grid-cols-4">
      {TIMELINE.map((item) => (
        <div key={item.year} className="text-center">
          <div className="font-sans-clean text-[28px] font-semibold leading-none text-[#D86F3D]">
            {item.year}
          </div>
          <div
            className="mt-3 font-sans-clean text-[12px] leading-[1.7] text-[#6A7067]"
            dangerouslySetInnerHTML={{ __html: item.label }}
          />
        </div>
      ))}
    </div>
  );
}

function TeamCard({ person }) {
  return (
    <Panel className="overflow-hidden border border-[#D9D2C7] bg-white shadow-[0_10px_30px_rgba(15,23,15,0.06)]">
      <img
        src={person.image}
        alt={person.name}
        className="aspect-[4/3] w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="p-6 md:p-7">
        <h3
          className="font-sans-clean text-[20px] font-semibold leading-snug text-[#3D4035]"
          dangerouslySetInnerHTML={{ __html: person.name }}
        />
        <div className="mt-2 font-sans-clean text-[12px] font-semibold uppercase tracking-[0.22em] text-[#D47C4E]">
          {person.role}
        </div>
        <p
          className="mt-4 font-sans-clean text-[14px] leading-[1.85] text-[#5B6157]"
          dangerouslySetInnerHTML={{ __html: person.bio }}
        />
      </div>
    </Panel>
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
      <section className="bg-[#F6F1E9]">
        <div className="mx-auto max-w-[1200px] px-6 py-18 md:px-10 md:py-24">
          <AnimatedSection>
            <SectionIntro title="Our Design Philosophy" />
          </AnimatedSection>

          <AnimatedSection delay={0.06}>
            <TextColumns paragraphs={PHILOSOPHY} className="mt-10" />
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#FBF8F2]">
        <div className="mx-auto max-w-[1200px] px-6 py-8 md:px-10 md:py-10">
          <SplitImageText
            title="People"
            paragraphs={PEOPLE}
            image={MEDIA.philosophy}
            imageAlt="E.L.I. team working on landscape drawings"
          />
        </div>
      </section>

      <section className="bg-[#F6F1E9]">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-20">
          <SplitImageText
            title="Cultivating Community"
            paragraphs={COMMUNITY}
            image={MEDIA.community}
            imageAlt="Community landscape and park environment"
            reverse
          />
        </div>
      </section>

      <CTASection />

      <section className="bg-[#FBF8F2]">
        <div className="mx-auto max-w-[1200px] px-6 py-18 md:px-10 md:py-24">
          <AnimatedSection>
            <SectionIntro title="History" />
          </AnimatedSection>

          <AnimatedSection delay={0.06}>
            <div className="mt-10 max-w-[980px] space-y-5">
              {HISTORY.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="font-sans-clean text-[15px] leading-[1.9] text-[#5B6157]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Timeline />
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#F6F1E9]">
        <div className="mx-auto max-w-[1200px] px-6 py-18 md:px-10 md:py-24">
          <AnimatedSection>
            <SectionIntro title="Our Team" centered />
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {TEAM.map((person, idx) => (
              <AnimatedSection key={person.name} delay={idx * 0.08}>
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