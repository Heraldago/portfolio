"use client";

import { useState } from "react";
import { Copy, Check, Mail, Linkedin, Download, Send, ArrowUpRight } from "lucide-react";

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
    <section id="contact" className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 py-16 sm:py-24 border-t border-border">
      <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-surface border border-border p-6 sm:p-10 lg:p-12 shadow-glass relative">
        <div className="hidden sm:block absolute top-0 right-0 h-48 w-48 rounded-full bg-lime/10 blur-[80px] pointer-events-none" />

        <div className="grid items-start gap-10 lg:grid-cols-12">
          {/* Left info column */}
          <div className="lg:col-span-6 space-y-5">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime">
              04 — Contact &amp; Collaboration
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
              Let&apos;s build something exceptional.
            </h2>
            <p className="text-xs sm:text-sm text-muted-fg leading-relaxed">
              Open for full-time Product Design &amp; Design Engineering roles, high-impact freelance projects, and design system consulting.
            </p>

            {/* Quick Copy Email Pill */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-2.5 rounded-xl border border-border bg-background p-2 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime/10 text-lime shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-muted-fg">Direct Email</span>
                  <span className="font-mono text-xs font-bold text-foreground">{email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="ml-2 flex h-8 px-2.5 items-center gap-1 rounded-md bg-surface hover:bg-lime hover:text-lime-fg text-[11px] font-mono font-bold transition-all border border-border"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-lime font-bold" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* External Links */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <a
                href="https://www.linkedin.com/in/heraldago/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-mono font-semibold text-foreground hover:border-lime hover:text-lime transition-all"
              >
                <Linkedin className="h-3.5 w-3.5" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="/cv-herald-ago.pdf"
                target="_blank"
                download
                className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-mono font-semibold text-foreground hover:border-lime hover:text-lime transition-all"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download Resume PDF</span>
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-6 rounded-xl border border-border bg-background p-5 sm:p-6 space-y-4">
            <h3 className="font-display text-lg font-bold text-foreground">
              Send a direct message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3 font-mono text-xs">
              <div>
                <label htmlFor="name" className="block text-foreground font-bold mb-1 uppercase tracking-wider text-[10px]">
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-foreground placeholder:text-muted-fg/50 focus:border-lime focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-foreground font-bold mb-1 uppercase tracking-wider text-[10px]">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-foreground placeholder:text-muted-fg/50 focus:border-lime focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-foreground font-bold mb-1 uppercase tracking-wider text-[10px]">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Product Design Project / Job Opportunity"
                  className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-foreground placeholder:text-muted-fg/50 focus:border-lime focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground font-bold mb-1 uppercase tracking-wider text-[10px]">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={3}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your product or role..."
                  className="w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-foreground placeholder:text-muted-fg/50 focus:border-lime focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-lime px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider text-lime-fg shadow-lime hover:scale-[1.01] transition-all disabled:opacity-50"
              >
                <Send className="h-3.5 w-3.5" />
                <span>{status === "submitting" ? "Opening Email..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
