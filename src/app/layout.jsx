// src/app/layout.jsx
import "./globals.css";
import Layout from "@/Layout";
import { Inter } from "next/font/google";

// ✅ Font (see #5)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: {
    default: "ELI Land Design | Landscape Architecture in Texas",
    template: "%s | ELI Land Design",
  },
  description:
    "Texas landscape architecture and outdoor living design serving The Woodlands and Houston. Master plans, drainage, pool + outdoor living, and commercial landscape design.",
  metadataBase: new URL("https://eli-land-design-hybrid.vercel.app"),
  openGraph: {
    title: "ELI Land Design | Landscape Architecture in Texas",
    description:
      "Texas landscape architecture and outdoor living design serving The Woodlands and Houston.",
    url: "https://eli-land-design-hybrid.vercel.app",
    siteName: "ELI Land Design",
    type: "website",
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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}