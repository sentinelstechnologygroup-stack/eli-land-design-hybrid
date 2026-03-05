// src/app/design/residential/page.jsx
"use client";

import Head from "next/head";
import Component from "@/components/pages/DesignResidential.jsx";

export default function Page() {
  return (
    <>
      <Head>
        <title>Residential Landscape Architecture | ELI Land Design</title>
        <meta
          name="description"
          content="Residential landscape architecture services including outdoor living, pool environments, drainage strategy, and planting design."
        />
        <link rel="canonical" href="https://eli-land-design.com/design/residential" />
      </Head>
      <Component />
    </>
  );
}