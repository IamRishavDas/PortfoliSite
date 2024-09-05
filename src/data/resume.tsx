import { Icons } from "@/components/icons";
import { HomeIcon, MailIcon } from "lucide-react";

export const DATA = {
  name: "Rishav Das",
  initials: "DV",
  url: "",
  location: "WestBengal, India",
  locationLink: "",
  description:
    "B. Tech. in Computer Science & Engineering",
  summary:
    "My fullname is Rishav Das. I am currently in my final year of pursuing a Bachelor of Technology in Computer Science and Engineering, and I have developed a strong foundation in software development, particularly in Java, Spring Boot, and database management.",
  avatarUrl: "/rishav.jpg",
  skills: [
    "Java", "C", "Spring Boot", "Microservices", "Docker", "MySQL", "MongoDB", "JavaScript", "R", "Git", "GitHub"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "mailto:iamrishavdas@gmail.com", icon: MailIcon, label: "Email" },
  ],
  contact: {
    email: "iamrishavdas@gmail.com",
    tel: "+91 7044457380",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/IamRishavDas",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rishav-das-356893284",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "iamrishavdas@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Hooghly Engineering & Technology College",
      href: "https://www.hetc.ac.in/",
      badges: [],
      location: "",
      title: "B.Tech. in CSE",
      logoUrl: "/hetc.png",
      start: "2021 -",
      end: "2025",
      description:
        "Studying BTech Computer Science student with a average CGPA of 9.28 (up to the 6th semester). I have a strong foundation in key areas like Data Structures and Algorithms (DSA), Operating Systems, Computer Networks, and Database Management Systems, among other core subjects.",
    },
    {
      company: "Hooghly Collegiate High School",
      badges: [],
      href: "https://www.facebook.com/HooghlyCollegiateSchoolChinsurah/",
      location: "",
      title: "Higher Secondary | 92.8%",
      logoUrl: "/collegiate.jpg",
      start: "2021",
      end: "",
      description: "",
    },
    {
      company: "Bandel St. John's High School",
      href: "https://school.careers360.com/schools/bandel-st-johns-high-school-bandel-church-hooghly",
      badges: [],
      location: "",
      title: "Secondary | 90%",
      logoUrl: "/stjohns.jpg",
      start: "2019",
      end: "",
      description:
        "",
    }
  ],
  projects: [
    {
      title: "J-Editor",
      href: "https://github.com/IamRishavDas/J-Editor",
      dates: "June 2024",
      active: true,
      description:
        "A simple image editor using Java swing which can manipulate pixels and perform some basic transformation functions ",
      technologies: [
        "Java",
        "Java Swing",
        "Applet"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/IamRishavDas/J-Editor",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://github.com/IamRishavDas/Image-Editor/assets/140265067/20305b30-ae3b-471a-948b-41f7f1d0ad2e",
    },
    {
      title: "YouTube video Summarizer",
      href: "https://github.com/IamRishavDas/YouTube-Video-Summarizer",
      dates: "July 2024",
      active: true,
      description:
        "A chrome extension for summarizing youtube video and transcribe it.",
      technologies: [
        "JavaScript",
        "Html",
        "CSS"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/IamRishavDas/YouTube-Video-Summarizer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://github.com/user-attachments/assets/b99df6b1-10e9-40d3-b6ea-e50c418fd1dc",
    },
    {
      title: "Password Manager",
      href: "https://github.com/IamRishavDas/PasswordManager",
      dates: "Feb 2024",
      active: true,
      description:
        "Dynamic Password Manager Using Java Swing GUI and MySQL",
      technologies: [
        "Java",
        "Java Swing",
        "Applet",
        "My SQL"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/IamRishavDas/PasswordManager",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video: "https://github.com/IamRishavDas/PasswordManager/assets/140265067/8c83da77-0c98-4af2-ad46-80011384e9c8",
    },
    {
      title: "CLI Todo App",
      href: "https://github.com/IamRishavDas/CLI-Todo-App",
      dates: "April 2024",
      active: true,
      description:
        "A generic purpose Todo App with command Line interface",
      technologies: [
        "Java", 
        "Serialization",
        ".dat File"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/IamRishavDas/CLI-Todo-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://github.com/IamRishavDas/CLI-Todo-App/assets/140265067/dad12d21-8258-4065-b106-cf64e473f26f",
    },
  ],
} as const;
