// All page content in one place — edit text here without touching components.

export type NavLink = { href: string; label: string };
export type Pillar = { icon: "web" | "growth" | "insta"; title: string; text: string };
export type Client = { name: string; url: string };
export type Offer = {
  label?: string;
  title: string;
  highlight?: boolean;
  isNew?: boolean;
  items?: string[];
  n?: string;
  text?: string;
};
export type Service = {
  tab: string;
  title: string;
  desc: string;
  meta: string[];
  cta: string;
  layout: "two" | "list" | "single";
  offers: Offer[];
};
export type Frame = {
  type: "reel" | "feed" | "story" | "ad";
  fmt: string;
  label: string;
  hook: string;
  note?: string;
  button?: string;
};
export type Step = { title: string; text: string };
export type Bubble = { text: string; tone: "" | "n" | "p" };

export const navLinks: NavLink[] = [
  { href: '#services', label: 'Services' },
 
  { href: '#about', label: 'About' },
];

export const pillars: Pillar[] = [
  { icon: 'web', title: 'Website design & development', text: 'New builds, redesigns and CRO' },
  { icon: 'growth', title: 'Growth marketing', text: 'Meta, Google and the creative engine' },
  { icon: 'insta', title: 'Organic + growth marketing', text: 'Paid and Instagram, one system' },
];

export const clients: Client[] = [
  { name: 'MyMindWise', url: 'https://www.mymindwise.com/' },
  { name: 'Bloomastra', url: 'https://www.bloomastra.com/' },
  { name: 'Nostrum Fashion', url: 'https://www.nostrumfashion.com/' },
  { name: 'Smartveda', url: 'https://smartveda.co/products/kadwa-amrit' },
  { name: 'Aerowalk', url: 'https://aerowalk.in/' },
  { name: 'Quad StrongHer', url: 'https://thequad.in/strongher/' },
  { name: 'Muffynn', url: 'https://muffynn.com/' },
  { name: 'Halden', url: 'https://haldenluxury.com/products' },
  { name: 'Fourbuttons', url: 'https://fourbuttons.in/' },
];

export const services: Service[] = [
  {
    tab: 'Website design & development',
    title: 'Websites built for one job: more sales.',
    desc: "Strategy first, designed in Figma, developed with a checkout that doesn't leak.",
    meta: ['New builds', 'Redesigns', 'CRO'],
    cta: 'Plan my website',
    layout: 'two',
    offers: [
      {
        label: 'For upcoming D2C brands',
        title: 'Website creation',
        items: [
          'Design strategy rooted in your brand comms and branding',
          'Site structure, user journeys, wireframes and visual design in Figma',
          'Homepage, product page, cart and checkout',
          'Customised cart and quick-checkout integration',
        ],
      },
      {
        label: 'For existing D2C brands',
        title: 'Website redesign',
        highlight: true,
        items: [
          'CRO audit of your current website',
          'Site structure, user journeys, wireframes and visual design in Figma',
          'Homepage, product page, cart and checkout',
          'Customised cart and quick-checkout integration',
        ],
      },
    ],
  },
  {
    tab: 'Growth marketing',
    title: 'A creative engine that feeds your ads.',
    desc: 'Built to feed performance ads on Meta and Google, constantly optimised. For D2C brands ready to scale past ₹10 lakh MRR.',
    meta: ['Meta', 'Google', 'Creative engine'],
    cta: 'Scale my ads',
    layout: 'list',
    offers: [
      { n: 'A', title: 'Performance marketing', text: 'Media-buying audit, a 3–6 month roadmap, and Meta and Google ads managed and optimised.' },
      { n: 'B', title: 'Creative strategy', text: 'Monthly personas, angles and hook directions, iterated weekly on live ad data.' },
      { n: 'C', title: 'Shoot & production', text: '2–3 shoots a month, with at least 3 hook variations for every core concept.' },
      { n: 'D', title: 'Edit & post-production', text: 'Priority rollout, unlimited core edits, new hook cuts, formatted for feed, Reels and Stories.' },
      { n: 'E', title: 'Reporting', text: 'Weekly performance call, month-end report and a shared channel for the day-to-day.' },
    ],
  },
  {
    tab: 'Organic + growth marketing',
    title: 'Paid and organic, run as one.',
    desc: 'Everything in Growth Marketing, with your Instagram run on the same strategy, the same shoots and the same report.',
    meta: ['Everything in Growth Marketing', 'Instagram'],
    cta: 'Run both channels',
    layout: 'single',
    offers: [
      {
        title: 'Instagram management',
        isNew: true,
        highlight: true,
        items: [
          'Monthly content calendar, posting, captions, hashtags and Stories',
          'Creative strategy and shoots planned for organic and paid together',
          'One weekly call and one month-end report across both channels',
        ],
      },
    ],
  },
];

export const frames: Frame[] = [
  { type: 'reel', fmt: 'Reel', label: 'Reel cut from the shoot', hook: '“Plenty of people make things look good.”', note: 'Hook A, for Instagram' },
  { type: 'feed', fmt: 'Feed post', label: 'Feed post cut from the shoot', hook: 'Is it the media buying or the creative?', note: 'Hook B, for Meta ads' },
  { type: 'story', fmt: 'Story', label: 'Story cut from the shoot', hook: '3 hooks. 1 day on set.', note: 'Hook C, for Stories' },
  { type: 'ad', fmt: 'Ad', label: 'Ad cut from the shoot', hook: "Creative that's built to be tested.", button: 'Book a call' },
];

export const steps: Step[] = [
  { title: 'Plan', text: "Who we're targeting, what drives them and the angles worth testing this month." },
  { title: 'Shoot', text: 'Every concept captured with multiple hooks, so one day on set feeds weeks of creative.' },
  { title: 'Launch', text: 'Cut for organic and paid, then tested on Meta and Google.' },
  { title: 'Learn & iterate', text: "Read the data weekly. Scale what works, kill what doesn't, brief the next shoot." },
];

// tone: '' = white, 'n' = black, 'p' = peach
export const bubbles: Bubble[] = [
  { text: '“Can we stop making content just to fill the calendar?”', tone: '' },
  { text: '“Are we actually building a brand or just selling products?”', tone: 'n' },
  { text: '“What exactly should we be shooting this month?”', tone: '' },
  { text: '“Our brand has outgrown our website.”', tone: 'p' },
  { text: '“We shot all this content. Why are we only using 5% of it?”', tone: '' },
  { text: '“Our ROAS dropped. Is it the media buying or the creative?”', tone: 'n' },
  { text: '“Why does the performance team never have enough creatives to test?”', tone: '' },
  { text: '“Which creative should we kill, and which one should we scale?”', tone: 'p' },
  { text: '“Do we need more creatives… or better ones?”', tone: '' },
];

export const finalBubble = "“Who's actually connecting brand, creative and performance?”";

export const contact = {
  email: 'snigdha@growthpod.in',
  phone: '+91 75819 68901',
  phoneHref: 'tel:+917581968901',
  instagram: 'https://www.instagram.com/singh.snigdha',
  bookingUrl: 'https://calendly.com/snigdha-growthpod/30min',
};
