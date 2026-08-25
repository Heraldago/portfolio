import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Linkedin, Mail, FileText, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/80 py-10">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand & Direct Logo Image */}
          <div className="flex items-center gap-3">
            <Image
              src="/herald-ago-icon.svg"
              alt="Herald Ago Logo"
              width={28}
              height={28}
              className="h-7 w-auto object-contain"
            />
            <div>
              <span className="font-display text-sm font-bold text-foreground">
                Herald Ago
              </span>
              <p className="font-mono text-[10px] text-foreground/80 font-medium">
                © {new Date().getFullYear()} · Digital Product Designer &amp; Design Engineer
              </p>
            </div>
          </div>

          {/* Links & Back to Top */}
          <div className="flex items-center gap-4 font-mono text-xs text-foreground/90 font-medium">
            <a
              href="https://www.linkedin.com/in/heraldago/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-lime transition-colors flex items-center gap-1"
            >
              <Linkedin className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:heraldago1@gmail.com"
              className="hover:text-lime transition-colors flex items-center gap-1"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Email</span>
            </a>
            <Link href="/resume" className="hover:text-lime transition-colors flex items-center gap-1">
              <FileText className="h-3.5 w-3.5" />
              <span>CV</span>
            </Link>
            <a
              href="#main-content"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-foreground hover:border-lime hover:text-lime transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Signature & Tech Stack Badge Line */}
        <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] font-mono text-muted-fg">
          <p>
            Designed &amp; Engineered 0 to 1 by <strong className="text-foreground font-semibold">Herald Ago</strong>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] text-foreground/80 font-medium shadow-sm">
              <Code2 className="h-3 w-3 text-lime" /> Next.js 15
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] text-foreground/80 font-medium shadow-sm">
              React 19
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] text-foreground/80 font-medium shadow-sm">
              TypeScript
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] text-foreground/80 font-medium shadow-sm">
              Tailwind CSS
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] text-foreground/80 font-medium shadow-sm">
              WCAG 2.2 AA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
