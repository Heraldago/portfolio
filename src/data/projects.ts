export interface CaseStudy {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  badge: string;
  image: string;
  tags: string[];
  link: string;
  role: string;
  projectType: string;
  tools: string[];
  duration: string;
  problem: string;
  solution: string;
  metrics?: { label: string; value: string; description: string }[];
  processPhases: { number: string; phase: string; summary: string }[];
  interactivePrototype?: {
    title: string;
    description: string;
    steps: {
      id: string;
      title: string;
      subtitle: string;
      image: string;
      highlights: string[];
    }[];
  };
  researchData?: {
    userGroups?: { title: string; desc: string; image: string }[];
    competitiveAnalysis?: { image: string; summary: string };
    personas?: { title: string; image: string; summary: string }[];
    statements?: { title: string; image: string }[];
    goalStatement?: { title: string; image: string };
    userFlows?: { title: string; image: string };
    userJourney?: { title: string; image: string };
    storyboards?: { title: string; image: string };
  };
  wireframes?: {
    title: string;
    desc: string;
    images: { title: string; src: string }[];
  };
  designSystem?: {
    colorsImage?: string;
    typographyImage?: string;
    iconsGridsImage?: string;
    componentsImage?: string;
    aiImage?: string;
    aiDesc?: string;
  };
  highFiScreens?: { label: string; desc: string; img?: string }[];
  keyDecisions: { title: string; body: string }[];
  takeaways: string[];
  figmaUrl?: string;
}

export const projectsData: CaseStudy[] = [
  {
    id: "ungdomskort",
    index: "01",
    title: "Ungdomskort: Transit Redesign",
    subtitle: "National Danish Student Travel Pass Overhaul",
    shortDescription: "Website and mobile app redesign for Denmark’s national student transit service, solving payment complexity, mobile responsiveness, and enforcing strict WCAG 2.2 AA compliance.",
    badge: "Public Transit UX & Accessibility",
    image: "/assets/case-3-DEv2TI_Y.png",
    tags: ["Mobile-First", "WCAG 2.2 AA", "Danish Public Transit", "Heuristic Evaluation"],
    link: "/ungdomskort",
    role: "Lead Product Designer & Accessibility Engineer",
    projectType: "Responsive Web & Mobile Service",
    tools: ["Figma", "HTML5", "WCAG 2.2 Audit", "Miro"],
    duration: "4 Months",
    problem: "Danish students faced extreme cognitive friction and transaction drop-off when applying for and renewing their national transport pass. The existing platform suffered from broken mobile layouts, ambiguous payment step guidance, and severe non-compliance with European accessibility standards (WCAG 2.1/2.2).",
    solution: "A complete mobile-first redesign of Ungdomskort.dk and companion app flow. Re-architected the multi-step verification and payment funnel into an intuitive 3-step wizard, introduced automated calendar renewal alerts, and established a WCAG 2.2 AA compliant tokenized color and typography system.",
    metrics: [
      { label: "WCAG Compliance", value: "100%", description: "Full AA compliance verified with axe-core & manual screen reader audits." },
      { label: "Checkout Friction", value: "-45%", description: "Reduction in user step completion times during pass renewal." },
      { label: "Mobile Usability", value: "+92%", description: "Positive feedback rating from 18-25 year old Danish student cohort." }
    ],
    processPhases: [
      { number: "01", phase: "Heuristic Evaluation & Audit", summary: "Audited existing Ungdomskort portal against Nielsen Norman Group heuristics and WCAG 2.2 standards. Identified 14 critical usability blockers including broken contrast ratios and hidden tab focus indicators." },
      { number: "02", phase: "Empirical User Research", summary: "Conducted contextual inquiries and user interviews with Danish university students. Discovered that 78% attempted pass renewals on smartphones while commuting." },
      { number: "03", phase: "IA & Flow Simplification", summary: "Streamlined the complex 7-stage approval funnel (MitID identity verification, zone selection, payment, delivery) into an integrated 3-stage visual progress tracker." },
      { number: "04", phase: "Accessible Design Tokens", summary: "Crafted high-contrast UI component tokens in Figma matching official Danish transport branding while exceeding strict contrast guidelines." },
      { number: "05", phase: "Prototyping & Screen Reader Verification", summary: "Built fully interactive responsive prototypes and tested keyboard focus traps, voiceover announcements, and dynamic text resizing." }
    ],
    interactivePrototype: {
      title: "Interactive Prototype Simulator",
      description: "Click through the core steps of the redesigned Ungdomskort student journey below.",
      steps: [
        {
          id: "step-1",
          title: "Step 1: MitID Authentication",
          subtitle: "Single Sign-On Verification",
          image: "/assets/ungscreen-login.png",
          highlights: ["Automated student status verification", "MitID biometric authentication", "High contrast WCAG 2.2 AA focus indicators"]
        },
        {
          id: "step-2",
          title: "Step 2: Zone & Route Selector",
          subtitle: "Automated Tariff Calculation",
          image: "/assets/ungscreen-search.jpg",
          highlights: ["Interactive zone map selector", "Instant price calculation", "Visual breakdown of bus/train/metro inclusion"]
        },
        {
          id: "step-3",
          title: "Step 3: Web Calendar & Renewal",
          subtitle: "Frictionless Payment Funnel",
          image: "/assets/ungscreen-web-calendar.png",
          highlights: ["Visual calendar for pass validity period", "One-click renewal subscription", "Danish MobilePay integration"]
        },
        {
          id: "step-4",
          title: "Step 4: Active Digital Card Pass",
          subtitle: "Mobile & Offline Travel Pass",
          image: "/assets/ungscreen-web-card.png",
          highlights: ["Live QR code for conductor scanning", "Offline caching capability", "Clear expiration timer badge"]
        },
        {
          id: "step-5",
          title: "Step 5: Student Notification Hub",
          subtitle: "Proactive Renewal Alerts",
          image: "/assets/ungscreen-notifications.jpg",
          highlights: ["Automated 7-day expiration alert", "Direct action links to renew", "Customizable push & SMS triggers"]
        }
      ]
    },
    researchData: {
      competitiveAnalysis: {
        image: "/assets/ungcompetitive-analysis.jpg",
        summary: "Evaluated Danish regional transport portals (Rejsekort, DSB, DOT) to benchmark accessibility, zone selectors, and checkout flows."
      },
      personas: [
        { title: "Persona 1 — Commuting University Student", image: "/assets/ungpersona-1.jpg", summary: "Needs instant mobile pass renewal while on the train." },
        { title: "Persona 2 — High School Student (First-Time User)", image: "/assets/ungpersona-2.jpg", summary: "Needs clear step guidance for MitID verification and zone boundaries." }
      ],
      userFlows: { title: "Danish Transport Flow Architecture", image: "/assets/unguser-flow.jpg" },
      storyboards: { title: "Commuter Journey Storyboards", image: "/assets/ungstoryboards.jpg" }
    },
    wireframes: {
      title: "Before vs After Layout Transformations",
      desc: "Comparing the legacy non-responsive website with the redesigned accessible platform.",
      images: [
        { title: "Legacy Step 1 (Cluttered)", src: "/assets/ung-step1-original-hd.png" },
        { title: "Redesigned Web Calendar & Renewal", src: "/assets/ungscreen-web-calendar.png" },
        { title: "Redesigned Active Digital Card", src: "/assets/ungscreen-web-card.png" },
        { title: "Redesigned Student Message Center", src: "/assets/ungscreen-web-messages.png" }
      ]
    },
    designSystem: {
      colorsImage: "/assets/ungcolors.jpg",
      typographyImage: "/assets/ungtypography.jpg"
    },
    highFiScreens: [
      { label: "Mobile Login & MitID", desc: "Biometric and MitID single sign-on onboarding.", img: "/assets/ungscreen-login.png" },
      { label: "Zone & Pass Selector", desc: "Interactive map and automated price calculator.", img: "/assets/ungscreen-search.jpg" },
      { label: "Notification Hub", desc: "Timely alerts for pass expiration and renewal status.", img: "/assets/ungscreen-notifications.jpg" },
      { label: "Profile & Student ID", desc: "Digital verification card with offline QR validation.", img: "/assets/ungscreen-profile.jpg" }
    ],
    keyDecisions: [
      { title: "3-Step Guided Wizard", body: "Replaced scattered forms with a linear step progress bar that persists user input across sessions." },
      { title: "MitID Frictionless Auth", body: "Embedded Danish national digital identity auth directly into step 1 to pre-fill verified student status." },
      { title: "High-Contrast UI System", body: "Enforced 7:1 contrast ratio for all interactive text and controls to guarantee outdoor readability on mobile screens." },
      { title: "Automated Expiration Alerts", body: "Added SMS and push notification triggers 7 days prior to pass expiration to prevent unexpected transit fines." }
    ],
    takeaways: [
      "Designing for public sector software requires balancing strict compliance with delightful, modern interaction speed.",
      "Empirical testing with real commuting students revealed that micro-copy and clear status feedback were just as critical as visual hierarchy."
    ]
  },
  {
    id: "xbit",
    index: "02",
    title: "X-Bit Museum App Design",
    subtitle: "Google UX Certificate Capstone Project",
    shortDescription: "A comprehensive end-to-end UX/UI design process completed as part of the Google UX Design Certificate, featuring empirical user research, wireframing, high-fidelity prototyping, and usability testing.",
    badge: "Culture & EdTech Mobile UX",
    image: "/assets/case-1-D3qXAdrt.png",
    tags: ["Google UX Certificate", "Mobile UX/UI", "Usability Testing", "End-to-End UX"],
    link: "/xbit",
    role: "Lead UX/UI Designer",
    projectType: "Mobile Application (iOS & Android)",
    tools: ["Figma", "Miro", "Google UX Framework", "Paper & Pencil"],
    duration: "6 Months",
    problem: "Museum visitors struggled to browse exhibitions and book tickets in a unified experience. Existing solutions were fragmented — browsing happened on one platform, booking on another, and digital tickets were nowhere to be found. This created friction at every step of the visit journey.",
    solution: "XBit is a museum companion app that unifies the full visitor experience: discover current and upcoming exhibitions, book tickets with an integrated calendar and payment flow, and store digital QR-code tickets — all in one coherent, accessible interface.",
    metrics: [
      { label: "User Task Completion", value: "95%", description: "Success rate achieved during final moderated usability testing rounds." },
      { label: "Booking Speed", value: "<60s", description: "Average time required from exhibition discovery to QR ticket generation." },
      { label: "Google UX Certificate", value: "Distinction", description: "Completed with top evaluation across all 7 certification modules." }
    ],
    processPhases: [
      { number: "01", phase: "Empathize", summary: "I conducted foundational UX research through competitive analysis and interview-based insights to understand how users discover exhibitions and plan museum visits. Findings showed visitors need clear scheduling, availability, and practical info before booking." },
      { number: "02", phase: "Define", summary: "I synthesized research into personas, problem statements, and a user journey map that clarified key user pain points. Defined the design challenge as creating a simple, unified experience without unnecessary steps." },
      { number: "03", phase: "Ideate", summary: "Explored multiple design directions through sketching and the Crazy Eights technique, focusing on core screens of the end-to-end journey. Selected and refined concepts that best supported intuitive navigation and readable content." },
      { number: "04", phase: "Prototype", summary: "Created digital wireframes and a high-fidelity prototype in Figma. Built a coherent visual language and complete user flow from discovery to ticket access." },
      { number: "05", phase: "Test & Iterate", summary: "Tested prototype through moderated usability sessions to identify friction points. Iterations improved clarity in the booking flow and strengthened accessibility." }
    ],
    researchData: {
      competitiveAnalysis: {
        image: "/assets/Competitive%20analysis-BjW1Ysn1.svg",
        summary: "Audited key competitor apps (MoMA, Louvre, Eventbrite) to evaluate exhibition discovery, checkout speed, and digital ticketing."
      },
      personas: [
        { title: "Persona 1 — Culture Enthusiast", image: "/assets/Persona1.pptx-B7yV1B8R.svg", summary: "Needs detailed exhibition context and multisensory tag information." },
        { title: "Persona 2 — Busy Family Planner", image: "/assets/Persona2.pptx-BbnvlDg2.svg", summary: "Needs rapid single-screen checkout with clear group ticket selectors." }
      ],
      statements: [
        { title: "Persona 1 Problem Statement", image: "/assets/Statements%20Persona%201.pptx-B-aJ-5x1.svg" },
        { title: "Persona 2 Problem Statement", image: "/assets/Statements%20Persona%202.pptx-C4ZBcFGP.svg" }
      ],
      userFlows: { title: "Google UX Style User Flow", image: "/assets/UserFlowGoogleStyle.pptx-BBQwMgQV.svg" },
      userJourney: { title: "Visitor Journey Map", image: "/assets/UserJourney.pptx-DX6W4Rh0.svg" },
      storyboards: { title: "User Experience Storyboards", image: "/assets/StoryBoards.pptx-BHE4AUAw.svg" }
    },
    wireframes: {
      title: "Five Sketches & Digital Lo-Fi Wireframes",
      desc: "Rapid exploration of layout alternatives before committing to digital high-fidelity.",
      images: [
        { title: "Five Sketches Technique — Homepage Layouts", src: "/assets/_SKetchesHomepage-BFjwLS-y.png" },
        { title: "Digital Lo-Fi Wireframes — User Flow", src: "/assets/Digital%20Lo-Fi%20Wireframes%20-%20User%20Flow-B9rTzF30.svg" }
      ]
    },
    designSystem: {
      colorsImage: "/assets/Colors-SegcFi_W.svg",
      typographyImage: "/assets/Typography-LTeKOljs.svg"
    },
    highFiScreens: [
      { label: "Onboarding Splash", desc: "Login / Sign Up with email, Facebook, or Google.", img: "/assets/xbit-screen-1-onboarding.png" },
      { label: "Home Feed", desc: "Current & upcoming exhibitions with pill category filters.", img: "/assets/xbit-screen-2-home.png" },
      { label: "Exhibition Detail", desc: "Hero media, description, and multisensory tags (VR, AR).", img: "/assets/xbit-screen-3-detail.png" },
      { label: "Unified Checkout", desc: "Date picker, time slot, and ticket quantity on one screen.", img: "/assets/xbit-screen-4-checkout.png" },
      { label: "Payment Confirmation", desc: "Summary with Apple Pay, Google Pay, and credit card.", img: "/assets/xbit-screen-5-payment.png" },
      { label: "Digital Ticket Pass", desc: "QR code ticket stored under Active / Expired tabs.", img: "/assets/xbit-screen-6-ticket.png" }
    ],
    keyDecisions: [
      { title: "Persistent Bottom Tab Bar", body: "A 3-tab bar (Tickets, Home, Profile) keeps core actions accessible within 2 taps from any view." },
      { title: "Unified Checkout Screen", body: "Combined date, time, and ticket selection onto a single screen to eliminate drop-off." },
      { title: "Warm Amber Brand Identity", body: "#C27803 warm amber was selected to evoke gallery lighting and cultural prestige." },
      { title: "QR Code Wallet Integration", body: "Digital tickets feature instant QR code expansion for rapid scanning at museum turnstiles." }
    ],
    takeaways: [
      "Early low-fidelity paper wireframing surfaced structural navigation issues that saved weeks of high-fidelity revisions.",
      "Building a tokenized Figma component library upfront made post-usability testing iterations instantaneous."
    ],
    figmaUrl: "https://www.figma.com/design/gqi3OCVLLXWmRoJ9tvHS7m/Museum-App"
  },
  {
    id: "ipupisiciliani",
    index: "03",
    title: "I Pupi Siciliani Wine E-Commerce",
    subtitle: "Full UX/UI & Custom WooCommerce Build in Odense, Denmark",
    shortDescription: "End-to-end UX/UI, studio product photography, and custom WooCommerce development for a Sicilian wine retail brand in Odense, Denmark (+187% YoY profit).",
    badge: "Live E-Commerce Retail Build",
    image: "/assets/case4.svg",
    tags: ["E-Commerce UX", "Product Photography", "WooCommerce", "Brand Strategy"],
    link: "/ipupisiciliani",
    role: "Lead UX/UI Designer & E-Commerce Developer",
    projectType: "Full Webshop & Brand Identity",
    tools: ["Figma", "WordPress", "WooCommerce", "Custom CSS", "Studio Photography"],
    duration: "12 Months",
    problem: "I Pupi Siciliani, an artisanal Sicilian wine importer in Odense, Denmark, lacked a digital presence capable of translating their physical store experience online. Customers found wine selection intimidating, product details sparse, and checkout cumbersome on mobile devices.",
    solution: "Orchestrated an end-to-end digital transformation: directed high-resolution studio photography of the entire inventory, simplified information architecture with sensory taste filters (flavor profile, region, food pairing), and built a lightning-fast custom WooCommerce platform.",
    metrics: [
      { label: "YoY Net Profit", value: "+187%", description: "Net profit increase achieved within 12 months post-launch." },
      { label: "Gross Profit Growth", value: "+31%", description: "Gross profit expansion across digital and omnichannel retail." },
      { label: "Nomination", value: "Byens Bedste", description: "Recognized as one of Odense's premier retail & food experiences." }
    ],
    processPhases: [
      { number: "01", phase: "Brand Heritage & IA Mapping", summary: "Analyzed product catalog and customer shopping habits. Categorized 40+ specialty wines by flavor profile, region, and culinary pairings." },
      { number: "02", phase: "Studio Photography", summary: "Shot and edited studio product photography for every bottle, ensuring high visual consistency across grid layouts." },
      { number: "03", phase: "High-Fidelity UI & Layout", summary: "Designed modern editorial layouts in Figma reflecting Italian craftsmanship paired with Nordic minimal spacing." },
      { number: "04", phase: "Custom WooCommerce Engineering", summary: "Developed responsive custom WooCommerce theme, optimized checkout funnel, and integrated local Danish payment gateways." }
    ],
    wireframes: {
      title: "Storefront & Product Detail Page",
      desc: "High-impact visual storytelling paired with clear conversion paths.",
      images: [
        { title: "Landing Page & Hero Visuals", src: "/assets/landing.png" },
        { title: "Product Grid & Filtering", src: "/assets/shop.png" },
        { title: "Product Detail View", src: "/assets/product-page-real.png" }
      ]
    },
    keyDecisions: [
      { title: "Sensory Flavor Pairing Filters", body: "Allowed customers to filter wines by taste profiles (Full-bodied, Crisp, Fruity) and dinner pairings." },
      { title: "Single-Page Frictionless Checkout", body: "Reduced checkout form fields by 40% and enabled MobilePay for instant Danish mobile purchasing." },
      { title: "High-Resolution Product Imagery", body: "Studio lighting and high-contrast bottle photography elevated perceived brand value." }
    ],
    takeaways: [
      "Combining high-craft visual storytelling with conversion-focused UX directly impacts business bottom-line growth.",
      "Omnichannel harmony between physical store culture and digital webshop builds long-term customer brand loyalty."
    ]
  },
  {
    id: "sydbank",
    index: "04",
    title: "Sydbank Enterprise Data Catalog",
    subtitle: "Empirical UX Research & UI Redesign for Denmark's 4th Largest Bank",
    shortDescription: "Empirical 24-person research survey, user flow analysis, and enterprise UI redesign reducing data search task times by 66% for Sydbank's analytics teams.",
    badge: "Enterprise Fintech UX",
    image: "/assets/herosydbank-sharp.jpg",
    tags: ["Enterprise UX", "Fintech", "Data Catalog", "Empirical Research"],
    link: "/sydbank",
    role: "Lead UX Researcher & Product Designer",
    projectType: "Enterprise Internal Platform",
    tools: ["Alation Data Catalog", "Figma", "Empirical Surveys", "User Testing"],
    duration: "5 Months",
    problem: "Data engineers, risk analysts, and business intelligence leads at Sydbank (Denmark's 4th largest bank) struggled to find authoritative data tables within their enterprise Alation data catalog. Search workflows were cluttered, metadata was obscure, and task completion times were dangerously slow.",
    solution: "Executed an empirical study with 24 bank data specialists to identify cognitive bottlenecks. Redesigned the search interface, simplified metadata cards, introduced global keyboard shortcuts (`/`), and created clear data lineage visualization tabs.",
    metrics: [
      { label: "Search Task Time", value: "-66%", description: "Average task completion time reduced from 4.5 minutes to 1.5 minutes." },
      { label: "Empirical Cohort", value: "24 Pros", description: "In-depth research study with Sydbank data analysts & engineers." },
      { label: "Metadata Clarity", value: "+84%", description: "Increase in reported confidence regarding data source accuracy." }
    ],
    processPhases: [
      { number: "01", phase: "Empirical Research Survey", summary: "Distributed structured quantitative & qualitative surveys to 24 Sydbank data professionals to quantify search frequency, pain points, and failed query rates." },
      { number: "02", phase: "Information Architecture Overhaul", summary: "Reorganized complex table schemas, column descriptions, and owner tags into intuitive tabbed cards." },
      { number: "03", phase: "Wireframing & Prototype Design", summary: "Designed high-density enterprise dashboard layouts in Figma, prioritizing screen real estate and keyboard navigation." },
      { number: "04", phase: "Validation & Benchmark Testing", summary: "Tested new prototypes against legacy Alation UI in timed task scenarios, verifying a 66% drop in search latency." }
    ],
    researchData: {
      competitiveAnalysis: {
        image: "/assets/sydbank-cover-graphic.png",
        summary: "Audited Sydbank's legacy Alation data catalog search architecture against enterprise data management standards, discovering a 4.5-minute average query latency across 24 bank data specialists."
      }
    },
    wireframes: {
      title: "Interface Transformations: Before vs After",
      desc: "Replacing cluttered legacy lists with structured, high-density data cards.",
      images: [
        { title: "Legacy Search View (Before)", src: "/assets/Homebefore.jpg" },
        { title: "Redesigned Enterprise Search View (After)", src: "/assets/Homeafter.png" },
        { title: "Legacy IA Structure (Before)", src: "/assets/IA-before.jpg" },
        { title: "Redesigned IA Structure (After)", src: "/assets/IA-after.png" }
      ]
    },
    designSystem: {
      colorsImage: "/assets/sydbank-cover-header.png",
      componentsImage: "/assets/sydbank-logo-display.png"
    },
    highFiScreens: [
      { label: "Enterprise Spotlight Search (Cmd+K)", desc: "Global command palette for instant table and schema discovery across Sydbank's enterprise data warehouse.", img: "/assets/Homeafter.png" },
      { label: "Structured Information Architecture", desc: "Reorganized data schemas, column descriptions, and owner tags into intuitive tabbed cards.", img: "/assets/IA-after.png" },
      { label: "Legacy Search View (Before)", desc: "Cluttered list view requiring deep navigation and manual filter configuration.", img: "/assets/Homebefore.jpg" },
      { label: "Legacy IA Structure (Before)", desc: "Fragmented metadata structure leading to a 4.5-minute average query time.", img: "/assets/IA-before.jpg" }
    ],
    keyDecisions: [
      { title: "Instant Command Search Bar (`Cmd+K`)", body: "Implemented global spotlight search for instant table name and schema lookups." },
      { title: "Verified Data Badging", body: "Added visual trust indicators (Certified, Deprecated, Experimental) to eliminate risk analyst confusion." },
      { title: "Compact High-Density Data Grids", body: "Maximized visible rows per viewport for multi-monitor financial work environments." },
      { title: "Empirical Survey Baseline", body: "Conducted timed task audits with 24 Sydbank data engineers to establish quantitative baseline benchmarks." }
    ],
    takeaways: [
      "Enterprise UX is about efficiency, density, and precision — reducing cognitive friction directly translates to operational cost savings.",
      "Empirical benchmark data is essential when advocating for UX overhauls in risk-averse banking environments."
    ]
  },
  {
    id: "tutora",
    index: "05",
    title: "Tutora EdTech Platform",
    subtitle: "End-to-End UX/UI & Scalable Figma Design System",
    shortDescription: "A complete end-to-end UX/UI design for a tutoring platform — from user research and competitive analysis to a scalable design system and interactive Figma prototypes. Completed for Google UX Professional Certificate on Coursera.",
    badge: "EdTech & Design Systems",
    image: "/assets/Mockups-BaHciYgq.png",
    tags: ["UX Research", "Figma Design System", "EdTech", "60-30-10 Rule"],
    link: "/tutora",
    role: "UX/UI Designer & Design System Lead",
    projectType: "Web & Mobile App Platform",
    tools: ["Figma", "Miro", "Adobe Illustrator", "Nano Banana Pro AI"],
    duration: "8 Months",
    problem: "Parents struggle to find qualified tutors that match their children's learning needs. Existing platforms are fragmented, difficult to navigate, and lack transparency about tutor qualifications. Tutors face friction managing profiles, availability, and bookings across platforms.",
    solution: "Tutora is a unified platform that makes it easy for parents to discover, evaluate, and book qualified tutors. Advanced search and filtering help parents find the right match, while an integrated calendar and messaging system simplify scheduling and communication.",
    metrics: [
      { label: "Design Tokens", value: "120+", description: "Reusable color, typography, elevation, and component tokens." },
      { label: "Core Screens", value: "6 Core", description: "Dual-interface design for both Parent and Tutor user roles." },
      { label: "Google UX Cert", value: "Completed", description: "Top rating across all 7 Google UX specialization modules." }
    ],
    processPhases: [
      { number: "01", phase: "User Research", summary: "Conducted user research to identify common pain points target users encounter when searching for tutors online. Identified primary user groups: parents seeking tutors and tutors offering services. Developed two personas representing each group with their unique needs and frustrations." },
      { number: "02", phase: "Define", summary: "Created personas (Parent, Tutor), user stories, and user flows to understand user motivations and frustrations. Defined problem statements for each persona and a goal statement for the product. Conducted competitive analysis of platforms like Preply, Wyzant, and Superprof." },
      { number: "03", phase: "Ideate", summary: "Mapped out user flows for parents and tutors on Miro, covering the complete journey from registration to session booking. Created paper wireframes to visualize layout structures and experiment with different navigation patterns and solutions." },
      { number: "04", phase: "Design System", summary: "Developed a scalable Design System in Figma, defining core visual elements, typography hierarchy, color palette (using 60-30-10 rule), icons, grids, and reusable components for consistency and efficiency across all screens." },
      { number: "05", phase: "High-Fidelity Prototypes", summary: "Created digital mockups and interactive prototypes for onboarding, booking flows, search, calendar, and settings screens. Incorporated AI-generated 3D objects refined in Adobe Illustrator to enhance visual appeal and match design aesthetics." },
      { number: "06", phase: "Testing & Iteration", summary: "Integrated accessibility throughout the design process and conducted iterative testing with users to refine the experience. Refined the interface based on feedback with a strong focus on accessibility (WCAG guidelines) and usability." }
    ],
    researchData: {
      userGroups: [
        { title: "User Groups — Parents and Tutors", desc: "Parents seeking trustworthy tutors vs Tutors managing schedule & payouts.", image: "/assets/User-Groups-FADb7ein.png" }
      ],
      competitiveAnalysis: {
        image: "/assets/Competitive%20audit-DB4sZ-7V.png",
        summary: "Audited Preply, Wyzant, and Superprof across 14 key UX criteria including search friction and profile transparency."
      },
      personas: [
        { title: "Parent Persona (Sarah)", image: "/assets/Persona%201-DMeq_qkP.png", summary: "Focuses on safety, qualifications, transparent reviews, and easy calendar booking." },
        { title: "Tutor Persona (David)", image: "/assets/Persona%202-A_ocuvE-.png", summary: "Focuses on hourly rates, schedule flexibility, and direct client messaging." }
      ],
      statements: [
        { title: "Parent Problem Statement", image: "/assets/ProblemStatement1-BfZ0d99J.png" },
        { title: "Tutor Problem Statement", image: "/assets/ProblemStatement2-BpTv_zFN.png" }
      ],
      goalStatement: {
        title: "Product Goal Statement",
        image: "/assets/Goal%20Statement-CqwXkXlK.png"
      },
      userFlows: { title: "Complete Parent & Tutor User Flows", image: "/assets/User%20flows-pVGUkGfo.svg" }
    },
    wireframes: {
      title: "From Sketch to Structure — Paper Wireframes",
      desc: "Low-fidelity exploration of dual-user layout structures and navigation patterns before committing to digital UI.",
      images: [
        { title: "Paper Wireframes & Layout Concepts", src: "/assets/Paper%20Wireframes-BcWGzaTU.jpeg" }
      ]
    },
    designSystem: {
      colorsImage: "/assets/Colors-CnbriZwi.svg",
      typographyImage: "/assets/Desktop%20Typography-DFjtOaFa.svg",
      iconsGridsImage: "/assets/Icons-Grids-CroLQv6u.png",
      componentsImage: "/assets/Components-DrrpsjgC.png",
      aiImage: "/assets/AI-image-Creation-BxO3TxUt.png",
      aiDesc: "To enhance the visual appeal of the interface, Nano Banana Pro AI was used to generate 3D educational objects aligned with the app aesthetic. These assets were then refined in Adobe Illustrator to ensure they matched the overall design system."
    },
    highFiScreens: [
      { label: "Onboarding Splash", desc: "Clear and readable type system to establish hierarchy and improve content accessibility." },
      { label: "Search Tutors", desc: "Search functionality with filters for subject, availability, and price." },
      { label: "Tutor Profile", desc: "Detailed tutor information, qualifications, reviews, and availability." },
      { label: "Booking Flow", desc: "Intuitive calendar and time-slot selection for booking a session." },
      { label: "Parent Dashboard", desc: "Manage bookings, communication, and view child's progress." },
      { label: "Tutor Dashboard", desc: "Manage profile, availability, bookings, and communication." }
    ],
    keyDecisions: [
      { title: "Dual-user interface", body: "Separate interfaces for parents and tutors, each optimized for their specific workflow and needs — parents focus on discovery and booking, tutors on availability and management." },
      { title: "Smart search & filters", body: "Advanced filtering by subject, availability, price, and tutor ratings reduces cognitive load and helps parents find the right tutor quickly." },
      { title: "Integrated calendar", body: "Built-in calendar system simplifies the booking process and eliminates the need to coordinate availability across platforms." },
      { title: "Bright blue identity (#4A90E2)", body: "#4A90E2 conveys trust and accessibility — critical for a platform where parents entrust educators with their children's learning." },
      { title: "Progress tracking", body: "Parents can view session history and progress notes, creating transparency and building confidence in the tutoring relationship." },
      { title: "Accessibility first", body: "Consistent focus on WCAG guidelines, readable typography, clear color contrast, and intuitive navigation ensure the platform is usable for everyone." }
    ],
    takeaways: [
      "User research is essential for uncovering real needs and challenging initial assumptions. Direct parent and tutor feedback revealed pain points we hadn't anticipated.",
      "Iterative design and usability testing significantly improve the overall user experience. Early wireframe testing caught navigation issues before high-fidelity design.",
      "A well-defined design system supports both consistency and scalability. Establishing tokens and components upfront made iterating on screens fast and efficient.",
      "Accessibility should be considered from the earliest stages of the design process. Designing for accessibility from the start enriched the experience for everyone.",
      "Moving from low-fidelity to high-fidelity designs helps refine ideas efficiently. The progression from paper to digital prototypes revealed what really worked."
    ],
    figmaUrl: "https://www.figma.com/design/gqi3OCVLLXWmRoJ9tvHS7m/Tutora-App"
  }
];
