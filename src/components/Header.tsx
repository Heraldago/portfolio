"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Sun, Moon, Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Archive & Work" },
    { href: "/about", label: "About & Bio" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-header border-b border-border py-3 shadow-glass"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Brand Monogram */}
        <Link
          href="/"
          className="group flex items-center gap-3 font-display text-lg font-bold tracking-tight text-foreground transition-opacity hover:opacity-90"
        >
          <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-lime font-display font-extrabold text-lime-fg shadow-sm transition-transform group-hover:scale-105">
            HA
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
            Herald Ago
            <span className="h-2 w-2 rounded-full bg-lime animate-pulse" aria-hidden="true" />
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          <nav
            aria-label="Main Navigation"
            className="flex items-center gap-1 rounded-full border border-border bg-surface/80 p-1.5 backdrop-blur-xl"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-5 py-2 text-xs font-mono font-semibold uppercase tracking-wider transition-all ${
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
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-sm hover:border-lime transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-lime" />
            ) : (
              <Moon className="h-4 w-4 text-foreground" />
            )}
          </button>

          {/* Talk CTA */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-lime-fg shadow-lime hover:scale-105 transition-all"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-lime" />
            ) : (
              <Moon className="h-4 w-4 text-foreground" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border bg-surface px-6 py-6"
          >
            <div className="flex flex-col gap-4 font-mono text-sm font-semibold uppercase">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 transition-colors ${
                    pathname === link.href ? "text-lime font-bold" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3 text-lime-fg"
              >
                <span>Let&apos;s talk</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
