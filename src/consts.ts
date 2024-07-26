import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Mateo Gariboglio",
  DESCRIPTION: "Bienvenido a mi portfolio personal, donde muestro algunos de mis proyectos y experiencias laborales.",
  AUTHOR: "Mateo Gariboglio",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Proyectos",
  DESCRIPTION: "Proyectos que desarrollé.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Buscar",
  DESCRIPTION: "Buscar proyectos y experiencias laborales.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "mateogariboglio@hotmail.com",
    HREF: "mateogariboglio@hotmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "Mateo-404",
    HREF: "https://github.com/Mateo-404"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Mateo Gariboglio",
    HREF: "https://www.linkedin.com/in/mateo-gariboglio/",
  }
]

