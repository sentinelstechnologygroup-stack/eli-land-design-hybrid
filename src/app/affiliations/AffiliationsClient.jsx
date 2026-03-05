"use client";

import Head from "next/head";
import Component from "@/components/pages/Affiliations.jsx";

export default function Page() {
  return (
    <>
      <Head>
        <title>Affiliations | ELI Land Design</title>
        <meta
          name="description"
          content="Professional affiliations and recognition for ELI Land Design and our landscape architecture practice."
        />
        <link rel="canonical" href="https://eli-land-design.com/affiliations" />
      </Head>
      <Component />
    </>
  );
}