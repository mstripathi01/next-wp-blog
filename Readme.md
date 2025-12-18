🚀 Next.js + Headless WordPress Blog

A SEO-friendly blog built using Next.js (App Router) + WordPress.com API + Redux + Formik + TailwindCSS demonstrating blog listing, slug routing, category filtering, and contact form integration.

📌 Features implemented
1️⃣ Blog Listing Page

Fetch posts from WordPress REST API

Display:

Featured image

Title

Excerpt

Publish date

Categories

Pagination Ready

Responsive UI Grid

SEO meta tags

2️⃣ Blog Detail Page

Dynamic slug routing

Server-side rendered detail view

Full HTML content rendering

Featured image

SEO metadata

404 handling using notFound()

3️⃣ Global Category Filter (Redux)

Redux Toolkit store

Selected category stored globally

Posts filtered client-side

4️⃣ Contact Form

Formik + Yup validation

Mock API POST using JSONPlaceholder

Toast success + error handling

5️⃣ Code Quality

TailwindCSS layout

ESLint formatting

SEO-friendly titles + descriptions

Optimized Next.js <Image /> remote domains

Folder structure best practice

🏗️ Tech Stack
Stack	Used
Framework	Next.js 14 App Router
API Source	WordPress.com REST API
Language	TypeScript
UI Layer	TailwindCSS
State Management	Redux Toolkit
Form Handling	Formik + Yup
Notifications	React Toastify
SEO	Metadata API
Deployment Ready	Yes
📁 Project Folder Structure
app/
 ├ blogs/
 │  ├ page.tsx
 │  └ [slug]/page.tsx
 ├ contact/
 │  └ page.tsx
 ├ components/
 ├ lib/
 │  └ wordpress.ts
 ├ redux/
 └ styles/

🔌 WordPress API Used

Root URL:

https://public-api.wordpress.com/wp/v2/sites/en.blog.wordpress.com


Posts:

/posts


Categories:

/categories/{id}


Slug matching (fuzzy search):

/posts?search=<keyword>

🛠 Installation & Setup
1️⃣ Clone the repo
git clone <repo-url>

2️⃣ Install dependencies
npm install

3️⃣ Setup environment variables

Create .env.local

NEXT_PUBLIC_WP_API=https://public-api.wordpress.com/wp/v2/sites/en.blog.wordpress.com

4️⃣ Update Next.js remote image domains

next.config.js

images: {
  domains: [
    "en-blog.files.wordpress.com",
    "i0.wp.com",
    "i1.wp.com"
  ],
},

5️⃣ Run project
npm run dev


App runs at:

http://localhost:3000

🔍 Development Approach
✔ Server-side rendering with ISR

Blog pages use:

fetch(url, { next: { revalidate: 60 } })


Pages are SEO-friendly and fast.

✔ Slug Page Strategy

WordPress.com API does not support:

/posts?slug=


so we built slug lookup using:

search + exact slug filter

✔ Category Fetching Strategy

Posts include:

categories: [IDs]


We load name using:

/categories/{id}


Each BlogCard shows category badges.

✔ Contact Form Strategy

Formik + Yup + Toast:

POST https://jsonplaceholder.typicode.com/posts


Submission:

no backend required

simple demonstration of API logic

✔ Hydration Fix

Excerpt sanitized using RegExp:

replace(/<[^>]+>/g, "")


Avoids CSR/SSR mismatch warnings.
