// src/components/pages/Contact.client.jsx
"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import PageShell from "@/components/shared/PageShell";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Panel } from "@/components/ui/panel";
import { Button } from "@/components/ui/button";

const MEDIA = {
  hero: "/images/hero/contact-hero.jpg",
};

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (key) => (e) => {
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const FieldLabel = ({ children }) => (
    <div className="mb-2 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1F2E23]/55">
      {children}
    </div>
  );

  const InputBase =
    "w-full bg-transparent border-b border-[#1F2E23]/35 hover:border-[#1F2E23]/55 py-3 text-sm md:text-[15px] font-sans-clean text-[#1F2E23] placeholder:text-[#1F2E23]/45 focus:outline-none focus:border-[#545E55]";

  return (
    <PageShell
      hero
      heroImage={MEDIA.hero}
      heroContentAlign="center"
      eyebrow="Contact"
      title={submitted ? "Thank You" : "Schedule a Consultation"}
      subtitle={
        submitted
          ? "We've received your inquiry and will respond within one business day."
          : "Discuss your landscape architecture project with a licensed professional. We typically respond within one business day."
      }
      showCtaStrip={false}
      showBottomCta={false}
    >
      {submitted ? (
        <section className="mx-auto max-w-[1440px] px-6 py-16 text-center md:px-12 md:py-20 lg:px-20">
          <p className="mx-auto max-w-xl font-sans-clean text-lg leading-[1.8] text-[#1F2E23]/65">
            If you need to add details, email us directly at{" "}
            <a
              href="mailto:info@elilanddesign.com"
              className="text-[#1F2E23] underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              info@elilanddesign.com
            </a>
            .
          </p>
        </section>
      ) : (
        <section className="bg-[#F5F0EA] px-6 py-16 md:px-12 md:py-20 lg:px-20">
          <div className="mx-auto max-w-[1440px]">
            <Panel className="border border-[#1F2E23]/10 bg-[#F8F4ED]">
              <div className="grid grid-cols-1 gap-16 px-8 py-14 md:grid-cols-2 md:gap-20 md:px-12 md:py-16 lg:px-16">
                <AnimatedSection>
                  <div>
                    <h2 className="mb-10 font-serif-display text-3xl font-light text-[#1F2E23] md:text-4xl">
                      ELI Land Design
                    </h2>

                    <div className="space-y-8">
                      <div className="flex items-start gap-4">
                        <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-[#545E55]" />
                        <div>
                          <div className="mb-2 font-sans-clean text-[10px] uppercase tracking-[0.25em] text-[#1F2E23]/45">
                            Phone
                          </div>
                          <a
                            href="tel:2812592610"
                            className="font-sans-clean text-lg text-[#1F2E23] transition-colors hover:text-[#545E55]"
                          >
                            281.259.2610
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-[#545E55]" />
                        <div>
                          <div className="mb-2 font-sans-clean text-[10px] uppercase tracking-[0.25em] text-[#1F2E23]/45">
                            Email
                          </div>
                          <a
                            href="mailto:info@elilanddesign.com"
                            className="font-sans-clean text-lg text-[#1F2E23] transition-colors hover:text-[#545E55]"
                          >
                            info@elilanddesign.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#545E55]" />
                        <div>
                          <div className="mb-2 font-sans-clean text-[10px] uppercase tracking-[0.25em] text-[#1F2E23]/45">
                            Address
                          </div>
                          <div className="font-sans-clean text-base leading-relaxed text-[#1F2E23]">
                            P.O. Box 131264
                            <br />
                            The Woodlands, TX 77393
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-[#1F2E23]/10 pt-8">
                        <div className="mb-2 font-sans-clean text-[10px] uppercase tracking-[0.25em] text-[#1F2E23]/45">
                          Service Area
                        </div>
                        <p className="font-sans-clean text-sm leading-[1.75] text-[#1F2E23]/70">
                          The Woodlands, Houston, Spring, Conroe, Tomball,
                          Magnolia, and surrounding communities in Montgomery and
                          Harris counties.
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection>
                  <div>
                    <form
                      id="contact-form"
                      onSubmit={handleSubmit}
                      className="space-y-8"
                    >
                      <div>
                        <FieldLabel>Full Name *</FieldLabel>
                        <input
                          placeholder="Name"
                          value={formData.name}
                          onChange={onChange("name")}
                          required
                          className={InputBase}
                          autoComplete="name"
                        />
                      </div>

                      <div>
                        <FieldLabel>Email *</FieldLabel>
                        <input
                          type="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={onChange("email")}
                          required
                          className={InputBase}
                          autoComplete="email"
                        />
                      </div>

                      <div>
                        <FieldLabel>Phone *</FieldLabel>
                        <input
                          type="tel"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={onChange("phone")}
                          required
                          className={InputBase}
                          autoComplete="tel"
                        />
                      </div>

                      <div>
                        <FieldLabel>Project Type *</FieldLabel>
                        <select
                          value={formData.projectType}
                          onChange={onChange("projectType")}
                          required
                          className={`${InputBase} appearance-none`}
                        >
                          <option value="" disabled>
                            Select a project type
                          </option>
                          <option value="residential-design">
                            Residential Design
                          </option>
                          <option value="commercial-design">
                            Commercial Design
                          </option>
                          <option value="construction">
                            Landscape Construction
                          </option>
                          <option value="consultation">
                            General Consultation
                          </option>
                        </select>
                      </div>

                      <div>
                        <FieldLabel>Project Details *</FieldLabel>
                        <textarea
                          placeholder="Share scope, location, timeline, and any reference details."
                          value={formData.message}
                          onChange={onChange("message")}
                          required
                          rows={6}
                          className={`${InputBase} resize-none`}
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="eli"
                        size="eli"
                        className="w-full"
                      >
                        Send Message
                      </Button>

                      <p className="font-sans-clean text-xs leading-[1.7] text-[#1F2E23]/55">
                        By submitting, you agree we may contact you regarding
                        your inquiry. We do not sell your information.
                      </p>
                    </form>
                  </div>
                </AnimatedSection>
              </div>
            </Panel>
          </div>
        </section>
      )}
    </PageShell>
  );
}