"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import PageShell from "@/components/PageShell";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Panel } from "@/components/ui/panel";
import { Button } from "@/components/ui/button";

const MEDIA = {
  hero: "/images/contact/hero.jpg",
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
    <div className="text-[10px] tracking-[0.25em] uppercase text-[#1F2E23]/55 font-sans-clean font-semibold mb-2">
      {children}
    </div>
  );

  const InputBase =
    "w-full bg-transparent border-b border-[#1F2E23]/35 hover:border-[#1F2E23]/55 py-3 text-sm md:text-[15px] font-sans-clean text-[#1F2E23] placeholder:text-[#1F2E23]/45 focus:outline-none focus:border-[#545E55]";

  return (
    <PageShell
      hero
      heroImage={MEDIA.hero}
      eyebrow="Contact"
      title={submitted ? "Thank You" : "Schedule a Consultation"}
      subtitle={
        submitted
          ? "We've received your inquiry and will respond within one business day."
          : "Discuss your landscape architecture project with a licensed professional. We typically respond within one business day."
      }
      // ✅ Contact should not show any global CTAs
      showCtaStrip={false}
      showBottomCta={false}
    >
      {submitted ? (
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto text-center">
          <p className="text-[#1F2E23]/65 font-sans-clean text-lg max-w-xl mx-auto leading-[1.8]">
            If you need to add details, email us directly at{" "}
            <a
              href="mailto:chris@elilanddesign.com"
              className="text-[#1F2E23] underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              chris@elilanddesign.com
            </a>
            .
          </p>
        </section>
      ) : (
        <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-[#F5F0EA]">
          <div className="max-w-[1440px] mx-auto">
            <Panel className="border border-[#1F2E23]/10 bg-[#F8F4ED]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 px-8 md:px-12 lg:px-16 py-14 md:py-16">
                {/* Contact Info */}
                <AnimatedSection>
                  <div>
                    <h2 className="font-serif-display text-[#1F2E23] text-3xl md:text-4xl font-light mb-10">
                      E.L.I. Land Design
                    </h2>

                    <div className="space-y-8">
                      <div className="flex items-start gap-4">
                        <Phone className="w-5 h-5 text-[#545E55] flex-shrink-0 mt-1" />
                        <div>
                          <div className="text-[10px] tracking-[0.25em] uppercase text-[#1F2E23]/45 font-sans-clean mb-2">
                            Phone
                          </div>
                          <a
                            href="tel:2812592610"
                            className="text-[#1F2E23] font-sans-clean text-lg hover:text-[#545E55] transition-colors"
                          >
                            281.259.2610
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Mail className="w-5 h-5 text-[#545E55] flex-shrink-0 mt-1" />
                        <div>
                          <div className="text-[10px] tracking-[0.25em] uppercase text-[#1F2E23]/45 font-sans-clean mb-2">
                            Email
                          </div>
                          <a
                            href="mailto:chris@elilanddesign.com"
                            className="text-[#1F2E23] font-sans-clean text-lg hover:text-[#545E55] transition-colors"
                          >
                            chris@elilanddesign.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 text-[#545E55] flex-shrink-0 mt-1" />
                        <div>
                          <div className="text-[10px] tracking-[0.25em] uppercase text-[#1F2E23]/45 font-sans-clean mb-2">
                            Address
                          </div>
                          <div className="text-[#1F2E23] font-sans-clean text-base leading-relaxed">
                            P.O. Box 131264
                            <br />
                            The Woodlands, TX 77393
                          </div>
                        </div>
                      </div>

                      <div className="pt-8 border-t border-[#1F2E23]/10">
                        <div className="text-[10px] tracking-[0.25em] uppercase text-[#1F2E23]/45 font-sans-clean mb-2">
                          Service Area
                        </div>
                        <p className="text-[#1F2E23]/70 font-sans-clean text-sm leading-[1.75]">
                          The Woodlands, Houston, Spring, Conroe, Tomball,
                          Magnolia, and surrounding communities in Montgomery and
                          Harris counties.
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Form */}
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

                      <p className="text-[#1F2E23]/55 text-xs font-sans-clean leading-[1.7]">
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