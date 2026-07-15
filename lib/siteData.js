// Edit everything here — name, bio, links, projects, photos.
// This file is the single source of content for the whole site.

export const profile = {
  name: "Pooja Puttaswamy",
  role: "Fullstack Developer",
  location: "Bamberg, Germany",
  heroTitle: "I build things that live on the internet.",
  heroDescription:
    "I'm a fullstack developer who enjoys turning complex problems into clean, fast, and reliable software — from database schema to pixel-perfect UI. Currently exploring distributed systems and modern web architecture.",
  aboutTitle: "Beyond the code",
  aboutDescription:
    "When I'm not shipping features or debugging a stubborn race condition, I'm usually out with a camera chasing golden-hour light, reading about system design, or contributing to open source. I like tools that get out of the way — clean APIs, sharp type systems, and interfaces that feel obvious in hindsight.",
  interests: [
    {
      label: "01 / Systems",
      title: "Distributed Systems",
      description:
        "Fascinated by how large systems stay consistent, fast, and fault-tolerant at scale.",
    },
    {
      label: "02 / Craft",
      title: "Developer Experience",
      description:
        "I care about tooling, DX, and writing code that's a pleasure for the next person to read.",
    },
    {
      label: "03 / Frame",
      title: "Photography",
      description:
        "Street and landscape photography — same eye for composition, different kind of debugging.",
    },
  ],
};

export const socials = {
  github: "https://github.com/pputtaswamy07",
  instagram: "https://www.instagram.com/pooja_._gubbi/",
  email: "poojaputtaswamy07@gmail.com",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Photography", href: "#photography" },
  { label: "GitHub", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    title: "I'm Here",
    description:
      "A fullstack app built to help elderly residents stay connected and supported in the city — connecting them with nearby help, services, and check-ins when they need it most.",
    image: "/images/project1.png",
    github: "https://github.com/yourusername/im-here",
    tags: ["React", "Node.js", "GraphQL"],
  },
  {
    title: "Cafe App",
    description:
      "A React app for browsing a cafe's menu, catching current discounts, and placing orders online.",
    image: "/images/project2.png",
    github: "https://github.com/yourusername/cafe-app",
    tags: ["React", "TypeScript"],
  },
  {
    title: "ReadCycle",
    description:
      "A prototype Angular app exploring how to make book recycling easy — helping people pass on books instead of throwing them away.",
    image: "/images/project3.png",
    github: "https://github.com/yourusername/readcycle",
    tags: ["Angular"],
  },
];

export const photography = [
  {
    title: "Coffee and Flowers",
    description: "Petals and steam sharing the same quiet corner of the table.",
    image: "/images/photo1.jpeg",
  },
  {
    title: "Lost in Thought",
    description: "A man and his coffee, both taking their time, somewhere far from here.",
    image: "/images/photo2.jpeg",
  },
  {
    title: "Golden Hour",
    description: "The day exhales into orange and gold before letting go.",
    image: "/images/photo3.jpeg",
  },
];
