/**
 * Single source of truth for identity, links and SEO defaults.
 * Both the visible page and the JSON-LD read from here, so the
 * structured data can never drift from the copy.
 */
export const site = {
  name: "Tobias Rosa",
  role: "Senior Full Stack Engineer",
  title: "Tobias Rosa — Senior Full Stack Engineer",
  description:
    "Senior full stack engineer building SaaS platforms in C#, .NET, React and TypeScript. Five years shipping backend services and the frontends on top of them. Remote from Brazil.",
  locale: "en_US",
  lang: "en",
  location: "Brazil · remote",
  countryCode: "BR",
  languages: "EN · PT-BR",
  email: "tobias.rosa2000@gmail.com",
  whatsapp: { label: "+55 12 99222-1131", href: "https://wa.me/5512992221131" },
  resume: "/Tobias-Rosa-CV.pdf",
  ogImage: "/og.png",
  employer: { name: "Praxent", location: "Austin, TX" },
  sideProject: { name: "AgenLink", url: "https://agenlink.net" },
  socials: [
    {
      label: "GitHub",
      short: "github.com/tobiasorosa",
      href: "https://github.com/tobiasorosa",
    },
    {
      label: "LinkedIn",
      short: "linkedin.com/in/tobiasrosa",
      href: "https://www.linkedin.com/in/tobiasrosa/",
    },
    {
      label: "Instagram",
      short: "instagram.com/tubia_rosa",
      href: "https://www.instagram.com/tubia_rosa/",
    },
  ],
  nav: [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Toolkit", href: "#toolkit" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type Site = typeof site;
