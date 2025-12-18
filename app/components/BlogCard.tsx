import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }: any) {
  const cleanExcerpt = post.excerpt.rendered
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();

  return (
    <article className="border rounded-lg overflow-hidden">
      <Image
        src={post.jetpack_featured_media_url}
        alt={post.title.rendered}
        width={400}
        height={250}
        className="object-cover"
      />

      <div className="p-4">
        <h2 className="font-semibold text-lg">
          <Link href={`/blogs/${post.slug}`}>
            {post.title.rendered.replace(/&nbsp;/g, " ")}
          </Link>
        </h2>

        <p className="text-sm mt-2">{cleanExcerpt}</p>

        <p className="text-xs mt-3 text-gray-500">
          {new Date(post.date).toDateString().replace(/^\S+\s/, "")}
        </p>

        {/* {post?.categories?.map((cat: any) => (
          <span
            key={cat.id}
            className="text-xs text-white px-2 py-1 rounded mr-2"
          >
            {cat.id}
          </span>
        ))} */}
      </div>
    </article>
  );
}
