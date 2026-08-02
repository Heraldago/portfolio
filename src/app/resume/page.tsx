import { Mail, Linkedin, MapPin, Globe } from "lucide-react";
import Image from "next/image";
import { experienceData, educationData, skillsData, languagesData, certificationsData } from "@/data/experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume & Curriculum Vitae — Herald Ago",
  description: "Official 1-page Curriculum Vitae of Herald Ago. MSc in IT from SDU Denmark, Digital Product Designer & UX Engineer.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-6 px-4 sm:px-6">
      {/* Main Single-Page A4 Sheet */}
      <main className="mx-auto max-w-4xl bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow-glass space-y-6">
        {/* Header Block with Logo instead of HA badge */}
        <section className="border-b border-border pb-5 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
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
                <h1 className="font-display text-2xl font-bold text-foreground tracking-tight">Herald Ago</h1>
                <p className="font-mono text-xs font-bold text-lime">
                  MSc in IT · Digital Product Designer &amp; UX Engineer
                </p>
              </div>
            </div>

            <div className="space-y-1 font-mono text-[11px] text-foreground/80 font-medium">
              <p className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-lime" /> Odense, Denmark &amp; Padova, Italy
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-lime" /> heraldago1@gmail.com
              </p>
              <p className="flex items-center gap-1.5">
                <Linkedin className="h-3.5 w-3.5 text-lime" /> linkedin.com/in/heraldago
              </p>
              <p className="flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5 text-lime" /> www.heraldago.com
              </p>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-xs text-foreground/85 leading-relaxed">
              Result-driven Product Designer &amp; UX Engineer with an MSc in IT from the University of Southern Denmark (SDU). Proven expertise in empirical user research, scalable Figma design token systems, WCAG 2.2 AA accessibility engineering, and modern front-end engineering (React/Next.js).
            </p>
          </div>
        </section>

        {/* Experience & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Experience */}
          <section className="lg:col-span-7 space-y-4">
            <h2 className="font-display text-base font-bold text-foreground border-b border-border pb-1.5 uppercase tracking-wider text-xs font-mono">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {experienceData.map((job) => (
                <div key={job.role + job.company} className="space-y-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h3 className="font-display text-xs sm:text-sm font-bold text-foreground">
                      {job.role} — <span className="text-lime">{job.company}</span>
                    </h3>
                    <span className="font-mono text-[10px] text-foreground/70 font-medium">{job.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-[11px] text-foreground/80 leading-snug">
                    {job.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Right Column: Education, Skills & Languages */}
          <div className="lg:col-span-5 space-y-5">
            {/* Education */}
            <section className="space-y-3">
              <h2 className="font-display text-base font-bold text-foreground border-b border-border pb-1.5 uppercase tracking-wider text-xs font-mono">
                Academic Degrees
              </h2>
              <div className="space-y-3">
                {educationData.map((edu) => (
                  <div key={edu.degree} className="space-y-0.5">
                    <h3 className="font-display text-xs font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="font-mono text-[10px] text-lime font-bold">{edu.institution} · {edu.period}</p>
                    {edu.details && <p className="text-[10px] text-foreground/80 leading-tight">{edu.details}</p>}
                  </div>
                ))}
              </div>
            </section>

            {/* Core Skills */}
            <section className="space-y-2">
              <h2 className="font-display text-base font-bold text-foreground border-b border-border pb-1.5 uppercase tracking-wider text-xs font-mono">
                Core Stack &amp; Skills
              </h2>
              <div className="grid grid-cols-2 gap-1.5 font-mono text-[10px]">
                {skillsData.map((s) => (
                  <div key={s.name} className="flex justify-between rounded bg-background p-1 px-1.5 border border-border/50">
                    <span className="text-foreground font-semibold truncate">{s.name}</span>
                    <span className="text-lime font-bold">{s.levelPercentage}%</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages & Certification */}
            <section className="space-y-2">
              <h2 className="font-display text-base font-bold text-foreground border-b border-border pb-1.5 uppercase tracking-wider text-xs font-mono">
                Languages &amp; Certs
              </h2>
              <div className="space-y-1.5 font-mono text-[10px]">
                {languagesData.map((l) => (
                  <div key={l.name} className="flex justify-between border-b border-border/40 pb-0.5">
                    <span className="text-foreground font-medium">{l.name}</span>
                    <span className="text-lime font-bold">{l.level}</span>
                  </div>
                ))}
                {certificationsData.map((c) => (
                  <div key={c.name} className="pt-0.5">
                    <p className="font-bold text-foreground text-[10px]">{c.name}</p>
                    <p className="text-[9px] text-foreground/70">{c.issuer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
