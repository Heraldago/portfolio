import type { Metadata } from "next";
import ProjectsList from "@/components/ProjectsList";
import { projectsData } from "@/data/projects";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Projects & Case Studies | Herald Ago",
  description:
    "Selected UX/UI and product design case studies by Herald Ago: Ungdomskort, X-Bit, I Pupi Siciliani, Sydbank, and Tutora.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-12 sm:py-16 space-y-12 sm:space-y-16">
      <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
        Projects
      </h1>

      <ProjectsList projects={projectsData} priorityFirst />
    </div>
  );
}
