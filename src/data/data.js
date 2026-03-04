import { Award, BarChart3, Code2, Github, Handshake, Headphones, Instagram, Layers, Linkedin, Map, Megaphone, Rocket, Search, Shield, ShieldCheck, TrendingUp, Twitter, Users } from "lucide-react";

 export const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  export const highlights = [
    "Technology Development",
    "Business Strategy",
    "Branding & Marketing",
    "Revenue Growth Consulting"
  ];

   export const stats = [
    { label: "Revenue Growth", value: "300%", icon: TrendingUp },
    { label: "Active Clients", value: "150+", icon: Users },
    { label: "Success Rate", value: "98%", icon: Award },
    { label: "Secure Systems", value: "100%", icon: Shield },
  ];

  export const serviceCategories = [
  {
    title: "IT & Development",
    icon: Code2,
    color: "from-blue-500/20 to-mtech-indigo/20",
    items: [
      "Mobile App Development",
      "Web Application Development",
      "SaaS Platforms",
      "E-Commerce Solutions",
      "CRM & ERP Systems",
      "UI/UX Design"
    ],
    description: "We build scalable and secure digital products tailored to business needs."
  },
  {
    title: "Business Development",
    icon: TrendingUp,
    color: "from-mtech-orange/20 to-amber-500/20",
    items: [
      "Business Model Development",
      "Startup Consulting",
      "Investor Pitch Decks",
      "Market Research",
      "Revenue Growth Strategy"
    ],
    description: "We design business frameworks that drive sustainable profitability."
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    color: "from-purple-500/20 to-pink-500/20",
    items: [
      "SEO & SEM",
      "Google & Meta Ads",
      "Social Media Marketing",
      "Branding & Identity",
      "Lead Generation Campaigns"
    ],
    description: "We focus on ROI-driven marketing strategies."
  }
];

export const steps = [
  {
    title: "Discovery",
    description: "Understanding business goals and market position through deep-dive analysis.",
    icon: Search,
    color: "from-blue-500/20 to-mtech-indigo/20"
  },
  {
    title: "Strategy",
    description: "Developing technical and business roadmaps for sustainable scaling.",
    icon: Map,
    color: "from-purple-500/20 to-mtech-indigo/20"
  },
  {
    title: "Design & Development",
    description: "Crafting intuitive UI/UX followed by robust, military-grade engineering.",
    icon: Code2,
    color: "from-mtech-orange/20 to-mtech-indigo/20"
  },
  {
    title: "Launch",
    description: "Precision deployment and execution of go-to-market strategies.",
    icon: Rocket,
    color: "from-amber-500/20 to-mtech-orange/20"
  },
  {
    title: "Scale",
    description: "Continuous optimization and marketing expansion for market leadership.",
    icon: TrendingUp,
    color: "from-green-500/20 to-mtech-indigo/20"
  }
];

export const projects = [
  {
    title: "On-Demand Service Platform",
    category: "Mobile App Development",
    image: "https://images.unsplash.com/photo-1760404699908-6b9b8f11f424?auto=format&fit=crop&q=80&w=1080",
    objective: "To create a seamless, location-aware service marketplace.",
    tech: "React Native, Node.js, AWS, Google Maps API",
    results: "30k+ active users within 6 months of launch.",
    className: "lg:col-span-2 aspect-[16/9]"
  },
  {
    title: "Multi-Vendor E-Commerce",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1651129525259-a283dc1a66a6?auto=format&fit=crop&q=80&w=1080",
    objective: "Scale a local market into a nationwide multi-vendor ecosystem.",
    tech: "Next.js, Tailwind, PostgreSQL, Stripe",
    results: "Managed 500+ vendors with 200% revenue increase.",
    className: "lg:col-span-1 aspect-[4/5]"
  },
  {
    title: "SaaS Business Dashboard",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1702479743967-3dcccd4a671d?auto=format&fit=crop&q=80&w=1080",
    objective: "Unified analytics and project management for enterprise.",
    tech: "React, D3.js, Firebase, TypeScript",
    results: "Reduced operational overhead by 40%.",
    className: "lg:col-span-1 aspect-[1/1]"
  },
  {
    title: "Corporate Branding Project",
    category: "Branding & Identity",
    image: "https://images.unsplash.com/photo-1760037028636-6f42428aeeee?auto=format&fit=crop&q=80&w=1080",
    objective: "Rebrand a legacy firm for a digital-first audience.",
    tech: "Figma, Adobe Creative Suite, Brand Strategy",
    results: "Refreshed identity led to 50% higher brand engagement.",
    className: "lg:col-span-2 aspect-[21/9]"
  }
];

export const features = [
  { name: "Strategy + Tech", icon: ShieldCheck, description: "Deep integration of business strategy with high-performance technology." },
  { name: "Result Oriented", icon: Rocket, description: "Every line of code and marketing campaign is focused on measurable growth." },
  { name: "Transparent Reporting", icon: BarChart3, description: "Real-time visibility into performance metrics and project progress." },
  { name: "Dedicated Support", icon: Headphones, description: "A specialized vanguard team supporting your business scaling 24/7." },
  { name: "Scalable Architecture", icon: Layers, description: "Systems built to handle massive traffic and data growth from day one." },
  { name: "Growth Partnership", icon: Handshake, description: "We are more than an agency; we are your long-term technical co-pilots." }
];

export const reviews = [
  {
    text: "MTechLab transformed our business idea into a scalable digital product. Their technical precision and growth mindset are truly unique in the agency space.",
    author: "Alexander Vance",
    role: "CEO, Vance Financial",
    logo: "VANCE"
  },
  {
    text: "Professional execution with strong marketing strategy support. They don't just build apps; they build revenue-generating ecosystems.",
    author: "Elena Rossi",
    role: "CTO, LuxCore Systems",
    logo: "LUXCORE"
  },
  {
    text: "The level of engineering performance is unmatched. Our system response times dropped by 60% while the visual prestige reached new heights.",
    author: "Marcus Thorne",
    role: "Founder, Thorne Aviation",
    logo: "THORNE"
  }
];

export const SocialMediaIcons = [
  {
    title: "Twitter",
    icon: Twitter,
    url:"https://twitter.com/mtechLab"
  },
    {
    title: "LinkedIn",
    icon: Linkedin,
    url:"https://www.linkedin.com/in/mtechLab"
  },
  {
    title: "Github",
    icon: Github,
    url:"https://github.com/mtechLab"
  },
  {
    title: "Instagram",
    icon: Instagram,
    url:"https://www.instagram.com/mtechLab"
  },
]
