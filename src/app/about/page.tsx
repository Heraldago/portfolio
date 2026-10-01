import ExperienceTimeline from "@/components/ExperienceTimeline";
import { toolboxTags, languagesData, certificationsData } from "@/data/experience";
import { Award, Globe2, Wrench } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Herald Ago, Product Designer",
  description: "Background, education, and experience of Herald Ago, a product designer based in Barcelona.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-3 border-b border-border pb-6">
        <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
          About Herald Ago
        </h1>
        <p className="max-w-2xl text-sm sm:text-base text-muted-fg leading-relaxed">
          Product designer based in Barcelona. Currently interning at GoCoCo, working on mobile onboarding flows and paywalls for an app with over 1M users.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-6">
          {/* Profile Card */}
          <div className="rounded-2xl border border-border bg-surface p-6 space-y-5 shadow-sm text-center">
            <div className="relative aspect-square w-36 h-36 sm:w-44 sm:h-44 mx-auto overflow-hidden rounded-xl border border-border shadow-sm">
              <Image
                src="/assets/profile-pms1FE7T.jpg"
                alt="Herald Ago"
                width={350}
                height={350}
                quality={90}
                priority
                className="h-full w-full object-cover object-[center_15%]"
              />
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-foreground">Herald Ago</h2>
              <p className="font-mono text-xs text-blue-600 dark:text-blue-400 font-bold mt-1">
                Product Designer
              </p>
              <p className="font-mono text-xs text-muted-fg mt-0.5">
                Barcelona, Spain (also Denmark and Italy)
              </p>
            </div>
          </div>

          {/* Toolbox */}
          <div className="rounded-2xl border border-border bg-surface p-5 space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
              <Wrench className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>Tools and methods</span>
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {toolboxTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-border bg-background px-2.5 py-1 font-mono text-xs text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="rounded-2xl border border-border bg-surface p-5 space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>Languages</span>
            </h3>
            <div className="space-y-2 font-mono text-xs">
              {languagesData.map((lang) => (
                <div key={lang.name} className="flex justify-between items-center border-b border-border/60 pb-1.5">
                  <span className="text-foreground">{lang.name}</span>
                  <span className="text-muted-fg font-medium">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="rounded-2xl border border-border bg-surface p-5 space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
              <Award className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>Certifications</span>
            </h3>
            {certificationsData.map((cert) => (
              <div key={cert.name} className="text-xs">
                <p className="font-bold text-foreground">{cert.name}</p>
                <p className="font-mono text-xs text-muted-fg">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Main Content */}
        <div className="lg:col-span-8 space-y-8">
          {/* Narrative bio */}
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-4">
            <h3 className="font-display text-xl font-bold text-foreground">Background</h3>
            <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
              I focus on the intersection of user research, interactive prototyping, and design systems. At GoCoCo, I work on the core onboarding funnel and paywall architecture, using A/B testing and session recordings to validate improvements.
            </p>
            <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
              I completed my Master of Science in IT (Web Communication Design) at the University of Southern Denmark, where I studied human-computer interaction, qualitative research, and accessible front-end development. Prior to that, I earned my bachelor&apos;s degree in communication sciences at the University of Ferrara.
            </p>
          </div>

          {/* Career & Education Timeline */}
          <ExperienceTimeline />
        </div>
      </div>
    </div>
  );
}
