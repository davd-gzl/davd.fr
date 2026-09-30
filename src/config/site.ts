// ============================================================================
//  WHO I AM  —  edit this file to personalize the whole site.
//  The home page, header, footer, and page metadata all read from here.
// ============================================================================

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'email' | 'link' | 'linkedin' | 'youtube';
}

export interface NavItem {
  label: string;
  href: string;
}

/** A metro line: one theme of my work, drawn in its own colour. */
export interface Line {
  id: string;
  /** The letter shown in the line's roundel. */
  code: string;
  name: string;
  /** CSS custom property holding the line colour. */
  color: string;
  blurb: string;
}

/** One stop on the journey timeline. */
export interface Stop {
  when: string;
  role: string;
  org: string;
  place?: string;
  line: string;
  points: string[];
  current?: boolean;
}

export const lines: Line[] = [
  {
    id: 'gno',
    code: 'G',
    name: 'Gno.land',
    color: 'var(--line-gno)',
    blurb: 'Virtual machine, consensus, security, governance and docs.',
  },
  {
    id: 'teach',
    code: 'T',
    name: 'Teaching',
    color: 'var(--line-teach)',
    blurb: 'Epitech Pools, project kick-offs and Peer Dev videos.',
  },
  {
    id: 'offware',
    code: 'O',
    name: 'Offware',
    color: 'var(--line-offware)',
    blurb: 'Apps that keep working switched off.',
  },
  {
    id: 'agents',
    code: 'A',
    name: 'Agents',
    color: 'var(--line-agents)',
    blurb: 'Learning agentic programming, in the open.',
  },
  {
    id: 'roots',
    code: 'R',
    name: 'Roots',
    color: 'var(--line-roots)',
    blurb: 'Epitech, Seoul, Inria and my first web job.',
  },
];

export const journey: Stop[] = [
  {
    when: '2025 – now',
    role: 'Developer Relations Engineer',
    org: 'Samourai Coop',
    line: 'gno',
    current: true,
    points: [
      'Contributor to Gno.land: +70 merged contributions and nearly 350 code reviews on the main repository.',
      'Code across the virtual machine, network and consensus, security, governance, web explorer and developer tooling.',
      'Documentation: installation, getting started, editor setup, local development, testing and fees.',
      'Bug bounty triager on HackenProof for the Gno.land program.',
    ],
  },
  {
    when: '2025',
    role: 'Junior pedagogue, internship',
    org: 'Epitech',
    line: 'teach',
    points: [
      'Mentored 1st, 2nd and 3rd year students on their projects and graded their work.',
      'Led project kick-offs and organized the 1st and 2nd year Pools.',
      'Built a Corewar hackathon, a Redcode VS Code extension and clang-format-epitech.',
    ],
  },
  {
    when: '2023 – 2024',
    role: 'Student',
    org: 'Chung-Ang University',
    place: 'Seoul, South Korea',
    line: 'roots',
    points: [],
  },
  {
    when: '2023',
    role: 'OCaml library developer, internship',
    org: 'Inria · LIP at ENS',
    line: 'roots',
    points: [
      'Contributed to an OCaml library of active objects, so it can run across several machines.',
      'Implemented an RPC module that lets a program call a function running on a remote machine.',
    ],
  },
  {
    when: '2022 – 2023',
    role: 'Pedagogical assistant',
    org: 'Epitech',
    place: 'Lyon',
    line: 'teach',
    points: [
      'Mentored 1st and 2nd year students through their projects and graded them.',
      'Organized the 1st and 2nd year Pools, the intensive bootcamps that open each year.',
    ],
  },
  {
    when: '2022',
    role: 'Full-stack web developer, internship',
    org: 'Dafy Moto',
    line: 'roots',
    points: [
      'Built a clone of dealabs.com in PHP with Symfony to learn web development.',
      "Added features and automated tests to the company's internal tools.",
    ],
  },
  {
    when: '2020 – 2025',
    role: "Master's degree in IT",
    org: 'Epitech',
    line: 'roots',
    points: [],
  },
];

/** The few numbers worth showing at a glance. */
export const now = [
  { value: '+70', label: 'merged contributions to Gno.land' },
  { value: '~350', label: 'code reviews on Gno.land' },
  { value: 'Triager', label: 'on HackenProof for the Gno.land bug bounty' },
];

export const interests = {
  code: ['P2P', 'low-level programming', 'optimization', 'security', 'agentic programming'],
  life: ['travelling', 'urbanism', 'transportation'],
};

export const site = {
  siteUrl: 'https://davd.fr',

  name: 'David Gozlan',
  firstName: 'David',
  shortName: 'davd',

  headline: 'Developer Relations Engineer at Samourai Coop · contributor to Gno.land',

  bio: [
    "I'm David, Developer Relations Engineer at Samourai Coop and contributor to Gno.land, a blockchain built on an interpreted Go virtual machine.",
    "I'm drawn to P2P, low-level programming, optimization and security, and I'm learning agentic programming. On the side I build Offware, apps that keep working switched off.",
  ],

  location: 'France',

  email: 'david.gzl@samourai.coop',

  nav: [
    { label: 'Home', href: '/' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Projects', href: '/projects' },
    { label: 'Wiki', href: 'https://davd-gzl.github.io/personal-wiki/' },
  ] satisfies NavItem[],

  socials: [
    { label: 'GitHub', href: 'https://github.com/davd-gzl', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/david-gzl', icon: 'linkedin' },
    { label: 'Peer Dev', href: 'https://www.youtube.com/@peerdevlearning', icon: 'youtube' },
    { label: 'Email', href: 'mailto:david.gzl@samourai.coop', icon: 'email' },
  ] satisfies SocialLink[],

  description:
    'David Gozlan, Developer Relations Engineer at Samourai Coop and contributor to Gno.land. Projects, experience and what I like.',
} as const;

export type Site = typeof site;
