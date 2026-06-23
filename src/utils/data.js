import { 
  FaReact, 
  FaJs, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaDatabase, 
  FaServer, 
  FaLaptopCode, 
  FaChartBar, 
  FaBookReader,
  FaChartArea,
  FaLock
} from 'react-icons/fa';
import { 
  SiFastapi, 
  SiPostgresql, 
  SiFirebase, 
  SiSanity, 
  SiCloudinary, 
  SiVercel, 
  SiPandas, 
  SiNumpy, 
  SiPostman,
  SiMysql
} from 'react-icons/si';

export const personalInfo = {
  name: "Hariharan Sivakumar",
  role: "Full Stack Web Developer",
  tagline: "Building scalable, responsive, and high-performance web applications with modern backend architectures.",
  email: "hariharansivakumar.offl@gmail.com",
  phone: "+91 9025618366",
  location: "Erode, Tamil Nadu",
  linkedin: "https://www.linkedin.com/in/hariharan-sivakumar003",
  github: "https://github.com/hariharansivakumar-ai-ml",
  portfolio: "https://hariharan-sivakumar-portfolio.vercel.app",
  resumeLink: "/Hariharan_Sivakumar_Resume.docx",
  summary: "Full Stack Web Developer with hands-on experience building scalable, responsive, and high-performance web applications using React.js, JavaScript, Python, FastAPI, Firebase, PostgreSQL, and REST APIs. Proven ability to deliver business-focused web solutions across education, healthcare, and real estate domains with expertise in CMS integration, cloud storage, SEO optimization, and website migrations."
};

export const techSkills = [
  // Languages & Frameworks
  { name: "React.js", category: "Languages & Frameworks", icon: FaReact, color: "text-accent-red", level: 90, status: "Expert" },
  { name: "JavaScript", category: "Languages & Frameworks", icon: FaJs, color: "text-white", level: 88, status: "Expert" },
  { name: "Python", category: "Languages & Frameworks", icon: FaPython, color: "text-accent-rose", level: 85, status: "Advanced" },
  { name: "FastAPI", category: "Languages & Frameworks", icon: SiFastapi, color: "text-white", level: 82, status: "Advanced" },
  { name: "HTML", category: "Languages & Frameworks", icon: FaHtml5, color: "text-accent-orange", level: 95, status: "Expert" },
  { name: "CSS", category: "Languages & Frameworks", icon: FaCss3Alt, color: "text-accent-red", level: 90, status: "Expert" },

  // Backend & APIs
  { name: "REST API Development", category: "Backend & APIs", icon: FaServer, color: "text-white", level: 88, status: "Advanced" },
  { name: "API Integration", category: "Backend & APIs", icon: FaLaptopCode, color: "text-accent-rose", level: 85, status: "Advanced" },
  { name: "Authentication Systems", category: "Backend & APIs", icon: FaLock, color: "text-accent-red", level: 80, status: "Advanced" },

  // Databases & CMS
  { name: "PostgreSQL", category: "Databases & CMS", icon: SiPostgresql, color: "text-white", level: 82, status: "Advanced" },
  { name: "Firebase", category: "Databases & CMS", icon: SiFirebase, color: "text-accent-orange", level: 85, status: "Advanced" },
  { name: "Sanity CMS", category: "Databases & CMS", icon: SiSanity, color: "text-accent-red", level: 88, status: "Expert" },
  { name: "MySQL", category: "Databases & CMS", icon: SiMysql, color: "text-white", level: 80, status: "Advanced" },

  // Cloud & Tools
  { name: "Cloudinary", category: "Cloud & Tools", icon: SiCloudinary, color: "text-accent-rose", level: 85, status: "Advanced" },
  { name: "Vercel", category: "Cloud & Tools", icon: SiVercel, color: "text-white", level: 90, status: "Expert" },
  { name: "Git", category: "Cloud & Tools", icon: FaGitAlt, color: "text-accent-rose", level: 88, status: "Expert" },
  { name: "GitHub", category: "Cloud & Tools", icon: FaGithub, color: "text-white", level: 90, status: "Expert" },
  { name: "Postman", category: "Cloud & Tools", icon: SiPostman, color: "text-accent-red", level: 85, status: "Advanced" },

  // Data & Analytics
  { name: "Microsoft Power BI", category: "Data & Analytics", icon: FaChartBar, color: "text-accent-orange", level: 75, status: "Intermediate" },
  { name: "Pandas", category: "Data & Analytics", icon: SiPandas, color: "text-accent-red", level: 78, status: "Advanced" },
  { name: "NumPy", category: "Data & Analytics", icon: SiNumpy, color: "text-white", level: 75, status: "Intermediate" },
  { name: "Matplotlib", category: "Data & Analytics", icon: FaChartArea, color: "text-accent-rose", level: 72, status: "Intermediate" }
];

export const experience = [
  {
    role: "Web Developer",
    company: "Kanavu Startup Village",
    duration: "Dec 2025 – Present",
    responsibilities: [
      "Developed and maintained responsive web applications using React.js, JavaScript, Python, and FastAPI.",
      "Migrated WordPress-based websites to modern React applications, improving scalability and maintainability.",
      "Built dynamic blog and CMS systems using Sanity CMS; integrated Cloudinary for optimized media storage.",
      "Developed backend APIs, authentication workflows, and database integrations using Firebase and PostgreSQL.",
      "Implemented on-page SEO strategies to improve search visibility and website performance.",
      "Delivered customized web solutions across education, healthcare, real estate, and business sectors."
    ]
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    duration: "May 2025 – Present",
    responsibilities: [
      "Developing a School ERP System to streamline academic and administrative operations.",
      "Building responsive frontend with React.js and backend services with Python/FastAPI.",
      "Implementing authentication, role-based access control, and scalable PostgreSQL/Firebase database architecture."
    ]
  }
];

export const projects = [
  {
    title: "The Academy Of Excellence",
    tech: "React.js, Sanity CMS, Cloudinary",
    description: [
      "Developed a modern school website showcasing academic programs, facilities, achievements, events, and announcements.",
      "Integrated dynamic content management using Sanity CMS to allow teachers and admins to post updates easily.",
      "Configured Cloudinary for media storage, asset optimization, and responsive galleries."
    ],
    githubLink: "https://github.com/hariharansivakumar-ai-ml/academy-of-excellence",
    liveLink: "https://academy-of-excellence.vercel.app"
  },
  {
    title: "Ethique Hospital Website",
    tech: "React.js, Sanity CMS",
    description: [
      "Built a highly responsive healthcare website featuring hospital services, medical departments, and doctor profiles.",
      "Integrated an intuitive patient navigation flow and custom appointment queries.",
      "Managed website content dynamically utilizing Sanity CMS structure."
    ],
    githubLink: "https://github.com/hariharansivakumar-ai-ml/ethique-hospital",
    liveLink: "https://ethique-hospital.vercel.app"
  },
  {
    title: "HSquare Promoters Website",
    tech: "React.js, Sanity CMS",
    description: [
      "Created a modern real estate showcase website featuring property developments, layout plans, and investment options.",
      "Optimized site performance and user experience using responsive grid structures and fast-loading content panels.",
      "Implemented a CMS backend for real-time property listings and availability updates."
    ],
    githubLink: "https://github.com/hariharansivakumar-ai-ml/hsquare-promoters",
    liveLink: "https://hsquare-promoters.vercel.app"
  },
  {
    title: "Personal Portfolio Website",
    tech: "React.js, JavaScript, CSS3, Tailwind CSS",
    description: [
      "Designed and developed a responsive, premium portfolio site showcasing projects, competencies, and work timelines.",
      "Created dynamic cards, custom smooth scrolling, and scroll progress tracking.",
      "Deployed on Vercel with optimized assets and metadata for search engines."
    ],
    githubLink: "https://github.com/hariharansivakumar-ai-ml/hari-portfolio",
    liveLink: "https://hariharan-sivakumar-portfolio.vercel.app"
  }
];

export const education = [
  {
    degree: "Bachelor of Engineering (Mechanical Engineering)",
    institution: "Erode Sengunthar Engineering College",
    duration: "2022"
  }
];

export const certifications = [
  "AI Programmer Certification from TNSDC",
  "Python Programming Certification"
];

export const additionalExpertise = [
  "Full Stack Dev",
  "Responsive Design",
  "UI/UX",
  "SEO Optimization",
  "WordPress-to-React Migration"
];
