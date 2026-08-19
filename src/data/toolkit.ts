export type SkillGroup = { title: string; items: string[] };

export const toolkit: SkillGroup[] = [
  {
    title: 'Backend',
    items: ['C#', '.NET', 'REST APIs', 'Clean architecture', 'Node.js', 'NestJS', 'Systems design'],
  },
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'React Native', 'shadcn/ui', 'Core Web Vitals'],
  },
  {
    title: 'Cloud & data',
    items: ['AWS EC2', 'ECS', 'S3', 'CloudFront', 'SQL Server', 'PostgreSQL', 'Query optimisation'],
  },
  {
    title: 'How I work',
    items: ['Distributed teams', 'Jest', 'Git workflows', 'Technical writing', 'Mentoring', 'Claude Code'],
  },
];

/** Flattened for the Person JSON-LD `knowsAbout`. */
export const allSkills = toolkit.flatMap((g) => g.items);
