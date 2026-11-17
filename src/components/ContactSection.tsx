"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

function trackEvent(name: string) {
  if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", name);
  }
}

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "heraldago1@gmail.com";

  const handleCopyEmail = () => {
    trackEvent("contact_copy_email");
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 w-full bg-white dark:bg-surface rounded-b-[2rem] sm:rounded-b-[3rem] border-b border-border/70"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-16 sm:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
              Let&apos;s start a conversation
            </h2>
            <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
              Open for product design roles and selected freelance projects.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="inline-flex items-center gap-3 rounded-full border border-border/80 bg-background pl-5 pr-2 py-2">
              <a
                href={`mailto:${email}`}
                onClick={() => trackEvent("contact_email_click")}
                className="text-sm font-medium text-foreground hover:underline underline-offset-4"
              >
                {email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white dark:bg-surface px-3.5 py-1.5 text-xs font-medium text-foreground hover:border-foreground/30 transition-colors"
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.linkedin.com/in/heraldago/"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("contact_linkedin_click")}
                className="inline-flex items-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:border-foreground/30 transition-colors"
              >
                LinkedIn
              </a>

              <a
                href="/cv-herald-ago.pdf"
                target="_blank"
                download
                onClick={() => trackEvent("contact_resume_download")}
                className="inline-flex items-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:border-foreground/30 transition-colors"
              >
                Download Resume PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
