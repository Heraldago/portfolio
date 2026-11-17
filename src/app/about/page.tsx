import Link from "next/link";
import Image from "next/image";
import MarkerHighlight from "@/components/MarkerHighlight";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & Resume | Herald Ago",
  description:
    "Product Designer with international experience across Denmark, Spain, and Italy. Background, experience, education, and skills.",
};

const experience = [
  {
    company: "GoCoCo",
    role: "Digital Product Designer",
    period: "APR 2026 - PRESENT",
    location: "Barcelona, Spain",
    bullets: [
      "Led mobile onboarding, collaborating with PMs and devs to migrate legacy flows to the new design system and design completely new flows.",
      "Combined interviews, Clarity session replays, funnel analysis and competitor research to identify UX frictions and improve onboarding.",
      "Ran weekly A/B tests: the new design system lifted conversion by 1.5%, while my new custom variant set the company's all-time record (+4.5%).",
    ],
  },
  {
    company: "naemt.nu",
    role: "UX/UI Designer",
    period: "JAN 2024 - DEC 2025",
    location: "Odense, Denmark",
    bullets: [
      "Designed and delivered digital products with cross-functional teams, including an e-commerce platform for 30+ products (wine).",
      "Redesigned a client's website information architecture to reduce UX friction, supporting business growth (+31% gross, +187% net profit) and a Byens Bedste nomination.",
    ],
  },
  {
    company: "Leader Medica",
    role: "Digital Designer Intern",
    period: "JAN 2023 - JUN 2023",
    location: "Padua, Italy",
    bullets: [
      "Maintained the corporate website and digital channels with marketing and product teams; created on-brand assets for digital and print.",
    ],
  },
];

const education = [
  {
    school: "University of Southern Denmark",
    degree: "MSc in IT - Web Communication Design",
    period: "SEP 2023 - JUN 2025",
    location: "Kolding, Denmark",
  },
  {
    school: "University of Ferrara",
    degree: "BSc in Communication",
    period: "SEP 2018 - MAR 2022",
    location: "Ferrara, Italy",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Top Intro / Bio Section */}
      <section className="w-full bg-white dark:bg-surface rounded-b-[2rem] sm:rounded-b-[3rem] border-b border-border/70">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-14 sm:py-20 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-border/60 pb-8">
            <div className="space-y-2">
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Product Designer
              </p>
              <h1 className="font-sans text-4xl sm:text-6xl font-bold tracking-tight text-foreground">
                Herald Ago
              </h1>
            </div>

            <div className="flex flex-col sm:items-end gap-2 text-sm text-foreground/80">
              <a
                href="/cv-herald-ago.pdf"
                target="_blank"
                download
                className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline underline-offset-4"
              >
                Download CV
              </a>
              <div className="flex flex-wrap gap-x-5 gap-y-1">
                <a href="mailto:heraldago1@gmail.com" className="hover:underline underline-offset-4">
                  heraldago1@gmail.com
                </a>
                <span>+39 3423722327</span>
                <span>Padua, Italy</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-4">
              <div className="relative h-56 w-56 sm:h-64 sm:w-64 overflow-hidden rounded-3xl border border-border/80 bg-surface shadow-md">
                <Image
                  src="/assets/profile-pms1FE7T.jpg"
                  alt="Herald Ago"
                  width={320}
                  height={320}
                  quality={90}
                  priority
                  className="h-full w-full object-cover object-[center_15%]"
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-5">
              <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
                I&apos;m <strong className="font-bold text-foreground">Herald</strong>, 27, born and raised in{" "}
                <MarkerHighlight delay={100}>Padua, Italy</MarkerHighlight>. I earned my{" "}
                <strong className="font-bold text-foreground">Bachelor</strong>&apos;s degree in{" "}
                <strong className="font-bold text-foreground">Communication</strong> at the University of Ferrara, then moved to{" "}
                <MarkerHighlight delay={250}>Miami</MarkerHighlight> at 22. Throughout university and my years abroad, I always kept working as a{" "}
                <MarkerHighlight delay={400}>
                  pizza maker, delivery driver, waiter, dishwasher, and freelancer
                </MarkerHighlight>
                .
              </p>
              <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
                At 24, I moved to Denmark to study{" "}
                <strong className="font-bold text-foreground">MSc in IT</strong> -{" "}
                <MarkerHighlight delay={550}>Web Communication Design</MarkerHighlight> at the{" "}
                <strong className="font-bold text-foreground">University of Southern Denmark</strong>
                , turning a lifelong passion for technology into my career. I started as a{" "}
                <strong className="font-bold text-foreground">UX/UI Designer</strong> at the{" "}
                <MarkerHighlight delay={700}>web agency</MarkerHighlight>{" "}
                <strong className="font-bold text-foreground">naemt.nu</strong>, where I worked for two years.
              </p>
              <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
                After that, I joined{" "}
                <strong className="font-bold text-foreground">GoCoCo</strong> as a{" "}
                <strong className="font-bold text-foreground">Product Designer</strong>, a Barcelona-based{" "}
                <MarkerHighlight delay={850}>startup</MarkerHighlight> building an AI mobile app that helps people with diabetes shop for groceries and manage their diet. There, I worked on implementing the new design system, onboarding, paywalls, and automating design-to-code-to-launch workflows with Claude Code. Overall,{" "}
                <MarkerHighlight delay={1000}>
                  I love designing and building products that help and simplify people&apos;s lives.
                </MarkerHighlight>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section className="w-full rounded-b-[2rem] sm:rounded-b-[3rem] border-b border-border/70">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-14 sm:py-20 space-y-14">
          {/* Experience */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
            <div className="md:col-span-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-fg">
                Experience
              </h2>
            </div>
            <div className="md:col-span-9 space-y-10">
              {experience.map((job) => (
                <div key={job.company} className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="font-sans text-lg sm:text-xl font-bold text-foreground">
                      {job.company}{" "}
                      <span className="font-normal text-foreground/80">{job.role}</span>
                    </h3>
                    <span className="text-xs text-muted-fg shrink-0">
                      {job.period} / {job.location}
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm sm:text-base text-foreground/85 leading-relaxed list-disc pl-5">
                    {job.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start pt-10 border-t border-border/60">
            <div className="md:col-span-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-fg">
                Education
              </h2>
            </div>
            <div className="md:col-span-9 space-y-6">
              {education.map((edu) => (
                <div key={edu.school} className="space-y-1">
                  <h3 className="font-sans text-base sm:text-lg font-bold text-foreground">
                    {edu.school}{" "}
                    <span className="font-normal text-foreground/85">{edu.degree}</span>
                  </h3>
                  <p className="text-xs text-muted-fg">
                    {edu.period} / {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Tools */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start pt-10 border-t border-border/60">
            <div className="md:col-span-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-fg">
                Skills &amp; Tools
              </h2>
            </div>
            <div className="md:col-span-9 space-y-3 text-sm sm:text-base text-foreground/85 leading-relaxed">
              <p>
                User research, design systems, wireframes, prototyping, usability testing, A/B testing, growth design, information architecture, accessibility, HTML/CSS/JavaScript, React, JSON, Python.
              </p>
              <p>
                Figma, WordPress, Antigravity, Claude Code, Microsoft Clarity, Dovetail, Web2Wave, Firebase, Adobe Creative Cloud, GitHub, Superwall, Supabase.
              </p>
              <p className="font-medium text-foreground underline underline-offset-4">
                Google UX Design Professional Certificate
              </p>
            </div>
          </div>

          {/* Languages */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start pt-10 border-t border-border/60">
            <div className="md:col-span-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-fg">
                Languages
              </h2>
            </div>
            <div className="md:col-span-9 text-sm sm:text-base text-foreground/85">
              English (C1), Italian (Native), Spanish (B1), French (B1)
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
