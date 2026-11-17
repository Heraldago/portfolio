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
    role: "Digital Product Designer",
    period: "May 2026 - Oct 2026",
    company: "GoCoCo",
    location: "Barcelona, Spain",
    highlights: [
      "Owned onboarding flows and paywall experimentation for a 1M+ user mobile app, migrating legacy screens to the new Figma UI Design System.",
      "Built and deployed onboarding flows directly within Superwall, using both the platform's visual editor with AI agents and Superwall's new React framework.",
      "Designed and executed Superwall A/B tests on updated onboarding flows, lifting average conversion by +1.5% and reaching a +4.5% peak conversion increase with a custom winning variant.",
      "Led user research and funnel analysis, combining user interviews, Microsoft Clarity session replays, and competitor benchmarks to eliminate drop-offs and establish onboarding best practices."
    ]
  },
  {
    id: "naemt",
    role: "Digital Product Designer",
    period: "Jan 2024 - Dec 2025",
    company: "næmt.nu",
    location: "Odense, Denmark",
    highlights: [
      "Delivered client digital products end-to-end, collaborating with cross-functional teams and external stakeholders to align business goals with user experience and frontend execution.",
      "Designed and built a 0-to-1 e-commerce platform for 30+ products, owning the full lifecycle from user flows and wireframes to high-fidelity UI and site development.",
      "Redesigned website information architecture (IA) to resolve UX friction and booking confusion reported by clients and stakeholders, supporting measurable business growth (+31% gross profit, +187% YoY net profit) and a Byens Bedste nomination."
    ]
  },
  {
    id: "leadermedica",
    role: "Digital Product Designer Intern",
    period: "Jan 2023 - Jun 2023",
    company: "Leader Medica",
    location: "Padua, Italy",
    highlights: [
      "Collaborated with internal marketing and product teams to maintain the corporate website and digital channels, producing branded visual assets across digital and print touchpoints."
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "MSc in IT - Web Communication Design",
    institution: "University of Southern Denmark (SDU)",
    location: "Odense, Denmark",
    period: "2023 - 2025",
    details: "Taught in English. Specialization in interaction design, user research, web technologies, and human-computer interaction."
  },
  {
    degree: "BSc in Communication",
    institution: "University of Ferrara (UniFe)",
    location: "Ferrara, Italy",
    period: "2018 - 2022",
    details: "Focus on digital media, visual communication, semiotics, and web fundamentals."
  }
];

export const skillsData: SkillItem[] = [
  { name: "Superwall A/B Testing & Paywalls", levelPercentage: 95 },
  { name: "Onboarding Flows & CRO", levelPercentage: 95 },
  { name: "UI Design Systems (Figma)", levelPercentage: 95 },
  { name: "User Research & Usability Testing", levelPercentage: 90 },
  { name: "Front-end (HTML, CSS, JS, React)", levelPercentage: 85 }
];

export const skillsTags = [
  "Superwall A/B Testing",
  "Paywall Design",
  "Onboarding Flows",
  "Conversion & CRO Optimization",
  "Funnel Friction Analysis",
  "User Research",
  "Usability Testing",
  "UI Design Systems",
  "Information Architecture (IA)"
];

export const toolboxTags = [
  "Superwall",
  "Figma",
  "Microsoft Clarity",
  "Dovetail",
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "WordPress",
  "Web2Wave",
  "Firebase",
  "GitHub"
];

export const languagesData = [
  { name: "Italian", level: "Native" },
  { name: "English", level: "C1 Professional" },
  { name: "Spanish", level: "B1" },
  { name: "French", level: "B1" }
];

export const certificationsData = [
  { name: "Google UX Design Professional Certificate", issuer: "Coursera (Credential: VNBQ3ZIUS6OU)", date: "2026" }
];
