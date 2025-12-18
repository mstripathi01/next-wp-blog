import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Next.js Headless WordPress Blog",
  description:
    "SEO-friendly blog built with Next.js 14, Headless WordPress, Redux, and Formik",
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <section className="text-center max-w-2xl px-6">
        <h1 className="text-4xl font-bold mb-4">
          Next.js Headless WordPress Blog
        </h1>

        <p className="text-gray-600 mb-8">
          A modern, SEO-friendly blog application built using Next.js 14 App
          Router, Headless WordPress, Redux, Formik, and Tailwind CSS.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/blogs"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
          >
            View Blogs
          </Link>

          <Link
            href="/contact"
            className="border border-black px-6 py-3 rounded hover:bg-black hover:text-white transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
