import CaseStudyDetail from "@/components/CaseStudyDetail";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "X-Bit Museum App Design: Herald Ago Case Study",
  description: "Mobile app design process completed for Google UX Design Certificate.",
};

export default function XBitPage() {
  const project = projectsData.find((p) => p.id === "xbit");
  if (!project) notFound();
  return <CaseStudyDetail project={project} />;
}
