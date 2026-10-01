"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CaseStudy } from "@/data/projects";

interface ProjectCardProps {
  project: CaseStudy;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className="group rounded-2xl sm:rounded-3xl border border-border bg-surface transition-all duration-300 hover:border-foreground/30 hover:shadow-sm overflow-hidden">
      <Link href={project.link} className="block p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Visual Preview */}
          <div className="md:col-span-7 relative aspect-[16/10] overflow-hidden rounded-xl bg-muted border border-border/40">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, 55vw"
              className={`object-cover ${project.imagePosition || "object-center"} transition-transform duration-500 ease-out group-hover:scale-[1.02]`}
            />
          </div>

          {/* Minimal Editorial Content */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-muted-fg">
              <span>{project.badge}</span>
              <span>·</span>
              <span>{project.duration}</span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
              {project.shortDescription}
            </p>

            <div className="pt-2 flex items-center gap-1.5 font-mono text-xs font-semibold text-blue-600 dark:text-blue-400">
              <span>View case study</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
