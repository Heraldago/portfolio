import CaseStudyDetail from "@/components/CaseStudyDetail";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ungdomskort Redesign Case Study — Herald Ago",
  description: "Website & Mobile App redesign for Denmark's national student transport service (Ungdomskort.dk). WCAG 2.2 AA accessibility audit, heuristics, and user journey optimization.",
};

export default function UngdomskortPage() {
  const project = projectsData.find((p) => p.id === "ungdomskort");

  if (!project) {
    notFound();
  }

  return <CaseStudyDetail project={project} />;
}
