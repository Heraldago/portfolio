export interface ExperienceItem {
  id: string;
  role: string;
  period: string;
  company: string;
  location: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
}

export interface SkillItem {
  name: string;
  levelPercentage: number;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "freelance",
    role: "Digital Product Designer",
    period: "Sep 2025 – Present",
    company: "Freelance",
    location: "Remote",
    highlights: [
      "Architected end-to-end user journeys, visual brand identities, and complex digital workflows for diverse client portfolios spanning small businesses, student platforms, and public services.",
      "Crafted compelling design narratives from initial moodboards to final delivery, guiding cross-functional stakeholders through complex creative and architectural decisions.",
      "Leveraged AI-assisted tooling (Claude, Lovable) and Figma to rapidly prototype data-dense interfaces, accelerating time-to-market while maintaining high visual ambition."
    ]
  },
  {
    id: "naemt",
    role: "UX/UI Designer",
    period: "Feb 2025 – Sep 2025",
    company: "naemt.nu",
    location: "Odense, Denmark",
    highlights: [
      "Spearheaded the 0-to-1 UX/UI design and launch of a B2C webshop tailored for the Danish market entry.",
      "Established a modular Figma design system and visual identity, aligning product managers and strategy teams around a unified design vision that significantly reduced handoff friction.",
      "Translated complex business goals and technical constraints into clear information architecture and interactive user flows under strict timeline and budget parameters."
    ]
  },
  {
    id: "ipupisiciliani",
    role: "UX/UI Designer",
    period: "Jan 2024 – Jan 2025",
    company: "I Pupi Siciliani",
    location: "Odense, Denmark",
    highlights: [
      "Orchestrated the complete digital redesign of the core web platform, translating brand heritage into an intuitive, friction-free web experience.",
      "Restructured complex information architecture and user workflows, directly contributing to a +187% YoY net profit increase and +31% gross profit growth.",
      "Secured a prestigious 'Byens Bedste' nomination through iterative usability improvements and visual refinements."
    ]
  },
  {
    id: "leadermedica",
    role: "UX/UI Designer",
    period: "Jan 2023 – Jun 2023",
    company: "Leader Medica",
    location: "Padua, Italy",
    highlights: [
      "Designed accessible, scalable UI component libraries and conducted heuristic usability evaluations to enforce visual consistency across all digital touchpoints.",
      "Optimized key conversion funnels, contributing directly to a +32% revenue growth.",
      "Partnered closely with developers to ensure seamless UI execution and high fidelity across responsive web layouts."
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Master of Science (MSc) in IT — Web Communication Design",
    institution: "University of Southern Denmark (SDU)",
    location: "Odense, Denmark",
    period: "2023 – 2025",
    details: "Taught entirely in English. Specializing in interaction design, empirical user research, web technologies, and human-computer interaction (HCI)."
  },
  {
    degree: "Bachelor’s Degree in Communication Sciences & Technologies",
    institution: "University of Ferrara (UniFe)",
    location: "Ferrara, Italy",
    period: "2019 – 2022",
    details: "Focusing on digital media, communication strategy, semiotics, and front-end web fundamentals."
  }
];

export const skillsData: SkillItem[] = [
  { name: "UX Research & Strategy", levelPercentage: 95 },
  { name: "UI Design & Prototyping", levelPercentage: 95 },
  { name: "Design Systems (Figma)", levelPercentage: 90 },
  { name: "WCAG 2.2 Accessibility", levelPercentage: 88 },
  { name: "HTML, CSS & React / Next.js", levelPercentage: 85 },
  { name: "AI-Assisted Workflows", levelPercentage: 88 }
];

export const toolboxTags = [
  "Figma",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Claude AI",
  "Lovable",
  "Usability Testing",
  "ISO 9241-210",
  "WCAG 2.2 AA",
  "Information Architecture"
];

export const languagesData = [
  { name: "Italian", level: "Native" },
  { name: "Albanian", level: "Native" },
  { name: "English", level: "C1 · Professional" }
];

export const certificationsData = [
  { name: "Google UX Design Professional Certificate", issuer: "Coursera / Google" }
];
