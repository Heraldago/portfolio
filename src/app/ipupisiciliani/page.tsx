import CaseStudyDetail from "@/components/CaseStudyDetail";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "I Pupi Siciliani Wine E-Commerce — Herald Ago Case Study",
  description: "End-to-end UX/UI, studio product photography, and custom WooCommerce build in Odense, Denmark (+187% YoY net profit).",
};

export default function IPupiSicilianiPage() {
  const project = projectsData.find((p) => p.id === "ipupisiciliani");
  if (!project) notFound();
  return <CaseStudyDetail project={project} />;
}
