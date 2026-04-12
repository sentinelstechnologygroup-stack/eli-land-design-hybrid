// src/app/layout.jsx

import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

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
  title: "ELI Land Design",
  description:
    "Landscape architecture, site planning, and construction services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className="bg-[#F5F0EA] text-[#1F2E23]">
        <SiteHeader />
        <div className="pt-[74px]">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}