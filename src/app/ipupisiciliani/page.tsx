import CaseStudyDetail from "@/components/CaseStudyDetail";
import { projectsData } from "@/data/projects";
import { buildCaseStudyJsonLd, buildPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  title: "I Pupi Siciliani Wine E-Commerce: Herald Ago Case Study",
  description: "Product design, photography, and WooCommerce build in Odense, Denmark (+187% YoY net profit).",
  path: "/ipupisiciliani",
  image: "/assets/case-3-DEv2TI_Y.jpg",
  type: "article",
});

export default function IPupiSicilianiPage() {
  const project = projectsData.find((p) => p.id === "ipupisiciliani");
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
