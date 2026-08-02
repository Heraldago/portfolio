"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/projects";
import { Sparkles, Layers, Filter } from "lucide-react";
import { motion } from "framer-motion";

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
    <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 py-12 sm:py-20 space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-border pb-8">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime flex items-center gap-2">
          <Layers className="h-4 w-4" /> Complete Project Archive
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-foreground">
          All Case Studies &amp; Research
        </h1>
        <p className="max-w-2xl text-base text-muted-fg leading-relaxed">
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
              className={`rounded-full px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
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
      <div className="space-y-10 sm:space-y-14">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} priority={idx === 0} />
        ))}
      </div>
    </div>
  );
}
