export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  image: string | null;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "antonio",
    quote: "Herald turned our physical brand into an online store that customers love using. His attention to detail, craft, and execution exceeded our expectations.",
    author: "Antonio",
    role: "Founder",
    company: "I Pupi Siciliani",
    location: "Odense, Denmark",
    image: "/assets/antonio.jpg"
  },
  {
    id: "sebastian",
    quote: "Working with Herald was fast and clear. He pairs deep user research with real engineering craft unlike anyone else.",
    author: "Sebastian",
    role: "CEO",
    company: "naemt.nu",
    location: "Denmark",
    image: null
  }
];
