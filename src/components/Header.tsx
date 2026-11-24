"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
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
    { href: "/work", label: "Work" },
    { href: "/thesis", label: "Thesis" },
    { href: "/about", label: "About" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white/60 dark:bg-[#0d0f14]/55 supports-[backdrop-filter]:bg-white/55 supports-[backdrop-filter]:dark:bg-[#0d0f14]/50 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/50 dark:border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.06),inset_0_-1px_0_rgba(255,255,255,0.4)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.45),inset_0_-1px_0_rgba(255,255,255,0.08)] rounded-b-[2rem] sm:rounded-b-[3rem] transition-[padding] duration-200 ${
        isScrolled ? "py-3.5" : "py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex items-center transition-opacity hover:opacity-80"
        >
          <Image
            src="/herald-ago-icon.svg"
            alt="Herald Ago Logo"
            width={48}
            height={48}
            className="h-12 w-12 object-contain shrink-0"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-1 rounded-full p-1 bg-black/[0.04] dark:bg-white/[0.07] border border-black/[0.06] dark:border-white/10 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-4 py-1.5 rounded-full text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-white/80 dark:bg-white/15 font-semibold text-foreground shadow-[0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-md"
                      : "font-medium text-muted-fg hover:text-foreground hover:bg-white/40 dark:hover:bg-white/[0.06]"
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
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.06] dark:border-white/15 bg-white/50 dark:bg-white/10 backdrop-blur-md text-foreground hover:bg-white/80 dark:hover:bg-white/15 transition-all"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-blue-400" />
            ) : (
              <Moon className="h-4 w-4 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.06] dark:border-white/15 bg-white/50 dark:bg-white/10 backdrop-blur-md text-foreground"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-blue-400" />
            ) : (
              <Moon className="h-4 w-4 text-foreground" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.06] dark:border-white/15 bg-white/50 dark:bg-white/10 backdrop-blur-md text-foreground"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-white/70 dark:bg-[#0d0f14]/70 backdrop-blur-2xl backdrop-saturate-150 px-6 py-5 space-y-1.5 rounded-b-[2rem]">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`block px-4 py-2.5 rounded-full text-sm transition-all ${
                  isActive
                    ? "bg-white/80 dark:bg-white/15 font-semibold text-foreground shadow-[0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.2)]"
                    : "font-medium text-muted-fg hover:text-foreground hover:bg-white/40 dark:hover:bg-white/[0.06]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
