"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Code, Sparkles } from "lucide-react";

export default function Hero() {
  const line1 = ["DIGITAL", "PRODUCT"];
  const line2 = ["DESIGNER"];

  return (
    <section className="relative mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 pt-6 sm:pt-10 pb-10 sm:pb-16 overflow-hidden select-none">
      {/* Ambient background glows */}
      <div className="hidden sm:block absolute top-0 right-1/4 -z-10 h-[22rem] w-[22rem] rounded-full bg-gradient-to-br from-lime/20 to-accent/15 blur-[80px] pointer-events-none animate-ambient" />
      <div
        className="hidden sm:block absolute bottom-0 left-10 -z-10 h-[18rem] w-[18rem] rounded-full bg-gradient-to-tr from-accent/20 to-lime/10 blur-[80px] pointer-events-none animate-ambient"
        style={{ animationDelay: "4s" }}
      />

      <div className="space-y-6 sm:space-y-8 text-center">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-1.5 backdrop-blur-md shadow-sm">
          <Sparkles className="h-4 w-4 text-lime" />
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-fg">
            MSc in IT · Product Designer &amp; Design Engineer
          </span>
        </div>

        {/* Display Typography */}
        <div className="relative space-y-2 sm:space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-6 w-full">
            {line1.map((word) => (
              <motion.span
                key={word}
                whileHover={{
                  scale: 1.04,
                  color: "#D4FF00",
                  transition: { duration: 0.2 },
                }}
                className="inline-block font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-foreground leading-none drop-shadow-sm transition-colors cursor-pointer"
              >
                {word}
              </motion.span>
            ))}
          </div>

          <div className="flex items-center justify-center w-full pt-1">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center justify-center gap-3 cursor-pointer"
            >
              {line2.map((word) => (
                <span
                  key={word}
                  className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-lime leading-none drop-shadow-[0_0_25px_rgba(212,255,0,0.3)]"
                >
                  {word}
                </span>
              ))}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-lime/60 bg-surface px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-lime shadow-[0_0_15px_rgba(212,255,0,0.25)] transition-all"
              >
                <Code className="h-3.5 w-3.5 text-lime" />
                <span>UX &amp; Code</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Subheadline & Statement */}
        <div className="space-y-2 max-w-xl mx-auto">
          <h2 className="font-display text-base sm:text-xl font-semibold text-foreground leading-snug">
            Bridging the gap between business goals, user needs, design, and code.
          </h2>
          <p className="text-xs sm:text-sm text-muted-fg leading-relaxed font-normal">
            Result-driven, problem solver, curious, and collaborative—with a strong User-Centered Design philosophy.
          </p>
        </div>

        {/* Expertise Badges */}
        <div className="space-y-5 max-w-xl mx-auto">
          <div className="rounded-xl border border-border bg-surface/90 px-5 py-2.5 shadow-sm backdrop-blur-md cursor-default">
            <p className="font-mono text-xs font-semibold text-foreground leading-relaxed">
              <span className="text-lime font-bold uppercase tracking-wider mr-1.5">
                Expertise:
              </span>
              Business &amp; User Research <span className="text-lime mx-1">•</span> UX/UI Design{" "}
              <span className="text-lime mx-1">•</span> UX Engineering{" "}
              <span className="text-lime mx-1">•</span> Development
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-lime-fg transition-all shadow-lime"
            >
              <span>Explore Selected Work</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>

            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-foreground hover:border-lime hover:text-lime transition-all"
              >
                <span>Full Bio &amp; Capabilities</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
