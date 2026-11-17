"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-fg">
            <div className="flex items-center gap-2">
              <span>Designed and coded by</span>
              <Image
                src="/herald-ago-icon.svg"
                alt="HA"
                width={20}
                height={20}
                className="h-5 w-5 object-contain inline-block"
              />
              <span className="font-sans font-bold text-foreground">Herald Ago</span>
              <span>- {new Date().getFullYear()}</span>
            </div>
            <span className="hidden sm:inline text-border">|</span>
            <span className="text-xs text-muted-fg">
              Next.js, React, TypeScript, Tailwind CSS
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-muted-fg">
            <a
              href="https://www.linkedin.com/in/heraldago/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:heraldago1@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              Email
            </a>
            <Link href="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="rounded-full border border-border bg-white dark:bg-surface px-4 py-1.5 text-xs font-medium text-foreground hover:border-foreground/30 transition-colors"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
