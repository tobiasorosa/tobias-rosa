export type Role = {
  /** Machine-readable start year — drives <time datetime>. */
  start: string;
  /** Machine-readable end year, or null for a current role. */
  end: string | null;
  /** How the range is written on the page. */
  period: string;
  title: string;
  company: string;
  place: string;
  current?: boolean;
  bullets: string[];
  stack?: string[];
};

export const experience: Role[] = [
  {
    start: '2025',
    end: null,
    period: '2025 — Now',
    title: 'Senior Software Engineer',
    company: 'Praxent',
    place: 'Remote',
    current: true,
    bullets: [
      'Design and build SaaS backend services in C# and .NET, leaning on clean architecture so the second year is cheaper than the first.',
      'Build React front ends in TypeScript with shadcn/ui and reusable component architecture.',
      'Own backend design decisions and REST APIs consumed by several clients.',
      'Chase down production issues across distributed systems and optimise the SQL underneath.',
    ],
    stack: ['C#', '.NET', 'React', 'TypeScript', 'SQL Server', 'Systems design'],
  },
  {
    start: '2024',
    end: '2025',
    period: '2024 — 2025',
    title: 'Software Engineer',
    company: 'Praxent',
    place: 'Austin, TX',
    bullets: [
      'Bootstrapped full-stack .NET and React applications from empty repo to scalable foundation.',
      'Wrote documentation and recorded walkthroughs so client teams could take the code over.',
    ],
  },
  {
    start: '2024',
    end: '2024',
    period: '2024',
    title: 'Full Stack Developer',
    company: 'Melhorplano.net',
    place: '',
    bullets: [
      'Led architecture on a high-traffic, SEO-critical platform, including server-rendered .NET for page speed.',
      'Ran the AWS side — CloudFront, ECS, S3 — with an eye on cost as well as uptime.',
      'Mentored junior developers and rewrote onboarding so it stopped taking a week.',
    ],
  },
  {
    start: '2022',
    end: '2024',
    period: '2022 — 2024',
    title: 'Mid Level Full Stack Developer',
    company: 'Threeo IT',
    place: 'São Paulo',
    bullets: [
      'Modernised legacy web systems built on jQuery, Knockout.js and Durandal without stopping the business.',
      'Built and maintained REST APIs on server-rendered .NET architectures.',
    ],
  },
  {
    start: '2021',
    end: '2022',
    period: '2021 — 2022',
    title: 'Software Developer',
    company: 'iDinheiro',
    place: '',
    bullets: [
      'Migrated a legacy WordPress front end to React and Next.js with TypeScript.',
      'Moved Core Web Vitals in the right direction and shipped A/B tests with the marketing team.',
      'Added Jest unit and integration coverage where regressions kept happening.',
    ],
  },
  {
    start: '2021',
    end: '2022',
    period: '2021 — 2022',
    title: 'React Full Stack Developer',
    company: 'RDS Digital',
    place: 'Freelance',
    bullets: [
      'Node.js and Express APIs behind a user management system, with a React web client.',
      'Shipped the companion React Native app for mobile access.',
    ],
  },
];
