"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 pt-10 sm:pt-16 pb-12 sm:pb-20 select-none">
      <div className="space-y-8 max-w-3xl">
        {/* Status */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-mono text-foreground/80 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
          <span>Product Design Intern at GoCoCo, Barcelona</span>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-foreground">
            Herald Ago
          </h1>
          <p className="font-display text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
            Digital product designer
          </p>
        </div>

        {/* Human Bio */}
        <p className="text-lg sm:text-xl text-foreground/90 font-normal leading-relaxed">
          I design digital products that simplify people&apos;s everyday lives. Currently working on mobile onboarding flows and paywalls for an app with 1M+ users at GoCoCo.
        </p>

        {/* Direct CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 dark:bg-blue-500 px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white hover:bg-blue-700 transition-colors shadow-sm"
          >
            <span>Selected work</span>
            <ArrowDown className="h-3.5 w-3.5" />
          </a>

          <Link
            href="/resume"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-foreground hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            <span>Resume</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          <a
            href="mailto:heraldago@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-foreground hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            <span>Contact</span>
          </a>
        </div>
      </div>
    </section>
  );
}
