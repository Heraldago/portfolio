import { ArrowLeft, Download, Mail, Linkedin, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { experienceData, educationData, skillsData, languagesData, certificationsData } from "@/data/experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume & Curriculum Vitae — Herald Ago",
  description: "Printable and interactive resume of Herald Ago. MSc in IT from SDU Denmark, Digital Product Designer & UX Engineer.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Top Navigation Bar */}
      <header className="sticky top-[65px] z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-foreground/80 transition-colors hover:text-lime"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to home</span>
          </Link>

          <a
            href="/cv-herald-ago.pdf"
            target="_blank"
            download
            className="inline-flex items-center gap-1.5 rounded-full bg-lime px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-lime-fg shadow-lime hover:scale-105 transition-all"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </header>

      {/* Main Resume Sheet */}
      <main className="mx-auto max-w-4xl px-6 pt-8 space-y-10">
        {/* Header Block */}
        <section className="rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-glass space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-border pb-6">
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 shrink-0 p-1.5 rounded-xl border border-lime/40 bg-background shadow-sm">
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
                <p className="font-mono text-xs text-lime font-bold">
                  MSc in IT · Digital Product Designer &amp; UX Engineer
                </p>
              </div>
            </div>

            <div className="space-y-1 font-mono text-xs text-foreground/80 font-medium">
              <p className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-lime" /> Odense, Denmark &amp; Padova, Italy
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-lime" /> heraldago1@gmail.com
              </p>
              <p className="flex items-center gap-1.5">
                <Linkedin className="h-3.5 w-3.5 text-lime" /> linkedin.com/in/heraldago
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-lime">Executive Summary</h2>
            <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
              Result-driven Product Designer &amp; Design Engineer with an MSc in IT from the University of Southern Denmark (SDU). Proven expertise in empirical user research, scalable Figma design systems, WCAG 2.2 AA accessibility engineering, and modern front-end application development (React/Next.js).
            </p>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-6">
          <h2 className="font-display text-xl font-bold text-foreground border-b border-border pb-3">
            Professional Experience
          </h2>
          <div className="space-y-6 divide-y divide-border/60">
            {experienceData.map((job) => (
              <div key={job.role + job.company} className="pt-4 first:pt-0 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="font-display text-base font-bold text-foreground">
                    {job.role} — <span className="text-lime">{job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-foreground/70 font-medium">{job.period} · {job.location}</span>
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
        <section className="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-6">
          <h2 className="font-display text-xl font-bold text-foreground border-b border-border pb-3">
            Academic Background
          </h2>
          <div className="space-y-6 divide-y divide-border/60">
            {educationData.map((edu) => (
              <div key={edu.degree} className="pt-4 first:pt-0 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="font-display text-base font-bold text-foreground">
                    {edu.degree} — <span className="text-lime">{edu.institution}</span>
                  </h3>
                  <span className="font-mono text-xs text-foreground/70 font-medium">{edu.period} · {edu.location}</span>
                </div>
                {edu.details && <p className="text-xs text-foreground/80 leading-relaxed">{edu.details}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <section className="rounded-2xl border border-border bg-surface p-6 space-y-4">
            <h2 className="font-display text-base font-bold text-foreground border-b border-border pb-2">
              Skills &amp; Competencies
            </h2>
            <div className="space-y-3 font-mono text-xs">
              {skillsData.map((s) => (
                <div key={s.name} className="flex justify-between border-b border-border/40 pb-1">
                  <span className="text-foreground">{s.name}</span>
                  <span className="text-lime font-bold">{s.levelPercentage}%</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-surface p-6 space-y-4">
            <h2 className="font-display text-base font-bold text-foreground border-b border-border pb-2">
              Languages &amp; Certifications
            </h2>
            <div className="space-y-3 font-mono text-xs">
              {languagesData.map((l) => (
                <div key={l.name} className="flex justify-between border-b border-border/40 pb-1">
                  <span className="text-foreground">{l.name}</span>
                  <span className="text-lime font-bold">{l.level}</span>
                </div>
              ))}
              {certificationsData.map((c) => (
                <div key={c.name} className="pt-1">
                  <p className="font-bold text-foreground text-xs">{c.name}</p>
                  <p className="text-[10px] text-foreground/70">{c.issuer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
