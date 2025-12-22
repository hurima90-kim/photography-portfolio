"use client";

import { Masonry } from "react-plock";
import { SanityDocument } from "next-sanity";

interface MasonryItem {
  id: number;
  height: number;
  color: string;
}

interface MasonryGridProps {
  items: MasonryItem[];
  // itmes: SanityDocument[];
}

export default function MasonryGrid({ items }: MasonryGridProps) {
  return (
    <Masonry
      items={items}
      config={{
        columns: [1, 2, 3],
        gap: [24, 12, 6],
        media: [640, 1024, 1280],
      }}
      render={(item) => (
        <div
          style={{
            height: item.height,
            backgroundColor: item.color,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFF",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          {`${item.height}px - #${item.id}`}
        </div>
      )}
    />
  );
}
