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

export { services, technologies, projects }
