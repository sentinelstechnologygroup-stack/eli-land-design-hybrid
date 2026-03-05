// src/app/design/page.jsx
"use client";

import Head from "next/head";
import Component from "@/components/pages/Design.jsx";

export default function Page() {
  return (
    <>
      <Head>
        <title>Landscape Architecture Design Services | ELI Land Design</title>
        <meta
          name="description"
          content="Landscape architecture design services for residential and commercial projects across Texas, including planning and site strategy."
        />
        <link rel="canonical" href="https://eli-land-design.com/design" />
      </Head>
      <Component />
    </>
  );
}