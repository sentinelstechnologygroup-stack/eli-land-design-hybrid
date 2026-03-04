// location: src/components/gallery/GalleryIndex.jsx
// @ts-nocheck
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ClientImg from "../ClientImg";
import { getAllCollections } from "./types";
import { createGalleryUrl } from "../utils/routes";
import { Panel } from "@/components/ui/panel";

export default function GalleryIndex() {
  const collections = getAllCollections();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {collections.map((collection) => (
        <Link key={collection.id} href={createGalleryUrl(collection.id)} className="block">
          <Panel variant="light" className="group cursor-pointer">
            {/* Image */}
            <div className="relative aspect-[4/3]">
              <ClientImg
                src={collection.coverImage}
                alt={collection.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-[#1F2E23]/0 group-hover:bg-[#1F2E23]/50 transition-all duration-500" />

              <div className="absolute top-6 right-6 w-12 h-12 border border-[#F5F0EA]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-[#F5F0EA]" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="font-serif-display text-[#F5F0EA] text-2xl font-light mb-2">
                  {collection.title}
                </h3>
                {collection.subtitle && (
                  <p className="text-[#F5F0EA]/70 font-sans-clean text-sm">
                    {collection.subtitle}
                  </p>
                )}
              </div>
            </div>

            {/* Info Below */}
            <div className="pt-5">
              <h3 className="font-serif-display text-[#1F2E23] text-xl font-light mb-1 group-hover:text-[#6B7F5E] transition-colors">
                {collection.title}
              </h3>

              <div className="flex flex-wrap gap-2 mt-2">
                {collection.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-[0.2em] uppercase text-[#1F2E23]/40 font-sans-clean"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Panel>
        </Link>
      ))}
    </div>
  );
}