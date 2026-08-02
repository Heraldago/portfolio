import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/50 font-mono text-xs text-muted-fg">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row sm:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-lime text-lime-fg font-display font-extrabold text-xs">
            HA
          </div>
          <span className="font-display font-bold text-sm text-foreground">Herald Ago</span>
          <span className="text-muted-fg">· Digital Product Designer</span>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/work" className="hover:text-lime transition-colors">
            Archive &amp; Work
          </Link>
          <Link href="/about" className="hover:text-lime transition-colors">
            About &amp; Bio
          </Link>
          <Link href="/resume" className="hover:text-lime transition-colors">
            Resume
          </Link>
          <a href="#top" aria-label="Back to top of page" className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-foreground hover:border-lime hover:text-lime transition-colors">
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>

        <div>
          <span>© {currentYear} Herald Ago. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
