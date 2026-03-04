import React from "react";
import Link from "next/link";
import { createPageUrl } from "../utils";
import { ArrowRight } from "lucide-react";

export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-[#F5F0EA] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <span className="font-serif-display text-[#1F2E23]/10 text-[120px] md:text-[180px] font-light leading-none block">
          404
        </span>
        <h1 className="font-serif-display text-[#1F2E23] text-3xl md:text-4xl font-light -mt-8 mb-4">
          Page not found.
        </h1>
        <p className="text-[#1F2E23]/50 font-sans-clean text-sm mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href={createPageUrl("Home")}
          className="group inline-flex items-center gap-3 bg-[#1F2E23] text-[#F5F0EA] px-8 py-4 text-[12px] tracking-[0.2em] uppercase font-sans-clean font-semibold hover:bg-[#2A3F2F] transition-all duration-500"
        >
          Return Home
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}