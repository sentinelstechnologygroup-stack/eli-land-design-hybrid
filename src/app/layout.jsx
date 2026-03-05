// src/app/layout.jsx
import "./globals.css";
import { Inter } from "next/font/google";
import Layout from "@/Layout";
import { SITE } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: SITE.title,
    template: "%s | ELI Land Design",
  },

  description: SITE.description,

  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [SITE.ogImage],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Layout currentPageName="app">{children}</Layout>
      </body>
    </html>
  );
}