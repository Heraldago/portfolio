import type { Metadata } from "next";
import type { CaseStudy } from "@/data/projects";

export const SITE_URL = "https://www.heraldago.com";

export function buildPageMetadata({
  title,
  description,
  path,
  image = "/metacard.png",
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const canonicalUrl = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const ogImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      url: canonicalUrl,
      siteName: "Herald Ago",
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function buildCaseStudyJsonLd(project: CaseStudy) {
  const pageUrl = `${SITE_URL}${project.link}`;
  const imagePath = project.heroImage || project.image;
  const imageUrl = imagePath.startsWith("http") ? imagePath : `${SITE_URL}${imagePath}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Work",
            item: `${SITE_URL}/work`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": `${pageUrl}#work`,
        url: pageUrl,
        name: project.title,
        headline: `${project.title} - ${project.subtitle}`,
        description: project.shortDescription,
        image: imageUrl,
        author: { "@id": `${SITE_URL}/#person` },
        keywords: project.tags.join(", "),
        inLanguage: "en",
      },
    ],
  };
}
