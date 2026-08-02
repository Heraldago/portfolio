"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";
import Lightbox from "@/components/Lightbox";
import InteractivePrototype from "@/components/InteractivePrototype";
import IPhoneMockup from "@/components/iPhoneMockup";
import { CaseStudy } from "@/data/projects";

interface CaseStudyDetailProps {
  project: CaseStudy;
}

export default function CaseStudyDetail({ project }: CaseStudyDetailProps) {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <article className="min-h-screen bg-background text-foreground pb-20">
      {/* Top Back Navigation Bar */}
      <header className="sticky top-[65px] z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
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
      <main className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 pt-8 space-y-12 sm:space-y-14">
        {/* Case Study Header & Meta */}
        <section className="space-y-6">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-lime/10 px-3.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-lime border border-lime/30">
              <Sparkles className="h-3.5 w-3.5" /> {project.badge}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-muted-fg max-w-3xl font-normal">
              {project.subtitle} — {project.shortDescription}
            </p>
          </div>

          {/* Project Meta Details */}
          <div className="grid grid-cols-2 gap-4 border-y border-border py-6 sm:grid-cols-4 font-mono text-xs">
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
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-border bg-surface p-5 sm:p-6 space-y-1.5 shadow-sm hover:border-lime transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-muted-fg">{m.label}</span>
                  <TrendingUp className="h-4 w-4 text-lime" />
                </div>
                <p className="font-display text-2xl font-bold text-lime">{m.value}</p>
                <p className="text-xs text-muted-fg leading-relaxed">{m.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Hero Showcase Image */}
        <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-surface shadow-glass aspect-[16/9] cursor-pointer" onClick={() => setActiveImage({ src: project.image, alt: project.title })}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover hover:scale-102 transition-transform duration-500"
          />
        </section>

        {/* Interactive Prototype Simulator — ONLY for Ungdomskort */}
        {project.id === "ungdomskort" && project.interactivePrototype && (
          <InteractivePrototype
            title={project.interactivePrototype.title}
            description={project.interactivePrototype.description}
            steps={project.interactivePrototype.steps}
            figmaUrl={project.figmaUrl}
          />
        )}

        {/* Problem & Solution Breakdown */}
        <section className="rounded-2xl sm:rounded-3xl border border-border bg-surface p-6 sm:p-10 shadow-glass space-y-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime">The Problem</span>
              <h2 className="font-display text-xl font-bold text-foreground">User Friction &amp; Bottlenecks</h2>
              <p className="leading-relaxed text-muted-fg text-xs sm:text-sm">{project.problem}</p>
            </div>
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime">The Solution</span>
              <h2 className="font-display text-xl font-bold text-foreground">Strategic Product Architecture</h2>
              <p className="leading-relaxed text-muted-fg text-xs sm:text-sm">{project.solution}</p>
            </div>
          </div>
        </section>

        {/* Process Phases */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime">02 — Design Process</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">Structured Methodology</h2>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {project.processPhases.map((phase) => (
              <div key={phase.number} className="grid gap-3 py-6 sm:grid-cols-12 sm:gap-6 items-start">
                <div className="sm:col-span-4 flex items-baseline gap-3">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-lime">{phase.number}</span>
                  <h3 className="font-display text-lg font-bold text-foreground">{phase.phase}</h3>
                </div>
                <p className="leading-relaxed text-muted-fg text-xs sm:text-sm sm:col-span-8 sm:pt-1">
                  {phase.summary}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Research Data & Artifacts Gallery (User Groups, Personas, Competitive Analysis, User Flows) */}
        {project.researchData && (
          <section className="space-y-8 rounded-2xl sm:rounded-3xl border border-border bg-surface p-6 sm:p-10">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime">03 — Empirical User Research</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">Research Documentation &amp; Artifacts</h2>
            </div>

            {/* Competitive Analysis */}
            {project.researchData.competitiveAnalysis && (
              <div className="space-y-3 pt-2">
                <h3 className="font-mono text-xs font-bold uppercase text-lime">Competitive Analysis</h3>
                <div
                  onClick={() => setActiveImage({ src: project.researchData!.competitiveAnalysis!.image, alt: "Competitive Analysis" })}
                  className="rounded-xl border border-border bg-background p-2 cursor-pointer hover:border-lime transition-all"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                    <Image src={project.researchData.competitiveAnalysis.image} alt="Competitive Analysis Audit" fill sizes="100vw" className="object-contain" />
                  </div>
                  <p className="p-3 font-mono text-xs text-muted-fg leading-relaxed text-center">{project.researchData.competitiveAnalysis.summary}</p>
                </div>
              </div>
            )}

            {/* Personas Grid */}
            {project.researchData.personas && project.researchData.personas.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="font-mono text-xs font-bold uppercase text-lime">User Personas</h3>
                <div className="grid gap-5 sm:grid-cols-2">
                  {project.researchData.personas.map((persona) => (
                    <div
                      key={persona.title}
                      onClick={() => setActiveImage({ src: persona.image, alt: persona.title })}
                      className="rounded-xl border border-border bg-background p-2 cursor-pointer hover:border-lime transition-all space-y-2"
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                        <Image src={persona.image} alt={persona.title} fill sizes="50vw" className="object-contain" />
                      </div>
                      <p className="p-2 font-mono text-xs font-bold text-foreground text-center">{persona.title}</p>
                      {persona.summary && <p className="px-2 pb-2 text-xs text-muted-fg text-center">{persona.summary}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* User Flow & Journey Maps */}
            <div className="grid gap-5 sm:grid-cols-2 pt-2">
              {project.researchData.userFlows && (
                <div
                  onClick={() => setActiveImage({ src: project.researchData!.userFlows!.image, alt: project.researchData!.userFlows!.title })}
                  className="rounded-xl border border-border bg-background p-2 cursor-pointer hover:border-lime transition-all"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                    <Image src={project.researchData.userFlows.image} alt={project.researchData.userFlows.title} fill sizes="50vw" className="object-contain" />
                  </div>
                  <p className="p-2 font-mono text-xs font-bold text-center text-muted-fg">{project.researchData.userFlows.title}</p>
                </div>
              )}
              {project.researchData.userJourney && (
                <div
                  onClick={() => setActiveImage({ src: project.researchData!.userJourney!.image, alt: project.researchData!.userJourney!.title })}
                  className="rounded-xl border border-border bg-background p-2 cursor-pointer hover:border-lime transition-all"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                    <Image src={project.researchData.userJourney.image} alt={project.researchData.userJourney.title} fill sizes="50vw" className="object-contain" />
                  </div>
                  <p className="p-2 font-mono text-xs font-bold text-center text-muted-fg">{project.researchData.userJourney.title}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Wireframes & Visual Evidence */}
        {project.wireframes && (
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime">04 — Wireframes &amp; Layout Transformations</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">{project.wireframes.title}</h2>
              <p className="text-muted-fg text-xs sm:text-sm">{project.wireframes.desc}</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {project.wireframes.images.map((img) => (
                <div
                  key={img.title}
                  onClick={() => setActiveImage({ src: img.src, alt: img.title })}
                  className="group relative overflow-hidden rounded-xl border border-border bg-surface p-2 shadow-sm cursor-pointer hover:border-lime transition-all"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-muted">
                    <Image src={img.src} alt={img.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="p-2 font-mono text-[11px] font-semibold text-foreground text-center">{img.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Design System Details */}
        {project.designSystem && (
          <section className="space-y-6 rounded-2xl sm:rounded-3xl border border-border bg-surface p-6 sm:p-10">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime">05 — Design System &amp; Component Tokens</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">Scalable Visual Infrastructure</h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {project.designSystem.colorsImage && (
                <div
                  onClick={() => setActiveImage({ src: project.designSystem!.colorsImage!, alt: "Color System Palette" })}
                  className="rounded-xl border border-border bg-background p-2 cursor-pointer hover:border-lime transition-all"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                    <Image src={project.designSystem.colorsImage} alt="Color Tokens" fill sizes="50vw" className="object-contain" />
                  </div>
                  <p className="p-2 font-mono text-[11px] font-bold text-center text-muted-fg">Color Palette &amp; Contrast Ratios</p>
                </div>
              )}
              {project.designSystem.typographyImage && (
                <div
                  onClick={() => setActiveImage({ src: project.designSystem!.typographyImage!, alt: "Typography System" })}
                  className="rounded-xl border border-border bg-background p-2 cursor-pointer hover:border-lime transition-all"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                    <Image src={project.designSystem.typographyImage} alt="Typography Tokens" fill sizes="50vw" className="object-contain" />
                  </div>
                  <p className="p-2 font-mono text-[11px] font-bold text-center text-muted-fg">Typography Hierarchy</p>
                </div>
              )}
              {project.designSystem.componentsImage && (
                <div
                  onClick={() => setActiveImage({ src: project.designSystem!.componentsImage!, alt: "Figma Component Tokens" })}
                  className="rounded-xl border border-border bg-background p-2 cursor-pointer hover:border-lime transition-all"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                    <Image src={project.designSystem.componentsImage} alt="Figma Component Tokens" fill sizes="50vw" className="object-contain" />
                  </div>
                  <p className="p-2 font-mono text-[11px] font-bold text-center text-muted-fg">Figma Reusable Component Library</p>
                </div>
              )}
              {project.designSystem.aiImage && (
                <div
                  onClick={() => setActiveImage({ src: project.designSystem!.aiImage!, alt: "AI Image Generation Process" })}
                  className="rounded-xl border border-border bg-background p-2 cursor-pointer hover:border-lime transition-all"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                    <Image src={project.designSystem.aiImage} alt="AI 3D Visual Creation" fill sizes="50vw" className="object-contain" />
                  </div>
                  <p className="p-2 font-mono text-[11px] font-bold text-center text-muted-fg">AI Asset Generation &amp; Illustrator Vectorization</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* High-Fidelity Screens Gallery — Rendered inside iPhone 14 Pro Device Mockups */}
        {project.highFiScreens && project.highFiScreens.length > 0 && (
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime">06 — High-Fidelity Production Screens</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">Mobile Application Experience (iPhone 14 Pro)</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {project.highFiScreens.map((screen) => (
                <IPhoneMockup
                  key={screen.label}
                  src={screen.img}
                  alt={screen.label}
                  label={screen.label}
                  desc={screen.desc}
                  onClick={() => screen.img && setActiveImage({ src: screen.img, alt: screen.label })}
                />
              ))}
            </div>
          </section>
        )}

        {/* Key Design Decisions */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime">07 — Key Design Decisions</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">Architectural Rationale</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {project.keyDecisions.map((decision) => (
              <div key={decision.title} className="rounded-xl border border-border bg-surface p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime shrink-0" />
                  <h3 className="font-display text-sm sm:text-base font-bold text-foreground">{decision.title}</h3>
                </div>
                <p className="text-xs text-muted-fg leading-relaxed">{decision.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="rounded-2xl sm:rounded-3xl border border-border bg-surface/50 p-6 sm:p-10 space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime">08 — Learnings &amp; Takeaways</span>
          <h2 className="font-display text-2xl font-bold">What This Project Taught Me</h2>
          <div className="grid gap-5 lg:grid-cols-2">
            {project.takeaways.map((takeaway, idx) => (
              <p key={idx} className="text-xs sm:text-sm leading-relaxed text-muted-fg border-l-2 border-lime pl-3">
                {takeaway}
              </p>
            ))}
          </div>
        </section>

        {/* Figma CTA if present */}
        {project.figmaUrl && (
          <section className="flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl sm:rounded-3xl border border-border bg-surface p-6 sm:p-10 shadow-glass">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime">Interactive Figma Prototype</span>
              <h2 className="font-display text-xl sm:text-2xl font-bold mt-1">Explore the interactive file directly</h2>
            </div>
            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3 text-xs font-mono font-bold uppercase tracking-wider text-lime-fg shadow-lime hover:scale-105 transition-all"
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
