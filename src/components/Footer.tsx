import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Linkedin, Mail, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/80 py-10">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-lime/40 bg-surface shadow-sm">
            <Image
              src="/herald-ago-icon.svg"
              alt="Herald Ago Logo"
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
          </div>
          <div>
            <span className="font-display text-sm font-bold text-foreground">
              Herald Ago
            </span>
            <p className="font-mono text-[10px] text-muted-fg">
              © {new Date().getFullYear()} · Digital Product Designer &amp; UX Engineer
            </p>
          </div>
        </div>

        {/* Links & Back to Top */}
        <div className="flex items-center gap-4 font-mono text-xs text-muted-fg">
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
    </footer>
  );
}
