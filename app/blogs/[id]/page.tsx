import { fetchPostBySlug } from "@/app/lib/wordpress";
import Image from "next/image";

function cleanHTML(html: string) {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
}

export async function generateMetadata({ params }: any) {
  const post = await fetchPostBySlug(params.slug);
  return {
    title: cleanHTML(post.title.rendered),
    description: cleanHTML(post.excerpt.rendered),
  };
}
export default async function BlogDetail({ params }: any) {
  const post = await fetchPostBySlug(params.slug);

  return (
    <article className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title.rendered}</h1>

      <Image
        src={post.jetpack_featured_media_url}
        alt={post.title.rendered}
        width={800}
        height={400}
        priority
      />

      <div
        className="prose mt-6"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </article>
  );
}
