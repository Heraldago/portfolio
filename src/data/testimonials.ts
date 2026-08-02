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
    quote: "Herald transformed our physical brand into a seamless digital e-commerce experience. His attention to detail, UX craft, and technical execution exceeded all our expectations.",
    author: "Antonio",
    role: "Founder",
    company: "I Pupi Siciliani",
    location: "Odense, Denmark",
    image: "/assets/antonio.jpg"
  },
  {
    id: "sebastian",
    quote: "Working with Herald on complex digital product architectures was smooth and remarkably fast. He bridges user research with engineering precision unlike anyone else.",
    author: "Sebastian",
    role: "CEO",
    company: "naemt.nu",
    location: "Denmark",
    image: null
  }
];
