"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { experienceData, educationData } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <div className="space-y-16">
      {/* Experience Section */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <Briefcase className="h-5 w-5 text-lime" />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Professional Experience
          </h3>
        </div>

        <div className="space-y-8">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="relative pl-6 sm:pl-8 border-l-2 border-border hover:border-lime transition-colors space-y-3"
            >
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-lime bg-background" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h4 className="font-display text-xl font-bold text-foreground">
                    {exp.role}
                  </h4>
                  <p className="font-mono text-xs text-lime font-bold">
                    {exp.company} <span className="text-muted-fg font-normal">· {exp.location}</span>
                  </p>
                </div>
                <span className="font-mono text-xs font-semibold text-muted-fg bg-surface px-3 py-1 rounded-full border border-border w-fit">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2 pt-1">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-fg leading-relaxed">
                    <CheckCircle2 className="h-4 w-4 text-lime shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="space-y-8 pt-6 border-t border-border">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <GraduationCap className="h-5 w-5 text-lime" />
          <h3 className="font-display text-2xl font-bold text-foreground">
            Academic Background
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu) => (
            <div
              key={edu.degree}
              className="rounded-2xl border border-border bg-surface p-6 space-y-3 hover:border-lime transition-colors"
            >
              <span className="font-mono text-xs font-bold text-lime">{edu.period}</span>
              <h4 className="font-display text-lg font-bold text-foreground leading-snug">
                {edu.degree}
              </h4>
              <p className="font-mono text-xs text-muted-fg">{edu.institution} · {edu.location}</p>
              {edu.details && (
                <p className="text-xs text-muted-fg/80 leading-relaxed">{edu.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
