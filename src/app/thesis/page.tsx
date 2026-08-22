"use client";

import { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Download,
  BookOpen,
  Sparkles,
  BarChart3,
  CheckCircle2,
  Maximize2,
  Minimize2,
  ArrowUpRight,
  Brain,
  Gamepad2,
  Layers,
  Award,
} from "lucide-react";

export default function ThesisPage() {
  const [isPdfExpanded, setIsPdfExpanded] = useState(false);

  const metrics = [
    {
      label: "Empirical Cohort",
      value: "N = 24",
      description: "IT Master's students in Denmark surveyed on traditional vs. gamified pedagogy.",
    },
    {
      label: "Pre/Post Experiment",
      value: "4 Weeks",
      description: "Hands-on HTML/CSS coding performance experiment using FreeCodeCamp.",
    },
    {
      label: "Completion Time",
      value: "-50%",
      description: "Task completion time reduced from 2 full days down to 0.5–1 day.",
    },
    {
      label: "Self-Efficacy Boost",
      value: "95%+",
      description: "Learners reported significantly higher confidence in debugging & CSS layout.",
    },
  ];

  const playerTypes = [
    {
      type: "Achiever",
      target: "Player 1 (P1)",
      traits: "Driven by milestones, speed, and clean code optimization.",
      gameMechanics: "Points, Completion Checkmarks, Badges",
      keyFinding: "Completed post-test in ~0.5 days with 100% accurate, reorganized code structure.",
    },
    {
      type: "Explorer",
      target: "Player 2 (P2)",
      traits: "Fueled by curiosity, trial-and-error, and creative styling.",
      gameMechanics: "Customizable Paths, Visual Layout Challenges",
      keyFinding: "Overcame styling hesitation, centering layout elements and customizing font styling.",
    },
    {
      type: "Socialiser",
      target: "Player 3 (P3)",
      traits: "Energized by collaborative feedback, peer support, and discussion.",
      gameMechanics: "Peer Code Reviews, Group Challenges, Shared Streaks",
      keyFinding: "Used informal streak sharing with friends to stay accountable and overcome complex form validation.",
    },
    {
      type: "Killer / Competitor",
      target: "Player 4 (P4)",
      traits: "Spurred on by friendly competition, streak counters, and mastery.",
      gameMechanics: "Streaks, Instant Tests Passed Feedback, Quests",
      keyFinding: "Experienced dramatic transformation: from incomplete pre-test skeleton to fully completed working form.",
    },
  ];

  const theoreticalFrameworks = [
    {
      name: "Self-Determination Theory (SDT)",
      author: "Deci & Ryan (2020)",
      focus: "Autonomy, Competence, and Relatedness",
      insight:
        "Gamification supports intrinsic motivation when points and progress indicators affirm competence without becoming superficial extrinsic pressure.",
    },
    {
      name: "Flow Theory",
      author: "Csikszentmihalyi (1990)",
      focus: "Optimal Challenge vs. Skill Balance",
      insight:
        "Step-by-step difficulty scaling in coding challenges prevents boredom and frustration, inducing a state of deep absorption and focus.",
    },
    {
      name: "Experiential & Constructivist Learning",
      author: "Kolb (1984) / Vygotsky (1978)",
      focus: "Learn-by-Doing & Iterative Debugging",
      insight:
        "Immediate feedback loops transform bug resolution into an interactive dialogue ('like having a tutor alongside me').",
    },
    {
      name: "Gameful Design & Player Types",
      author: "Deterding (2011) / Marczewski (2017)",
      focus: "Element-Specific Motivational Impact",
      insight:
        "Personal progress bars and instant hints universally outperform public leaderboards, which can induce anxiety for novice coders.",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 py-10 sm:py-16 space-y-12">
      {/* Hero Section */}
      <section className="relative space-y-6 border-b border-border pb-10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-lime shadow-sm">
            <GraduationCap className="h-4 w-4" /> Master&apos;s Thesis · University of Southern Denmark (SDU)
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-lime/40 bg-lime/10 px-3 py-1 text-xs font-mono font-bold text-lime">
            <Award className="h-3.5 w-3.5" /> MSc in IT (Web Communication Design)
          </span>
        </div>

        <div className="space-y-3">
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Gamification in Web Development Education
          </h1>
          <p className="font-mono text-sm sm:text-base font-semibold text-lime">
            How Game Mechanics Enhance Engagement, Skill Acquisition &amp; Self-Efficacy for Novice Developers
          </p>
        </div>

        <p className="max-w-3xl text-xs sm:text-sm text-foreground/85 leading-relaxed font-medium">
          An empirical research thesis investigating how gamified learning systems bridge the gap between theoretical knowledge and practical front-end engineering. Combining a 24-person quantitative survey, a 4-week pre/post coding performance experiment, and qualitative thematic interviews.
        </p>

        {/* Thesis Metadata Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="rounded-xl border border-border bg-surface p-3 space-y-0.5">
            <span className="font-mono text-[10px] uppercase text-muted-fg font-bold block">Author</span>
            <span className="font-display text-xs font-bold text-foreground block">Herald Ago</span>
          </div>
          <div className="rounded-xl border border-border bg-surface p-3 space-y-0.5">
            <span className="font-mono text-[10px] uppercase text-muted-fg font-bold block">University</span>
            <span className="font-display text-xs font-bold text-foreground block">SDU (Denmark)</span>
          </div>
          <div className="rounded-xl border border-border bg-surface p-3 space-y-0.5">
            <span className="font-mono text-[10px] uppercase text-muted-fg font-bold block">Supervisor</span>
            <span className="font-display text-xs font-bold text-foreground block">Prof. Andrea Valente</span>
          </div>
          <div className="rounded-xl border border-border bg-surface p-3 space-y-0.5">
            <span className="font-mono text-[10px] uppercase text-muted-fg font-bold block">Publication</span>
            <span className="font-display text-xs font-bold text-lime block">June 2025 · 102 Pages</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="/thesis-herald-ago.pdf"
            download="Master-Thesis-Herald-Ago-Gamification.pdf"
            className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-lime-fg transition-all shadow-lime hover:scale-105"
          >
            <Download className="h-4 w-4" />
            <span>Download Full PDF (102 Pages)</span>
          </a>
          <a
            href="#pdf-viewer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-foreground hover:border-lime hover:text-lime transition-all"
          >
            <BookOpen className="h-4 w-4 text-lime" />
            <span>Read Online Viewer</span>
          </a>
        </div>
      </section>

      {/* Key Empirical Metrics */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime flex items-center gap-2">
            <BarChart3 className="h-4 w-4" /> 01 — Empirical Research Highlights
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-5 shadow-glass hover:border-lime transition-all space-y-3"
            >
              <div className="space-y-1">
                <span className="font-mono text-2xl sm:text-3xl font-bold text-lime">{m.value}</span>
                <p className="font-mono text-xs font-bold text-foreground">{m.label}</p>
              </div>
              <p className="text-[11px] text-muted-fg leading-relaxed font-medium">{m.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Abstract & Research Problem */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border-t border-border pt-10">
        <div className="lg:col-span-6 space-y-4 flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-glass">
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime flex items-center gap-2">
              <Brain className="h-4 w-4" /> Executive Abstract
            </span>
            <h2 className="font-display text-xl font-bold text-foreground">
              Bridging the Theory-to-Practice Gap in Tech Education
            </h2>
            <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed font-medium">
              Traditional university pedagogy in programming often relies on passive lectures and rote syntax memorization, creating a severe disconnect when novice students attempt to build practical web applications.
            </p>
            <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed font-medium">
              This thesis evaluates how disaggregated game mechanics—such as instant feedback loops, visual progress tracking, daily streaks, and structured challenge quests—impact intrinsic motivation, self-efficacy, and code execution speed.
            </p>
          </div>
          <div className="pt-4 border-t border-border/60 flex items-center gap-2 text-[11px] font-mono text-lime font-bold">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            <span>Validated with ISO 9241-210 &amp; ISO 9126 Human-Centered Frameworks</span>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-4 flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-glass">
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime flex items-center gap-2">
              <Layers className="h-4 w-4" /> Research Methodology
            </span>
            <h2 className="font-display text-xl font-bold text-foreground">
              Mixed-Methods Triangulation
            </h2>
            <div className="space-y-2.5 text-xs font-mono">
              <div className="rounded-xl border border-border/80 bg-background p-3 space-y-1">
                <div className="flex items-center justify-between text-foreground font-bold">
                  <span>Phase 1 · Anonymous Survey</span>
                  <span className="text-lime">N = 24</span>
                </div>
                <p className="text-[11px] text-muted-fg font-sans font-medium">
                  Baseline evaluation of university teaching satisfaction vs. gamification attitudes.
                </p>
              </div>
              <div className="rounded-xl border border-border/80 bg-background p-3 space-y-1">
                <div className="flex items-center justify-between text-foreground font-bold">
                  <span>Phase 2 · Pre/Post Coding Task</span>
                  <span className="text-lime">FreeCodeCamp</span>
                </div>
                <p className="text-[11px] text-muted-fg font-sans font-medium">
                  Controlled HTML/CSS &quot;Build a Survey Form&quot; project before and after a 4-week gamified course.
                </p>
              </div>
              <div className="rounded-xl border border-border/80 bg-background p-3 space-y-1">
                <div className="flex items-center justify-between text-foreground font-bold">
                  <span>Phase 3 · Thematic Interviews</span>
                  <span className="text-lime">Qualitative</span>
                </div>
                <p className="text-[11px] text-muted-fg font-sans font-medium">
                  Note-based in-depth interviews probing emotional responses, dopamine loops, and learning retention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marczewski Player Typologies & Findings */}
      <section className="space-y-6 border-t border-border pt-10">
        <div className="space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime flex items-center gap-2">
            <Gamepad2 className="h-4 w-4" /> 02 — Marczewski Player Types &amp; Empirical Findings
          </span>
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
            How Different Gamification Mechanics Impact Learner Profiles
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {playerTypes.map((pt, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border bg-surface p-6 space-y-3 shadow-glass hover:border-lime transition-all"
            >
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <div>
                  <span className="font-mono text-[10px] font-bold text-lime uppercase tracking-wider">{pt.target}</span>
                  <h3 className="font-display text-lg font-bold text-foreground">{pt.type}</h3>
                </div>
                <span className="rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-mono font-bold text-foreground">
                  Profile {idx + 1}
                </span>
              </div>
              <p className="text-xs text-foreground/80 font-medium leading-relaxed">{pt.traits}</p>
              <div className="pt-2 border-t border-border/40 space-y-1">
                <span className="font-mono text-[10px] uppercase text-muted-fg font-bold block">Key Game Mechanics:</span>
                <p className="font-mono text-xs font-semibold text-lime">{pt.gameMechanics}</p>
              </div>
              <div className="pt-2 space-y-1">
                <span className="font-mono text-[10px] uppercase text-muted-fg font-bold block">Empirical Experiment Finding:</span>
                <p className="text-xs text-muted-fg leading-relaxed font-medium">{pt.keyFinding}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Theoretical Frameworks */}
      <section className="space-y-6 border-t border-border pt-10">
        <div className="space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime flex items-center gap-2">
            <BookOpen className="h-4 w-4" /> 03 — Theoretical Foundations &amp; Literature Gaps
          </span>
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
            Academic Theories Grounding the UX Research
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {theoreticalFrameworks.map((tf, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border bg-surface p-5 space-y-2 shadow-glass"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-base font-bold text-foreground">{tf.name}</h3>
                <span className="font-mono text-[10px] text-lime font-bold">{tf.author}</span>
              </div>
              <p className="font-mono text-xs text-lime font-medium">{tf.focus}</p>
              <p className="text-xs text-muted-fg leading-relaxed font-medium pt-1 border-t border-border/40">
                {tf.insight}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Integrated PDF Reader Section */}
      <section id="pdf-viewer" className="space-y-6 border-t border-border pt-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> 04 — Interactive PDF Reader
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Read Master&apos;s Thesis Document Online
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPdfExpanded(!isPdfExpanded)}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-foreground hover:border-lime hover:text-lime transition-all"
            >
              {isPdfExpanded ? (
                <>
                  <Minimize2 className="h-3.5 w-3.5" /> <span>Standard View</span>
                </>
              ) : (
                <>
                  <Maximize2 className="h-3.5 w-3.5" /> <span>Expand View</span>
                </>
              )}
            </button>
            <a
              href="/thesis-herald-ago.pdf"
              download="Master-Thesis-Herald-Ago-Gamification.pdf"
              className="inline-flex items-center gap-1.5 rounded-full bg-lime px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-lime-fg shadow-lime hover:scale-105 transition-all"
            >
              <Download className="h-3.5 w-3.5" /> <span>PDF</span>
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer Container */}
        <div
          className={`relative overflow-hidden rounded-2xl border border-border bg-surface shadow-glass transition-all duration-300 ${
            isPdfExpanded ? "h-[85vh]" : "h-[650px] sm:h-[750px]"
          }`}
        >
          <iframe
            src="/thesis-herald-ago.pdf#toolbar=1"
            title="Herald Ago Master Thesis PDF"
            className="h-full w-full border-none rounded-2xl"
          />
          
          {/* Fallback & Helper banner */}
          <div className="absolute bottom-3 left-4 right-4 z-10 hidden sm:flex items-center justify-between rounded-xl border border-border bg-background/95 px-4 py-2.5 backdrop-blur-md shadow-md">
            <span className="font-mono text-xs text-foreground font-medium">
              📄 <strong className="text-lime font-semibold">Herald Ago Master Thesis (2025)</strong> · 102 Pages · SDU
            </span>
            <a
              href="/thesis-herald-ago.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 font-mono text-xs font-bold text-lime hover:underline"
            >
              <span>Open in New Tab</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer Call to Action */}
      <section className="mt-12 flex flex-col items-center justify-center text-center p-8 sm:p-12 rounded-3xl border border-border bg-surface shadow-glass space-y-4">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
          Interested in Gamification UX or Product Research Collaboration?
        </h3>
        <p className="text-xs sm:text-sm text-muted-fg max-w-xl leading-relaxed">
          I apply empirical research methodologies, WCAG accessibility standards, and front-end engineering to digital products and enterprise software.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3 text-xs font-mono font-bold uppercase tracking-wider text-lime-fg transition-all shadow-lime hover:scale-105"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-7 py-3 text-xs font-mono font-bold uppercase tracking-wider text-foreground hover:border-lime hover:text-lime transition-all"
          >
            <span>Explore Other Case Studies</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
