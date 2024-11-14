// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'nooraiman', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [''], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      projects: []
      // To hide the `External Projects` section, keep it empty.
      // projects: [
      //   {
      //     title: 'Project Name',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      //     imageUrl:
      //       'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      //     link: 'https://example.com',
      //   }
      // ],
    },
  },
  seo: {
    title: 'Noor Aiman | DevOps Engineer',
    description: 'Junior DevOps Engineer. Passionate about automating deployments, monitoring performance, and ensuring system reliability. Familiar with Kubernetes, Docker, Grafana, Jenkins, Bash scripting.',
    imageURL: '',
  },
  social: {
    linkedin: 'nooraimanz',
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
    medium: 'nooraimanz',
    dev: 'nooraimanz',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: 'https://nooraiman.cloud',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Kubernetes',
    'Docker',
    'Linux',
    'Shell scripting (Bash)',
    'Jenkins',
    'AWS',
    'SRE',
    'MySQL',
    'PostgreSQL',
    'Git',
    'PHP',
    'Laravel',
    'JavaScript',
  ],
  experiences: [
    {
      company: 'Tuxuri',
      position: 'Junior DevOps Engineer',
      from: 'October 2023',
      to: 'Present',
      companyLink: 'https://www.tuxuri.com/',
    },
    {
      company: 'Jabatan Perkhidmatan Awam (JPA)',
      position: 'Software Developer',
      from: 'July 2023',
      to: 'September 2023',
      companyLink: 'https://www.jpa.gov.my/',
    },
    {
      company: 'Multimedia University',
      position: 'Full Stack Developer Intern', 
      from: 'March 2023',
      to: 'June 2023',
      companyLink: 'https://www.mmu.edu.my/',
    },
  ],
  certifications: [
    {
      name: 'CKA: Certified Kubernetes Administrator',
      body: 'Demonstrates proficiency in Kubernetes administration, including installation, configuration, networking, security, and troubleshooting.',
      year: 'Sept 2024',
      link: 'https://www.credly.com/badges/66e2bcbd-8328-4597-b658-4b16fcd9f8af/public_url',
    },
  ],
  educations: [
    {
      institution: 'Universiti Teknologi MARA',
      degree: 'Bachelor of Computer Science (Hons.) in Netcentric Computing',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'Universiti Teknologi MARA',
      degree: 'Diploma in Computer Science',
      from: '2018',
      to: '2021',
    },
  ],
  publications: [
    {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'nooraimanz', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-Z2D8XFCSJN', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

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
    >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
