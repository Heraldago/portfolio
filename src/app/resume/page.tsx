import { experienceData, educationData, skillsData, toolboxTags, languagesData, certificationsData } from "@/data/experience";
import { Download, Mail, MapPin, Globe, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Herald Ago — Resume & CV",
  description: "Official resume of Herald Ago, Digital Product Designer & UX Engineer with MSc in IT.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 space-y-8 font-sans">
      {/* Top Bar Actions */}
      <div className="flex items-center justify-between border-b border-border pb-6">
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground">Curriculum Vitae</h1>
          <p className="font-mono text-xs text-muted-fg">Official Resume · Last updated 2026</p>
        </div>
        <a
          href="/cv-herald-ago.pdf"
          target="_blank"
          download
          className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-lime-fg shadow-lime hover:scale-105 transition-all"
        >
          <Download className="h-4 w-4" />
          <span>Download PDF</span>
        </a>
      </div>

      {/* Printable Sheet View */}
      <div className="rounded-3xl border border-border bg-surface p-8 sm:p-12 shadow-glass space-y-10">
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-border pb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime text-lime-fg font-display font-extrabold text-lg">
                HA
              </div>
              <div>
                <h2 className="font-display text-3xl font-extrabold text-foreground">Herald Ago</h2>
                <p className="font-mono text-xs font-bold text-lime">
                  Digital Product Designer &amp; Design Engineer
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-1 font-mono text-xs text-muted-fg sm:text-right">
            <p className="flex items-center gap-1.5 sm:justify-end">
              <Mail className="h-3.5 w-3.5 text-lime" /> heraldago1@gmail.com
            </p>
            <p className="flex items-center gap-1.5 sm:justify-end">
              <Globe className="h-3.5 w-3.5 text-lime" /> www.heraldago.com
            </p>
            <p className="flex items-center gap-1.5 sm:justify-end">
              <MapPin className="h-3.5 w-3.5 text-lime" /> Padova, Italy / Denmark
            </p>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="space-y-3">
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-lime">Profile Summary</h3>
          <p className="text-sm text-muted-fg leading-relaxed">
            Result-driven <strong className="text-foreground">Digital Product Designer &amp; UX Engineer</strong> with an MSc in IT (Web Communication Design) and a track record of shipping human-centred digital products across B2C, public services, and complex enterprise workflows. Fluent across the full design stack — from empirical user research and information architecture to high-fidelity Figma systems, interactive prototyping, and front-end implementation in React &amp; TypeScript.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="space-y-6">
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-lime">Professional Experience</h3>

          <div className="space-y-6">
            {experienceData.map((exp) => (
              <div key={exp.id} className="space-y-2 border-l-2 border-border pl-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h4 className="font-display text-lg font-bold text-foreground">{exp.role}</h4>
                  <span className="font-mono text-xs text-lime font-bold">{exp.period}</span>
                </div>
                <p className="font-mono text-xs text-muted-fg">{exp.company} · {exp.location}</p>
                <ul className="space-y-1 pt-1">
                  {exp.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-muted-fg leading-relaxed">
                      <span className="text-lime font-bold">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Skillsets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-8">
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-lime">Education</h3>
            {educationData.map((edu) => (
              <div key={edu.degree} className="space-y-1">
                <h4 className="font-display text-sm font-bold text-foreground">{edu.degree}</h4>
                <p className="font-mono text-xs text-muted-fg">{edu.institution}</p>
                <p className="font-mono text-[10px] text-lime">{edu.period}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-lime">Core Toolbox &amp; Languages</h3>
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {toolboxTags.map((tag) => (
                <span key={tag} className="rounded-md border border-border bg-background px-2.5 py-1 text-[11px] text-foreground font-semibold">
                  {tag}
                </span>
              ))}
            </div>
            <div className="pt-2 font-mono text-xs text-muted-fg space-y-1">
              <p><strong className="text-foreground">Languages:</strong> Italian (Native), Albanian (Native), English (C1 Professional)</p>
              <p><strong className="text-foreground">Certifications:</strong> Google UX Design Professional Certificate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
