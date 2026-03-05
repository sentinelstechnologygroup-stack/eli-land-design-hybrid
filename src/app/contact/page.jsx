"use client";

import Head from "next/head";
import Component from "@/components/pages/Contact.client.jsx";

export default function Page() {
  return (
    <>
      <Head>
        <title>Schedule a Consultation | ELI Land Design</title>
        <meta
          name="description"
          content="Contact ELI Land Design to schedule a landscape architecture consultation. We typically respond within one business day."
        />
        <link rel="canonical" href="https://eli-land-design.com/contact" />
      </Head>
      <Component />
    </>
  );
}