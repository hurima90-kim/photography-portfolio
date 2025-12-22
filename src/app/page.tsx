import MasonryGrid from "@/components/masonry";
import { allPhotos } from "contentlayer/generated";

export default async function Home() {
  // 날짜 기준으로 최신순 정렬
  const sortedPhotos = allPhotos.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="mb-32">
      <h1 className="text-4xl font-bold mb-8">Photography</h1>
      {sortedPhotos.length > 0 ? (
        <MasonryGrid items={sortedPhotos} />
      ) : (
        <p className="text-gray-500">No photos available yet.</p>
      )}
    </div>
  );
}
