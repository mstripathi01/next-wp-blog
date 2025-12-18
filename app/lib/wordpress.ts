import { WPPost } from "@/app/types/blog";

const WP_API = process.env.NEXT_PUBLIC_WP_API;

export const fetchPosts = async (): Promise<WPPost[]> => {
  if (!WP_API) throw new Error("WP API not defined");

  const res = await fetch(`${WP_API}/posts`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
};

// export async function fetchPostBySlug(slug: string) {
//   const res = await fetch(
//     `https://public-api.wordpress.com/wp/v2/sites/en.blog.wordpress.com/posts?search=${slug}`
//   );

//   if (!res.ok) throw new Error("Post not found");

//   const data = await res.json();

//   return data.find((p: any) => p.slug === slug);
// }

export async function fetchPostBySlug(slug: string) {
  const key = slug.split("-").slice(0, 3).join("-");

  const res = await fetch(`${WP_API}/posts?search=${key}`);

  const posts = await res.json();

  return posts.find((p: any) => p.slug === slug);
}

export async function loadCategoriesForPost(post: any) {
  const categoryObjects = await Promise.all(
    post.categories.map(async (id: number) => {
      const res = await fetch(
        `https://public-api.wordpress.com/wp/v2/sites/en.blog.wordpress.com/categories/${id}`
      );

      return res.json();
    })
  );

  return {
    ...post,
    categoryObjects,
  };
}
