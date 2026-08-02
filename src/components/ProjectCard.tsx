"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, TrendingUp, CheckCircle2 } from "lucide-react";
import { CaseStudy } from "@/data/projects";

interface ProjectCardProps {
  project: CaseStudy;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative block overflow-hidden rounded-3xl border border-border bg-surface shadow-glass transition-all duration-500 hover:border-lime hover:shadow-[0_15px_35px_rgba(212,255,0,0.15)]"
    >
      <Link href={project.link} className="block">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Visual Preview */}
          <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[380px] overflow-hidden bg-muted">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority={priority}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 z-20">
              <span className="inline-flex items-center rounded-full bg-lime px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-lime-fg shadow-sm">
                {project.badge}
              </span>
            </div>

            {/* Metric overlay pill */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="absolute bottom-4 left-4 right-4 z-20 hidden sm:block">
                <div className="rounded-2xl border border-white/20 bg-black/60 p-3 backdrop-blur-md flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-lime" />
                    <span className="font-mono text-xs font-semibold">{project.metrics[0].label}</span>
                  </div>
                  <span className="font-mono text-sm font-bold text-lime">
                    {project.metrics[0].value}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-10 space-y-6">
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-base font-bold text-lime">
                    {project.index}
                  </span>
                  <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-foreground leading-snug group-hover:text-lime transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-mono font-semibold uppercase tracking-wider text-muted-fg">
                    {project.subtitle}
                  </p>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300 group-hover:bg-lime group-hover:text-lime-fg group-hover:scale-110 group-hover:rotate-12">
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              <p className="mt-4 text-sm text-muted-fg leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Key Metrics grid if multiple */}
            {project.metrics && project.metrics.length > 1 && (
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-border/60">
                {project.metrics.slice(0, 2).map((m) => (
                  <div key={m.label} className="space-y-0.5">
                    <span className="font-mono text-base font-bold text-lime">{m.value}</span>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-fg line-clamp-1">{m.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Tags */}
            <div className="pt-4 border-t border-border/60 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-background px-3 py-1 text-[11px] font-mono font-medium text-muted-fg group-hover:border-lime/40 group-hover:text-foreground transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
