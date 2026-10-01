import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import { projectsData } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <Hero />

      {/* Selected Work */}
      <section id="work" className="relative mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 py-8 sm:py-12 border-t border-border">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Work
            </span>
            <h2 className="mt-1 font-display text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
              Selected work
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-muted-fg leading-relaxed">
            Recent projects in mobile onboarding, design systems, and public digital platforms.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} priority={idx === 0} />
          ))}
        </div>

        {/* Link to archive */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center text-center p-6 sm:p-10 rounded-2xl border border-border bg-surface shadow-sm">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
            Looking for earlier work?
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-muted-fg max-w-lg">
            Browse the full archive including the Sydbank data catalog, Tutora, and UX documentation.
          </p>
          <Link
            href="/work"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 dark:bg-blue-500 px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white hover:bg-blue-700 transition-colors shadow-sm"
          >
            <span>View project archive</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border bg-surface/50 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 space-y-10">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Background
            </span>
            <h2 className="mt-1 font-display text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
              About me
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <div className="relative h-44 w-44 sm:h-52 sm:w-52 overflow-hidden rounded-2xl border border-border shadow-sm">
                <Image
                  src="/assets/profile-pms1FE7T.jpg"
                  alt="Herald Ago"
                  width={288}
                  height={288}
                  quality={90}
                  className="h-full w-full object-cover object-[center_15%]"
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <p className="text-base text-foreground/90 leading-relaxed">
                I am a product designer based in Barcelona. Currently interning at GoCoCo, where I design and test mobile onboarding flows and paywalls in Figma and Superwall for a health app with over 1M users.
              </p>
              <p className="text-base text-foreground/90 leading-relaxed">
                Before GoCoCo, I earned a Master of Science in IT (Web Communication Design) at the University of Southern Denmark in Odense, and a bachelor&apos;s degree in communication sciences at the University of Ferrara in Italy.
              </p>

              <div className="pt-3">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-muted-fg mb-2">
                  Tools and methods
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {[
                    "Figma",
                    "Superwall",
                    "Microsoft Clarity",
                    "Dovetail",
                    "User research",
                    "Design systems",
                    "A/B testing",
                    "HTML, CSS, React",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-foreground shadow-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <span>View full resume</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Endorsements */}
      <Testimonials />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
