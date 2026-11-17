"use client";

import { useEffect, useRef, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { CaseStudy } from "@/data/projects";

interface ProjectsListProps {
  projects: CaseStudy[];
  priorityFirst?: boolean;
}

export default function ProjectsList({
  projects,
  priorityFirst = false,
}: ProjectsListProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const pointerRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const updateFromPoint = () => {
      const pt = pointerRef.current;
      if (!pt) return;
      const el = document.elementFromPoint(pt.x, pt.y);
      const card = el?.closest("[data-project-id]");
      const id = card?.getAttribute("data-project-id") ?? null;
      setHoveredId((prev) => (prev === id ? prev : id));
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      pointerRef.current = { x: e.clientX, y: e.clientY };
      updateFromPoint();
    };

    const handleScroll = () => {
      updateFromPoint();
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="space-y-16 sm:space-y-24"
      onPointerLeave={() => setHoveredId(null)}
    >
      {projects.map((project, idx) => {
        const isDimmed = hoveredId !== null && hoveredId !== project.id;
        return (
          <div
            key={project.id}
            data-project-id={project.id}
            className={`transition-[opacity,filter] duration-200 ${
              isDimmed ? "opacity-40 blur-[2px]" : "opacity-100 blur-none"
            }`}
          >
            <ProjectCard
              project={project}
              priority={priorityFirst && idx === 0}
              reverse={idx % 2 === 1}
            />
          </div>
        );
      })}
    </div>
  );
}
