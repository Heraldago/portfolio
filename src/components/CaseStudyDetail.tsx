"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Lightbox from "@/components/Lightbox";
import UngdomskortPortal from "@/components/UngdomskortPortal";
import IPhoneMockup from "@/components/iPhoneMockup";
import ProjectsList from "@/components/ProjectsList";
import { CaseStudy, projectsData } from "@/data/projects";

interface CaseStudyDetailProps {
  project: CaseStudy;
}

export default function CaseStudyDetail({ project }: CaseStudyDetailProps) {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

  const isXBit = project.id === "xbit";
  const otherProjects = projectsData.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <article className="text-foreground">
      {/* Hero Section (White surface with rounded bottom border) */}
      <section className="w-full bg-white dark:bg-surface rounded-b-[2rem] sm:rounded-b-[3rem] border-b border-border/70">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-12 sm:py-16 space-y-10">
          <div className="space-y-4">
            <Link
              href="/work"
              className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline underline-offset-4"
            >
              All projects
            </Link>
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-foreground/85 max-w-3xl">
              {project.subtitle}. {project.shortDescription}
            </p>
          </div>

          {/* Project Meta Details */}
          <div className="grid grid-cols-2 gap-6 border-y border-border/60 py-6 sm:grid-cols-4 text-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-fg">Role</p>
              <p className="mt-1 font-medium text-foreground">{project.role}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-fg">Project Type</p>
              <p className="mt-1 font-medium text-foreground">{project.projectType}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-fg">Tools</p>
              <p className="mt-1 font-medium text-foreground">{project.tools.join(", ")}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-fg">Duration</p>
              <p className="mt-1 font-medium text-foreground">{project.duration}</p>
            </div>
          </div>

          {/* Highlighted Business Metrics if present */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-3xl border border-border/70 bg-background p-6 space-y-1"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-fg">{m.label}</span>
                  <p className="font-sans text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">{m.value}</p>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed pt-1">{m.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Hero Showcase Image */}
          <div
            className="relative overflow-hidden rounded-3xl border border-border/80 dark:border-white/15 bg-white shadow-md aspect-[16/9] cursor-pointer"
            onClick={() => setActiveImage({ src: project.heroImage || project.image, alt: project.title })}
          >
            <Image
              src={project.heroImage || project.image}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className={`object-cover ${project.heroImage ? "object-top" : (project.imagePosition || "object-center")} hover:scale-[1.01] transition-transform duration-500`}
            />
          </div>
        </div>
      </section>

      {/* Main Content Body (#f8fafc99 background with rounded bottom border) */}
      <section className="w-full rounded-b-[2rem] sm:rounded-b-[3rem] border-b border-border/70">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-14 sm:py-20 space-y-16 sm:space-y-20">
          {/* Live Interactive Ungdomskort Application Prototype */}
          {project.id === "ungdomskort" && (
            <div>
              <UngdomskortPortal />
            </div>
          )}

          {/* Problem & Solution Breakdown */}
          <div className="rounded-3xl border border-border/70 bg-white dark:bg-surface p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-fg">The Problem</p>
                <h2 className="font-sans text-2xl font-bold text-foreground">User Friction &amp; Bottlenecks</h2>
                <p className="leading-relaxed text-foreground/85 text-sm sm:text-base">{project.problem}</p>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-fg">The Solution</p>
                <h2 className="font-sans text-2xl font-bold text-foreground">Product Architecture</h2>
                <p className="leading-relaxed text-foreground/85 text-sm sm:text-base">{project.solution}</p>
              </div>
            </div>
          </div>

          {/* Process Phases */}
          <div className="space-y-6">
            <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Design Process
            </h2>

            <div className="divide-y divide-border/70 border-y border-border/70">
              {project.processPhases.map((phase) => (
                <div key={phase.number} className="grid gap-3 py-6 sm:grid-cols-12 sm:gap-6 items-start">
                  <div className="sm:col-span-4 flex items-baseline gap-3">
                    <span className="font-sans text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">{phase.number}</span>
                    <h3 className="font-sans text-lg sm:text-xl font-bold text-foreground">{phase.phase}</h3>
                  </div>
                  <p className="leading-relaxed text-foreground/85 text-sm sm:text-base sm:col-span-8">
                    {phase.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Research Data & Artifacts Gallery */}
          {project.researchData && (
            <div className="space-y-8 rounded-3xl border border-border/70 bg-white dark:bg-surface p-7 sm:p-10">
              <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Research &amp; Artifacts
              </h2>

              {project.researchData.userGroups && project.researchData.userGroups.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-fg">User Groups</h3>
                  <div className="grid gap-5 sm:grid-cols-1">
                    {project.researchData.userGroups.map((group) => (
                      <div
                        key={group.title}
                        onClick={() => setActiveImage({ src: group.image, alt: group.title })}
                        className="rounded-2xl border border-border/70 bg-background p-3 cursor-pointer hover:border-foreground/30 transition-colors space-y-2"
                      >
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-white">
                          <Image src={group.image} alt={group.title} fill sizes="100vw" className="object-contain" />
                        </div>
                        <p className="p-1 text-xs font-semibold text-foreground text-center">{group.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.researchData.competitiveAnalysis && (
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-fg">Competitive Analysis</h3>
                  <div
                    onClick={() => setActiveImage({ src: project.researchData!.competitiveAnalysis!.image, alt: "Competitive Analysis" })}
                    className="rounded-2xl border border-border/70 bg-background p-3 cursor-pointer hover:border-foreground/30 transition-colors"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-white">
                      <Image src={project.researchData.competitiveAnalysis.image} alt="Competitive Analysis Audit" fill sizes="100vw" className="object-contain" />
                    </div>
                    <p className="p-3 text-xs sm:text-sm text-foreground/80 leading-relaxed text-center">{project.researchData.competitiveAnalysis.summary}</p>
                  </div>
                </div>
              )}

              {project.researchData.personas && project.researchData.personas.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-fg">User Personas</h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {project.researchData.personas.map((persona) => (
                      <div
                        key={persona.title}
                        onClick={() => setActiveImage({ src: persona.image, alt: persona.title })}
                        className="rounded-2xl border border-border/70 bg-background p-3 cursor-pointer hover:border-foreground/30 transition-colors space-y-2"
                      >
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-white">
                          <Image src={persona.image} alt={persona.title} fill sizes="50vw" className="object-contain" />
                        </div>
                        <p className="p-1 text-xs font-semibold text-foreground text-center">{persona.title}</p>
                        {persona.summary && <p className="px-2 pb-2 text-xs text-foreground/75 text-center">{persona.summary}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.researchData.statements && project.researchData.statements.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-fg">Problem Statements</h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {project.researchData.statements.map((stmt) => (
                      <div
                        key={stmt.title}
                        onClick={() => setActiveImage({ src: stmt.image, alt: stmt.title })}
                        className="rounded-2xl border border-border/70 bg-background p-3 cursor-pointer hover:border-foreground/30 transition-colors"
                      >
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-white">
                          <Image src={stmt.image} alt={stmt.title} fill sizes="50vw" className="object-contain" />
                        </div>
                        <p className="p-2 text-xs font-semibold text-center text-foreground/80">{stmt.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.researchData.goalStatement && (
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-fg">Product Goal Statement</h3>
                  <div
                    onClick={() => setActiveImage({ src: project.researchData!.goalStatement!.image, alt: project.researchData!.goalStatement!.title })}
                    className="rounded-2xl border border-border/70 bg-background p-3 cursor-pointer hover:border-foreground/30 transition-colors"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-white">
                      <Image src={project.researchData.goalStatement.image} alt={project.researchData.goalStatement.title} fill sizes="100vw" className="object-contain" />
                    </div>
                    <p className="p-2 text-xs font-semibold text-center text-foreground/80">{project.researchData.goalStatement.title}</p>
                  </div>
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                {project.researchData.userFlows && (
                  <div
                    onClick={() => setActiveImage({ src: project.researchData!.userFlows!.image, alt: project.researchData!.userFlows!.title })}
                    className="rounded-2xl border border-border/70 bg-background p-3 cursor-pointer hover:border-foreground/30 transition-colors"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-white">
                      <Image src={project.researchData.userFlows.image} alt={project.researchData.userFlows.title} fill sizes="50vw" className="object-contain" />
                    </div>
                    <p className="p-2 text-xs font-semibold text-center text-foreground/80">{project.researchData.userFlows.title}</p>
                  </div>
                )}
                {project.researchData.userJourney && (
                  <div
                    onClick={() => setActiveImage({ src: project.researchData!.userJourney!.image, alt: project.researchData!.userJourney!.title })}
                    className="rounded-2xl border border-border/70 bg-background p-3 cursor-pointer hover:border-foreground/30 transition-colors"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-white">
                      <Image src={project.researchData.userJourney.image} alt={project.researchData.userJourney.title} fill sizes="50vw" className="object-contain" />
                    </div>
                    <p className="p-2 text-xs font-semibold text-center text-foreground/80">{project.researchData.userJourney.title}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Wireframes & Visual Evidence */}
          {project.wireframes && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-foreground">{project.wireframes.title}</h2>
                <p className="text-foreground/80 text-sm sm:text-base">{project.wireframes.desc}</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {project.wireframes.images.map((img) => (
                  <div
                    key={img.title}
                    onClick={() => setActiveImage({ src: img.src, alt: img.title })}
                    className="group relative overflow-hidden rounded-3xl border border-border/80 bg-white dark:bg-surface p-3 shadow-sm cursor-pointer hover:border-foreground/30 transition-all"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white">
                      <Image src={img.src} alt={img.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                    </div>
                    <p className="p-2.5 text-xs font-semibold text-foreground text-center">{img.title}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sydbank 4 Core UI Redesign Blocks (Before vs After) */}
          {project.sydbankBlocks && project.sydbankBlocks.length > 0 && (
            <div className="space-y-8">
              <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Interface Transformation (Before vs After)
              </h2>

              <div className="space-y-8">
                {project.sydbankBlocks.map((block) => (
                  <div key={block.blockNum} className="rounded-3xl border border-border/70 bg-white dark:bg-surface p-6 sm:p-8 space-y-5">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">{block.blockNum}</span>
                      <h3 className="font-sans text-xl font-bold text-foreground mt-1">{block.title}</h3>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div
                        onClick={() => setActiveImage({ src: block.beforeImg, alt: `${block.blockNum} Before` })}
                        className="rounded-2xl border border-border/70 bg-background p-3 space-y-2 cursor-pointer hover:border-foreground/30 transition-colors"
                      >
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-white">
                          <Image src={block.beforeImg} alt={`${block.blockNum} Before`} fill sizes="50vw" className="object-contain" />
                        </div>
                        <p className="text-xs text-foreground/80 leading-relaxed">{block.beforeDesc}</p>
                      </div>

                      <div
                        onClick={() => setActiveImage({ src: block.afterImg, alt: `${block.blockNum} After` })}
                        className="rounded-2xl border border-blue-600/30 bg-background p-3 space-y-2 cursor-pointer hover:border-blue-600 transition-colors"
                      >
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-white">
                          <Image src={block.afterImg} alt={`${block.blockNum} After`} fill sizes="50vw" className="object-contain" />
                        </div>
                        <p className="text-xs font-medium text-foreground leading-relaxed">{block.afterDesc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Design System Details */}
          {project.designSystem && (
            <div className="space-y-6 rounded-3xl border border-border/70 bg-white dark:bg-surface p-7 sm:p-10">
              <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Design System &amp; Tokens
              </h2>

              <div className="grid gap-5 sm:grid-cols-2">
                {project.designSystem.colorsImage && (
                  <div
                    onClick={() => setActiveImage({ src: project.designSystem!.colorsImage!, alt: "Color System Palette" })}
                    className="rounded-2xl border border-border/70 bg-background p-3 cursor-pointer hover:border-foreground/30 transition-colors"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-white">
                      <Image src={project.designSystem.colorsImage} alt="Color Tokens" fill sizes="50vw" className="object-contain" />
                    </div>
                    <p className="p-2 text-xs font-semibold text-center text-foreground/80">Color Palette &amp; Contrast Ratios</p>
                  </div>
                )}
                {project.designSystem.typographyImage && (
                  <div
                    onClick={() => setActiveImage({ src: project.designSystem!.typographyImage!, alt: "Typography System" })}
                    className="rounded-2xl border border-border/70 bg-background p-3 cursor-pointer hover:border-foreground/30 transition-colors"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-white">
                      <Image src={project.designSystem.typographyImage} alt="Typography Tokens" fill sizes="50vw" className="object-contain" />
                    </div>
                    <p className="p-2 text-xs font-semibold text-center text-foreground/80">Typography Hierarchy</p>
                  </div>
                )}
                {project.designSystem.iconsGridsImage && (
                  <div
                    onClick={() => setActiveImage({ src: project.designSystem!.iconsGridsImage!, alt: "Icons & Grids System" })}
                    className="rounded-2xl border border-border/70 bg-background p-3 cursor-pointer hover:border-foreground/30 transition-colors"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-white">
                      <Image src={project.designSystem.iconsGridsImage} alt="Icons and Grids" fill sizes="50vw" className="object-contain" />
                    </div>
                    <p className="p-2 text-xs font-semibold text-center text-foreground/80">Icons &amp; Grid Alignment System</p>
                  </div>
                )}
                {project.designSystem.componentsImage && (
                  <div
                    onClick={() => setActiveImage({ src: project.designSystem!.componentsImage!, alt: "Figma Component Tokens" })}
                    className="rounded-2xl border border-border/70 bg-background p-3 cursor-pointer hover:border-foreground/30 transition-colors"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-white">
                      <Image src={project.designSystem.componentsImage} alt="Figma Component Tokens" fill sizes="50vw" className="object-contain" />
                    </div>
                    <p className="p-2 text-xs font-semibold text-center text-foreground/80">Figma Reusable Component Library</p>
                  </div>
                )}
              </div>

              {project.designSystem.aiImage && (
                <div className="pt-4 border-t border-border/60 space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-fg">AI Image Creation &amp; 3D Visual Assets</h3>
                  {project.designSystem.aiDesc && (
                    <p className="text-sm text-foreground/80 leading-relaxed">{project.designSystem.aiDesc}</p>
                  )}
                  <div
                    onClick={() => setActiveImage({ src: project.designSystem!.aiImage!, alt: "AI Image Generation Process" })}
                    className="rounded-2xl border border-border/70 bg-background p-3 cursor-pointer hover:border-foreground/30 transition-colors"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-white">
                      <Image src={project.designSystem.aiImage} alt="AI 3D Visual Creation" fill sizes="100vw" className="object-contain" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* High-Fidelity Screens Gallery */}
          {project.highFiScreens && project.highFiScreens.length > 0 && (
            <div className="space-y-6">
              <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {isXBit ? "Mobile Application Experience" : "Core Screens"}
              </h2>

              {isXBit ? (
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
              ) : (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {project.highFiScreens.map((screen) => (
                    <div
                      key={screen.label}
                      onClick={() => screen.img && setActiveImage({ src: screen.img, alt: screen.label })}
                      className={`rounded-3xl border border-border/70 bg-white dark:bg-surface p-6 flex flex-col justify-between space-y-3 ${
                        screen.img ? "cursor-pointer hover:border-foreground/30 transition-colors" : ""
                      }`}
                    >
                      {screen.img && (
                        <div className="relative aspect-[16/10] max-h-[200px] w-full overflow-hidden rounded-2xl bg-white">
                          <Image src={screen.img} alt={screen.label} fill sizes="33vw" className="object-contain" />
                        </div>
                      )}
                      <div>
                        <h3 className="font-sans text-base font-bold text-foreground">{screen.label}</h3>
                        <p className="mt-1 text-xs sm:text-sm text-foreground/80 leading-relaxed">{screen.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Key Design Decisions */}
          <div className="space-y-6">
            <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Key Design Decisions
            </h2>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {project.keyDecisions.map((decision) => (
                <div key={decision.title} className="rounded-3xl border border-border/70 bg-white dark:bg-surface p-6 space-y-2">
                  <h3 className="font-sans text-base font-bold text-foreground">{decision.title}</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">{decision.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="rounded-3xl border border-border/70 bg-white dark:bg-surface p-7 sm:p-10 space-y-5">
            <h2 className="font-sans text-2xl font-bold tracking-tight text-foreground">
              Key Takeaways
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {project.takeaways.map((takeaway, idx) => (
                <p key={idx} className="text-sm sm:text-base leading-relaxed text-foreground/85 border-l-2 border-blue-600 dark:border-blue-400 pl-4">
                  {takeaway}
                </p>
              ))}
            </div>
          </div>

          {/* Figma CTA if present */}
          {project.figmaUrl && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 rounded-3xl border border-border/70 bg-white dark:bg-surface p-7 sm:p-10">
              <div>
                <h2 className="font-sans text-xl sm:text-2xl font-bold text-foreground">Interactive Figma File</h2>
                <p className="text-sm text-foreground/80 mt-1">Explore the design system and screens directly in Figma.</p>
              </div>
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-blue-600 dark:bg-blue-500 px-7 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors shrink-0"
              >
                Open in Figma
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Explore Other Projects (White surface with rounded bottom border) */}
      <section className="w-full bg-white dark:bg-surface rounded-b-[2rem] sm:rounded-b-[3rem] border-b border-border/70">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-14 sm:py-20 space-y-12">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              More projects
            </h2>
            <Link
              href="/work"
              className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline underline-offset-4"
            >
              View all
            </Link>
          </div>

          <ProjectsList projects={otherProjects} />
        </div>
      </section>

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
