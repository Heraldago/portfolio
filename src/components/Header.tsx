"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work & Archive" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "CV" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border py-3 shadow-glass"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 sm:px-10 lg:px-16">
        {/* Logo with herald-ago-icon.svg */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-lime/40 bg-surface shadow-sm transition-transform group-hover:scale-105">
            <Image
              src="/herald-ago-icon.svg"
              alt="Herald Ago Logo"
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
            />
          </div>
          <span className="font-display font-bold text-base text-foreground tracking-tight flex items-center gap-1.5">
            Herald Ago
            <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-1 rounded-full border border-border bg-surface/80 p-1.5 backdrop-blur-xl">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-lime text-lime-fg shadow-sm"
                      : "text-muted-fg hover:text-foreground hover:bg-surface-hover"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-sm hover:border-lime transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-lime" />
            ) : (
              <Moon className="h-4 w-4 text-foreground" />
            )}
          </button>

          {/* Let's talk CTA */}
          <a
            href="/#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-lime px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider text-lime-fg shadow-lime hover:scale-105 transition-all"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-lime" />
            ) : (
              <Moon className="h-4 w-4 text-foreground" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-surface px-6 py-5 space-y-3 font-mono text-xs font-bold uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-foreground hover:text-lime"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-5 py-2.5 text-lime-fg"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  );
}
