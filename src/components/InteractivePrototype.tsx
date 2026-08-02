"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, ChevronRight, CheckCircle2, Monitor, Smartphone, Sparkles, ExternalLink } from "lucide-react";
import Lightbox from "@/components/Lightbox";

interface Step {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  highlights: string[];
}

interface InteractivePrototypeProps {
  title: string;
  description: string;
  steps: Step[];
  figmaUrl?: string;
}

export default function InteractivePrototype({
  title,
  description,
  steps,
  figmaUrl,
}: InteractivePrototypeProps) {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

  const activeStep = steps[activeStepIndex] || steps[0];

  return (
    <section className="space-y-6 rounded-2xl sm:rounded-3xl border border-lime/40 bg-surface p-6 sm:p-10 shadow-glass">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/80 pb-6">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime flex items-center gap-2">
            <Sparkles className="h-4 w-4" /> Interactive Prototype Simulator
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mt-1">{title}</h2>
          <p className="text-xs sm:text-sm text-muted-fg mt-1">{description}</p>
        </div>

        {figmaUrl && (
          <a
            href={figmaUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-lime/60 bg-lime/10 px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-lime hover:bg-lime hover:text-lime-fg transition-all shrink-0"
          >
            <span>Launch Figma File</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>

      {/* Simulator Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
        {/* Step Navigation Column */}
        <div className="lg:col-span-4 space-y-2">
          <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-muted-fg mb-3">
            Select Journey Stage ({activeStepIndex + 1}/{steps.length})
          </p>
          <div className="space-y-2">
            {steps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => setActiveStepIndex(idx)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                  activeStepIndex === idx
                    ? "border-lime bg-lime/10 text-foreground font-bold shadow-sm"
                    : "border-border bg-background/50 text-muted-fg hover:border-lime/40 hover:text-foreground"
                }`}
              >
                <div className="space-y-0.5">
                  <p className="font-mono text-xs font-bold text-lime">{step.title}</p>
                  <p className="text-[11px] text-muted-fg line-clamp-1">{step.subtitle}</p>
                </div>
                <ChevronRight
                  className={`h-4 w-4 transition-transform ${
                    activeStepIndex === idx ? "text-lime translate-x-1" : "text-muted-fg/40"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Live Active Screen Viewer */}
        <div className="lg:col-span-8 rounded-2xl border border-border bg-background p-4 sm:p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-border/60 pb-3">
            <div className="flex items-center gap-2">
              <div className="flex h-3 w-3 rounded-full bg-red-500/80" />
              <div className="flex h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="flex h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-[11px] text-muted-fg">
                {activeStep.title} — {activeStep.subtitle}
              </span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-lime bg-lime/10 px-2.5 py-0.5 rounded-full border border-lime/30">
              Interactive State Active
            </span>
          </div>

          {/* Interactive Screen Preview */}
          <div
            onClick={() => setActiveImage({ src: activeStep.image, alt: activeStep.title })}
            className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-surface border border-border cursor-pointer hover:border-lime transition-all"
          >
            <Image
              src={activeStep.image}
              alt={activeStep.title}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="rounded-full bg-lime px-4 py-2 text-xs font-mono font-bold text-lime-fg shadow-lg">
                Click to Expand Screen
              </span>
            </div>
          </div>

          {/* Key Step Highlights */}
          <div className="space-y-2 pt-2 border-t border-border/60 font-mono text-xs">
            <p className="font-bold text-lime uppercase tracking-wider text-[10px]">UX Innovations in this step:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {activeStep.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 bg-surface p-2.5 rounded-lg border border-border/80">
                  <CheckCircle2 className="h-3.5 w-3.5 text-lime shrink-0 mt-0.5" />
                  <span className="text-muted-fg text-[11px] leading-snug">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        src={activeImage?.src || null}
        alt={activeImage?.alt || ""}
        isOpen={!!activeImage}
        onClose={() => setActiveImage(null)}
      />
    </section>
  );
}
