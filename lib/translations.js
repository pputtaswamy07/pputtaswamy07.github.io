// German copy for the site. English copy lives in lib/siteData.js — that file
// stays the single source of truth for structural data (images, links, tags).
// Arrays here line up by index with their siteData counterparts.

export const translations = {
  de: {
    nav: {
      "#about": "Über mich",
      "#photography": "Fotografie",
      "#projects": "GitHub",
      "#contact": "Kontakt",
    },
    hero: {
      badge: "<hallo welt />",
      viewWork: "Meine Arbeit ansehen",
      getInTouch: "Kontakt aufnehmen",
    },
    profile: {
      heroTitle: "Ich baue Dinge, die im Internet leben.",
      heroDescription:
        "Ich bin ein Fullstack-Entwickler, der komplexe Probleme gerne in saubere, schnelle und zuverlässige Software verwandelt — vom Datenbankschema bis zur pixelgenauen Oberfläche. Aktuell beschäftige ich mich mit verteilten Systemen und moderner Web-Architektur.",
      role: "Fullstack-Entwickler",
      aboutTitle: "Jenseits des Codes",
      aboutDescription:
        "Wenn ich keine Features baue oder einer hartnäckigen Race Condition hinterherjage, bin ich meist mit einer Kamera unterwegs auf der Suche nach goldenem Licht, lese über Systemdesign oder trage zu Open Source bei. Ich mag Werkzeuge, die nicht im Weg stehen — klare APIs, durchdachte Typsysteme und Oberflächen, die im Nachhinein selbstverständlich wirken.",
    },
    interests: [
      {
        label: "01 / Systeme",
        title: "Verteilte Systeme",
        description:
          "Fasziniert davon, wie große Systeme im großen Maßstab konsistent, schnell und fehlertolerant bleiben.",
      },
      {
        label: "02 / Handwerk",
        title: "Entwicklererfahrung",
        description:
          "Mir liegen Tooling, Developer Experience und Code am Herzen, den die nächste Person gerne liest.",
      },
      {
        label: "03 / Ausschnitt",
        title: "Fotografie",
        description:
          "Straßen- und Landschaftsfotografie — derselbe Blick für Komposition, eine andere Art von Debugging.",
      },
    ],
    about: {
      sectionLabel: "02 / ÜBER MICH",
    },
    projects: {
      sectionLabel: "03 / PROJEKTE",
      heading: "Ausgewählte Arbeiten",
      allRepos: "alle Repositories",
      items: [
        {
          description:
            "Eine Fullstack-App, die älteren Menschen in der Stadt hilft, in Verbindung zu bleiben — sie vermittelt bei Bedarf Hilfe, Dienste und Kontrollanrufe in der Nähe.",
        },
        {
          description:
            "Eine React-App zum Durchstöbern der Café-Speisekarte, aktueller Rabatte und zum Online-Bestellen.",
        },
        {
          description:
            "Ein Angular-Prototyp, der erforscht, wie sich das Recyceln von Büchern einfach gestalten lässt, statt sie wegzuwerfen.",
        },
      ],
    },
    photography: {
      sectionLabel: "04 / FOTOGRAFIE",
      heading: "Durch die Linse",
      moreOnInstagram: "mehr auf Instagram",
      items: [
        {
          title: "Kaffee und Blumen",
          description:
            "Blütenblätter und Dampf teilen sich die gleiche ruhige Ecke des Tisches.",
        },
        {
          title: "In Gedanken verloren",
          description:
            "Ein Mann und sein Kaffee, beide lassen sich Zeit, irgendwo weit weg von hier.",
        },
        {
          title: "Goldene Stunde",
          description: "Der Tag verklingt in Orange und Gold, bevor er loslässt.",
        },
      ],
    },
    footer: {
      sectionLabel: "05 / KONTAKT",
      heading: "Lass uns etwas bauen, das es wert ist, veröffentlicht zu werden.",
      description:
        "Offen für Fullstack-Rollen, Freelance-Projekte und interessante Kooperationen. Melde dich — ich antworte meist innerhalb eines Tages.",
      builtWith: "Erstellt mit Next.js.",
    },
  },
};
