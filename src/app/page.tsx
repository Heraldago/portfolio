import Link from "next/link";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import { projectsData } from "@/data/projects";
import { ArrowUpRight, Sparkles, BookOpen, Layers, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <Hero />

      {/* Flagship Case Studies */}
      <section id="work" className="relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 py-12 sm:py-20 border-t border-border">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> 01 — Selected Case Studies
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Featured Flagship Projects
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-fg leading-relaxed">
            Highlighting empirical research, design system engineering, high-impact business metrics, and production-ready execution.
          </p>
        </div>

        <div className="space-y-10 sm:space-y-14">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} priority={idx === 0} />
          ))}
        </div>

        {/* Link to all projects & enterprise archive */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center text-center p-8 sm:p-12 rounded-3xl border border-border bg-surface shadow-glass">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            Looking for all case studies &amp; enterprise research?
          </h3>
          <p className="mt-2 text-sm text-muted-fg max-w-lg">
            Explore the complete project archive including Sydbank Enterprise Alation Data Catalog, Tutora EdTech platform, and UX documentation.
          </p>
          <Link
            href="/work"
            className="mt-6 group inline-flex items-center gap-2.5 rounded-full bg-lime px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-lime-fg transition-all shadow-lime hover:scale-105"
          >
            <span>Explore All Projects &amp; Archive</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>

      {/* Research & Production Philosophy */}
      <section id="about" className="border-y border-border bg-surface/50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 space-y-12">
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> 02 — About Herald Ago
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Research-led, production-ready.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Card 1: Bio & SDU MSc */}
            <div className="flex flex-col justify-between rounded-3xl border border-border bg-surface p-8 sm:p-10 shadow-glass hover:border-lime transition-all space-y-8">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 border-b border-border/60 pb-6">
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-2xl border-2 border-lime/50 shadow-md shrink-0">
                    <img
                      src="/assets/profile-pms1FE7T.jpg"
                      alt="Herald Ago Portrait"
                      className="h-full w-full object-cover object-[center_15%]"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-2xl font-bold text-foreground">Herald Ago</h3>
                    <p className="text-xs font-mono text-lime font-bold">
                      MSc in IT · Product Designer &amp; UX Engineer
                    </p>
                    <p className="text-xs font-mono text-muted-fg pt-1">
                      Odense, Denmark &amp; Italy · Open to Global Roles
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-muted-fg leading-relaxed">
                  My practice bridges empirical user research, scalable design token systems, and front-end engineering—building accessible, WCAG 2.2 compliant software built for clarity and global scale.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex items-center justify-between">
                <span className="font-mono text-xs text-muted-fg">MSc in IT (Web Communication Design)</span>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-lime hover:underline"
                >
                  <span>Full Bio &amp; Capabilities</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Academic & Skillsets */}
            <div className="flex flex-col justify-between rounded-3xl border border-border bg-surface p-8 sm:p-10 shadow-glass hover:border-lime transition-all space-y-8">
              <div className="space-y-6">
                <div className="space-y-4 border-b border-border/60 pb-6">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime flex items-center gap-2">
                    <Layers className="h-4 w-4" /> Academic Degrees
                  </span>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-display text-base font-bold text-foreground leading-snug">
                        Master of Science (MSc) in IT — Web Communication Design
                      </h4>
                      <p className="text-xs font-mono text-muted-fg">
                        University of Southern Denmark (SDU) · Odense, Denmark
                      </p>
                    </div>
                    <div className="pt-2 border-t border-border/40">
                      <h4 className="font-display text-base font-bold text-foreground leading-snug">
                        Bachelor’s Degree in Communication Sciences &amp; Technologies
                      </h4>
                      <p className="text-xs font-mono text-muted-fg">
                        University of Ferrara (UniFe) · Ferrara, Italy
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime block">
                    Core Skillset &amp; Standards
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {[
                      "User Research",
                      "Design Systems",
                      "WCAG 2.2 AA",
                      "Figma Tokens",
                      "Interaction Design",
                      "Prototyping",
                      "HTML & CSS",
                      "React & Next.js",
                      "Tailwind CSS",
                      "Framer Motion",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-[11px] text-foreground font-semibold shadow-sm"
                      >
                        <CheckCircle2 className="h-3 w-3 text-lime shrink-0" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-fg">
                <span>Standard: <strong className="text-lime font-semibold">WCAG 2.2 AA</strong></span>
                <span>Campuses: <strong className="text-foreground">SDU &amp; UniFe</strong></span>
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
