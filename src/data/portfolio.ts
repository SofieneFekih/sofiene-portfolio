export type ProjectCategory = "Full-Stack" | "Mobile" | "Web & CMS";

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  highlights: string[];
  stack: string[];
}

export interface ProjectItem {
  title: string;
  category: ProjectCategory;
  year: string;
  context: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Sofiene Ben Fekih",
    role: "Full-Stack & Mobile Software Engineer",
    location: "Tabulbah, Monastir, Tunisia",
    availability: "Open to Full-Time Roles & Freelance Engineering",
    avatar: {
      src: "/images/profile.jpg",
      alt: "Portrait of Sofiene Ben Fekih, Software Engineer",
    },
    summary:
      "Results-driven Software Engineer with a National Engineering Diploma in Computer Science and 2+ years of combined internship and freelance experience in full-stack development. Proficient in Flutter, Next.js, React, Python, PHP, and Laravel.",
    contactTokens: {
      emailB64: "U29maWVuZWZla2loMDdAZ21haWwuY29t",
      phoneB64: "KzIxNiA5NyAwOTkgNjM3",
    },
    metrics: [
      { value: "2+", label: "Years Experience" },
      { value: "25%", label: "Client Efficiency Gain" },
      { value: "15%", label: "App Load Reduction" },
      { value: "99.9%", label: "Production Uptime" },
    ],
    terminalConfig: {
      engineer: "Sofiene Ben Fekih",
      degree: "National Engineering Diploma (CS)",
      coreStack: ["Flutter", "Next.js", "React", "Python", "Laravel"],
      languages: ["Arabic (Native)", "English (Bilingual)", "French (Bilingual)"],
      status: "Ready to deploy",
    },
  },

  experience: [
    {
      role: "Freelance Mobile & Web Developer",
      company: "Self-Employed",
      period: "Nov 2022 – Present",
      type: "Freelance",
      highlights: [
        "Developed cross-platform mobile applications using Flutter and Python backends, improving client operational efficiency by ~25%.",
        "Engineered responsive web applications with Next.js, enhancing user engagement and site performance.",
        "Collaborated with 3+ clients to translate business requirements into scalable technical solutions and maintainable codebases.",
      ],
      stack: ["Flutter", "Python", "Next.js", "REST APIs"],
    },
    {
      role: "Mobile Development Intern",
      company: "Satoripop",
      period: "Jul 2023 – Oct 2023",
      type: "Internship",
      highlights: [
        "Contributed to the development of a production-level mobile application using Flutter, implementing 5+ key user-facing features.",
        "Optimized application performance, reducing load times by 15% through efficient state management and API integration.",
        "Participated in agile development cycles, including sprint planning and code reviews, to ensure timely milestone delivery.",
      ],
      stack: ["Flutter", "Dart", "State Management", "Agile"],
    },
    {
      role: "WordPress Developer",
      company: "Astrolab Agency",
      period: "Dec 2021 – Feb 2022",
      type: "Contract",
      highlights: [
        "Developed and deployed 3+ client websites (Meiz, RawiAlkotob, Laruche) using WordPress, custom themes, and plugins on schedule.",
        "Enhanced website functionality and user experience, driving a 20% increase in reported client customer engagement.",
        "Provided technical support and maintenance, ensuring 99.9% site uptime and rapid issue resolution.",
      ],
      stack: ["WordPress", "PHP", "CSS3", "SEO"],
    },
    {
      role: "Engineer Intern (Graduation Project)",
      company: "Polytech Monastir",
      period: "May 2021 – Oct 2021",
      type: "Engineering Internship",
      highlights: [
        "Architected and developed a full-stack mapping platform for project management using React, Laravel, and Bootstrap.",
        "Integrated geolocation APIs and database systems to visualize equipment and project data, streamlining internal workflows.",
        "Documented the entire development process and system architecture for future team reference and scalability.",
      ],
      stack: ["React", "Laravel", "Bootstrap", "Geolocation APIs"],
    },
    {
      role: "Engineer Intern",
      company: "Astrolab Agency",
      period: "Feb 2021 – May 2021",
      type: "Internship",
      highlights: [
        "Assisted in front-end development and content management for client websites using HTML5, CSS3, and PHP.",
        "Conducted website testing and debugging, identifying and resolving 50+ front-end compatibility and performance issues.",
        "Supported the senior development team in implementing responsive design principles across multiple projects.",
      ],
      stack: ["HTML5", "CSS3", "PHP", "Responsive Design"],
    },
  ] satisfies ExperienceItem[],

  projects: [
    {
      title: "Mapping Platform for Projects & Equipment",
      category: "Full-Stack",
      year: "2021",
      context: "End of Studies Engineering Project",
      description:
        "Centralized full-stack web application built with React, Laravel, and Bootstrap to visualize, filter, and manage project and equipment resources.",
      highlights: [
        "Interactive geolocation map overlays with multi-criteria data filtering",
        "Centralized resource tracking backed by a modular Laravel REST API",
      ],
      tech: ["React", "Laravel", "Bootstrap", "Laragon"],
    },
    {
      title: "Polytech Monastir Mobile Application",
      category: "Mobile",
      year: "2020",
      context: "Personal Professional Project",
      description:
        "Android application engineered to give 500+ students instant mobile access to academic schedules, study plans, and institutional contacts.",
      highlights: [
        "Intuitive UI improving accessibility to institutional resources for 500+ potential users",
        "Structured navigation for curricula and faculty contact directories",
      ],
      tech: ["Android Studio", "Mobile UI", "Java"],
    },
    {
      title: "RawiAlkotob Publishing Website",
      category: "Web & CMS",
      year: "2022",
      context: "Astrolab Agency Client Project",
      description:
        "Dedicated WordPress platform tailored for a publishing client with structured content architecture and clean reader UX.",
      highlights: [
        "Custom content organization for books and editorial catalogs",
        "Responsive layout optimized for cross-device reading",
      ],
      tech: ["WordPress", "PHP", "Custom Theme"],
    },
    {
      title: "Meiz Commercial Website",
      category: "Web & CMS",
      year: "2022",
      context: "Astrolab Agency Client Project",
      description:
        "Custom corporate WordPress website engineered for responsive presentation, cross-browser compatibility, and 99.9% uptime.",
      highlights: [
        "Bespoke theme styling and cross-browser QA",
        "Hardened configuration and ongoing maintenance",
      ],
      tech: ["WordPress", "HTML5", "CSS3", "PHP"],
    },
    {
      title: "Laruche Website",
      category: "Web & CMS",
      year: "2022",
      context: "Astrolab Agency Client Project",
      description:
        "Production WordPress deployment integrating tailored business plugins, technical SEO, and asset performance optimization.",
      highlights: [
        "SEO-first page structure and fast load performance",
        "Custom plugin integration matching client workflows",
      ],
      tech: ["WordPress", "PHP", "SEO"],
    },
    {
      title: "Home Appliance E-Commerce Web Application",
      category: "Full-Stack",
      year: "2019",
      context: "End of Year Project",
      description:
        "Functional e-commerce storefront for home appliance retail featuring product catalogs, customized theme UI, and checkout flows.",
      highlights: [
        "Customized storefront theme enhancing brand presentation and navigation",
        "Complete catalog browsing and checkout pipeline",
      ],
      tech: ["Shopify", "HTML5", "CSS3", "E-Commerce"],
    },
  ] satisfies ProjectItem[],

  skills: [
    {
      category: "Frontend & Mobile",
      items: ["Flutter", "Next.js", "React JS", "HTML5", "CSS3", "Bootstrap"],
    },
    {
      category: "Backend & CMS",
      items: ["Python", "PHP", "Laravel", "WordPress"],
    },
    {
      category: "Developer Tooling",
      items: ["Git", "Visual Studio Code", "Android Studio", "Visual Studio"],
    },
    {
      category: "Design & Media",
      items: ["Adobe Photoshop", "Adobe Illustrator", "Premiere Pro", "After Effects", "Sony Vegas Pro"],
    },
  ] satisfies SkillGroup[],

  education: [
    {
      degree: "National Engineering Diploma, Computer Science",
      institution: "Polytechnic Private High School of Monastir",
      period: "Sept 2018 – Jun 2021",
    },
    {
      degree: "National Diploma, Preparatory Cycle",
      institution: "Polytechnic Private High School of Monastir",
      period: "Sept 2016 – Jun 2018",
    },
    {
      degree: "Bachelor Diploma, Technical",
      institution: "Tabulbah High School",
      period: "Sept 2015 – Jun 2016",
    },
  ] satisfies EducationItem[],

  certifications: [
    {
      title: "Introduction to Programming using Python",
      issuer: "Microsoft Technology Associate",
      year: "2021",
    },
    {
      title: "Introduction to Programming using HTML & CSS",
      issuer: "Microsoft Technology Associate",
      year: "2021",
    },
    {
      title: "Introduction to IoT 2.0",
      issuer: "Cisco Networking Academy",
      year: "2021",
    },
    {
      title: "TOEIC: Test Of English for International Communication",
      issuer: "AMIDEAST Sousse",
      year: "2021",
    },
  ] satisfies CertificationItem[],

  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Bilingual" },
    { name: "French", level: "Bilingual" },
  ],
} as const;