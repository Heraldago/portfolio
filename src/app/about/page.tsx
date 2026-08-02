import ExperienceTimeline from "@/components/ExperienceTimeline";
import { skillsData, toolboxTags, languagesData, certificationsData } from "@/data/experience";
import { Sparkles, Award, Globe2, Wrench, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Herald Ago — Product Designer & Design Engineer",
  description: "Learn about Herald Ago's MSc in IT background from SDU Denmark, research methodology, technical stack, and career history.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-3 border-b border-border pb-6">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime flex items-center gap-2">
          <Sparkles className="h-4 w-4" /> 02 — Biography &amp; Capabilities
        </span>
        <h1 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
          Herald Ago
        </h1>
        <p className="max-w-2xl text-xs sm:text-sm text-muted-fg leading-relaxed">
          Result-driven Digital Product Designer &amp; UX Engineer with an MSc in IT (Web Communication Design) and a track record of shipping human-centred digital products across B2C, public services, and complex enterprise workflows.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-6">
          {/* Profile Card */}
          <div className="rounded-2xl border border-border bg-surface p-6 space-y-5 shadow-glass text-center">
            <div className="relative aspect-square w-36 h-36 sm:w-44 sm:h-44 mx-auto overflow-hidden rounded-xl border-2 border-lime/40 shadow-sm">
              <img
                src="/assets/profile-pms1FE7T.jpg"
                alt="Herald Ago"
                className="h-full w-full object-cover object-[center_15%]"
              />
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">Herald Ago</h2>
              <p className="font-mono text-xs text-lime font-bold">
                MSc in IT · Product Designer &amp; Design Engineer
              </p>
              <p className="font-mono text-[11px] text-muted-fg mt-0.5">
                Padova, Italy &amp; Denmark · Open to Remote &amp; Onsite Roles
              </p>
            </div>
          </div>

          {/* Toolbox */}
          <div className="rounded-2xl border border-border bg-surface p-5 space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-lime flex items-center gap-2">
              <Wrench className="h-4 w-4" /> Toolbox &amp; Stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {toolboxTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-border bg-background px-2.5 py-0.5 font-mono text-[11px] font-semibold text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="rounded-2xl border border-border bg-surface p-5 space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-lime flex items-center gap-2">
              <Globe2 className="h-4 w-4" /> Languages
            </h3>
            <div className="space-y-1.5 font-mono text-xs">
              {languagesData.map((lang) => (
                <div key={lang.name} className="flex justify-between items-center border-b border-border/60 pb-1.5">
                  <span className="text-foreground font-semibold">{lang.name}</span>
                  <span className="text-lime font-bold">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="rounded-2xl border border-border bg-surface p-5 space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-lime flex items-center gap-2">
              <Award className="h-4 w-4" /> Certifications
            </h3>
            {certificationsData.map((cert) => (
              <div key={cert.name} className="flex items-start gap-2 text-xs text-muted-fg">
                <CheckCircle2 className="h-3.5 w-3.5 text-lime shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground text-xs">{cert.name}</p>
                  <p className="font-mono text-[10px] text-muted-fg">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Main Content */}
        <div className="lg:col-span-8 space-y-10">
          {/* Skill Bars */}
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-5">
            <h3 className="font-display text-xl font-bold text-foreground">Core Competencies</h3>
            <div className="space-y-4">
              {skillsData.map((skill) => (
                <div key={skill.name} className="space-y-1 font-mono text-xs">
                  <div className="flex justify-between font-semibold">
                    <span className="text-foreground">{skill.name}</span>
                    <span className="text-lime">{skill.levelPercentage}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-background overflow-hidden border border-border">
                    <div
                      className="h-full rounded-full bg-lime transition-all duration-1000"
                      style={{ width: `${skill.levelPercentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career & Education Timeline */}
          <ExperienceTimeline />
        </div>
      </div>
    </div>
  );
}
