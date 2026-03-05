"use client";

import Head from "next/head";
import Component from "@/components/pages/Projects.jsx";

export default function Page() {
  return (
    <>
      <Head>
        <title>Projects | ELI Land Design</title>
        <meta
          name="description"
          content="Explore ELI Land Design’s landscape architecture portfolio including residential, commercial, and planning projects across Texas."
        />
        <link rel="canonical" href="https://eli-land-design.com/projects" />
      </Head>
      <Component />
    </>
  );
}