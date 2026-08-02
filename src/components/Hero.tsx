"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Code, Sparkles, Terminal } from "lucide-react";

export default function Hero() {
  const line1 = ["DIGITAL", "PRODUCT"];
  const line2 = ["DESIGNER"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 pt-8 sm:pt-14 pb-12 sm:pb-20 overflow-hidden select-none">
      {/* Ambient background glows */}
      <div className="hidden sm:block absolute top-0 right-1/4 -z-10 h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-lime/20 to-accent/15 blur-[90px] pointer-events-none animate-ambient" />
      <div
        className="hidden sm:block absolute bottom-0 left-10 -z-10 h-[22rem] w-[22rem] rounded-full bg-gradient-to-tr from-accent/20 to-lime/10 blur-[90px] pointer-events-none animate-ambient"
        style={{ animationDelay: "4s" }}
      />

      <div className="space-y-8 sm:space-y-10 text-center">
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-1.5 backdrop-blur-md shadow-sm"
        >
          <Sparkles className="h-4 w-4 text-lime" />
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-fg">
            MSc in IT · Product Designer & Design Engineer
          </span>
        </motion.div>

        {/* Display Typography */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative space-y-3 sm:space-y-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 w-full">
            {line1.map((word) => (
              <motion.span
                key={word}
                variants={wordVariants}
                whileHover={{
                  scale: 1.05,
                  color: "var(--lime)",
                  transition: { duration: 0.2 },
                }}
                className="inline-block font-display text-4xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tight text-foreground leading-none drop-shadow-md transition-colors cursor-pointer"
              >
                {word}
              </motion.span>
            ))}
          </div>

          <div className="flex items-center justify-center w-full pt-1">
            <motion.div
              variants={wordVariants}
              whileHover={{ scale: 1.04 }}
              className="inline-flex items-center justify-center gap-4 cursor-pointer"
            >
              {line2.map((word) => (
                <span
                  key={word}
                  className="font-display text-4xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tight text-lime leading-none drop-shadow-[0_0_35px_rgba(212,255,0,0.35)]"
                >
                  {word}
                </span>
              ))}
              <motion.div
                whileHover={{ rotate: 12, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="hidden sm:inline-flex items-center gap-2 rounded-full border border-lime/60 bg-surface px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-lime shadow-[0_0_20px_rgba(212,255,0,0.3)] transition-all"
              >
                <Code className="h-4 w-4 text-lime" />
                <span>UX &amp; Code</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Subheadline & Highlighted Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-3 max-w-2xl mx-auto"
        >
          <h2 className="font-display text-lg sm:text-2xl font-semibold text-foreground leading-snug">
            Bridging the gap between business goals, user needs, design, and code.
          </h2>
          <p className="text-sm sm:text-base text-muted-fg leading-relaxed font-normal">
            Result-driven, problem solver, curious, and collaborative—with a strong User-Centered Design philosophy.
          </p>
        </motion.div>

        {/* Expertise Badges & Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="space-y-6 max-w-2xl mx-auto"
        >
          <motion.div
            whileHover={{
              scale: 1.02,
              borderColor: "var(--lime)",
              boxShadow: "0 0 25px rgba(212,255,0,0.2)",
            }}
            className="rounded-2xl border border-border bg-surface/90 px-6 py-3.5 shadow-md backdrop-blur-md transition-all cursor-default"
          >
            <p className="font-mono text-xs sm:text-sm font-semibold text-foreground leading-relaxed">
              <span className="text-lime font-bold uppercase tracking-wider mr-2">
                Expertise:
              </span>
              Business &amp; User Research <span className="text-lime mx-1.5">•</span> UX/UI Design{" "}
              <span className="text-lime mx-1.5">•</span> UX Engineering{" "}
              <span className="text-lime mx-1.5">•</span> Development
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <motion.a
              href="#work"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center gap-2.5 rounded-full bg-lime px-7 py-3 text-xs font-mono font-bold uppercase tracking-wider text-lime-fg transition-all shadow-lime"
            >
              <span>Explore Selected Work</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>

            <motion.div whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-7 py-3 text-xs font-mono font-bold uppercase tracking-wider text-foreground hover:border-lime hover:text-lime transition-all"
              >
                <span>Full Bio &amp; Capabilities</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
