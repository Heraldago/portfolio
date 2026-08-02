"use client";

import { useState } from "react";
import { Copy, Check, Mail, Linkedin, Download, Send, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const email = "heraldago1@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setStatus("submitting");
    const mailtoSubject = encodeURIComponent(formState.subject || `Portfolio Contact from ${formState.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`);
    window.location.href = `mailto:${email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setStatus("success");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 py-20 sm:py-32 border-t border-border">
      <div className="overflow-hidden rounded-[2.5rem] bg-surface border border-border p-8 sm:p-14 lg:p-16 shadow-glass relative">
        <div className="hidden sm:block absolute top-0 right-0 h-64 w-64 rounded-full bg-lime/10 blur-[100px] pointer-events-none" />

        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Left info column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime">
              04 — Contact &amp; Collaboration
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Let&apos;s build something exceptional.
            </h2>
            <p className="text-base text-muted-fg leading-relaxed">
              Open for full-time Product Design &amp; Design Engineering roles, high-impact freelance projects, and design system consulting.
            </p>

            {/* Quick Copy Email Pill */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-3 rounded-2xl border border-border bg-background p-2.5 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime/10 text-lime">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-fg">Direct Email</span>
                  <span className="font-mono text-xs font-bold text-foreground">{email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="ml-2 flex h-9 px-3 items-center gap-1.5 rounded-lg bg-surface hover:bg-lime hover:text-lime-fg text-xs font-mono font-bold transition-all border border-border"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-lime font-bold" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* External Links */}
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="https://www.linkedin.com/in/heraldago/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-xs font-mono font-semibold text-foreground hover:border-lime hover:text-lime transition-all"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="/cv-herald-ago.pdf"
                target="_blank"
                download
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-xs font-mono font-semibold text-foreground hover:border-lime hover:text-lime transition-all"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume PDF</span>
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-6 rounded-2xl border border-border bg-background p-6 sm:p-8 space-y-6">
            <h3 className="font-display text-xl font-bold text-foreground">
              Send a direct message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label htmlFor="name" className="block text-muted-fg font-semibold mb-1.5 uppercase tracking-wider">
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted-fg/50 focus:border-lime focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-muted-fg font-semibold mb-1.5 uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted-fg/50 focus:border-lime focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-muted-fg font-semibold mb-1.5 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Product Design Project / Job Opportunity"
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted-fg/50 focus:border-lime focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-muted-fg font-semibold mb-1.5 uppercase tracking-wider">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your product or role..."
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted-fg/50 focus:border-lime focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-lime px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-lime-fg shadow-lime hover:scale-[1.02] transition-all disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
                <span>{status === "submitting" ? "Opening Email..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
