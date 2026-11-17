"use client";

import Image from "next/image";
import { testimonialsData } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="w-full rounded-b-[2rem] sm:rounded-b-[3rem] border-b border-border/70 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 space-y-10">
        <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Recommendations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between rounded-3xl border border-border/70 bg-white dark:bg-surface p-7 sm:p-9 space-y-6"
            >
              <blockquote className="font-sans text-base sm:text-lg text-foreground/85 font-normal leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-border/60 flex items-center gap-3.5">
                {t.image ? (
                  <div className="relative h-11 w-11 overflow-hidden rounded-full border border-border/80 shrink-0">
                    <Image
                      src={t.image}
                      alt={t.author}
                      fill
                      className={`object-cover ${t.imagePosition || "object-center"}`}
                    />
                  </div>
                ) : (
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 font-sans font-bold text-base border border-border/80 shrink-0">
                    {t.author.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="font-sans text-sm font-bold text-foreground">
                    {t.author}
                  </h3>
                  <p className="text-xs text-foreground/75">
                    {t.role}, <span className="font-medium text-blue-600 dark:text-blue-400">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
