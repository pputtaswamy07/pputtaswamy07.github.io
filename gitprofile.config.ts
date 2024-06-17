// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'pputtaswamy07', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [],
        },
      },
      manual: {
        // Properties for manually specifying projects
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Pooja Puttaswamy',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'puttaswamy-pooja',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'poojaputtaswamy07@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.dropbox.com/scl/fi/m6ttqgnqbafd6wyl90zqg/cv.pdf?rlkey=imgm17ay91kuyil2uaupogj22&st=an3cf021&dl=0', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Angular',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
  ],
  experiences: [
    {
      company: 'RSU GmbH',
      position: 'Fullstack Developer',
      from: 'March 2023',
      to: 'Present',
      companyLink: 'https://rsu.one/',
    },
    {
      company: 'FAST AI MOVIES',
      position: 'Fullstack Developer',
      from: 'December 2022',
      to: 'Febraury 2023',
      companyLink: 'https://fast-ai-movies.de/',
    },
    {
      company: 'Way for Life',
      position: 'Fullstack Developer',
      from: 'June 2019',
      to: 'October 2019',
      companyLink: 'https://www.wayforlife.org/',
    },
  ],
  certifications: [
    {
      name: 'Internship',
      body: 'Internship at FAST AI MOVIES',
      year: '2023',
      link: 'https://www.dropbox.com/scl/fi/nccqaxt69fj647jq38s2z/Internship-2023-FatAIMovies.pdf?rlkey=2aqqoozvbsr1jr8zvnl5n6itn&st=q5ncgsok&dl=0',
    },
    {
      name: 'Internship',
      body: 'Internship at Way For Life',
      year: '2019',
      link: 'https://www.dropbox.com/scl/fi/h8bk3zl0qsg9yr3torqq0/Internship-2019-WayForLife.pdf?rlkey=q3hp6enet6ky22zqizr3h2g23&st=ybx1t3w1&dl=0',
    },
  ],
  educations: [
    {
      institution: 'Otto-Friedrich Universität',
      degree: 'M.Sc. in International Software Systems Science',
      from: '2019',
      to: 'present',
    },
    {
      institution: 'Visveswaraya Technological University',
      degree: 'Bachelor of Engineering, Computer Science',
      from: '2015',
      to: '2019',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {},
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
