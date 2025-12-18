import { fetchPosts, loadCategoriesForPost } from "@/app/lib/wordpress";
import BlogCard from "@/app/components/BlogCard";
import CategoryFilter from "@/app/components/CategoryFilter";

export const metadata = {
  title: "Blogs | Next WP",
  description: "Latest blogs from WordPress",
};

export default async function BlogsPage() {
  const posts = await fetchPosts();

  const postsWithCategories = await Promise.all(
    posts.map((post) => loadCategoriesForPost(post))
  );

  return (
    <section className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>

      <CategoryFilter />

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {postsWithCategories.map((post: any) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
