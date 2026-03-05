"use client";

import Head from "next/head";
import Component from "@/components/pages/Gallery.jsx";

export default function Page() {
  return (
    <>
      <Head>
        <title>Gallery | ELI Land Design</title>
        <meta
          name="description"
          content="Browse a curated gallery of ELI Land Design projects across residential, commercial, and planning disciplines."
        />
        <link rel="canonical" href="https://eli-land-design.com/gallery" />
      </Head>
      <Component />
    </>
  );
}