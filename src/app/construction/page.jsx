"use client";

import Head from "next/head";
import Component from "@/components/pages/Construction.jsx";

export default function Page() {
  return (
    <>
      <Head>
        <title>Construction Support | ELI Land Design</title>
        <meta
          name="description"
          content="Construction support services to help ensure landscape architecture plans are executed with quality, clarity, and consistency."
        />
        <link rel="canonical" href="https://eli-land-design.com/construction" />
      </Head>
      <Component />
    </>
  );
}