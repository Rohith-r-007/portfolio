export const globalConfig = {
  site: {
    name: "Rohith R portfolio",
    author: "Rohith R",
    description: "Portfolio of Rohith R, a final-year Electronics & Communication Engineering student passionate about software development.",
    url: "/"
  },
  navigation: {
    aria: "Main Navigation",
    items: [
      {
        title: "Home",
        href: "/"
      },
      {
        title: "Projects",
        href: "/projects"
      },
      {
        title: "Resume",
        href: "/resume"
      },
      {
        title: "About",
        href: "/about"
      }
    ]
  },
  footer: {
    aria: "Footer Navigation",
    copyright: "© 2026 Rohith R. All rights reserved ",
    social: {
      linkedin: "https://www.linkedin.com/in/rohith-r-865302258/",
      github: "https://github.com/Rohith-r-007",
      email: "rohithravi.0103@gmail.com"
    }
  }
} as const; 