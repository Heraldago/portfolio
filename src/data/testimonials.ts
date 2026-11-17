export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  image: string | null;
  imagePosition?: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "bertrand",
    quote: "Herald bridges product design, tech, and business needs with ease. A sharp profile who automates workflows and delivers value from day one.",
    author: "Bertrand Amaraggi",
    role: "Co-founder",
    company: "GoCoCo",
    location: "Barcelona, Spain",
    image: "/assets/bertrand-amaraggi.jpg",
    imagePosition: "object-[58%_20%]"
  },
  {
    id: "matthieu",
    quote: "Herald deeply understands user flows, seeing each screen as part of a complete journey. His UI work is clean, thoughtful, and built for conversion.",
    author: "Matthieu Lepelley",
    role: "COO",
    company: "Carolus Invest",
    location: "France",
    image: "/assets/matthieu-lepelley.jpg",
    imagePosition: "object-[center_20%]"
  },
  {
    id: "antonio",
    quote: "Herald has rare proactivity and deep study. The dedication he brings to preparing every detail and the immediate trust he inspires in people will take him very far.",
    author: "Antonio",
    role: "Founder",
    company: "I Pupi Siciliani",
    location: "Odense, Denmark",
    image: "/assets/antonio-avatar.jpg",
    imagePosition: "object-[center_32%]"
  },
  {
    id: "sebastian",
    quote: "Herald excelled at cross-stakeholder collaboration, guiding the entire creation process from start to finish with great precision and genuine passion.",
    author: "Sebastian",
    role: "CEO",
    company: "næmt.nu",
    location: "Denmark",
    image: "/assets/sebastian-avatar.jpg",
    imagePosition: "object-center"
  }
];
