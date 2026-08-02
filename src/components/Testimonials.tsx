"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Sparkles, Building2 } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 border-t border-border bg-surface/30">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 space-y-10">
        <div className="space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime flex items-center gap-2">
            <Sparkles className="h-4 w-4" /> 03 — Endorsements &amp; Client Feedback
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Trusted by founders &amp; tech leaders.
          </h2>
          <p className="text-xs sm:text-sm text-muted-fg leading-relaxed max-w-xl">
            Direct feedback from client partners and agency CEOs on product design quality, speed, and engineering collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {testimonialsData.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: idx * 0.12 }}
              className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-glass hover:border-lime transition-all space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <Quote className="h-6 w-6 text-lime" />
                  <span className="font-mono text-[10px] font-bold text-muted-fg uppercase tracking-wider">
                    {t.company}
                  </span>
                </div>
                <blockquote className="font-display text-base sm:text-lg text-foreground font-normal leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {t.image ? (
                    <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-lime/40 shadow-sm">
                      <Image src={t.image} alt={t.author} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime/10 text-lime font-mono font-bold text-base border border-lime/30">
                      {t.author.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="font-display text-sm font-bold text-foreground">
                      {t.author}
                    </h3>
                    <p className="text-[11px] font-mono text-muted-fg">
                      {t.role} · <strong className="text-lime font-bold">{t.company}</strong>
                    </p>
                    <p className="text-[10px] font-mono text-muted-fg/70">
                      {t.location}
                    </p>
                  </div>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-surface-hover border border-border">
                  <Building2 className="h-4 w-4 text-lime" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
