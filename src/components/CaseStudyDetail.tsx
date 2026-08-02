"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, ExternalLink, CheckCircle2, TrendingUp, Sparkles, Layers, ShieldCheck } from "lucide-react";
import Lightbox from "@/components/Lightbox";
import { CaseStudy } from "@/data/projects";
import { motion } from "framer-motion";

interface CaseStudyDetailProps {
  project: CaseStudy;
}

export default function CaseStudyDetail({ project }: CaseStudyDetailProps) {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <article className="min-h-screen bg-background text-foreground pb-24">
      {/* Top Back Navigation Bar */}
      <header className="sticky top-[65px] z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <Link
            href="/work"
            className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-muted-fg transition-colors hover:text-lime"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to all projects</span>
          </Link>
          <span className="font-display text-sm font-bold text-foreground">
            {project.title}
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 pt-10 space-y-16">
        {/* Case Study Header & Meta */}
        <section className="space-y-8">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-lime/10 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-lime border border-lime/30">
              <Sparkles className="h-3.5 w-3.5" /> {project.badge}
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-muted-fg max-w-3xl font-normal">
              {project.subtitle} — {project.shortDescription}
            </p>
          </div>

          {/* Project Meta Details */}
          <div className="grid grid-cols-2 gap-6 border-y border-border py-8 sm:grid-cols-4 font-mono text-xs">
            <div>
              <p className="uppercase tracking-widest text-lime font-bold">Role</p>
              <p className="mt-1 font-medium text-foreground text-sm">{project.role}</p>
            </div>
            <div>
              <p className="uppercase tracking-widest text-lime font-bold">Project Type</p>
              <p className="mt-1 font-medium text-foreground text-sm">{project.projectType}</p>
            </div>
            <div>
              <p className="uppercase tracking-widest text-lime font-bold">Tools Used</p>
              <p className="mt-1 font-medium text-foreground text-sm">{project.tools.join(", ")}</p>
            </div>
            <div>
              <p className="uppercase tracking-widest text-lime font-bold">Duration</p>
              <p className="mt-1 font-medium text-foreground text-sm">{project.duration}</p>
            </div>
          </div>
        </section>

        {/* Highlighted Business Metrics if present */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-3xl border border-border bg-surface p-6 sm:p-8 space-y-2 shadow-glass hover:border-lime transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-muted-fg">{m.label}</span>
                  <TrendingUp className="h-4 w-4 text-lime" />
                </div>
                <p className="font-display text-4xl sm:text-5xl font-extrabold text-lime">{m.value}</p>
                <p className="text-xs text-muted-fg leading-relaxed">{m.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Hero Showcase Image */}
        <section className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-glass aspect-[16/9] cursor-pointer" onClick={() => setActiveImage({ src: project.image, alt: project.title })}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover hover:scale-102 transition-transform duration-500"
          />
        </section>

        {/* Problem & Solution Breakdown */}
        <section className="rounded-3xl border border-border bg-surface p-8 sm:p-12 shadow-glass space-y-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime">The Problem</span>
              <h2 className="font-display text-2xl font-bold text-foreground">User Friction &amp; Bottlenecks</h2>
              <p className="leading-relaxed text-muted-fg text-sm sm:text-base">{project.problem}</p>
            </div>
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime">The Solution</span>
              <h2 className="font-display text-2xl font-bold text-foreground">Strategic Product Architecture</h2>
              <p className="leading-relaxed text-muted-fg text-sm sm:text-base">{project.solution}</p>
            </div>
          </div>
        </section>

        {/* Process Phases */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime">02 — Design Process</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold">Structured Methodology</h2>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {project.processPhases.map((phase) => (
              <div key={phase.number} className="grid gap-4 py-8 sm:grid-cols-12 sm:gap-8 items-start">
                <div className="sm:col-span-4 flex items-baseline gap-4">
                  <span className="font-mono text-4xl sm:text-5xl font-bold text-lime">{phase.number}</span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">{phase.phase}</h3>
                </div>
                <p className="leading-relaxed text-muted-fg text-sm sm:text-base sm:col-span-8 sm:pt-2">
                  {phase.summary}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Wireframes & Visual Evidence */}
        {project.wireframes && (
          <section className="space-y-8">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime">03 — Wireframes &amp; Layouts</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold">{project.wireframes.title}</h2>
              <p className="text-muted-fg text-sm">{project.wireframes.desc}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {project.wireframes.images.map((img) => (
                <div
                  key={img.title}
                  onClick={() => setActiveImage({ src: img.src, alt: img.title })}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-2 shadow-sm cursor-pointer hover:border-lime transition-all"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted">
                    <Image src={img.src} alt={img.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="p-3 font-mono text-xs font-semibold text-foreground text-center">{img.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Design System Details */}
        {project.designSystem && (
          <section className="space-y-8 rounded-3xl border border-border bg-surface p-8 sm:p-12">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime">04 — Design System &amp; Tokens</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold">Scalable Visual Infrastructure</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {project.designSystem.colorsImage && (
                <div
                  onClick={() => setActiveImage({ src: project.designSystem!.colorsImage!, alt: "Color System Palette" })}
                  className="rounded-2xl border border-border bg-background p-2 cursor-pointer hover:border-lime transition-all"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                    <Image src={project.designSystem.colorsImage} alt="Color Tokens" fill sizes="50vw" className="object-contain" />
                  </div>
                  <p className="p-2 font-mono text-xs font-bold text-center text-muted-fg">Color Palette &amp; Contrast Ratios</p>
                </div>
              )}
              {project.designSystem.typographyImage && (
                <div
                  onClick={() => setActiveImage({ src: project.designSystem!.typographyImage!, alt: "Typography System" })}
                  className="rounded-2xl border border-border bg-background p-2 cursor-pointer hover:border-lime transition-all"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                    <Image src={project.designSystem.typographyImage} alt="Typography Tokens" fill sizes="50vw" className="object-contain" />
                  </div>
                  <p className="p-2 font-mono text-xs font-bold text-center text-muted-fg">Typography Hierarchy</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* High-Fidelity Screens Gallery */}
        {project.highFiScreens && project.highFiScreens.length > 0 && (
          <section className="space-y-8">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime">05 — High-Fidelity Execution</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold">Core Production Screens</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.highFiScreens.map((screen) => (
                <div
                  key={screen.label}
                  onClick={() => screen.img && setActiveImage({ src: screen.img, alt: screen.label })}
                  className={`rounded-2xl border border-border bg-surface p-6 flex flex-col justify-between space-y-4 ${
                    screen.img ? "cursor-pointer hover:border-lime transition-all" : ""
                  }`}
                >
                  {screen.img && (
                    <div className="relative aspect-[9/16] max-h-[320px] w-full overflow-hidden rounded-xl bg-background">
                      <Image src={screen.img} alt={screen.label} fill sizes="33vw" className="object-contain" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">{screen.label}</h3>
                    <p className="mt-1 text-xs text-muted-fg leading-relaxed">{screen.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Key Design Decisions */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime">06 — Key Design Decisions</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Architectural Rationale</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.keyDecisions.map((decision) => (
              <div key={decision.title} className="rounded-2xl border border-border bg-surface p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-lime shrink-0" />
                  <h3 className="font-display text-base font-bold text-foreground">{decision.title}</h3>
                </div>
                <p className="text-xs text-muted-fg leading-relaxed">{decision.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="rounded-3xl border border-border bg-surface/50 p-8 sm:p-12 space-y-6">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime">07 — Learnings &amp; Takeaways</span>
          <h2 className="font-display text-3xl font-bold">What This Project Taught Me</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {project.takeaways.map((takeaway, idx) => (
              <p key={idx} className="text-sm leading-relaxed text-muted-fg border-l-2 border-lime pl-4">
                {takeaway}
              </p>
            ))}
          </div>
        </section>

        {/* Figma CTA if present */}
        {project.figmaUrl && (
          <section className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl border border-border bg-surface p-8 sm:p-12 shadow-glass">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime">Interactive Figma Prototype</span>
              <h2 className="font-display text-2xl font-bold mt-1">Explore the interactive file directly</h2>
            </div>
            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-lime px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-lime-fg shadow-lime hover:scale-105 transition-all"
            >
              <span>Open in Figma</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </section>
        )}
      </main>

      {/* Lightbox Modal */}
      <Lightbox
        src={activeImage?.src || null}
        alt={activeImage?.alt || ""}
        isOpen={!!activeImage}
        onClose={() => setActiveImage(null)}
      />
    </article>
  );
}
