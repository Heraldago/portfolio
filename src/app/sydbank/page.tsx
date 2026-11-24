import CaseStudyDetail from "@/components/CaseStudyDetail";
import { projectsData } from "@/data/projects";
import { buildCaseStudyJsonLd, buildPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Sydbank Enterprise Data Catalog: Herald Ago Case Study",
  description: "User research and UI redesign reducing task completion times by 66% at Sydbank.",
  path: "/sydbank",
  image: "/assets/sydbank-cover-header.png",
  type: "article",
});

export default function SydbankPage() {
  const project = projectsData.find((p) => p.id === "sydbank");
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
