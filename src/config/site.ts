// ============================================================================
//  WHO I AM  —  edit this file to personalize the whole site.
//  The home page, header, footer, and page metadata all read from here.
//  Changing text here needs no other code changes.
// ============================================================================

export interface SocialLink {
  label: string;
  href: string;
  /** Inline SVG path data (24x24 viewBox) or emoji fallback handled in Footer. */
  icon: 'github' | 'email' | 'link';
}

export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  /** Canonical origin — used for absolute URLs, sitemap, and Open Graph. */
  siteUrl: 'https://davd.fr',

  /** Display name and short brand used in the header. */
  name: 'David',
  shortName: 'davd',

  /** One-line "what I do", shown under the name on the home page. */
  headline: 'DevRel at Samourai World · low-level & FOSS enthusiast.',

  /**
   * "Who I am" — short bio paragraphs for the home page.
   * Keep it human and honest; edit freely.
   */
  bio: [
    "I'm David, a developer advocate (DevRel) at Samourai World. My work is bridging the gap between low-level technology and the people who build with it — writing, explaining, and building in the open.",
    "I'm happiest close to the metal: systems programming, understanding how things actually work under the hood, and free and open-source software. This site is where I keep my projects together and write down what I learn along the way, in a personal wiki.",
  ],

  /** Optional short location line. Set to '' to hide. */
  location: 'France',

  /** Contact email. Set to '' to hide the email link. */
  email: 'david.gzl@samourai.coop',

  /**
   * Optional avatar image in public/ (e.g. '/avatar.jpg'). Leave undefined to
   * render a simple monogram instead.
   */
  avatar: undefined as string | undefined,

  /** Primary navigation (header). */
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Wiki', href: '/wiki' },
  ] satisfies NavItem[],

  /** Contact & social links (footer + home). */
  socials: [
    { label: 'GitHub', href: 'https://github.com/davd-gzl', icon: 'github' },
    { label: 'Samourai World', href: 'https://github.com/samouraiworld', icon: 'link' },
    { label: 'Email', href: 'mailto:david.gzl@samourai.coop', icon: 'email' },
  ] satisfies SocialLink[],

  /** Default meta description for pages that don't set their own. */
  description:
    "David's personal site — projects, a personal wiki, and a short intro to who I am.",
} as const;

export type Site = typeof site;
