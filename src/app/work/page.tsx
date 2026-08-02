"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/projects";
import { Layers, Filter } from "lucide-react";

export default function WorkPage() {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const filterTags = ["All", "Mobile-First", "WCAG 2.2 AA", "E-Commerce UX", "Enterprise UX", "EdTech"];

  const filteredProjects =
    selectedTag === "All"
      ? projectsData
      : projectsData.filter((p) =>
          p.tags.some((t) => t.toLowerCase().includes(selectedTag.toLowerCase())) ||
          p.badge.toLowerCase().includes(selectedTag.toLowerCase())
        );

  return (
    <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 py-10 sm:py-16 space-y-10">
      {/* Header */}
      <div className="space-y-3 border-b border-border pb-6">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime flex items-center gap-2">
          <Layers className="h-4 w-4" /> Complete Project Archive
        </span>
        <h1 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
          All Case Studies &amp; Research
        </h1>
        <p className="max-w-xl text-xs sm:text-sm text-muted-fg leading-relaxed">
          Comprehensive project portfolio spanning Danish public sector transit services, Google UX capstones, live WooCommerce builds, enterprise fintech data tools, and EdTech design systems.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
        <Filter className="h-4 w-4 text-lime shrink-0 hidden sm:block" />
        <div className="flex items-center gap-2">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`rounded-full px-3.5 py-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedTag === tag
                  ? "bg-lime text-lime-fg shadow-sm"
                  : "border border-border bg-surface text-muted-fg hover:text-foreground hover:border-lime"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="space-y-8 sm:space-y-12">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} priority={idx === 0} />
        ))}
      </div>
    </div>
  );
}
