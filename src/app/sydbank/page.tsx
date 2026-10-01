import CaseStudyDetail from "@/components/CaseStudyDetail";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sydbank Enterprise Data Catalog: Herald Ago Case Study",
  description: "User research and UI redesign reducing task completion times by 66% at Sydbank.",
};

export default function SydbankPage() {
  const project = projectsData.find((p) => p.id === "sydbank");
  if (!project) notFound();
  return <CaseStudyDetail project={project} />;
}
