import CaseStudyDetail from "@/components/CaseStudyDetail";
import { projectsData } from "@/data/projects";
import { buildCaseStudyJsonLd, buildPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "Ungdomskort Redesign Case Study: Herald Ago",
  description:
    "Website and mobile app redesign for Denmark's national student transport service (Ungdomskort.dk). Accessibility audit, heuristics, and user journey optimization.",
  path: "/ungdomskort",
  image: "/assets/ungdomskort-4k-enhanced.jpg",
  type: "article",
});

export default function UngdomskortPage() {
  const project = projectsData.find((p) => p.id === "ungdomskort");

  if (!project) {
    notFound();
  }

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
