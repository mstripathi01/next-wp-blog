import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

const generateSEO = ({
  title,
  description,
  url,
  image,
}: SEOProps): Metadata => {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
            },
          ]
        : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : [],
    },
  };
};

export default generateSEO;
