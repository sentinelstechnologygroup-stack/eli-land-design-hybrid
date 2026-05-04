// src/components/pages/Contact.client.jsx
"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle2, X } from "lucide-react";
import PageShell from "@/components/shared/PageShell";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Panel } from "@/components/ui/panel";
import { Button } from "@/components/ui/button";

const MEDIA = {
  hero: "/images/hero/contact-hero.webp",
};

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const FieldLabel = ({ children }) => (
    <div className="mb-2 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1F2E23]/55">
      {children}
    </div>
  );

  const InputBase =
    "w-full bg-transparent border-b border-[#1F2E23]/35 hover:border-[#1F2E23]/55 py-3 text-sm md:text-[15px] font-sans-clean text-[#1F2E23] placeholder:text-[#1F2E23]/45 focus:outline-none focus:border-[#545E55]";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xdayrzow", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        "Something went wrong. Please try again or email info@elilanddesign.com directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageShell
      hero
      heroImage={MEDIA.hero}
      heroContentAlign="center"
      eyebrow="Contact"
      title="Schedule a Consultation"
      subtitle="Discuss your landscape architecture project with a licensed professional. We typically respond within one business day."
      showCtaStrip={false}
      showBottomCta={false}
    >
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
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <FieldLabel>Full Name *</FieldLabel>
                      <input
                        name="name"
                        placeholder="Name"
                        required
                        className={InputBase}
                        autoComplete="name"
                      />
                    </div>

                    <div>
                      <FieldLabel>Email *</FieldLabel>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className={InputBase}
                        autoComplete="email"
                      />
                    </div>

                    <div>
                      <FieldLabel>Phone *</FieldLabel>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        required
                        className={InputBase}
                        autoComplete="tel"
                      />
                    </div>

                    <div>
                      <FieldLabel>Project Type *</FieldLabel>
                      <select
                        name="projectType"
                        required
                        className={`${InputBase} appearance-none`}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a project type
                        </option>
                        <option value="Residential Design">
                          Residential Design
                        </option>
                        <option value="Commercial Design">
                          Commercial Design
                        </option>
                        <option value="Landscape Construction">
                          Landscape Construction
                        </option>
                        <option value="General Consultation">
                          General Consultation
                        </option>
                      </select>
                    </div>

                    <div>
                      <FieldLabel>Project Details *</FieldLabel>
                      <textarea
                        name="message"
                        placeholder="Share scope, location, timeline, and any reference details."
                        required
                        rows={6}
                        className={`${InputBase} resize-none`}
                      />
                    </div>

                    <input
                      type="hidden"
                      name="_subject"
                      value="New ELI Land Design Inquiry"
                    />

                    {submitError && (
                      <p className="font-sans-clean text-sm leading-relaxed text-red-700">
                        {submitError}
                      </p>
                    )}

                    <Button
                      type="submit"
                      variant="eli"
                      size="eli"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    <p className="font-sans-clean text-xs leading-[1.7] text-[#1F2E23]/55">
                      By submitting, you agree we may contact you regarding your
                      inquiry. We do not sell your information.
                    </p>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </Panel>
        </div>
      </section>

      {submitted && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#07100B]/70 px-5 backdrop-blur-sm">
          <div className="relative w-full max-w-xl overflow-hidden border border-[#F5F0EA]/30 bg-[#F8F4ED] shadow-2xl">
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="absolute right-5 top-5 text-[#1F2E23]/45 transition hover:text-[#1F2E23]"
              aria-label="Close thank you message"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="px-8 py-10 text-center md:px-12 md:py-12">
              <div className="mx-auto mb-6 flex items-center justify-center">
                <img
                  src="/logo/contact-logo-2.png"
                  alt="ELI Land Design"
                  className="h-18 w-auto object-contain"
                />
              </div>

              <div className="mb-3 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.32em] text-[#1F2E23]/45">
                Inquiry Received
              </div>

              <h2 className="mb-5 font-serif-display text-4xl font-light leading-tight text-[#1F2E23] md:text-5xl">
                Thank You
              </h2>

              <p className="mx-auto mb-8 max-w-md font-sans-clean text-base leading-[1.8] text-[#1F2E23]/70">
                Your message has been sent to ELI Land Design. We’ll review your
                project details and follow up within one business day.
              </p>

              <div className="mb-8 border-y border-[#1F2E23]/10 py-5 text-left">
                <div className="mb-3 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1F2E23]/45">
                  What Happens Next
                </div>

                <ul className="space-y-2 font-sans-clean text-sm leading-relaxed text-[#1F2E23]/70">
                  <li>• Your project scope and location will be reviewed.</li>
                  <li>• The team will confirm the best next step.</li>
                  <li>• You’ll be contacted to discuss consultation timing.</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href="tel:2812592610"
                  className="inline-flex items-center justify-center border border-[#1F2E23] px-6 py-3 font-sans-clean text-xs font-semibold uppercase tracking-[0.22em] text-[#1F2E23] transition hover:bg-[#1F2E23] hover:text-[#F8F4ED]"
                >
                  Call Now
                </a>

                <a
                  href="/projects"
                  className="inline-flex items-center justify-center bg-[#1F2E23] px-6 py-3 font-sans-clean text-xs font-semibold uppercase tracking-[0.22em] text-[#F8F4ED] transition hover:bg-[#545E55]"
                >
                  View Our Work
                </a>
              </div>

              <p className="mt-7 font-sans-clean text-xs leading-relaxed text-[#1F2E23]/50">
                Need to add something? Email{" "}
                <a
                  href="mailto:info@elilanddesign.com"
                  className="underline underline-offset-4 transition hover:text-[#1F2E23]"
                >
                  info@elilanddesign.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}