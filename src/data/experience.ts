export interface ExperienceItem {
  id: string;
  role: string;
  period: string;
  company: string;
  employmentType?: string;
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
    id: "gococo",
    role: "Product Design Intern",
    period: "Aug 2026 to Present",
    company: "GoCoCo",
    employmentType: "Internship",
    location: "Barcelona, Spain (Hybrid)",
    highlights: [
      "Design mobile onboarding flows and paywalls in Figma for a health app with over 1M users.",
      "Build and test onboarding variants in Superwall to evaluate conversion against existing designs.",
      "Track user sessions in Microsoft Clarity to identify drop-off points.",
      "Map user journeys and personas using qualitative customer interview data in Dovetail."
    ]
  },
  {
    id: "freelance",
    role: "Digital Product Designer",
    period: "Oct 2025 to Present",
    company: "Freelance",
    employmentType: "Freelance",
    location: "Remote",
    highlights: [
      "Design web and mobile platforms with a focus on usability, Figma design systems, and brand consistency.",
      "Built and maintained accessible web interfaces adhering to WCAG 2.2 AA standards."
    ]
  },
  {
    id: "naemt",
    role: "UX/UI Designer",
    period: "Feb 2025 to Sep 2025",
    company: "næmt.nu",
    employmentType: "Internship",
    location: "Odense, Denmark (Hybrid)",
    highlights: [
      "Designed an e-commerce platform for 30+ products in Figma and implemented it in WordPress.",
      "Conducted usability reviews and translated user requirements into responsive layouts."
    ]
  },
  {
    id: "ipupisiciliani",
    role: "User Experience Designer",
    period: "Jan 2024 to Jan 2025",
    company: "I Pupi Siciliani",
    employmentType: "Contract",
    location: "Odense, Denmark (Hybrid)",
    highlights: [
      "Redesigned the restaurant reservation flow and menu architecture based on customer feedback.",
      "The platform update contributed to an increase in online bookings and a 31% increase in gross profit year-over-year.",
      "The business was nominated for Byens Bedste by Ugeavisen Odense."
    ]
  },
  {
    id: "leadermedica",
    role: "Digital Designer",
    period: "Mar 2023 to Jun 2023",
    company: "LEADER MEDICA SRL",
    employmentType: "Full-time",
    location: "Padua, Italy (On-site)",
    highlights: [
      "Created digital assets using Adobe InDesign and Photoshop, maintained company web pages, and supported visual communication."
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Master of Science in IT, Web Communication Design",
    institution: "University of Southern Denmark (SDU)",
    location: "Odense, Denmark",
    period: "2023 to 2025",
    details: "Taught in English. Specialization in interaction design, user research, web technologies, and human-computer interaction."
  },
  {
    degree: "Bachelor of Arts in Communication Sciences",
    institution: "University of Ferrara",
    location: "Ferrara, Italy",
    period: "2019 to 2022",
    details: "Focus on digital media, visual communication, semiotics, and web fundamentals."
  }
];

export const skillsData: SkillItem[] = [
  { name: "User research", levelPercentage: 95 },
  { name: "UI design and prototyping", levelPercentage: 95 },
  { name: "Design systems (Figma)", levelPercentage: 90 },
  { name: "WCAG 2.2 accessibility", levelPercentage: 90 },
  { name: "HTML, CSS, React", levelPercentage: 85 }
];

export const toolboxTags = [
  "Figma",
  "Superwall",
  "Microsoft Clarity",
  "Dovetail",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "WCAG 2.2 AA",
  "Information architecture"
];

export const languagesData = [
  { name: "Italian", level: "Native" },
  { name: "Albanian", level: "Native" },
  { name: "English", level: "C1 Professional" }
];

export const certificationsData = [
  { name: "Google UX Design Professional Certificate", issuer: "Google" }
];
