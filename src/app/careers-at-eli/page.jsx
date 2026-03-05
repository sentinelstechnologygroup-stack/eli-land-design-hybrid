"use client";

import Head from "next/head";
import Component from "@/components/pages/CareersAtELI.jsx";

export default function Page() {
  return (
    <>
      <Head>
        <title>Careers | ELI Land Design</title>
        <meta
          name="description"
          content="Explore career opportunities at ELI Land Design and join a team focused on high-quality landscape architecture and planning."
        />
        <link rel="canonical" href="https://eli-land-design.com/careers-at-eli" />
      </Head>
      <Component />
    </>
  );
}