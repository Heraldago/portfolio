import CaseStudyDetail from "@/components/CaseStudyDetail";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "X-Bit Museum App Design — Herald Ago Case Study",
  description: "End-to-end UX/UI mobile app design process completed for Google UX Design Professional Certificate.",
};

export default function XBitPage() {
  const project = projectsData.find((p) => p.id === "xbit");
  if (!project) notFound();
  return <CaseStudyDetail project={project} />;
}
