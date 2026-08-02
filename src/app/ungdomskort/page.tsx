import CaseStudyDetail from "@/components/CaseStudyDetail";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ungdomskort Transit Redesign — Herald Ago Case Study",
  description: "National Danish student transit pass website and app redesign, WCAG 2.2 AA compliant. Solving payment complexity and fixing mobile responsiveness.",
};

export default function UngdomskortPage() {
  const project = projectsData.find((p) => p.id === "ungdomskort");
  if (!project) notFound();
  return <CaseStudyDetail project={project} />;
}
