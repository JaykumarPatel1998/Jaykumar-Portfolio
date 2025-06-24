import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, FileDownIcon } from "lucide-react";

export const DATA = {
  name: "Jay Patel",
  initials: "JP",
  url: "https://jaypateldev.tech",
  location: "Toronto, ON",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "I turn ideas in to products and services, creating elegant and robust software solutions that make a difference.",
  summary:
    `Hello! Bonjour! I’m a passionate software developer based in Toronto, ON 🇨🇦.
    At work, I blend code and creativity, transforming ideas into captivating digital products.
    I have 2 years experience with enterprise Java, React and Node Applications.`,
  avatarUrl: "/Me.jpeg",
  skills: [
    "React",
    "Go Lang",
    "Javascript",
    "Typescript",
    "Java",
    "Spring Boot",
    "Docker",
    "Microservices",
    "PostgreSQL",
    "Git"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/#projects", icon: CodeIcon, label: "Projects" },
    { href: "https://drive.google.com/file/d/1TBo_GvbVLbbkEke-LoqnnNtznyqHcm32/view?usp=sharing", icon: FileDownIcon, label: "Resume", target: "_blank" },
  ],
  contact: {
    email: "jaykumarpatel2710@gmail.com",
    tel: "+1 (416) 451-6572",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/JaykumarPatel1998",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jaykumarpatel1998/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:jaykumarpatel2710@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    // {
    //   company: "J&M Group",
    //   href: "http://www.jm-group.ca",
    //   location: "Toronto, ON",
    //   title: "Fullstack Developer",
    //   logoUrl: "/j&m.png",
    //   start: "Apr 2024",
    //   end: "Aug 2024",
    //   description:
    //     "Developed a comprehensive job portal platform, incorporating real-time features to enhance user experience and optimize job matching. Implemented efficient scheduling and notification systems to improve application rates and reduce hiring times. Led the deployment and management of the platform, ensuring scalability, reliability, and cost-effectiveness. Demonstrated strong problem-solving and technical skills through successful project delivery.",
    // },
    {
      company: "Java Developer",
      badges: [],
      href: "https://www.deloitte.com/",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "https://www.deloitte.com/content/dam/assets-shared/logos/svg/a-d/deloitte.svg",
      start: "Feb 2025",
      end: "present",
      description:
        "Enterprise Angular and Java application development for one of the top 3 banks in America.",
    },
    {
      company: "Associate Software Developer",
      badges: [],
      href: "https://www.tcs.com/",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/tcs.png",
      start: "Feb 2021",
      end: "Dec 2023",
      description:
        "Spearheaded the development of a widely used open-source projects, contributing over 5,000 lines to the Codebase that helped improve the learning experience for new developers in the community.",
    },
  ],
  education: [
    {
      school: "Humber College",
      href: "https://humber.ca/",
      degree: "Information Technology Solutions",
      logoUrl: "/humber.png",
      start: "Jan 2023",
      end: "Aug 2024",
    },
    {
      school: "DJ Sanghvi College Of Engineering",
      href: "https://www.djsce.ac.in/",
      degree: "Bachelor's of Mechanical Engineering",
      logoUrl: "/djsce.png",
      start: "Jul 2016",
      end: "Oct 2020",
    }
  ],
  projects: [
    {
      title: "Manga Bloom",
      href: "https://github.com/JaykumarPatel1998/MangaBloom",
      dates: "October 2024 - Present",
      active: true,
      description:
        "MangaBloom is an innovative manga reading platform designed to enhance the digital reading experience for manga enthusiasts. Built with modern web technologies, it offers an ad-free environment where readers can enjoy their favorite manga without interruptions. The application streamlines manga consumption by providing fast access to a vast library of content while maintaining high performance and reliability. Through thoughtful architecture and efficient data management, MangaBloom delivers a clean, user-focused interface that prioritizes what matters most: the seamless enjoyment of manga content.",
      technologies: [
        "Go Lang",
        "PostgreSQL",
        "API Development",
        "Batch Processing",
      ],
      links: [
        {
          type: "Website",
          href: "https://manga-bloom.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/JaykumarPatel1998/MangaBloom",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/manga.jpg",
    },
    {
      title: "React Rooks",
      href: "https://chess-against-ai.vercel.app/",
      dates: "Jun - Jul 2024",
      active: true,
      description:
        "React Rooks is a web-based chess game that allows users to play against an AI (Stockfish). It features game history, on-demand gameplay, real-time game analysis, player statistics, and three difficulty levels.",
      technologies: [
        "Next.js",
        "Typescript",
        "WebSockets",
        "WASM",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chess-against-ai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/JaykumarPatel1998/ChessAgainstAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chess.png",
    },
    {
      title: "Ecommerce Java Asynchronous Backend",
      href: "https://github.com/JaykumarPatel1998/Ecommerce-Microservice",
      dates: "October 2024 - Present",
      active: true,
      description:
        "Developed a robust microservices-based e-commerce backend using Spring Boot, implementing a distributed system with Netflix Eureka for service discovery, Open Feign for REST communication, RabbitMQ for asynchronous order processing, and PostgreSQL as the primary database. The architecture ensures scalable, loosely coupled services with efficient communication and reliable data management.",
      technologies: [
        "Spring Boot",
        "Netflix Eureka",
        "Open Feign",
        "RabbitMQ",
        "PostgreSQL",
        "Microservices"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/JaykumarPatel1998/Ecommerce-Microservice",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    }
  ]
} as const;
