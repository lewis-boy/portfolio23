import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  git,
  carrent,
  jobit,
  tripguide,
  threejs,
  redis,
  openai,
  nextjs,
  prisma,
  sass,
  breadit,
  ecommerce,
  chatbot,
  cardenas,
  cardenas2,
  zotbins,
  ontrac,
  ontrac2,
} from "../assets"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blender User",
    icon: creator,
  },
]

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "Open AI",
    icon: openai,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
]

const experiences = [
  {
    title: "Cardenas Software Volunteer",
    company_name: "Cardenas",
    icon: cardenas,
    iconBg: "#383E56",
    date: "January 2022 - April 2022",
    points: [
      "Solved and refactored barcode reader code that erroneously duplicated items already in inventory from misprinted barcodes",
      "Lowered inventorys database entries from ~32,000 to ~29,000",
      "Migrated desktop functionality over to the handheld devices as well, such as price checking ",
      "Upgraded UI to make it easier to identify an scanned item as part of the weekly sale",
    ],
  },
  {
    title: "Software Club Member",
    company_name: "ZotBins",
    icon: zotbins,
    iconBg: "#E6DEDD",
    date: "March 2022 - May 2022",
    points: [
      "Pair-programmed PyTorch models to classify pictures into 3 trash categories for a 95% accuracy rate.",
      "Assembled and deployed this work onto a serverless codebase and AWS ECR deployment",
      "Implemented AWS CloudWatch logging for ~80% code coverage, especially for API lambda functions ",
    ],
  },
  {
    title: "Contracted Software Worker",
    company_name: "Ontrac",
    icon: ontrac2,
    iconBg: "#E6DEDD",
    date: "May 2022 - April 2023",
    points: [
      "Designed and developed a python-based route redistributor tool that lowered misrouted packages by an average of 43%",
      "Layered a data visualization layer on top of the redistributor tool for a quicker identification process.",
      "Spearheaded the refactoring of the legacy codebase(VBA) in both python and javascript, reducing code complexity by 35%",
      "Lowered departure times by an average of 70 minutes as a direct result of package-route assignment improvement",
    ],
  },
]

const projects = [
  {
    name: "Reddit Clone",
    description:
      "Reddit clone that implements all necessary features such as posting, creating subreddits, and having accounts. NextAuth is the backbone for authentication and authorization. Optimizations such as debouncing, lazy loading and virtualization were implemented.",
    tags: [
      {
        name: "Nextjs",
        color: "black-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "Redis",
        color: "pink-text-gradient",
      },
    ],
    image: breadit,
    source_code_link: "https://reddit-clone-pi-liart.vercel.app/",
  },
  {
    name: "ChatBot",
    description:
      "An openAI-based chatbot that outputs real-time responses. Implemented rate-limited api routes for security using upstash.",
    tags: [
      {
        name: "OpenAI",
        color: "black-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Redis",
        color: "pink-text-gradient",
      },
    ],
    image: chatbot,
    source_code_link: "https://github.com/lewis-boy/chatbot",
  },
  {
    name: "E-commerce site",
    description:
      "An MERN-based ecommerce site complete with all necessary functionality, such as buying products and a detailed product page. Uses Stripe API to handle payments. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity",
        color: "green-text-gradient",
      },
      {
        name: "Stripe",
        color: "black-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://ecommerce-cyen.vercel.app/",
  },
]

export { services, technologies, projects, experiences }
