"use client";

import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/data/projects";

interface ProjectCardProps {
  project: CaseStudy;
  priority?: boolean;
  reverse?: boolean;
}

export default function ProjectCard({
  project,
  priority = false,
  reverse = false,
}: ProjectCardProps) {
  return (
    <article className="group transition-[opacity,filter] duration-200">
      <Link href={project.link} className="block focus:outline-none">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Text Column */}
          <div
            className={`md:col-span-5 space-y-5 ${
              reverse ? "md:order-2" : "md:order-1"
            }`}
          >
            <h3 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-foreground leading-[1.12] group-hover:underline underline-offset-4 decoration-2">
              {project.title}
            </h3>

            <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Visual Preview Column */}
          <div
            className={`md:col-span-7 ${
              reverse ? "md:order-1" : "md:order-2"
            }`}
          >
            <div className="relative aspect-[16/10] min-h-[280px] sm:min-h-[400px] lg:min-h-[460px] w-full overflow-hidden rounded-3xl border border-border/80 dark:border-white/15 bg-white shadow-md transition-all duration-300 group-hover:border-foreground/30 group-hover:shadow-xl group-focus-visible:border-blue-600 group-active:border-foreground/50">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={priority}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 58vw, 660px"
                className={`object-cover ${project.imagePosition || "object-center"} transition-transform duration-500 ease-out group-hover:scale-[1.02]`}
              />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
