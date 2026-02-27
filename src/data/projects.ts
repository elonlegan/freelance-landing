export interface Project {
  title: string;
  description: string;
  links: string[];
  github?: string;
  image: string;
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "Abordando",
    description: "Plataforma de viajes: admin y sitio cliente. Next.js, SSR, formularios y roles.",
    links: [
      "https://staging.abordando.com.co/",
      "https://admin.staging.abordando.com.co/",
    ],
    image: "/projects/abordando.webp",
    tags: ["Next", "React", "Tailwind", "Figma"],
  },
  {
    title: "Memento Mori",
    description: "La vida en semanas. PWA con Ionic y Angular, diseño tipo papel.",
    links: ["https://memento-mori-lilac.vercel.app"],
    github: "https://github.com/elonlegan/memento-mori",
    image: "/projects/memento-mori.webp",
    tags: ["Ionic", "Angular", "Figma"],
  },
  {
    title: "Reporter.ia",
    description: "Resúmenes de noticias con IA. Hackathon, masonry y búsqueda.",
    links: ["https://reporter-ia.vercel.app/"],
    github: "https://github.com/elonlegan/reporter.ia",
    image: "/projects/reporter-ia.webp",
    tags: ["Next", "Tailwind"],
  },
];
