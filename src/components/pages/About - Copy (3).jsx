// src/pages/About.jsx
import React from "react";
import PageShell from "../PageShell";
import AnimatedSection from "../shared/AnimatedSection";
import BottomCTA from "@/components/shared/BottomCTA";
import CTASection from "@/components/home/CTASection";
import { Panel } from "@/components/ui/panel";

const MEDIA = {
  hero: "/images/about/hero.jpg",
  authority: "/images/about/authority.jpg",
  community: "/images/about/community.jpg",
  chris: "/images/about/chris.jpg",
  matt: "/images/about/matt.jpg",
};

const PHILOSOPHY = [
  "E.L.I. Land Design was established in 1997 by Chris K. Eiseman, a licensed Texas landscape architect with expertise in residential estate design, commercial site planning, and landscape construction. The firm provides comprehensive services from initial site analysis through final installation, with in-house design and construction capabilities.",
  "Project types include private estates, custom residential properties, multifamily communities, office parks, retail centers, and municipal landscapes. Services include master planning, grading and drainage design, construction documentation, irrigation design, planting plans, and design-build installation.",
];

const PEOPLE = [
  "The firm specializes in technically challenging sites—poor drainage, steep slopes, tight budgets, and coordination with civil engineers, architects, and general contractors.",
  "Chris grew up in northern California then moved to Texas where his family decided to call home. As the son of a master carpenter and a florist, his childhood was always surrounded by plants and construction, and not much has changed.",
];

const COMMUNITY = [
  "Chris began his career in the landscape field at the age of 10 by cutting grass and gardening within the local community. Those early years provided great educational experience teaching him the importance of quality work as well as many lessons in customer service.",
  "Whether working on a large scale multi-acre facility or small private garden, working with plants remains Chris’s most passionate aspect of landscape architecture. The ELI website is a good sampling of his work but he is always looking for a new challenge—feel free to contact Chris directly to discuss your upcoming project.",
];

const HISTORY = [
  "Chris founded E.L.I. land design in the spring of 1997 at the age of 20 and quickly realized that he wanted to set his business apart from the everyday landscape company. To do so he turned to Texas A&M's College of Architecture. In 2002, Chris graduated with a bachelor’s degree in Landscape Architecture and since then has been designing and building landscapes for commercial and residential clients in the Houston area.",
  "Today, Chris is married to his college sweetheart Katie. They have settled down in Montgomery with their two dogs. They love to cook, travel, and enjoy the outdoors. Chris is an avid outdoorsman, practitioner of Brazilian Jiu Jitsu, and an instrument rated pilot.",
  "He is a licensed landscape architect in the state of Texas and holds a Texas Irrigators license. He is known for his honesty and quality craftsmanship. Very rarely do you have someone who not only can design a site but can do the construction as well (and sometimes both simultaneously).",
];

const TIMELINE = [
  { year: "1997", label: "Founded E.L.I. land design" },
  { year: "2002", label: "Graduated from Texas A&amp;M's College of Architecture" },
  { year: "2012", label: "Matt Louderback joined E.L.I. land design" },
  { year: "Today", label: "Licensed landscape architecture and construction expertise" },
];

const TEAM = [
  {
    name: "Chris K. Eiseman",
    suffix: "RLA",
    role: "Principal",
    image: MEDIA.chris,
    bio: "Chris founded E.L.I. land design in the spring of 1997 at the age of 20 and quickly realized that he wanted to set his business apart from the everyday landscape company. To do so he turned to Texas A&amp;M's College of Architecture. In 2002, Chris graduated with a bachelor’s degree in Landscape Architecture and since then has been designing and building landscapes for commercial and residential clients in the Houston area.",
  },
  {
    name: "Matt Louderback",
    suffix: "RLA",
    role: "Landscape Architect",
    image: MEDIA.matt,
    bio: "Matt Louderback joined E.L.I. land design in 2012 after graduating from Texas A&amp;M University. Matt’s childhood was spent growing up in Colorado where he developed a love for the outdoors and the natural environment. Upon moving to Texas, Matt developed a passion for art and graphite drawing. He enjoys being able to create something out of nothing. Those two passions led him to pursue a degree in Landscape Architecture at Texas A&amp;M. Matt is a registered Landscape Architect and is involved with the design, construction documentation, and renderings at E.L.I. land design.",
  },
];

const LEADERSHIP = [
  {
    label: "Principal",
    name: "Chris K. Eiseman",
    suffix: "RLA",
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
    image: MEDIA.matt,
    email: null,
    bio: [
      "Matt Louderback joined E.L.I. land design in 2012 after graduating from Texas A&M University. Matt’s childhood was spent growing up in Colorado where he developed a love for the outdoors and the natural environment.",
      "Upon moving to Texas, Matt developed a passion for art and graphite drawing. He enjoys being able to create something out of nothing. Those two passions led him to pursue a degree in Landscape Architecture at Texas A&M.",
      "Matt is a registered Landscape Architect and is involved with the design, construction documentation, and renderings at E.L.I. land design.",
    ],
  },
];

function SectionIntro({ title, centered = false }) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="font-serif-display text-[34px] leading-[1.08] text-[#3D4035] md:text-[46px]">
        {title}
      </h2>
      <div className={`mt-4 h-[2px] w-14 bg-[#D47C4E] ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}

function SplitImageText({ title, paragraphs, image, imageAlt, reverse = false }) {
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
            <p key={idx} className="font-sans-clean text-[15px] leading-[1.9] text-[#5B6157]">
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
        alt={`${person.name}, ${person.suffix}`}
        className="aspect-[4/3] w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="p-6 md:p-7">
        <h3 className="font-sans-clean text-[20px] font-semibold leading-snug text-[#3D4035]">
          {person.name}, {person.suffix}
        </h3>
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

function CredentialsLine({ suffix }) {
  if (!suffix) return null;

  return (
    <div className="mt-2 font-sans-clean text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1F2E23]/45">
      {suffix}
    </div>
  );
}

function LeaderText({ person }) {
  return (
    <div className="flex h-full flex-col justify-start">
      <div className="mb-4 font-sans-clean text-[9px] font-semibold uppercase tracking-[0.3em] text-[#1F2E23]/40">
        {person.label}
      </div>

      <h3 className="font-serif-display text-3xl font-light text-[#1F2E23] md:text-4xl">
        {person.name}
      </h3>

      <CredentialsLine suffix={person.suffix} />

      <div className="my-7 h-px w-14 bg-[#D47C4E]" />

      <div className="space-y-5 font-sans-clean text-[15px] leading-[1.8] text-[#1F2E23]/70">
        {person.bio.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {person.email ? (
        <div className="mt-7">
          <a
            href={`mailto:${person.email}`}
            className="font-sans-clean text-sm text-[#1F2E23]/65 underline underline-offset-4 transition-colors hover:text-[#1F2E23]"
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
      <section className="bg-[#F6F1E9]">
        <div className="mx-auto max-w-[1200px] px-6 py-18 md:px-10 md:py-24">
          <AnimatedSection>
            <SectionIntro title="Our Design Philosophy" />
          </AnimatedSection>

          <AnimatedSection delay={0.06}>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-14">
              {PHILOSOPHY.map((paragraph, idx) => (
                <p key={idx} className="font-sans-clean text-[15px] leading-[1.9] text-[#5B6157]">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#FBF8F2]">
        <div className="mx-auto max-w-[1200px] px-6 py-8 md:px-10 md:py-10">
          <SplitImageText
            title="People"
            paragraphs={PEOPLE}
            image={MEDIA.authority}
            imageAlt="Landscape design planning and construction documentation"
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
                <p key={idx} className="font-sans-clean text-[15px] leading-[1.9] text-[#5B6157]">
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