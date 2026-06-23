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
  FaBookReader 
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
  SiPostman
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
  resumeLink: "https://drive.google.com/file/d/1hI9fk8ScDXMNgP20_4zcGewIVxmNp2_h/view?usp=sharing",
  summary: "Full Stack Web Developer with hands-on experience in building scalable, responsive, and high-performance web applications using React.js, JavaScript, Python, FastAPI, Firebase, PostgreSQL, and REST APIs. Experienced in frontend and backend development, CMS integration, cloud storage solutions, website migrations, SEO optimization, and database management. Proven ability to deliver business-focused web solutions across education, healthcare, and real estate domains. Passionate about solving real-world problems through technology and continuously expanding technical expertise."
};

export const techSkills = [
  // Languages & Frameworks
  { name: "React.js", category: "Languages & Frameworks", icon: FaReact, color: "text-accent-red" },
  { name: "JavaScript (ES6+)", category: "Languages & Frameworks", icon: FaJs, color: "text-white" },
  { name: "Python", category: "Languages & Frameworks", icon: FaPython, color: "text-accent-rose" },
  { name: "FastAPI", category: "Languages & Frameworks", icon: SiFastapi, color: "text-white" },
  { name: "HTML5", category: "Languages & Frameworks", icon: FaHtml5, color: "text-accent-orange" },
  { name: "CSS3", category: "Languages & Frameworks", icon: FaCss3Alt, color: "text-accent-red" },

  // Backend & APIs
  { name: "REST APIs", category: "Backend & APIs", icon: FaServer, color: "text-white" },
  { name: "API Integration", category: "Backend & APIs", icon: FaLaptopCode, color: "text-accent-rose" },
  { name: "Auth Systems", category: "Backend & APIs", icon: FaDatabase, color: "text-accent-red" },

  // Databases & CMS
  { name: "PostgreSQL", category: "Databases & CMS", icon: SiPostgresql, color: "text-white" },
  { name: "Firebase", category: "Databases & CMS", icon: SiFirebase, color: "text-accent-orange" },
  { name: "Sanity CMS", category: "Databases & CMS", icon: SiSanity, color: "text-accent-red" },

  // Cloud & Deployment
  { name: "Cloudinary", category: "Cloud & Deployment", icon: SiCloudinary, color: "text-accent-rose" },
  { name: "Vercel", category: "Cloud & Deployment", icon: SiVercel, color: "text-white" },

  // Data Analytics
  { name: "Power BI", category: "Data Analytics", icon: FaChartBar, color: "text-accent-orange" },
  { name: "Pandas", category: "Data Analytics", icon: SiPandas, color: "text-accent-red" },
  { name: "NumPy", category: "Data Analytics", icon: SiNumpy, color: "text-white" },

  // Tools
  { name: "Git", category: "Tools", icon: FaGitAlt, color: "text-accent-rose" },
  { name: "GitHub", category: "Tools", icon: FaGithub, color: "text-white" },
  { name: "Postman", category: "Tools", icon: SiPostman, color: "text-accent-red" }
];

export const experience = [
  {
    role: "Web Developer",
    company: "Kanavu Startup Village",
    duration: "Dec 2025 – Present",
    responsibilities: [
      "Developed and maintained responsive web applications using React.js, JavaScript, Python, and FastAPI.",
      "Migrated WordPress-based websites to modern React applications, improving scalability and maintainability.",
      "Built dynamic blog and content management systems using Sanity CMS.",
      "Integrated Cloudinary for optimized media storage and gallery management.",
      "Developed backend APIs, authentication workflows, and database integrations using Firebase and PostgreSQL.",
      "Implemented on-page SEO strategies to improve search visibility and website performance.",
      "Collaborated with clients to gather requirements and deliver customized web solutions.",
      "Resolved application bugs, optimized performance, and enhanced user experience across multiple projects.",
      "Contributed to projects across education, healthcare, real estate, technology, and business sectors."
    ]
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    duration: "Dec 2025 – Present",
    responsibilities: [
      "Developing a School ERP System to streamline academic and administrative operations.",
      "Building responsive frontend interfaces using React.js.",
      "Developing backend services and APIs using Python and FastAPI.",
      "Implementing authentication, role-based access control, and database management.",
      "Designing scalable architecture to support future feature expansion."
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
    duration: "2018 – 2022"
  }
];

export const certifications = [
  "AI Programmer Certification",
  "Python Programming Certification"
];

export const additionalExpertise = [
  "WordPress to React Migration",
  "REST API Integration",
  "Firebase Authentication",
  "PostgreSQL Database Management",
  "Sanity CMS Development",
  "Cloudinary Integration",
  "Responsive Web Development",
  "On-Page SEO Optimization",
  "Website Performance Optimization",
  "Deployment & Maintenance"
];
