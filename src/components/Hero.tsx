"use client";

function trackEvent(name: string) {
  if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", name);
  }
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-4.75rem)] flex items-center bg-white dark:bg-surface rounded-b-[2rem] sm:rounded-b-[3rem] border-b border-border/70">
      <div className="w-full mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-16 sm:py-20 space-y-12">
        <div className="font-sans text-4xl sm:text-[56px] lg:text-[72px] font-bold tracking-tight text-foreground leading-[1.08] space-y-6 sm:space-y-8">
          <h1>Hi, I&apos;m Herald :)</h1>
          <p>
            I <span className="text-blue-600 dark:text-blue-400">design</span> digital products that{" "}
            <span className="italic pr-1.5">help and simplify</span> people&apos;s lives.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-start sm:justify-end gap-4">
          <a
            href="#work"
            onClick={() => trackEvent("hero_work_click")}
            className="inline-flex items-center rounded-full bg-blue-600 dark:bg-blue-500 px-7 py-3 text-sm font-medium text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            Work
          </a>

          <a
            href="#contact"
            onClick={() => trackEvent("hero_contact_click")}
            className="inline-flex items-center rounded-full border border-border bg-surface px-7 py-3 text-sm font-medium text-foreground hover:border-foreground/30 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
