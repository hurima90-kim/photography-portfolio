import { client } from '../../sanity/lib/client';
import { SanityDocument } from 'next-sanity';

const photoQuery = `*[_type == "photo"] | order(_createdAt desc) {
  _id,
  title,
  caption,
  tags,
  "imageUrl": image.asset->url // 이미지 URL 가져오기
}`;

const options = { next: { revalidate: 30 } };

export default async function Home() {
	const posts = await client.fetch<SanityDocument[]>(photoQuery, {}, options);

	return (
		<>
			<h1 className="text-2xl font-bold mb-8">Portfolio</h1>
			<ul className="flex flex-col gap-y-4">
				{posts.map((photo) => (
					<div key={photo._id}>
						<h2>{photo.title}</h2>
						{/* TODO: Next.js Image 컴포넌트와 Sanity Image URL Builder를 사용하여 이미지 렌더링 */}
					</div>
				))}
			</ul>
		</>
	);
}
