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
    id: "freelance",
    role: "Digital Product Designer",
    period: "Oct 2025 – Present",
    company: "Freelance",
    employmentType: "Freelance",
    location: "European Economic Area · Remote",
    highlights: [
      "Designed end-to-end digital platforms with strong UX/UI focus, created/maintained Figma design systems, redesigned websites and created a logo for a student organization ensuring their brand identity.",
      "Designed and developed personal portfolio website from 0 to 1 respecting WCAG 2.2 AA accessibility standards and achieving 100/100 Google PageSpeed scores on Performance, Accessibility, Best Practices, SEO and 3/3 on Agentic browsing."
    ]
  },
  {
    id: "naemt",
    role: "UX/UI Designer",
    period: "Feb 2025 – Sep 2025",
    company: "næmt.nu",
    employmentType: "Internship",
    location: "Odense Kommune, Region of Southern Denmark · Hybrid",
    highlights: [
      "Designed an end-to-end e-commerce platform for a client creating user flows, wireframes, and high-fidelity interfaces in Figma, developed it 0 to 1 within WordPress.",
      "Led cross-functional alignment and stakeholder reviews for 30+ products, translating user research, business & technical constraints into elegant designs with a rigorous eye for typography and layouts."
    ]
  },
  {
    id: "ipupisiciliani",
    role: "User Experience Designer",
    period: "Jan 2024 – Jan 2025",
    company: "I Pupi Siciliani",
    employmentType: "Contract",
    location: "Odense Kommune · Hybrid",
    highlights: [
      "Led a website redesign that contributed to a +31% increase in gross profit and a +187% increase in net profit year-over-year (verified via Danish CVR financial reports).",
      "Used user research to identify booking pain points, redesign the reservation experience, and improve information architecture based on customer feedback around menu clarity and multilingual usability.",
      "Enhanced pre-dining customer satisfaction, culminating in the business being nominated for 'Byens Bedste' (Best of the City) by Ugeavisen Odense, by translating qualitative user feedback regarding daily menu ambiguity into an intuitive, dynamic information architecture layout."
    ]
  },
  {
    id: "leadermedica",
    role: "Digital Designer",
    period: "Mar 2023 – Jun 2023",
    company: "LEADER MEDICA SRL",
    employmentType: "Full-time",
    location: "Padua · On-site",
    highlights: [
      "Created branded digital assets using Adobe InDesign and Photoshop, maintained the company website, and supported accurate, consistent, and up-to-date visual communication across print and digital touchpoints.",
      "Contributed to the company's broader digital presence during a period in which revenue increased by 32%."
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
