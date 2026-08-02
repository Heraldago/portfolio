import CaseStudyDetail from "@/components/CaseStudyDetail";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tutora EdTech Platform — Herald Ago Case Study",
  description: "Complete 6-phase UX design process, dual-persona system, and Figma design system built for Google UX Certificate.",
};

export default function TutoraPage() {
  const project = projectsData.find((p) => p.id === "tutora");
  if (!project) notFound();
  return <CaseStudyDetail project={project} />;
}
