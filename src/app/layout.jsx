// src/app/layout.jsx

import { Montserrat, Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE } from "@/config/site";
import { getPageMetadata } from "@/config/seo";
import {
  organizationSchema,
  websiteSchema,
  serviceSchema,
} from "@/config/schema";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  ...getPageMetadata("home"),
};

export default function RootLayout({ children }) {
  const structuredData = [organizationSchema, websiteSchema, serviceSchema];

  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className="bg-[#F5F0EA] text-[#1F2E23]">
        <Script id="eli-structured-data" type="application/ld+json">
          {JSON.stringify(structuredData)}
        </Script>

        <Script src="/sis-config.js" strategy="afterInteractive" />
        <Script src="/sis-tracker.js" strategy="afterInteractive" />

        <SiteHeader />

        <div className="pt-[74px]">{children}</div>

        <SiteFooter />
      </body>
    </html>
  );
}