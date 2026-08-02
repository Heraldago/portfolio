import ExperienceTimeline from "@/components/ExperienceTimeline";
import { skillsData, toolboxTags, languagesData, certificationsData } from "@/data/experience";
import { Sparkles, Layers, Award, Globe2, Wrench, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Herald Ago — Product Designer & Design Engineer",
  description: "Learn about Herald Ago's MSc in IT background from SDU Denmark, research methodology, technical stack, and career history.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 py-12 sm:py-20 space-y-16">
      {/* Header */}
      <div className="space-y-4 border-b border-border pb-8">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime flex items-center gap-2">
          <Sparkles className="h-4 w-4" /> 02 — Biography &amp; Capabilities
        </span>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-foreground">
          Herald Ago
        </h1>
        <p className="max-w-3xl text-lg text-muted-fg leading-relaxed">
          Result-driven Digital Product Designer &amp; UX Engineer with an MSc in IT (Web Communication Design) and a track record of shipping human-centred digital products across B2C, public services, and complex enterprise workflows.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-8">
          {/* Profile Card */}
          <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 space-y-6 shadow-glass">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border-2 border-lime/40">
              <img
                src="/assets/profile-pms1FE7T.jpg"
                alt="Herald Ago"
                className="h-full w-full object-cover object-[center_15%]"
              />
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Herald Ago</h2>
              <p className="font-mono text-xs text-lime font-bold">
                MSc in IT · Product Designer &amp; Design Engineer
              </p>
              <p className="font-mono text-xs text-muted-fg mt-1">
                Padova, Italy &amp; Denmark · Open to Remote &amp; Onsite Roles
              </p>
            </div>
          </div>

          {/* Toolbox */}
          <div className="rounded-3xl border border-border bg-surface p-6 space-y-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-lime flex items-center gap-2">
              <Wrench className="h-4 w-4" /> Toolbox &amp; Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {toolboxTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-border bg-background px-3 py-1 font-mono text-xs font-semibold text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="rounded-3xl border border-border bg-surface p-6 space-y-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-lime flex items-center gap-2">
              <Globe2 className="h-4 w-4" /> Languages
            </h3>
            <div className="space-y-2 font-mono text-xs">
              {languagesData.map((lang) => (
                <div key={lang.name} className="flex justify-between items-center border-b border-border/60 pb-2">
                  <span className="text-foreground font-semibold">{lang.name}</span>
                  <span className="text-lime font-bold">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="rounded-3xl border border-border bg-surface p-6 space-y-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-lime flex items-center gap-2">
              <Award className="h-4 w-4" /> Certifications
            </h3>
            {certificationsData.map((cert) => (
              <div key={cert.name} className="flex items-start gap-2.5 text-xs text-muted-fg">
                <CheckCircle2 className="h-4 w-4 text-lime shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground">{cert.name}</p>
                  <p className="font-mono text-[10px] text-muted-fg">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Main Content */}
        <div className="lg:col-span-8 space-y-12">
          {/* Skill Bars */}
          <div className="rounded-3xl border border-border bg-surface p-8 space-y-6">
            <h3 className="font-display text-2xl font-bold text-foreground">Core Competencies</h3>
            <div className="space-y-5">
              {skillsData.map((skill) => (
                <div key={skill.name} className="space-y-1.5 font-mono text-xs">
                  <div className="flex justify-between font-semibold">
                    <span className="text-foreground">{skill.name}</span>
                    <span className="text-lime">{skill.levelPercentage}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-background overflow-hidden border border-border">
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
