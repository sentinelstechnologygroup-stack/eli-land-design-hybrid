// src/app/about/page.jsx
"use client";

import Head from "next/head";
import Component from "@/components/pages/About.jsx";

export default function Page() {
  return (
    <>
      <Head>
        <title>About Our Landscape Architecture Firm | ELI Land Design</title>
        <meta
          name="description"
          content="Learn about ELI Land Design’s experience in landscape architecture, land planning, and development consulting across Texas."
        />
        <link rel="canonical" href="https://eli-land-design.com/about" />
      </Head>
      <Component />
    </>
  );
}