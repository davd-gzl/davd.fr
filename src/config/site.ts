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
    id: 'side',
    code: 'S',
    name: 'Side projects',
    color: 'var(--line-roots)',
    blurb: 'Small tools, contributions and this site.',
  },
];

export const site = {
  siteUrl: 'https://davd.fr',

  name: 'David Gozlan',
  firstName: 'David',
  shortName: 'davd',

  headline: 'Developer Relations Engineer at Samourai Coop · contributor to Gno.land',


  location: 'France',

  email: 'david.gzl@samourai.coop',

  nav: [
    { label: 'Blog', href: '/blog' },
    { label: 'Wiki', href: 'https://davd-gzl.github.io/personal-wiki/' },
  ] satisfies NavItem[],

  socials: [
    { label: 'GitHub', href: 'https://github.com/davd-gzl', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/david-gzl', icon: 'linkedin' },
    { label: 'Peer Dev', href: 'https://www.youtube.com/@peerdevlearning', icon: 'youtube' },
    { label: 'Email', href: 'mailto:david.gzl@samourai.coop', icon: 'email' },
  ] satisfies SocialLink[],

  description:
    'David Gozlan, Developer Relations Engineer at Samourai Coop and contributor to Gno.land. Projects and what I am working on.',
} as const;

export type Site = typeof site;
