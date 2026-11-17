"use client";

import { useState } from "react";
import Link from "next/link";

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
      description: "Task completion time reduced from 2 full days down to 0.5-1 day.",
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
    <div>
      {/* Hero Section (White surface) */}
      <section className="w-full bg-white dark:bg-surface rounded-b-[2rem] sm:rounded-b-[3rem] border-b border-border/70">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-14 sm:py-20 space-y-8">
          <div className="space-y-3 max-w-4xl">
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Master&apos;s Thesis - University of Southern Denmark (SDU)
            </p>
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
              Gamification in Web Development Education
            </h1>
            <p className="text-lg sm:text-xl text-foreground/85 leading-relaxed pt-1">
              How Game Mechanics Enhance Engagement, Skill Acquisition &amp; Self-Efficacy for Novice Developers.
            </p>
          </div>

          <p className="max-w-3xl text-base sm:text-lg text-muted-fg leading-relaxed">
            An empirical research thesis investigating how gamified learning systems bridge the gap between theoretical knowledge and practical front-end engineering, combining a 24-person quantitative survey, a 4-week pre/post coding performance experiment, and qualitative thematic interviews.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-y border-border/60 py-6 text-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-fg">Author</p>
              <p className="mt-1 font-semibold text-foreground">Herald Ago</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-fg">University</p>
              <p className="mt-1 font-semibold text-foreground">SDU (Denmark)</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-fg">Supervisor</p>
              <p className="mt-1 font-semibold text-foreground">Prof. Andrea Valente</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-fg">Publication</p>
              <p className="mt-1 font-semibold text-blue-600 dark:text-blue-400">June 2025 - 102 Pages</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/thesis-herald-ago.pdf"
              download="Master-Thesis-Herald-Ago-Gamification.pdf"
              className="inline-flex items-center rounded-full bg-blue-600 dark:bg-blue-500 px-7 py-3 text-sm font-medium text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              Download PDF (102 pages)
            </a>
            <a
              href="#pdf-viewer"
              className="inline-flex items-center rounded-full border border-border bg-background px-7 py-3 text-sm font-medium text-foreground hover:border-foreground/30 transition-colors"
            >
              Read online
            </a>
          </div>
        </div>
      </section>

      {/* Metrics & Abstract (#f8fafc99 background) */}
      <section className="w-full rounded-b-[2rem] sm:rounded-b-[3rem] border-b border-border/70">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-14 sm:py-20 space-y-14">
          <div className="space-y-6">
            <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Research Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-3xl border border-border/70 bg-white dark:bg-surface p-6 space-y-3"
                >
                  <div className="space-y-1">
                    <span className="font-sans text-3xl font-bold text-blue-600 dark:text-blue-400">{m.value}</span>
                    <p className="text-sm font-bold text-foreground">{m.label}</p>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">{m.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-6 border-t border-border/60">
            <div className="lg:col-span-6 rounded-3xl border border-border/70 bg-white dark:bg-surface p-7 sm:p-9 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-fg">Abstract</p>
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-foreground">
                  Connecting Theory to Practice in Tech Education
                </h3>
                <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                  Traditional university pedagogy in programming often relies on passive lectures and rote syntax memorization, creating a disconnect when students attempt to build practical web applications.
                </p>
                <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                  This thesis evaluates how disaggregated game mechanics (instant feedback loops, visual progress tracking, daily streaks, and structured challenge quests) impact intrinsic motivation, self-efficacy, and code execution speed.
                </p>
              </div>
              <p className="pt-4 border-t border-border/60 text-xs font-medium text-blue-600 dark:text-blue-400">
                Validated with ISO 9241-210 &amp; ISO 9126 Human-Centered Frameworks
              </p>
            </div>

            <div className="lg:col-span-6 rounded-3xl border border-border/70 bg-white dark:bg-surface p-7 sm:p-9 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-fg">Methodology</p>
              <h3 className="font-sans text-xl sm:text-2xl font-bold text-foreground">
                Mixed-Methods Triangulation
              </h3>
              <div className="space-y-3 text-sm">
                <div className="rounded-2xl border border-border/70 bg-background p-4 space-y-1">
                  <div className="flex items-center justify-between font-bold text-foreground">
                    <span>Phase 1 - Anonymous Survey</span>
                    <span className="text-blue-600 dark:text-blue-400">N = 24</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80">
                    Baseline evaluation of university teaching satisfaction vs. gamification attitudes.
                  </p>
                </div>
                <div className="rounded-2xl border border-border/70 bg-background p-4 space-y-1">
                  <div className="flex items-center justify-between font-bold text-foreground">
                    <span>Phase 2 - Pre/Post Coding Task</span>
                    <span className="text-blue-600 dark:text-blue-400">FreeCodeCamp</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80">
                    Controlled HTML/CSS &quot;Build a Survey Form&quot; project before and after a 4-week gamified course.
                  </p>
                </div>
                <div className="rounded-2xl border border-border/70 bg-background p-4 space-y-1">
                  <div className="flex items-center justify-between font-bold text-foreground">
                    <span>Phase 3 - Thematic Interviews</span>
                    <span className="text-blue-600 dark:text-blue-400">Qualitative</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80">
                    In-depth interviews probing emotional responses, dopamine loops, and learning retention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Player Types & Theoretical Frameworks (White surface) */}
      <section className="w-full bg-white dark:bg-surface rounded-b-[2rem] sm:rounded-b-[3rem] border-b border-border/70">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-14 sm:py-20 space-y-14">
          <div className="space-y-6">
            <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Learner Profiles &amp; Findings
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {playerTypes.map((pt, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-border/70 bg-background p-6 sm:p-8 space-y-4"
                >
                  <div className="flex items-baseline justify-between border-b border-border/60 pb-3">
                    <h3 className="font-sans text-xl font-bold text-foreground">{pt.type}</h3>
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400">{pt.target}</span>
                  </div>
                  <p className="text-sm text-foreground/85 leading-relaxed">{pt.traits}</p>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-fg block">Key Mechanics</span>
                    <p className="font-medium text-foreground">{pt.gameMechanics}</p>
                  </div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-fg block">Finding</span>
                    <p className="text-foreground/80 leading-relaxed">{pt.keyFinding}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 pt-6 border-t border-border/60">
            <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Theoretical Foundations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {theoreticalFrameworks.map((tf, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-border/70 bg-background p-6 sm:p-8 space-y-2"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-sans text-lg font-bold text-foreground">{tf.name}</h3>
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400">{tf.author}</span>
                  </div>
                  <p className="text-xs font-medium text-muted-fg">{tf.focus}</p>
                  <p className="text-sm text-foreground/85 leading-relaxed pt-2 border-t border-border/50">
                    {tf.insight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PDF Viewer Section (#f8fafc99 background) */}
      <section id="pdf-viewer" className="scroll-mt-20 w-full rounded-b-[2rem] sm:rounded-b-[3rem] border-b border-border/70">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-14 sm:py-20 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Thesis Document
            </h2>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPdfExpanded(!isPdfExpanded)}
                className="rounded-full border border-border bg-white dark:bg-surface px-5 py-2 text-xs font-medium text-foreground hover:border-foreground/30 transition-colors"
              >
                {isPdfExpanded ? "Standard view" : "Expand view"}
              </button>
              <a
                href="/thesis-herald-ago.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-blue-600 dark:bg-blue-500 px-5 py-2 text-xs font-medium text-white hover:bg-blue-700 transition-colors"
              >
                Open PDF in new tab
              </a>
            </div>
          </div>

          <div
            className={`relative overflow-hidden rounded-3xl border border-border/80 bg-white dark:bg-surface shadow-md transition-all duration-300 ${
              isPdfExpanded ? "h-[85vh]" : "h-[650px] sm:h-[750px]"
            }`}
          >
            <iframe
              src="/thesis-herald-ago.pdf#toolbar=1"
              title="Herald Ago Master Thesis PDF"
              className="h-full w-full border-none rounded-3xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
