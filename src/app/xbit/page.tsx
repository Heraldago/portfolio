import CaseStudyDetail from "@/components/CaseStudyDetail";
import { projectsData } from "@/data/projects";
import { buildCaseStudyJsonLd, buildPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "X-Bit Museum App Design: Herald Ago Case Study",
  description: "Mobile app design process completed for Google UX Design Certificate.",
  path: "/xbit",
  image: "/assets/case-2-8SdQv_0E.png",
  type: "article",
});

export default function XBitPage() {
  const project = projectsData.find((p) => p.id === "xbit");
  if (!project) notFound();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildCaseStudyJsonLd(project)) }}
      />
      <CaseStudyDetail project={project} />
    </>
  );
}
