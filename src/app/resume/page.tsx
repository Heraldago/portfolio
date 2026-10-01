import { ArrowLeft, Download, Mail, Linkedin, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { experienceData, educationData, toolboxTags, languagesData, certificationsData } from "@/data/experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume, Herald Ago",
  description: "Product designer based in Barcelona. Experience, education, and tools.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Top Navigation Bar */}
      <header className="sticky top-[65px] z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-foreground/80 transition-colors hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to home</span>
          </Link>

          <a
            href="/cv-herald-ago.pdf"
            target="_blank"
            download
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white hover:bg-blue-700 transition-colors shadow-sm"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </header>

      {/* Main Resume Sheet */}
      <main className="mx-auto max-w-4xl px-6 pt-8 space-y-10">
        {/* Header Block */}
        <section className="rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-border pb-6">
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 shrink-0 p-1.5 rounded-xl border border-border bg-background shadow-sm">
                <Image
                  src="/herald-ago-icon.svg"
                  alt="Herald Ago Logo"
                  width={48}
                  height={48}
                  priority
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Herald Ago</h1>
                <p className="font-mono text-xs text-blue-600 dark:text-blue-400 font-bold mt-0.5">
                  Product Designer
                </p>
              </div>
            </div>

            <div className="space-y-1 font-mono text-xs text-foreground/80 font-medium">
              <p className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" /> Barcelona, Spain
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" /> heraldago@gmail.com
              </p>
              <p className="flex items-center gap-1.5">
                <Linkedin className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" /> linkedin.com/in/heraldago
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-muted-fg">Summary</h2>
            <p className="text-sm text-foreground/85 leading-relaxed">
              Product designer based in Barcelona. Currently interning at GoCoCo, where I design mobile onboarding flows and paywalls in Figma and Superwall for an app with 1M+ users. Master of Science in IT (Web Communication Design) from the University of Southern Denmark.
            </p>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-6 shadow-sm">
          <h2 className="font-display text-xl font-bold text-foreground border-b border-border pb-3">
            Experience
          </h2>
          <div className="space-y-6 divide-y divide-border/60">
            {experienceData.map((job) => (
              <div key={job.role + job.company} className="pt-4 first:pt-0 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="font-display text-base font-bold text-foreground">
                    {job.role}, <span className="text-blue-600 dark:text-blue-400">{job.company}</span> {job.employmentType && <span className="text-muted-fg font-normal text-xs">({job.employmentType})</span>}
                  </h3>
                  <span className="font-mono text-xs text-muted-fg">{job.period} · {job.location}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-foreground/80 leading-relaxed">
                  {job.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Timeline */}
        <section className="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-6 shadow-sm">
          <h2 className="font-display text-xl font-bold text-foreground border-b border-border pb-3">
            Education
          </h2>
          <div className="space-y-6 divide-y divide-border/60">
            {educationData.map((edu) => (
              <div key={edu.degree} className="pt-4 first:pt-0 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="font-display text-base font-bold text-foreground">
                    {edu.degree}, <span className="text-blue-600 dark:text-blue-400">{edu.institution}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted-fg">{edu.period} · {edu.location}</span>
                </div>
                {edu.details && <p className="text-xs text-foreground/80 leading-relaxed">{edu.details}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <section className="rounded-2xl border border-border bg-surface p-6 space-y-4 shadow-sm">
            <h2 className="font-display text-base font-bold text-foreground border-b border-border pb-2">
              Tools and methods
            </h2>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {toolboxTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-border bg-background px-2.5 py-1 font-mono text-xs text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-surface p-6 space-y-4 shadow-sm">
            <h2 className="font-display text-base font-bold text-foreground border-b border-border pb-2">
              Languages and certifications
            </h2>
            <div className="space-y-3 font-mono text-xs">
              {languagesData.map((l) => (
                <div key={l.name} className="flex justify-between border-b border-border/40 pb-1">
                  <span className="text-foreground">{l.name}</span>
                  <span className="text-muted-fg">{l.level}</span>
                </div>
              ))}
              {certificationsData.map((c) => (
                <div key={c.name} className="pt-1">
                  <p className="font-bold text-foreground text-xs">{c.name}</p>
                  <p className="text-[10px] text-muted-fg">{c.issuer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
