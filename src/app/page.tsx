import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import ProjectsList from "@/components/ProjectsList";
import MarkerHighlight from "@/components/MarkerHighlight";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import { projectsData } from "@/data/projects";

export default function HomePage() {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div>
      {/* Hero Section (White surface with rounded bottom border) */}
      <Hero />

      {/* Selected Work (#f8fafc99 background with rounded bottom border) */}
      <section
        id="work"
        className="scroll-mt-20 relative w-full rounded-b-[2rem] sm:rounded-b-[3rem] border-b border-border/70"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 pt-10 sm:pt-14 pb-16 sm:pb-24">
          <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-8 sm:mb-12">
            Projects
          </h2>

          <ProjectsList projects={featuredProjects} priorityFirst />

          <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-10 border-t border-border/60">
            <div className="space-y-1">
              <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Looking for earlier work?
              </h3>
              <p className="text-sm sm:text-base text-foreground/80">
                Browse the full archive including Sydbank, Tutora, and UX documentation.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-full border border-border bg-white dark:bg-surface px-7 py-3 text-sm font-medium text-foreground hover:border-foreground/30 transition-colors shrink-0"
            >
              View all projects
            </Link>
          </div>
        </div>
      </section>

      {/* About (White surface with rounded bottom border) */}
      <section
        id="about"
        className="scroll-mt-20 w-full bg-white dark:bg-surface rounded-b-[2rem] sm:rounded-b-[3rem] border-b border-border/70"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-16 sm:py-24 space-y-10">
          <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            About
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-4">
              <div className="relative h-56 w-56 sm:h-64 sm:w-64 overflow-hidden rounded-3xl border border-border/80 bg-surface shadow-md">
                <Image
                  src="/assets/profile-pms1FE7T.jpg"
                  alt="Herald Ago"
                  width={320}
                  height={320}
                  quality={90}
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
                <MarkerHighlight delay={850}>startup</MarkerHighlight> building an AI mobile app that helps people with diabetes shop for groceries and manage their diet. There, I worked on implementing the new design system, onboarding, paywalls, and automating design-to-code-to-launch workflows with Claude Code. Now based in{" "}
                <strong className="font-bold text-foreground">Padua, Italy</strong>,{" "}
                <MarkerHighlight delay={1000}>
                  I love designing and building products that help and simplify people&apos;s lives.
                </MarkerHighlight>
              </p>

              <div className="pt-3">
                <Link
                  href="/about"
                  className="inline-flex items-center rounded-full border border-border bg-background px-6 py-2.5 text-sm font-medium text-foreground hover:border-foreground/30 transition-colors"
                >
                  View full resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Endorsements (#f8fafc99 background with rounded bottom border) */}
      <Testimonials />

      {/* Contact Section (White surface with rounded bottom border) */}
      <ContactSection />
    </div>
  );
}
