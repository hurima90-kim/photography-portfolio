"use client";

import { Masonry } from "react-plock";
import Image from "next/image";
import type { Photo } from "contentlayer/generated";

interface MasonryGridProps {
  items: Photo[];
}

export default function MasonryGrid({ items }: MasonryGridProps) {
  return (
    <Masonry
      items={items}
      config={{
        columns: [1, 2, 3, 4, 5],
        gap: [24, 16, 12, 8, 6],
        media: [640, 768, 1024, 1280, 1536],
      }}
      render={(photo) => (
        <div className="group relative overflow-hidden rounded-lg bg-gray-100 hover:shadow-xl transition-shadow duration-300">
          <Image
            src={photo.image}
            alt={photo.title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="text-lg font-semibold mb-1">{photo.title}</h3>
              {photo.caption && (
                <p className="text-sm text-gray-200 mb-2">{photo.caption}</p>
              )}
              {photo.location && (
                <p className="text-xs text-gray-300">📍 {photo.location}</p>
              )}
            </div>
          </div>
        </div>
      )}
    />
  );
}
