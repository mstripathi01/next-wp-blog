export interface WPFeaturedMedia {
  source_url: string;
}

export interface WPAuthor {
  name: string;
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
}

// export interface WPPost {
//   id: number;
//   slug: string;
//   date: string;
//   title: {
//     rendered: string;
//   };
//   excerpt: {
//     rendered: string;
//   };
//   content: {
//     rendered: string;
//   };
//   _embedded: {
//     author: WPAuthor[];
//     "wp:featuredmedia": WPFeaturedMedia[];
//     "wp:term": WPCategory[][];
//   };
// }

export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  jetpack_featured_media_url: string;
  categories: number[];
  tags: number[];
}
