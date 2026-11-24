"use client";

import { useState } from "react";

export default function ThesisPdfViewer() {
  const [isPdfExpanded, setIsPdfExpanded] = useState(false);

  return (
    <section id="pdf-viewer" className="scroll-mt-20 w-full rounded-b-[2rem] sm:rounded-b-[3rem] border-b border-border/70">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-14 sm:py-20 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Thesis Document
          </h2>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPdfExpanded(!isPdfExpanded)}
              aria-expanded={isPdfExpanded}
              className="rounded-full border border-border bg-white dark:bg-surface px-5 py-2 text-xs font-medium text-foreground hover:border-foreground/30 transition-colors"
            >
              {isPdfExpanded ? "Standard view" : "Expand view"}
            </button>
            <a
              href="/thesis-herald-ago.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-600 dark:bg-blue-500 px-5 py-2 text-xs font-medium text-white hover:bg-blue-700 transition-colors"
            >
              Open PDF in new tab
            </a>
          </div>
        </div>

        <div
          className={`relative overflow-hidden rounded-3xl border border-border/80 bg-white dark:bg-surface shadow-md transition-all duration-300 ${
            isPdfExpanded ? "h-[85vh]" : "h-[650px] sm:h-[750px]"
          }`}
        >
          <iframe
            src="/thesis-herald-ago.pdf#toolbar=1"
            title="Herald Ago Master Thesis PDF"
            loading="lazy"
            className="h-full w-full border-none rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
