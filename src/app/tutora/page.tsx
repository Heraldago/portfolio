import CaseStudyDetail from "@/components/CaseStudyDetail";
import { projectsData } from "@/data/projects";
import { buildCaseStudyJsonLd, buildPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Tutora EdTech Platform: Herald Ago Case Study",
  description: "Six-phase UX design process, dual-persona system, and Figma design system built for Google UX Certificate.",
  path: "/tutora",
  image: "/assets/case-1-D3qXAdrt.png",
  type: "article",
});

export default function TutoraPage() {
  const project = projectsData.find((p) => p.id === "tutora");
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
