"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { CaseStudy } from "@/data/projects";

interface ProjectCardProps {
  project: CaseStudy;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <div className="group relative block overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-surface shadow-glass transition-all duration-300 hover:border-lime hover:shadow-[0_10px_25px_rgba(212,255,0,0.12)]">
      <Link href={project.link} className="block">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Visual Preview */}
          <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[320px] overflow-hidden bg-muted">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority={priority}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={`object-cover ${project.imagePosition || "object-center"} transition-transform duration-500 ease-out group-hover:scale-105`}
            />
            <div className="absolute top-4 left-4 z-20">
              <span className="inline-flex items-center rounded-full bg-lime px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-lime-fg shadow-sm">
                {project.badge}
              </span>
            </div>

            {/* Metric overlay pill */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="absolute bottom-4 left-4 right-4 z-20 hidden sm:block">
                <div className="rounded-xl border border-white/20 bg-black/70 p-2.5 backdrop-blur-md flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-3.5 w-3.5 text-lime" />
                    <span className="font-mono text-xs font-semibold">{project.metrics[0].label}</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-lime">
                    {project.metrics[0].value}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 space-y-5">
            <div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-sm font-bold text-lime">
                    {project.index}
                  </span>
                  <h3 className="mt-0.5 font-display text-xl sm:text-2xl font-bold text-foreground leading-snug group-hover:text-lime transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] font-mono font-bold uppercase tracking-wider text-foreground">
                    {project.subtitle}
                  </p>
                </div>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300 group-hover:bg-lime group-hover:text-lime-fg group-hover:scale-105">
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-foreground/85 leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Key Metrics grid if multiple */}
            {project.metrics && project.metrics.length > 1 && (
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-border/60">
                {project.metrics.slice(0, 2).map((m) => (
                  <div key={m.label} className="space-y-0.5">
                    <span className="font-mono text-sm font-bold text-lime">{m.value}</span>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/80 font-medium line-clamp-1">{m.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Tags */}
            <div className="pt-3 border-t border-border/60 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/80 bg-surface px-2.5 py-0.5 text-[10px] font-mono font-bold text-foreground group-hover:border-lime/40 transition-colors shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
