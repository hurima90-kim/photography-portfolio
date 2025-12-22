import MasonryGrid from "@/components/masonry";
import { SanityDocument } from "next-sanity";
import { client } from "../../sanity/lib/client";

const items = [
  { height: 600, color: "#D32F2F", id: 1 }, // Extra Tall - Darker Red
  { height: 200, color: "#00796B", id: 2 }, // Short - Darker Teal
  { height: 400, color: "#1976D2", id: 3 }, // Tall - Darker Blue
  { height: 300, color: "#2E7D32", id: 4 }, // Medium - Darker Green
  { height: 500, color: "#F57F17", id: 5 }, // Very Tall - Darker Yellow
  { height: 250, color: "#C2185B", id: 6 }, // Medium-Short - Darker Pink
  { height: 450, color: "#4527A0", id: 7 }, // Tall - Darker Purple
  { height: 200, color: "#1565C0", id: 8 }, // Short - Darker Blue
  { height: 350, color: "#D84315", id: 9 }, // Medium-Tall - Darker Orange
  { height: 550, color: "#1B5E20", id: 10 }, // Very Tall - Darker Green
  { height: 150, color: "#B71C1C", id: 11 }, // Very Short - Darker Red
  { height: 400, color: "#311B92", id: 12 }, // Tall - Darker Purple
  { height: 300, color: "#00695C", id: 13 }, // Medium - Darker Turquoise
  { height: 250, color: "#E65100", id: 14 }, // Medium-Short - Darker Orange
  { height: 500, color: "#880E4F", id: 15 }, // Very Tall - Darker Pink
  { height: 200, color: "#0D47A1", id: 16 }, // Short - Darker Blue
  { height: 450, color: "#3E2723", id: 17 }, // Tall - Darker Brown
  { height: 350, color: "#4A148C", id: 18 }, // Medium-Tall - Darker Purple
  { height: 500, color: "#01579B", id: 19 }, // Medium - Darker Blue
  { height: 400, color: "#AD1457", id: 20 }, // Tall - Darker Pink
  { height: 300, color: "#E65100", id: 21 }, // Medium-Short - Darker Orange
];

// const photoQuery = `*[_type == "photo"] | order(_createdAt desc) {
//   _id,
//   title,
//   caption,
//   tags,
//   "imageUrl": image.asset->url // 이미지 URL 가져오기
// }`;

// const options = { next: { revalidate: 30 } };

export default async function Home() {
  // const items = await client.fetch<SanityDocument[]>(photoQuery, {}, options);

  return (
    <div className="mb-32">
      <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
      <MasonryGrid items={items} />
    </div>
  );
}
