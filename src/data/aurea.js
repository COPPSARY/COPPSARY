export const siteMeta = {
  name: 'AUREA',
  role: 'Software & Web Development Studio',
  url: 'https://coppsary.com',
  description:
    'AUREA is a software and web development studio building business websites, custom platforms, automation systems, and data-driven digital products.',
  ogImage: 'https://coppsary.com/AUREA.webp',
  locale: 'en_US',
  founders: ['Kao Sodavann', 'Prom Sereyreaksa'],
  email: 'prumsereyreaksa@gmail.com',
  phone: '+855716776979',
  addressLocality: 'Phnom Penh',
  addressCountry: 'KH',
  facebook: 'https://www.facebook.com/share/18dWrMFCZ2/?mibextid=wwXIfr',
  tiktok: 'https://www.tiktok.com/@aurea.tools?_r=1&_t=ZS-96IvsxPC6bo',
};

export const navLinks = [
  { href: '/about', label: 'Studio' },
  { href: '/projects', label: 'Projects' },
  { href: '/team', label: 'Team' },
  { href: '/#contact', label: 'Contact' },
];

export const homeHero = {
  eyebrow: 'Software & Web Development Studio — Est. 2025',
  title: 'We build digital\nplatforms that\ndrive results.',
};

export const aboutSection = {
  copy:
    'AUREA builds websites at the intersection of design and engineering. We work with businesses that want a digital presence that performs as well as it looks.',
  stats: [
    { value: '4+', label: 'Projects shipped' },
    { value: '6', label: 'Team members' },
    { value: "'25", label: 'Est.' },
    { value: 'PNH', label: 'Phnom Penh' },
  ],
};

export const philosophyStatements = [
  { text: 'Design with purpose.' },
  { text: 'Build to scale.' },
  { text: 'Every interaction should feel intentional.' },
  { text: 'Every detail shapes perception.' },
];

export const services = [
  {
    index: '01',
    icon: 'code',
    title: 'Web Development',
    description: 'Full-stack web applications, CMS platforms, admin dashboards, and custom systems — built to scale and easy to maintain.',
  },
  {
    index: '02',
    icon: 'analytics',
    title: 'Data Science & Analytics',
    description: 'Data pipelines, dashboards, and reporting systems that turn raw data into clear, actionable business intelligence.',
  },
  {
    index: '03',
    icon: 'automation',
    title: 'Automation & Infrastructure',
    description: 'Workflow automation, backend systems, and API integrations that reduce manual overhead and remove friction at scale.',
  },
  {
    index: '04',
    icon: 'design',
    title: 'Software Products',
    description: 'SaaS platforms, internal tools, and custom software solutions engineered around specific business operations and workflows.',
  },
];

export const packages = [
  {
    index: '01',
    name: 'Static Websites',
    price: '$50',
    priceNote: 'starting at',
    description: 'Fast, modern websites focused on clean presentation, branding, and performance.',
    forList: ['portfolios', 'landing pages', 'personal brands', 'small business websites'],
    includes: [
      'responsive design',
      'custom UI',
      'smooth animations',
      'SEO-ready structure',
      'deployment setup',
      'fast-loading pages',
    ],
  },
  {
    index: '02',
    name: 'Business Websites',
    price: '$180',
    priceNote: 'starting at',
    featured: true,
    description: 'Professional websites designed to strengthen digital presence, customer trust, and scalability.',
    forList: ['companies', 'startups', 'agencies', 'organizations', 'content-heavy platforms'],
    includes: [
      'custom multi-page design',
      'advanced UI/UX',
      'CMS / content management',
      'integrations',
      'optimized architecture',
      'scalable frontend systems',
    ],
  },
  {
    index: '03',
    name: 'Custom Platforms',
    price: 'Custom',
    priceNote: 'pricing',
    description: 'Tailored software solutions engineered around specific business operations and workflows.',
    forList: ['SaaS products', 'dashboards', 'automation systems', 'internal tools', 'custom web applications'],
    includes: [
      'frontend + backend development',
      'APIs & databases',
      'authentication systems',
      'automation workflows',
      'scalable infrastructure',
      'security-focused implementation',
    ],
  },
];

export const projects = [
  {
    slug: 'coppseries',
    title: 'Coppseries',
    description:
      'An online video game store where users can browse, discover, and purchase games, consoles, accessories, and gaming-related products.',
    longDescription:
      'Coppseries is a full-featured e-commerce platform purpose-built for the gaming community. The platform enables users to browse a curated catalog of games, consoles, and accessories, with a clean browsing experience designed to make discovery feel natural. We focused on fast page loads, clear product hierarchy, and a checkout flow that reduces drop-off. The UI was designed to feel at home with gaming culture — dark, sharp, and immersive — while remaining accessible and conversion-optimized.',
    highlights: [
      'Full e-commerce catalog with filtering and search',
      'Optimized product detail pages with media galleries',
      'Responsive design tuned for both desktop and mobile browsing',
      'Performance-first build with fast load times',
    ],
    url: 'https://coppseries.netlify.app/',
    image: '/AUREA-PROJECTS/Coppseries.png',
    video: '/AUREA-VIDEOS/COPPSERIES.mp4',
    tags: ['Commerce', 'Catalog', 'Frontend'],
  },
  {
    slug: 'leakscope',
    title: 'LeakScope',
    description:
      'A free black-box security scanner designed specifically for Supabase applications.',
    longDescription:
      'LeakScope is a developer security tool that performs black-box scans on Supabase-backed applications, surfacing exposed API keys, misconfigured Row Level Security policies, and publicly accessible data endpoints. It was built for developers who want fast, actionable feedback on their Supabase security posture without requiring deep security expertise. The product is live, actively used, and free — part of AUREA\'s commitment to open tooling for the developer community.',
    highlights: [
      'Automated black-box scanning of Supabase projects',
      'Detects exposed API keys and public table access',
      'Clear, actionable security reports',
      'Free to use — no account required',
    ],
    url: 'https://www.leakscope.tech/',
    image: '/AUREA-PROJECTS/LeakScope.png',
    video: '/AUREA-VIDEOS/Leakscope.mp4',
    tags: ['Security', 'Developer tool', 'SaaS'],
    live: true,
  },
  {
    slug: 'phsar-design',
    title: 'PhsarDesign',
    description:
      'Creative freelancing platform connecting local digital artists with clients.',
    longDescription:
      'PhsarDesign is a marketplace built for Cambodia\'s growing creative economy — connecting digital artists, graphic designers, and illustrators with clients who need quality creative work. The platform handles project listings, portfolio showcasing, and client-artist discovery. Design was central to the product: the interface needed to feel creative and premium while remaining simple enough for first-time users. We built with scalability in mind, knowing the platform would grow as the local design community expanded.',
    highlights: [
      'Artist portfolio profiles with media-rich project displays',
      'Client-facing project brief and discovery flow',
      'Category-based browsing for fast service matching',
      'Clean, content-first UI designed for creative work',
    ],
    url: 'https://phsardesign.vercel.app/',
    image: '/AUREA-PROJECTS/PhsarDesign.png',
    video: '/AUREA-VIDEOS/phsardesign.mp4',
    tags: ['Marketplace', 'Platform', 'Design'],
  },
  {
    slug: 'aurea-tools',
    title: 'AUREA Tools',
    description:
      'Platform helping creators and designers launch portfolio websites faster.',
    longDescription:
      'AUREA Tools is a portfolio builder product designed to help creators — developers, designers, photographers, and freelancers — launch professional portfolio websites in minutes without writing code. The platform provides curated templates, a visual editor, and hosting, all wrapped in an experience that feels fast and intentional. It reflects AUREA\'s broader mission: reducing the gap between creative ambition and a professional digital presence.',
    highlights: [
      'Template-driven portfolio builder with visual customization',
      'One-click publishing and custom domain support',
      'Optimized for creators across design, development, and photography',
      'Fast, modern UI designed to inspire rather than overwhelm',
    ],
    url: 'https://www.aurea.tools/',
    image: '/AUREA-PROJECTS/AUREA - Portfolio Builder.png',
    video: '/AUREA-VIDEOS/AUREA.mp4',
    tags: ['Creator product', 'Platform', 'SaaS'],
  },
];

export const contactDetails = {
  headline: 'Let\'s build something extraordinary together.',
  email: 'mailto:prumsereyreaksa@gmail.com',
  emailLabel: 'prumsereyreaksa@gmail.com',
  telegram: 'https://t.me/prom_sereyreaksa',
  telegramLabel: '@prom_sereyreaksa',
  phone: 'tel:+855716776979',
  phoneLabel: '+855 71 677 6979',
};

export const teamMembers = [
  {
    name: 'Kao Sodavann',
    role: 'Software Developer',
    image: '/AUREA-TEAM/Sodavann.jpg',
    description: 'Creating functional applications by combining problem-solving, system logic, and efficient development practices.',
  },
  {
    name: 'Prom Sereyreaksa',
    role: 'Software Developer',
    image: '/AUREA-TEAM/Sereyreaksa.jpg',
    description: 'Designing and building software solutions across frontend, backend, and system workflows — turning ideas into reliable, functional products.',
  },
  {
    name: 'Kosal Sophanith',
    role: 'Frontend Developer',
    image: '/AUREA-TEAM/Sophanith.jpg',
    description: 'Engineering the client side — responsive interfaces, component systems, and performance-optimised web experiences.',
  },
  {
    name: 'Chea Ilong',
    role: 'Backend Developer',
    image: '/AUREA-TEAM/Ilong.jpg',
    description: 'Building the server-side infrastructure, APIs, and data systems that keep platforms fast and dependable at scale.',
  },
  {
    name: 'Huy Visa',
    role: 'Business Analyst',
    image: '/AUREA-TEAM/Visa.jpg',
    description: 'Translating business requirements into clear product specs, and keeping data-driven decisions at the centre of what we build.',
  },
  {
    name: 'Chheang Sovanpanha',
    role: 'Business Analyst',
    image: '/AUREA-TEAM/Sovanpanha.jpg',
    description: 'Applying data science and research methods to surface insights, validate product direction, and support operational clarity.',
  },
];

export const storyTimeline = [];
export const aboutInsight = [
  'Too many businesses still look less credible online than they are in real life. A weak digital presence quietly erodes trust before a conversation even begins.',
  'We kept seeing the same issue: ambitious brands with strong ideas were being represented by outdated websites, fragmented systems, and digital identities that did not match their potential.',
  'Modern businesses need platforms that feel fast, clear, and professional. When the digital layer is weak, growth slows, trust drops, and opportunities leak out at the edges.',
];
export const highlights = [
  { title: 'Faster launch cycles', copy: 'Structured engineering practices mean less rework, faster iteration, and software that ships on time.' },
  { title: 'Reliable systems', copy: 'We build on solid architectural foundations — nothing that will need to be rewritten six months later.' },
  { title: 'Data-informed decisions', copy: 'Analytics, dashboards, and business intelligence tools that help you actually understand what\'s happening.' },
  { title: 'Built for scale', copy: 'Every system is built to handle more — more users, more data, more complexity — without breaking.' },
];
export const missionVision = [
  {
    title: 'Mission',
    copy: 'Create modern digital platforms that help businesses build trust, grow faster, and stand out online.',
  },
  {
    title: 'Vision',
    copy: 'Empower businesses and creators to fully own their digital presence with systems that feel precise, scalable, and lasting.',
  },
];
export const longTermDirection = [
  {
    title: 'Connected software ecosystems',
    copy: 'We are moving beyond isolated projects toward integrated software environments — systems that share data, communicate cleanly, and compound in value over time.',
  },
  {
    title: 'Data science as a core service',
    copy: 'The studio is building deeper capability in data engineering, machine learning pipelines, and analytics tooling for clients who want to make better decisions faster.',
  },
  {
    title: 'Automation at scale',
    copy: 'Long term, AUREA is focused on workflow automation, intelligent infrastructure, and platforms that remove operational friction rather than just digitising the same manual processes.',
  },
];
