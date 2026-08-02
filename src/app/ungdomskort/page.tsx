import CaseStudyDetail from "@/components/CaseStudyDetail";
import UngdomskortPortal from "@/components/UngdomskortPortal";
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

  return (
    <div className="space-y-12">
      <CaseStudyDetail project={project} />

      {/* Live Interactive Ungdomskort Portal Web Application */}
      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 pb-20">
        <UngdomskortPortal />
      </div>
    </div>
  );
}
